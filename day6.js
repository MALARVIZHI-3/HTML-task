//creating an array
let employee=[];
function contact(name,phone,email){
        employee.push({name,phone,email})
}
contact(
    {name:"malarvizhi",
    phone:9597636316
    email:"malarvizhi@gmail.com"},
    {name:"pragathi",
    phone:6345675410,
    email:"pragathi@gmail.com"},
     
);
for(let emp of employee){

// Dot notation
console.log("Name(dot):",emp.name);
console.log("Phone(dot):",emp.phone);
console.log("Email(dot):",emp.email);

// Bracket notation
console.log("Name(bracket):",emp["name"]);
console.log("Phone(bracket):",emp["phone"]);
console.log("Email(bracket):",emp["email"]);

//Rest parameters
function addEmployee(newEmployee) {
    employee.push(newEmployee);
}

addEmployee(
    {
        name:"joe",
        phone:9823465721,
        email:"joe@gmail.com",
       display() {
            console.log("Contact-Name: "+this.name+", Phone: "+this.phone+", Email: "+this.email);
        }
    },
    {
        name:"saranya",
        phone:9341237990,
        email:"saranya@gmail.com",
       display() {
            console.log("Contact-Name: " + this.name+", Phone: "+this.phone+", Email: "+this.email);
        }

    }
);

console.log("\nAfter Adding New Contacts:");
for (let e of employee) {
    e.display();
}

//Spread Operator
let moreEmployee=[
    {
        name:"Abc",
        phone:9000000000,
        email:"abc@gmail.com",
        display() {
            console.log("Contact- "+this.name);
        }
    }
];

let mergedEmployee=[employee,moreEmployee];

console.log("\nMerged Contacts:");
for (let e of mergedEmployee) {
    e.display();
}

//call(), apply(), bind()
let display= function(prefix) {
    console.log(prefix+" Contact-Name: "+this.name+", Phone: "+this.phone+", Email: "+this.email);
};

let sampleEmployee=employee[0];

// call()
display.call(sampleEmployee,"Using call:");

// apply()
display.apply(sampleEmployee, ["Using apply:"]);

// bind()
let bind=display.bind(sampleEmployee,"Using bind:");
bind();

}
