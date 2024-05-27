let eidDate = new Date('Jun 16, 2024').getTime();
let currentDate = new Date();

let diff =  eidDate - currentDate;

let day = Math.floor(diff / (1000 *60 * 60 * 24 ));
let hour = Math.floor(diff / ( 1000 * 60 * 60 ));
let mints = Math.floor(diff / ( 1000 * 60 ));
let sec = Math.floor(diff / ( 1000));
let box = document.querySelector ('.box');
box.innerHTML = `<h1>Day : ${day} <span>Hour : ${hour}</span></h1><p>Minutes : ${mints}</br> Seconds : ${sec}</p>`;
if(day = 0 , hour = 0 ,mints = 0 , sec = 0){
    box.innerHTML = `<h1> EID MUBARAK </h1>`;

}

