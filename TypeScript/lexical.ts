class Person {
    private _age: number;
    constructor(age: number) {
        this._age = age;
    }
    growOld = () => {
        this._age ++;
    }

    age() {
        return this._age;
    }
}

const objPerson = new Person(0);

//objPerson.growOld();

//console.log('age', objPerson.age());

const grow = objPerson.growOld;
grow();
console.log('age', objPerson.age());