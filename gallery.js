const overlay = document.querySelector(".overlay");

const dark = document.querySelector(".dark");

const displayedimage = document.querySelector(".displayed-img");


const thumbar = document.querySelector(".thumb-bar");

// collecting images as arrays
const images =[
    "DSC_0103.JPG",
    "DSC_0103.JPG",
    "DSC_0116.JPG",
    "DSC_0117-removebg-preview.png"

];

//

for (const image of images){
    let newImage = document.createElement("img");
    newImage.setAttribute("src", `gallery/${image}`);

    thumbar.appendChild("newImage");



    newImage.addEventListener("click", e =>(
        displayedimage = e.target.src
    )

    );


}



