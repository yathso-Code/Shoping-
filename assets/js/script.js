const icon = document.getElementById("mob");
const nav = document.querySelector(".nav");
const close = document.querySelector(".close");
const arrow = document.getElementsByClassName("top-arrow");

if(icon){
    icon.addEventListener('click',()=>{
     nav.classList.add('active');
    });
}
if(close){
    close.addEventListener('click',()=>{
     nav.classList.remove('active');
    });
}

window.addEventListener('scroll',()=>{
if(window.pageYOffset > 400){
    arrow.style.display = "block";
    return;
}
else{
    arrow.style.display = "none";
}
});
arrow.addEventListener('click',()=>{
    window.scrollTo(0,0);
});


