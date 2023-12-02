function manufacture(gifts, materials) {
    let isPossibleToMake = []
    gifts.forEach((gift) => {
        gift.split("").every(element => materials.includes(element))
        && isPossibleToMake.push(gift) 
    })
    return isPossibleToMake
}