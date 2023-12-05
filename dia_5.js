function cyberReindeer(road, time) {
    let prevSimbol
    let reindeerRoad = [road]
    let roadModified
    let delay = 0
    for (let i = 1; i < time; i++){
      i == 5 && (road = road.replaceAll("|","*"))
      if (road[i-delay] != "|"){
        roadModified = road.split("")
        roadModified[i-1-delay] = prevSimbol ?? "."
        prevSimbol = roadModified[i-delay]
        roadModified[i-delay] = "S"
        road = roadModified.join("")
      } else {
        delay++
      }
      reindeerRoad[i] = road
    }
    return reindeerRoad
  }