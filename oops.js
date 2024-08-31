//oops
//1. key concepts of oop
//classes: templates for creating objects (instances).A class encapsulates data and functions 
//that operate on the data

//objects : instances of classes ,objects represent specific entities 
//in your application with properties (data) and methods (functions)

//inheritance : allows a class (child class) to inherit properties
//inheritance allows 1 class to use properties and methods from another class.

//encapsulation : keeps data (properties) and methods together 

//abstraction : hide complex details and sow only neccesaary part


//polymorphism : allows objects of different class to 
//the treated as objects of a common super class



////creating classes and objects
class person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    greet(){
        console.log(`hello my name is ${this.name}and i am ${this.age} years old.`);
    }
}
//creating an object (instance)of the person class
const person1 = new person("alice",30);
person1.greet();


////inheritance
class Employee extends person{
    constructor(name,age,jobTitle){
        super(name,age);//call the parent class constructor
        this.jobTitle = jobTitle;
    }
    describejob(){
        console.log(`i am a ${this.jobTitle}.`);
 }
}
const employee1 =  new Employee("bob",25,"developer");
employee1.greet();
employee1.describejob();

///encapsulation
class car{
    #enginestatus = false; // private property

    startengine(){
        this.#enginestatus = true;
        console.log("engine started");

    }
checkengine(){
        return this.#enginestatus ? "engine is on.":"engine is off.";
}
}
const mycar = new car();
    console.log(mycar.checkengine());
    mycar.startengine();
    console.log(mycar.checkengine());

    ////polymorphism
    class animal{
        makeSound(){
            console.log("some generic sound");
             }
             }
    class Dog extends animal {
        makeSound(){
            console.log("woof woof");

             }
    }
    class Cat extends animal{
        makeSound(){
            console.log("meow meow");
}
    }

    const dog =new Dog();
    const cat = new Cat();

    dog.makeSound();
    cat.makeSound();


    ///abstaraction
    class bankaccount {
        #balance = 0;

        deposit(amount){
            if(amount > 0) {
                this.#balance += amount;
                console.log(`deposited ${amount}.`);
            }else{
                console.log("depositnamount must be positive.");
            }
        }
        withdraw(amount){
            if(amount>0 && amount <= this.#balance){
                this.#balance -= amount;
                console.log(`withdraw ${amount}.`);
            } else{
                console.log("insufficient funds or invalid amount");
                
            }               
            }
            checkbalance(){
                console.log((`your balance is${this.#balance},`));
                
            }
        }
        const myaccount = new bankaccount();
        myaccount.deposit(100);
        myaccount.withdraw(30);
        myaccount.checkbalance();

                
            
    
    
