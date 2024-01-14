let s = "Yolo Wat up mah man"

function findDuplicates(str) {
    let stringWithoutSpaces = str.replace(/ /g, "");
    let strArray = stringWithoutSpaces.split("")
    let m = new Map()
    for(let i =0;i<strArray.length;i++) {
        m.set(strArray[i], (m.get(strArray[i]) || 0)+1)
    }
    let duplicates = [];
    for (const t of m) {
        //console.log(t)
        if (t[1] > 1) {
            duplicates.push([t[0],t[1]]);
        }
    }
    return duplicates;
}



console.log(findDuplicates(s))