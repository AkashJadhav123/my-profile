// function overloading or Method overloading . Compile time polymorphism .
function doubleMe(x:number);
function doubleMe(x:string);
function doubleMe(x:string[]);


function doubleMe(x: any) {
    if(x&& typeof x === "number") {
        console.log(x*2);
    } else if(x && typeof x === "string")
    {
        console.log(x + " " + x);
    } else if (Array.isArray(x)) {
        return x.map(name => console.log(name));
        // map creates a new array 
    }

}

doubleMe(2);
doubleMe("Rocky");
doubleMe(["a"]);