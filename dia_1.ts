function findFirstRepeatedTs(gifts:number[]) : number { 
    return gifts.find((e,i,arr) => arr.indexOf(e) != i) ?? -1
}