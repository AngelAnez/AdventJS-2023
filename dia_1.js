function findFirstRepeated(gifts) { 
  return gifts.find((e,i,arr) => arr.indexOf(e) != i) ?? -1
}