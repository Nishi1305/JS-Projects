let input = document.getElementById('myInput');
let table = document.getElementById('myTable');
let tr = table.children[0].children;

input.addEventListener('keyup',searchfun);

function searchfun(e)
{
    let filter = e.target.value.toUpperCase();
    
    for(let i=0 ; i < tr.length ; i++)
    {
       let td = tr[i].getElementsByTagName('td')[0];

       if(td)
       {
          let textValue = td.textContent || td.innerHTML;

          if(textValue.toUpperCase().indexOf(filter) > -1)
          {
            tr[i].style.display = "";
          }
          else
          {
            tr[i].style.display = "none";
          }
       }
    }
}