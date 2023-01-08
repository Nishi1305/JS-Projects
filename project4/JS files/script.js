
let hover = document.querySelector('.lists_icon');
let submenu = document.querySelector('.ellipsis_list');

hover.addEventListener('click',()=>{
   submenu.style.display = "block";
});

hover.addEventListener('dblclick',()=>{
    submenu.style.display = "none";
 });
 

let liked = document.getElementById(liked);
let liked_page = liked.link("http://127.0.0.1:5500/PROJECTS/project4/liked.html");

