const Input = document.querySelector("input");
const typedLetter = document.querySelector("p");

Input.addEventListener("keydown", e =>{
    typedLetter.textContent = `You typed "${e.key}"`

});

