
let hover = document.querySelector('.lists_icon');
let submenu = document.querySelector('.ellipsis_list');

hover.addEventListener('click',()=>{
   submenu.style.display = "block";
});

hover.addEventListener('dblclick',()=>{
    submenu.style.display = "none";
 });
 