function cyberReindeerTs(road:string, time:number) : string[] {
    let prevSimbol: string = "."
    let reindeerRoad: string[] = [road]
    let roadModified : string[]
    let delay: number = 0
    for (let i = 1; i < time; i++){
      i == 5 && (road = road.replace(/|/g,"*"))
      if (road[i-delay] != "|"){
        roadModified = road.split("")
        roadModified[i-1-delay] = prevSimbol
        prevSimbol = roadModified[i-delay]
        roadModified[i-delay] = "S"
        road = roadModified.join("")
      } else {
        delay++
      }
      reindeerRoad.push(road)
    }
    return reindeerRoad
  }