function maxGifts(houses) {
    if (houses.length == 1){
      return +houses.join("")
    }
    if (houses.length == 0){
      return []
    }
    let objHouses = houses
    .map((gifts, index) => {
      return {house: index, gifts: gifts}
    })
    .sort((a,b) => {
      if (a.gifts == b.gifts){
        return a.house > b.house ? 1 : -1
      }
      return a.gifts < b.gifts ? 1 : -1
    })
    
    let housesVisited = []
    
    
    let odd = 0
    let even = 0
    houses.forEach((house,index) => {
      if (index%2 == 0){
        odd += house
      } else{
        even += house
      }
    })
    
    let withMax = objHouses.reduce((total,item) => {
      if (total == objHouses[0]){
        housesVisited.push(total.house-1, total.house+1)   
        total = total.gifts
      }
      if (!housesVisited.includes(item.house)){
        housesVisited.push(item.house-1, item.house+1) 
        total = total + item.gifts
      }
      return total
    })
    
    return Math.max(odd,even,withMax)
  }
     
  
  const result = maxGifts([1,2,3,4,5,6,6,-1]) // 7000 (4 + 4 + 1)
  
  
  console.log(result)