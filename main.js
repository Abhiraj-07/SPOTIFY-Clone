const changeOnPlay= ()=>{
    const One = document.getElementById('play1');
    const two = document.getElementById('play2');
    if(One.style.display=='none'){
        One.style.display='inline';
        two.style.display='none'
    }
    else{
    One.style.display='none';
        two.style.display='inline'
    
    }
}

const Search= ()=>{
    const container = document.getElementById('container1');
    container.style.display='none';

    document.getElementById('container2').style.display='flex';
}
const chechNoon = ()=>{
let timeNow = new Date();
let hrs = timeNow.getHours();
let wishtheUser = document.getElementById('wishtheUser')
if(hrs==0){
    wishtheUser.innerText='Midnight';
}
else if(hrs>4&& hrs<12){
    wishtheUser.innerText=' Good Morning';
}
else if(hrs<18 && hrs>12){
    wishtheUser.innerText='Good Evening';
}else{
    wishtheUser.innerText='Good Night';
}
document.getElementById('container2').style.display='none';
document.getElementById('container1').style.display='block';
}