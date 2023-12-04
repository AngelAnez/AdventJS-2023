function findNaughtyStepTs(original:string, modified:string) : string {
    let bigger : string, smaller : string
    original.length > modified.length ? bigger = original : bigger = modified
    original.length > modified.length ? smaller = modified : smaller = original
    return bigger.split("").find((element, index) => element != smaller[index]) ?? ""
}