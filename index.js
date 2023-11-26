var typeData = new Typed(".role", {
    strings: [
      "Full Stack Developer",
      "Web Developer",
      "UI-UX Designer",
      "Backend Developer",
      "Coder",
    ],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 1000,
  });

  //greeting 1& 2

let date  = new Date();
let hours = date.getHours();
//kya kya access ka skete hai
/*let tdate = date.getDate();
let mon   = date.getMonth();
let year  =date.getFullYear();
let local =date.toLocaleTimeString();*/
let heading = document.querySelector('#greeting')
let heading1 = document.querySelector('#greeting1')

setInterval(() => {
    let date1 =new Date();
    heading1.innerHTML =date1.toLocaleTimeString()
}, 1000);

console.log(hours)

if(hours>5 &&hours<11){
    heading.innerText =`Good-morning Dear,`
   
}
else if(hours>11 &&hours<18){
    heading.innerText=`Good afternoon Dear,`
    }
else{
    heading.innerText=`Good night Dear,`
}

//bg color logics---------------------------------------------------
const br = document.querySelectorAll('.button')
const body   = document.querySelector('body')

  br.forEach( function (button){
  button.addEventListener('click',function(e){
   console.log(e.target);
   if(e.target.id==='lightpink'){
      body.style.backgroundColor=e.target.id
   }
   if(e.target.id==='whitesmoke'){
       body.style.backgroundColor=e.target.id
    }
    if(e.target.id==='blueviolet'){
       body.style.backgroundColor=e.target.id
    }
    if(e.target.id==='lightskyblue'){
        body.style.backgroundColor=e.target.id
     }
  })
})
//search box----------------------------
/*<input type="text" name=""  placeholder="names.." id="myInput" 
onkeyup="searchFun()">
*/
const searchFun = () => {
    //search bar ke liye
    let filter =document.getElementById('myInput').value.toUpperCase();
    //table-->
    let myTable =document.getElementById('project');
      for(var i=0;i<myTable.length;i++){
        //table data-->me ghusse
        let td  = myTable[i].getElementsByTagName('h3')[0];
       if(td){
        let textvale =td.textContent || td.innerHTML;
        if(textvale.toUpperCase().indexOf(filter)>-1){
            myTable[i].style.display='';
        }
        else{
            myTable[i].style.display="none";
        }
       }
      }
    }