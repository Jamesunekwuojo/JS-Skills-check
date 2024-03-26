function createObject(name){
    const obj={}
    obj.name = name;

    obj.Introduceself = function(){
        console.log(`Hi I'm ${this.name}`);

    }

    return obj;



}

const james = createObject("James");
james.Introduceself();

const Deborah = createObject("Debbie");
Deborah.Introduceself()

