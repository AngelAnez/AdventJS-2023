function findFirstRepeated(gifts) {
  let repeatedList = gifts.filter((element,index,arr) => arr.indexOf(element) != index)
  return repeatedList[0] ?? -1
}