const bubble=document.getElementById("bubble");
const button=document.querySelector("button");

bubble.addEventListener("click",(e)=>{
    console.log("div bubbling");
    // e.stopPropagation();

})
button.addEventListener("click",(e)=>{
    console.log("button");
    // e.stopImmediatePropagation();
})
button.addEventListener("click",(e)=>{
    console.log("button1");
    // e.stopPropagation();
})