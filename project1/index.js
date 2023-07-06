
let change=document.getElementById("count-el");
let count=1;
function increment(){
    count++;
    change.innerText=count
}
let save1= document.getElementById("save-el")
function save(){
    let previous =count+' - '
    save1.textContent+=previous
   change.innerText=0;
   count=0
}

let welcomeEl=document.getElementById("welcome-el")
const name = "KuBa";
let greeting = "Welcome back, "
welcomeEl.innerText=`${greeting}${name} :)`
