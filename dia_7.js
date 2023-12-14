function drawGift(size,symbol){
    if (size == 1){
      return "#\n"
    }
    let gift = ""
    let i = 1
    let upReady = false
    let otherSide
    do{
      i == 1 || i == size ? (j = 0) : (j = size-1)
      i != 1 && i != size ? (k = size-2, otherSide = "#" + symbol.repeat(i-2) + "#") : (k = 0, otherSide = "")
      i == size && (otherSide = symbol.repeat(i-2) + "#")
      
      if (i <= size && upReady == false){
        gift = gift + " ".repeat(size-i) + "#".repeat(size-j) + symbol.repeat(k) + otherSide + "\n"
        i++
      } else {
        i--
        gift = gift + "#".repeat(size-j) + symbol.repeat(k) + otherSide + "\n"
      }
      
      i > size && (upReady = true, i = i - 2)
      
    } while (i != 0)
    return gift
  }