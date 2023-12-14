function organizeGifts(gifts) {
    let letters = gifts.split("").filter(element => element.match(/\D/))
    let numbers = gifts.replace(/[a-zA-Z]/g," ").split(" ")
    let organizedGifts = ""
    let value
    numbers.pop()
    numbers.forEach((element,index) => {
      value = element
      do{
        if (value >= 50){
          organizedGifts += "[" + letters[index] + "]"
          value = value - 50
        }
        if (value >= 10 && value < 50){
          organizedGifts += "{" + letters[index] + "}"
          value = value - 10
        }
        if (value > 0 && value < 10){
          organizedGifts += "(" + letters[index].repeat(value) + ")"
          value = 0
        }
      } while (value > 0 )
    })
    return organizedGifts
  }