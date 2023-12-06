function maxDistanceTs(movements:string){
    let number:number = 0
    movements.split("").sort().reverse().forEach(element => {
      element == "<" && number--
      element == ">" && number++
      element == "*" && (number < 0 ? number-- : number++)
    })
    return Math.abs(number)
  }