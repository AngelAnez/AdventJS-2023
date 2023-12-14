function getIndexsForPalindrome(word) {
  let wordSplit
  let indexMatch = []
  if (word == word.split("").reverse().join("")){
    return []
  }
  word.split("").forEach((letter,index) => {
    if (letter != word.split("").reverse()[index]){
      indexMatch.push({letter:letter,index:index})
    }
  })
  if (word.length%2 == 1){
    indexMatch.push({letter:word[(word.length-1)/2],index:(word.length-1)/2})
  }
  for (let i = 0, j=1; i < indexMatch.length; i++, j++){
    wordSplit = word.split("")
    j >= indexMatch.length && (j = 0)
    wordSplit[indexMatch[j].index] = indexMatch[i].letter
    wordSplit[indexMatch[i].index] = indexMatch[j].letter
    if (wordSplit.join("") == wordSplit.reverse().join("")){        
      return [indexMatch[i].index, indexMatch[j].index].sort()
    }
  }
  return null
}