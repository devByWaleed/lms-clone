let bTn = document.getElementById("logic");
let newClr = document.getElementById("right-container");

let value = 0;
bTn.addEventListener("click", function () {
    if (value === 0) {
        newClr.style.backgroundColor = "green";
        value = 1;
    }
    else if (value === 1) {
        newClr.style.backgroundColor = "orange";
        value = 2;
    }
    else if (value === 2) {
        newClr.style.backgroundColor = "black";
        value = 3;
    }
    else if (value === 3) {
        newClr.style.backgroundColor = "#051664";
        value = 0;
    }
});