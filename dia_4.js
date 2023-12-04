function decode(message) { 
    while(message.includes(")")){
        let closer = message.indexOf(")")
        let opener = message.lastIndexOf("(",closer)
        let toReplace = message.substring(opener,closer+1)
        let reverted = toReplace.replace(/[()]/g,"")
        .split("")
        .reverse()
        .join("")
        message = message.replace(toReplace,reverted)
    } 
  return message
}