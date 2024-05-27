let eidDate = new Date('Jun 16, 2024').getTime();
let currentDate = new Date();


let diff =  eidDate - currentDate;

let day = Math.floor(diff / (1000 *60 * 60 * 24 ));
let hour = Math.floor(diff / ( 1000 * 60 * 60 ));
let mints = Math.floor(diff / ( 1000 * 60 ));
let sec = Math.floor(diff / ( 1000));

let mainbox = document.querySelector ('.mainbox');
mainbox.innerHTML = `<h1>Day : ${day} </br> Hour : ${hour} </br> Minutes : ${mints} </br> Seconds : ${sec}</h1>`







console.log(day ,hour ,mints);