// const inputEle=document.getElementById("myinput");
//     const handlesubmit=()=>{
//         const value=inputEle.value;
//         console.log(value);
//     }

//     let arr=[1,2,[3,4,5],[6,7,[8,9]]];
//     console.log(arr.flat(3))

// var i;
// for(i=0;i<3;i++)
// {
    
//     a(i);


// }
// function a(i)
// {
//     setTimeout(() => {
        
//         console.log(i);
    
//     }, 1000);
// }

function add(a)
{
    return a+3;
}
function sub(a)
{
    return a-2;
}
function mul(a)
{
    return a*2;
}

function compose(...functions)
{
    return (args)=>{
        return functions.reduce((arg,fn)=> fn(arg),args);
    }
}
const eval=compose(add,sub,mul);
console.log(eval(8));