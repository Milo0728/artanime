let i = 0 ; //El slide actual
let j = 3 ; //cantidad de slides

const dots = document.querySelectorAll(".dot-container button");
console.log(dots)

const imagenes = document.querySelectorAll(".image-container img")
console.log(imagenes);

function next() {
    document.getElementById("content" + (i+1)).
    classList.remove("activo");

    i= ( j + i + 1) % j;

    document.getElementById("content" + (i+1)).
    classList.add("activo")
    indicator( i + 1);

}

function prev() {
    document.getElementById("content" + (i+1)).
    classList.remove("activo");

    i = (j + i - 1) % j;

    document.getElementById("content" + (i+1)).
    classList.add("activo");
    indicator(i+1);
}

function indicator(num){
    dots.forEach(function(dot){
        dot.style.backgroundColor = "transparent";
    });

    document.querySelector(".dot-container button:nth-child(" + num + ")").style.backgroundColor = "#b80b0b";
}

function dot(index){
    imagenes.forEach(function(image){
        image.classList.remove("activo");
    });
    document.getElementById("content" + index).classList.add("activo");

    i = index - 1;
    indicator(index);
}