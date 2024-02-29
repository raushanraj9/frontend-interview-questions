// const worker=new Worker("worker.js");

// const sumButton=document.getElementById("sum");
// const colorButton=document.getElementById("color");

// colorButton.addEventListener("click",()=>{
//     if(document.body.style.backgroundColor!="green")
//     {
//     document.body.style.backgroundColor="green";
//     }
//     else
//     {
//         document.body.style.backgroundColor="blue";
//     }
// })

// sumButton.addEventListener("click",()=>{
    
//     worker.postMessage("Hello worker");
   
// })
// worker.onmessage=function(message)
// {
//     alert(message.data);
// }


const worker=new Worker("worker.js");
const changeColor=document.querySelector("#color");
changeColor.addEventListener("click",()=>{
    if(document.body.style.backgroundColor!=="green")
    {
        document.body.style.backgroundColor="green";
    }
    else
    {
        document.body.style.backgroundColor="blue";
    }
})

const calculatesum=document.getElementById("sum");
calculatesum.addEventListener("click",()=>{
    worker.postMessage("hello");
    // let sum=0;
    // for(let i=0;i<10000000000;i++)
    // {
    //     sum+=i;
    // }
    // console.log(sum);
})

worker.onmessage=function(message)
{
    console.log(message.data);
}