function manufactureTs(gifts: string[], materials: string) : string[] {
    let isPossibleToMake : string[] = []
    gifts.forEach((gift) => {
        gift.split("").every(element => materials.includes(element))
        && isPossibleToMake.push(gift)
    })
    return isPossibleToMake
}