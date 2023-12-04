function decodeTs(message:string) : string { 
    while(message.includes(")")){
        let closer:number = message.indexOf(")")
        let opener:number = message.lastIndexOf("(",closer)
        let toReplace:string = message.substring(opener,closer+1)
        let reverted:string = toReplace.replace(/[()]/g,"")
        .split("")
        .reverse()
        .join("")
        message = message.replace(toReplace,reverted)
    } 
  return message
}