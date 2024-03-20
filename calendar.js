const selectMonth = document.querySelector('select');
const h1 = document.querySelector('h1');
const list = document. querySelector('ul');


selectMonth.addEventListener('change', () =>{
    const choice = selectMonth.value;
    let days = 31;

    if (choice==="February"){
        days = 28
    } 
    else if (
        choice === 'September' ||
        choice === "November" ||
        choice === "June" ||
        choice === "April" ||
        choice === "June" 
        ) {
        days = 30;

    }


    createCalendar(days, choice);


});


function createCalendar(days, choice){

    list.innerHTML = "";
    h1.textContent = choice;

    for(let i =1; i<=days; i++){
        const listItem = document.createElement('li');
        listItem.textContent =i;
        list.appendChild('listItem');
    }

}

createCalendar(31, "January");

