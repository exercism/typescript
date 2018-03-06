class TwelveDays {
    static days: string[] = [
        'first',
        'second',
        'third',
        'fourth',
        'fifth',
        'sixth',
        'seventh',
        'eighth',
        'ninth',
        'tenth',
        'eleventh',
        'twelfth'
    ]

    static gifts: string[] = [
        'a Partridge in a Pear Tree.',
        'two Turtle Doves, ',
        'three French Hens, ',
        'four Calling Birds, ',
        'five Gold Rings, ',
        'six Geese-a-Laying, ',
        'seven Swans-a-Swimming, ',
        'eight Maids-a-Milking, ',
        'nine Ladies Dancing, ',
        'ten Lords-a-Leaping, ',
        'eleven Pipers Piping, ',
        'twelve Drummers Drumming, '
    ]

    static recite(startVerse: number, endVerse: number): string {
        let lyrics = this.reciteVerse(startVerse)
        for (let i = startVerse + 1; i <= endVerse; i++) {
            lyrics += this.reciteVerse(i)
        }
        return lyrics
    }

    private static reciteVerse(verse: number) {
        let result = 'On the ' + this.days[verse - 1] + ' day of Christmas my true love gave to me, '
        for (let i = verse; i > 0; i--) {
            if (verse !== 1 && i === 1) {
                result += 'and '
            }
            result += this.gifts[i - 1]
        }
        result += '\n'
        return result
    }
}

export default TwelveDays
