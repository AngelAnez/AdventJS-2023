function checkIsValidCopy(original, copy) {
    let makingRegex = "^"
    const charOptions = {
      "#": `[\#\+\:\. ]`,
      "+": `[\+\:\. ]`,
      ":": `[\:\. ]`,
      ".": `[\. ]`,
      " ": " "
    }
    original.split("").forEach((letter) => {
      makingRegex += charOptions[letter] 
      ?? `[${letter}${letter.toLowerCase()}\#\+\:\. ]`
    })
    makingRegex += "$"  
    return new RegExp(makingRegex).test(copy)
  }