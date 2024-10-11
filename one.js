console.log(this);//windows

// function fn(){
//     console.log(this);
// }

// fn();

let obj={
    name:"John",
    func:fn
}

// obj.func();

//Method bind:
function fn(){
    console.log(this);
    function abc(){
        console.log(this);
    }
    let ret=abc.bind(this)
    ret();
}
obj.func