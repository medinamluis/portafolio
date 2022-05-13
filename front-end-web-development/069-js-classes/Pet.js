class Pet {
  constructor(animal, age, breed, sound) {
    this.animal = animal;
    this.age = age;
    this.breed = breed;
    this.sound = sound
  }
  
  get activity() {
    const today = new Date();
    const hour = today.getHours();  // integer in [0,23]
    if ( hour > 9 && hour <= 20 ){
      return 'playing';
    } else {
      return 'sleeping';
    }
  }
  
  get owner() {
    return this._owner;
  }
  
  set owner (owner) {
    this._owner = owner;    // The property name to be created (set) --the 'backing property'-- cannot be the same to the setter method name. By convention, use underscore at the begining of 
    console.log(`setter called: ${owner}`);
  }
  
  speak() {
    console.log(this.sound);
  }
}

const ernie = new Pet('dog', 1,  'pug', 'yip yip');
console.log(ernie);
ernie.speak();

const vera = new Pet('dog', 8,  'border collie', 'woof');
console.log(vera);
vera.speak();

const today = new Date();
console.log(today);
console.log(today.getHours());

console.log(ernie);
console.log(ernie.activity);
console.log(ernie);

ernie.owner = 'Ashley';
console.log(ernie.owner);  // This is undefined w/o the owner getter
console.log(ernie._owner);


class Owner {
  constructor(name, address) {
    this.name = name;
    this.address = address;
  }
  
  set phone(phone) {
    const phoneNormalized = phone.replace(/[^0-9]/g, '');
    this._phone = phoneNormalized;
  }

  get phone() {
    return this._phone
  }
}

ernie.owner = new Owner('Ashley', '123 Main Street');
ernie.owner.phone = '(555) 555-5555';
console.log(ernie.owner);
console.log(ernie.owner.name);
console.log(ernie.owner.phone);



