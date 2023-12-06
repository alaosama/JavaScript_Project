const allSquares = document.getElementById("square");

for (const x of allSquares) {
    x.addEventListener("click", function () {
        // const idOfElement = x.getAttribute("id");
        // //console.log(idOfElement);
        // const innerHtmlOfElement = document.getElementById(idOfElement).innerHTML;

        // if( innerHtmlOfElement.includes("black") || innerHtmlOfElement.includes("white"))
        // {
        //     document.getElementById(idOfElement).style.backgroundColor = 'yellow'
            
        // }

        // push element in empty Array
        clickeElments.push(x);

        //console.log(clickeElements);

        if(clickeElments.length > 0) {

        }

        const idOfElement = x.getAttribute("id");
        const innerHtmlOfElement = document.getElementById(idOfElement).innerHTML;

        if ( clickeElments.length > 0)

        if (
            innerHtmlOfElement.includes("black") || innerHtmlOfElement.includes("white")
        ) {

        }
    });
}
