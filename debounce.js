let count = 0;

// Define a function to fetch data
function getData() {
  console.log("fetching data", count++);
}

// Define a debounce function that takes a function and a delay as arguments
function debounce(func, delay) {
  let timerId;
  return function(...args) {
    // Clear the previous timer to prevent the execution of the function
    if (timerId) clearTimeout(timerId);
    // Set a new timer that will execute the function after the specified delay
    timerId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

// Create a debounced version of the getData function with a delay of 1000 milliseconds (1 second)
const freshdata = debounce(getData, 1000);

// Add the freshdata function as an event listener for the click event on the button element with the id "color"
// const button = document.getElementById("color");
// button.addEventListener("click", freshdata);


//Curring
function date1(a)
{
    return function(b)
    {
        return function(c)
        {
            return a+b+c;
        }
    }
}
  const res=date1(2)(4)(6);
// const res1=res(4);
// const res2=res1(6);
 console.log(res);

function add(a){
    return function(b)
    {
        if(b)
        {
             return add(a+b);
        }
        else{

        return a;
        }
    }
}

 console.log(add(4)(5)(4)(6)());