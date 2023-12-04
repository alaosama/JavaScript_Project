const allSquares = document.getElementById("square");

for (const x of allSquares) {
    x.addEventListener("click", function () {
        const idOfElement = x.getAttribute("id");
        //console.log(idOfElement);
    });
}
