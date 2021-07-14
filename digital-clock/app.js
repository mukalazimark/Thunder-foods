let hrs=document.getElementById('hours');
let mins=document.getElementById('mins');
let secs=document.getElementById('secs');
var date = new Date();
hrs.innerHTML=date.getHours();
mins.innerHTML=date.getMinutes();
// blinking ":"

let count = setInterval(()=>{
	secs.classList.toggle('display');
},1000);

