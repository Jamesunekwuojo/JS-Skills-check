
const result = document.querySelector("result");

function generateTable(){

    for(let i=0; i<=10; i++){

        const num =[1, 2, 3, 4, 5, 6, 6, 7,8,9,10];
        const heading = document.querySelector("h1");

        let newResult = `1 * ${i}= ${1 * i}`;
        result.textContent += `${newResult}\n`;

        switch(num){
            case 1:
                heading.textContent = "One Times Table";
            case 2:
                heading.textContent = "Two Times Table";
            case 3:
                heading.textContent = "Three Times Table";
            case 4:
                heading.textContent = "Four Times Table";
            case 5:
                heading.textContent = "Five Times Table";
            case 6:
                heading.textContent = "Six Times Table";
            case 7:
                heading.textContent = "Seven Times Table";
            case 8:
                heading.textContent = "Eight Times Table"; 
            case 9:
                heading.textContent = "Nine Times Table";
            case 10:
                heading.textContent = "Ten Times Table";
            default:
                heading.textContent = "End of multiplication table"





        }


    }

    result.textContent+= "End of table";




}


// const generate = document.querySelector("#Generate");
// const clear =document.querySelector("clear");

// generate.addEventListener('click', generateTable );

// clear.addEventListener('click', ()=>{
//     result.textContent = "";
// });
