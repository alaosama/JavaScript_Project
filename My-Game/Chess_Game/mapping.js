

const arrayOfFiles = document.querySelector(".square");

const filesNameArray = ["a", "b", "c", "d", "e", "f", "g", "h"];

for(const i of arrayOfFiles) {
    let counter = 1;
    for (const el of i.children) {
        console.log(el.setAttribute("id", filesNameArray[fileNumber] + counter));
        //console.log(el);
        counter++;
    }
    fileNumber++;
}

for (const i of arrayOfFiles) {
    // console.log(i.children);
}
