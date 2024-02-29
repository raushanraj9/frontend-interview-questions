let user={
    name:"Raushan",
    age:24,
    
}

function details()
    {
        console.log(this.name);
    }

let user1={
    name:"Raj",
    age:25,
}
details.call(user)
details.call(user1)
