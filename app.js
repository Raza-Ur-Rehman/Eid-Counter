let eidDate = new Date('Jun 17, 2024').getTime();

let countDown = setInterval (() => {
    
    let currentDate = new Date().getTime();
let diff =  eidDate - currentDate;

let day = Math.floor(diff / (1000 *60 * 60 * 24 ));
let hour = Math.floor((diff % ( 1000 * 60 * 60 * 24 )) / (1000 * 60 *60));
let mints = Math.floor((diff % ( 1000 * 60 * 60 )) / (1000 * 60 )) ;
let sec = Math.floor((diff % ( 1000 * 60)) / (1000));
let box = document.querySelector ('.box');
box.innerHTML = `<h1>Day : ${day} <span>Hour : ${hour}</span></h1><p>Minutes : ${mints}</br> Seconds : ${sec}</p>`;
if(diff <= 0){
    clearInterval(countDown);
    box.innerHTML = `<h1> EID MUBARAK </h1>`;

}
},1000);
