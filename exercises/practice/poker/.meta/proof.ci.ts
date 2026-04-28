export function bestHands(hands: string[]): string[] {
  const parsed = hands.map((hand) => ({
    original: hand,
    score: evaluateHand(hand),
  }))

  let best = parsed[0]

  for (const current of parsed.slice(1)) {
    if (compareScores(current.score, best.score) > 0) {
      best = current
    }
  }

  return parsed
    .filter((hand) => compareScores(hand.score, best.score) === 0)
    .map((hand) => hand.original)
}

type Card = {
  rank: number
  suit: string
}

type HandScore = {
  category: number
  tiebreakers: number[]
}

function evaluateHand(hand: string): HandScore {
  const cards = parseHand(hand)
  const ranks = cards.map((c) => c.rank)
  const sortedRanksDesc = [...ranks].sort((a, b) => b - a)

  const flush = isFlush(cards)
  const straightHigh = getStraightHigh(ranks)

  const counts = getRankCounts(ranks)
  const groups = Object.entries(counts)
    .map(([rank, count]) => ({
      rank: Number(rank),
      count,
    }))
    .sort((a, b) => {
      if (b.count !== a.count) return b.count - a.count
      return b.rank - a.rank
    })

  // Straight flush
  if (flush && straightHigh !== null) {
    return {
      category: 8,
      tiebreakers: [straightHigh],
    }
  }

  // Four of a kind
  if (groups[0].count === 4) {
    const quadRank = groups[0].rank
    const kicker = groups[1].rank
    return {
      category: 7,
      tiebreakers: [quadRank, kicker],
    }
  }

  // Full house
  if (groups[0].count === 3 && groups[1].count === 2) {
    return {
      category: 6,
      tiebreakers: [groups[0].rank, groups[1].rank],
    }
  }

  // Flush
  if (flush) {
    return {
      category: 5,
      tiebreakers: sortedRanksDesc,
    }
  }

  // Straight
  if (straightHigh !== null) {
    return {
      category: 4,
      tiebreakers: [straightHigh],
    }
  }

  // Three of a kind
  if (groups[0].count === 3) {
    const tripRank = groups[0].rank
    const kickers = groups
      .filter((g) => g.count === 1)
      .map((g) => g.rank)
      .sort((a, b) => b - a)

    return {
      category: 3,
      tiebreakers: [tripRank, ...kickers],
    }
  }

  // Two pair
  if (groups[0].count === 2 && groups[1].count === 2) {
    const pairRanks = groups
      .filter((g) => g.count === 2)
      .map((g) => g.rank)
      .sort((a, b) => b - a)

    const kicker = groups.find((g) => g.count === 1)!.rank

    return {
      category: 2,
      tiebreakers: [...pairRanks, kicker],
    }
  }

  // One pair
  if (groups[0].count === 2) {
    const pairRank = groups[0].rank
    const kickers = groups
      .filter((g) => g.count === 1)
      .map((g) => g.rank)
      .sort((a, b) => b - a)

    return {
      category: 1,
      tiebreakers: [pairRank, ...kickers],
    }
  }

  // High card
  return {
    category: 0,
    tiebreakers: sortedRanksDesc,
  }
}

function parseHand(hand: string): Card[] {
  return hand.split(' ').map(parseCard)
}

function parseCard(card: string): Card {
  const suit = card.slice(-1)
  const rankText = card.slice(0, -1)

  return {
    rank: parseRank(rankText),
    suit,
  }
}

function parseRank(rank: string): number {
  switch (rank) {
    case 'J':
      return 11
    case 'Q':
      return 12
    case 'K':
      return 13
    case 'A':
      return 14
    default:
      return Number(rank)
  }
}

function isFlush(cards: Card[]): boolean {
  return cards.every((card) => card.suit === cards[0].suit)
}

function getRankCounts(ranks: number[]): Record<number, number> {
  const counts: Record<number, number> = {}

  for (const rank of ranks) {
    counts[rank] = (counts[rank] ?? 0) + 1
  }

  return counts
}

function getStraightHigh(ranks: number[]): number | null {
  const unique = [...new Set(ranks)].sort((a, b) => a - b)

  if (unique.length !== 5) {
    return null
  }

  // Normal straight
  let isSequential = true
  for (let i = 1; i < unique.length; i++) {
    if (unique[i] !== unique[i - 1] + 1) {
      isSequential = false
      break
    }
  }

  if (isSequential) {
    return unique[4]
  }

  // Ace-low straight: A,2,3,4,5
  const aceLow = [2, 3, 4, 5, 14]
  const isAceLow =
    unique.length === aceLow.length &&
    unique.every((value, index) => value === aceLow[index])

  if (isAceLow) {
    return 5
  }

  return null
}

function compareScores(a: HandScore, b: HandScore): number {
  if (a.category !== b.category) {
    return a.category - b.category
  }

  const maxLen = Math.max(a.tiebreakers.length, b.tiebreakers.length)

  for (let i = 0; i < maxLen; i++) {
    const av = a.tiebreakers[i] ?? 0
    const bv = b.tiebreakers[i] ?? 0

    if (av !== bv) {
      return av - bv
    }
  }

  return 0
}
