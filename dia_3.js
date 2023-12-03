function findNaughtyStep(original, modified) {
    let bigger, smaller
    original.length > modified.length ? bigger = original : bigger = modified
    original.length > modified.length ? smaller = modified : smaller = original
    return bigger.split("").find((element, index) => element != smaller[index]) ?? ""
}