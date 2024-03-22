const overlay = document.querySelector(".overlay");

// const dark = document.querySelector(".dark");

const displayedimage = document.querySelector(".displayed-img");

const btn = document.querySelector('button');

const thumbar = document.querySelector(".thumb-bar");

// collecting images as arrays
const images =[
    "DSC_0103.JPG",
    "DSC_0109.JPG",
    "DSC_0116.JPG",
 

];

const alts = {
    'DSC_0103.JPG' : 'Closeup of a human eye',
    'DSC_0109.JPG' : 'Rock that looks like a wave',
    'DSC_0116.JPG' : 'Purple and white pansies',
    
    
  }

//

for (const image of images){
    let newImage = document.createElement("img");
    newImage.setAttribute("src", `gallery/${image}`);

    thumbar.appendChild(newImage);



    newImage.addEventListener("click", e =>{
        displayedimage.src = e.target.src;
        displayedimage.alt = e.target.alt;

    

    });

}
// Darken and Lighten
btn.addEventListener('click', () => {
    const btnClass = btn.getAttribute('class');
    if (btnClass === 'dark') {
      btn.setAttribute('class','light');
      btn.textContent = 'Lighten';
      overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    } else {
      btn.setAttribute('class','dark');
      btn.textContent = 'Darken';
      overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
  });



