// Define a throttle function that takes a function and a delay as arguments
function throttle(func, delay) {
    let timerId;
    // Return a new function that throttles the original function
    return function(...args) {
      // If there is no timer set, execute the function and set a new timer
      if (!timerId) {
        timerId = setTimeout(() => {
          func.apply(this, args);
          timerId = null;
        }, delay);
      }
    };
  }
  
  // Define a function to fetch data
  function getData() {
    console.log("fetching data");
  }
  
  // Create a throttled version of the getData function with a delay of 5000 milliseconds (5 seconds)
  const throttledGetData = throttle(getData, 5000);
  
  // Add the throttledGetData function as an event listener for the click event on the button element with the id "color"
  const button=document.getElementById("color");
  button.addEventListener("click",getData )

  //
  const increament=document.getElementById("increament_button");
  const increament_pressed=document.getElementById("increament_pressed");
  const increament_count=document.getElementById("increament_count");
  const throtle=_.throttle(()=>{
    increament_count.innerHTML=++count;
  },1000)
  let pressed=0;
  let count=0;
  increament.addEventListener("click",()=>{
    increament_pressed.innerHTML=++pressed;
    throtle();
  })

