class employee {
    constructor(name,salary,age){
    this.name = name;
    this.salary =salary;
    this.age=age;
    }
    greet(){
        console.log(`this is${this.name} and iam ${this.age}`);
    }
}
let a1 = new employee("vince",70000,36);
a1.greet();


class person extends employee{
    constructor(name,position){
        this.name=name;
        this.position=position;
    }
    describejob(){
        console.log(`this is${this.name} and iam working at${this.position}`);
        
    }
}
let a2 = new employee ("peter","hiring dept");

a2.describejob();
