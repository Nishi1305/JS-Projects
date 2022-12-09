
button = document.querySelectorAll(".btn");
// console.log(button[1]);
let display = document.querySelector(".count");

let count = 0;
button[0].addEventListener('click',()=>{
    count--;
    display.innerText = count;

    if(count<+10)
    {
        display.style.fontSize = "15px";
        display.style.transition = "0.35s";
        display.style.color = "blue";
    }
    
  
});

button[1].addEventListener('click',()=>{
    count++;
    display.innerText = count;

    if(count>10)
    {
        display.style.fontSize = "25px";
        display.style.transition = "0.35s";
        display.style.color = "green";
    }


})


