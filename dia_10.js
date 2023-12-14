function createChristmasTree(ornaments, height) {
    let tree = ""
    let e = 0
    let d = 0
    for (let i = 0; i < height; i++){
        tree = tree + " ".repeat(height-i-1)
        e = i
        do{
          tree = tree + ornaments[d] 
          d++
          d == ornaments.length && (d = 0)
          e--
          e < 0 ? (tree = tree) : (tree = tree + " ")
        } while (e > -1)
        tree = tree + "\n"
    }
    tree = tree + " ".repeat(height-1) + "|" + "\n"
    return tree
  }