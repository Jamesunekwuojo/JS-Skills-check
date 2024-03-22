const result = document.querySelector("#result");
const heading = document.querySelector("h1"); // Moved this line outside the switch

function generateTable() {
    for (let i = 1; i <= 10; i++) { // Changed the loop to start from 1 and end at 10
        switch (i) { // Switch on the variable i
            case 1:
                heading.textContent = "One Times Table";
                break; // Added break statement
            case 2:
                heading.textContent = "Two Times Table";
                break;
            case 3:
                heading.textContent = "Three Times Table";
                break;
            case 4:
                heading.textContent = "Four Times Table";
                break;
            case 5:
                heading.textContent = "Five Times Table";
                break;
            case 6:
                heading.textContent = "Six Times Table";
                break;
            case 7:
                heading.textContent = "Seven Times Table";
                break;
            case 8:
                heading.textContent = "Eight Times Table";
                break;
            case 9:
                heading.textContent = "Nine Times Table";
                break;
            case 10:
                heading.textContent = "Ten Times Table";
                break;
        }
        // Generate the multiplication table for the current number i
        for (let j = 1; j <= 10; j++) {
            let newResult = `${i} * ${j} = ${i * j}`; // Changed the multiplication logic
            result.textContent += `${newResult}\n`;
        }
    }
    result.textContent += "End of table";
}

const generate = document.querySelector("#Generate");
const clear = document.querySelector("#clear");

generate.addEventListener('click', generateTable);

clear.addEventListener("click", () => {
    result.textContent = "";
    heading.textContent = ""; // Clear heading when clearing the result
});
