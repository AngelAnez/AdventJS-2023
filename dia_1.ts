function findFirstRepeatedTs(gifts : number[]) : number {
    let repeatedList : number[] = gifts
    .filter((element,index : number,arr : number[]) => {
        return arr.indexOf(element) != index
    })
    return repeatedList[0] ?? -1
}