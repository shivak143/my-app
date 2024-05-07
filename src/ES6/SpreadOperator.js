const first = [1,2,3];
const second = [4,5,6];

const combine = first.concat(second); //old way
console.log(combine);

const combined = [...first,...second,"a",'b']; //new way
console.log(combined);

const clone = [...first,...second];
console.log(clone);

// With Object
const f1 = {name:'shiva'};
const f2  = {job : 'Software Developer'};
const result = {...f1,...f2,location :'Bangalore'};
console.log(result);

const con = {...first}; // array to object
const clone1 = {...f1, profession : 'IT Developer',con};
console.log(clone1);
