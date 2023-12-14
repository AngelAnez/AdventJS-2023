function calculateTime(deliveries) {
    const timeInSeconds = (array) => {
      return +array[0] + (+array[1]*60) + (+array[2]*3600)
    }
    const oneDigit = {
      true : "0",
      false : ""
    }
    const isNegative = {
      true : "-",
      false : ""
    }
    let timeGifts = deliveries
    .map(time => 
         timeInSeconds(time.split(":").reverse())
        )
    .reduce((total,time) => {
      return total + time
    })
    let negative = false
    timeGifts -= 25200
    Math.sign(timeGifts) == -0 
    || Math.sign(timeGifts) == -1 
    && (timeGifts *= -1, negative = true)
    
    return [
      Math.floor(timeGifts/3600),
      Math.floor((timeGifts/60)%60), 
      timeGifts%60
    ].map((digit,index) => {
      digit = oneDigit[/^[0-9]$/.test(digit)] + digit
      index == 0 && (digit = isNegative[negative] + digit)
      return digit
    }).join(":")
  }