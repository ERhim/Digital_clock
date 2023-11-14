const hourE1=document.getElementById("hour");
const minE2=document.getElementById("min");
const secE3=document.getElementById("sec" );
const amE4=document.getElementById("ampm" );

function updateClock(){
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let ampm = "AM";
  if(h>12){
    h=h-12;
    ampm="PM";
  }

h=h<10?"0"+h:h;
m=m<10?"0"+m:m;
s=s<10?"0"+s:s;

  hourE1.innerText=h;
  minE2.innerText=m;
  secE3.innerText=s;
  amE4.innerText=ampm;
  setTimeout(()=>{
    updateClock();
  },1000)
}
updateClock();