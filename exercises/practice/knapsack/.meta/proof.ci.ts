type Item = {
    weight: number,
    value: number
}

export function maximumValue( {maximumWeight, items} : {maximumWeight: number, items: Item[]} ) : number {

    const maxValueForItemsSizeToWeight: number[][] = new Array(items.length + 1)
        .fill(undefined)
        .map(() => new Array(maximumWeight + 1))

    return solve(items.length, maximumWeight, items, maxValueForItemsSizeToWeight)
}

function solve(setItemsSize: number, maxWeight: number, items: Item[], maxValueForItemsSizeToWeight: number[][]) : number {

    return memoizedMax(setItemsSize, maxWeight, items, maxValueForItemsSizeToWeight)
}

function memoizedMax(setItemsSize: number, maxWeight: number, items: Item[], maxValueForItemsSizeToWeight: number[][]) : number {

    const alreadyKnownMaxValue = maxValueForItemsSizeToWeight[setItemsSize][maxWeight]
    if (alreadyKnownMaxValue || alreadyKnownMaxValue == 0) 
        return alreadyKnownMaxValue

    const max = calculateMax( setItemsSize, maxWeight, items, maxValueForItemsSizeToWeight)
    maxValueForItemsSizeToWeight[setItemsSize][maxWeight] = max

    return max
}

function calculateMax(setItemsSize: number, maxWeight: number, items: Item[], maxValueForItemsSizeToWeight: number[][]) : number {

    if (!setItemsSize) return 0
    
    return Math.max(
            ...Array.from(Array(maxWeight+1).keys())
            .map( checkingWeight => 
                memoizedMax(setItemsSize-1, checkingWeight, items, maxValueForItemsSizeToWeight)
                + valueOfItemIfFits(maxWeight, checkingWeight, items[setItemsSize-1])
                )
            )
}

function valueOfItemIfFits(maxWeight: number, alreadyInBagWeight: number, itemToFit: Item) : number {

    if (alreadyInBagWeight + itemToFit.weight <= maxWeight) return itemToFit.value

    return 0
}
