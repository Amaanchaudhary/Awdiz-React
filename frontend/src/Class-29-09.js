function person1(name , age){    //This is function Component
    console.log(`Hello, my name is ${name} and my age is ${age} year old`)
}

class person{              //This is class Component
    constructor(name , age){   //constructor
        this.name = name;
        this.age = age;
    }
    sayHello(){   //method
        console.log(`Hello, my name is ${this.name} and my age is ${this.age} year old`)
    }
    myAge(){    //method
        console.log(`Hello, my age is ${this.age}`);
    }
}

const john = new person('Amaan' , 21);  //created object of class 
john.sayHello(); //calling method of class using its object  
john.myAge()

person1('Amaan1' , 20);  //calling function  

