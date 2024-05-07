class Car{
    constructor(name){
        this.name = name;
    }
    present(){
        return 'I have '+this.name+' car';
    }
}
const myCar = new Car("Ferrari");
myCar.present();

class Model extends Car{
    constructor(brand,mod){
        super(brand);
        this.model = mod;
    }
    show(){
        return this.present() + ', it is a ' + this.model;
    }
}

const type = new Model('Ford','Mustang');
console.log(type.show());