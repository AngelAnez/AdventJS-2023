function maxDistance(movements){
  const options = {
    "<" : -1,
    ">" : 1
  }
  movements = movements.split("").sort().reverse()
  movements.unshift(0)
  return Math.abs(movements.reduce((distance,element) => {
    element != "*" && (distance = distance + options[element])
    element == "*" && (distance < 0 ? distance-- : distance++)
    return distance
  }))
}