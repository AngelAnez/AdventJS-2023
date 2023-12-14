function adjustLights(lights) {
    let validator = false
    let minNumber = -1
    let first = lights[0]
   do{
     minNumber++
     search = lights.findIndex((element,index) => {
       color = index % 2
       if (color == 0 && element != first || color == 1 && element == first){
         return index
       }
     })
     if (search > 0){
       lights[search] == '🟢' ? (lights[search] = '🔴') : (lights[search] = '🟢')
     } else{
        validator = true
     }
   } while (validator == false)
     return minNumber
  }