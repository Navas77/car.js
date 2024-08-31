class car{
    constructor(brand,model){
        this.brand=brand;
        this.model=model;

    }
    cardetails(){
        console.log(`this brand${this.brand} and ${this.model}`);
        
    }
}
let a = new car("bmw","xseries")
a.cardetails()
