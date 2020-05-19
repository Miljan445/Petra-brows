let icon = document.getElementsByClassName("ham")[0];
let body = document.getElementsByClassName("body")[0];
let menu = document.getElementsByClassName("hammenu")[0];
let lineOne = document.getElementsByClassName("line")[0];
let lineTwo = document.getElementsByClassName("line")[1];
let lineThree = document.getElementsByClassName("line")[2];
let open = false;

icon.addEventListener("click",()=>{

    if(open === false){
        menu.className += " in";
        body.className += " bodyOut";
        menu.classList.remove("out");
        body.classList.remove("bodyIn");
        lineOne.className += " anim1";
        lineOne.classList.remove("anim1r");
        lineTwo.className += " anim2";
        lineTwo.classList.remove("anim2r");
        lineThree.className += " hit";
        lineThree.classList.remove("hit2");
        open = true;
    }
    else{
        menu.classList.toggle("out");
        body.classList.toggle("bodyIn");
        menu.classList.remove("in");
        body.classList.remove("bodyOut");
        lineOne.classList.toggle("anim1r");
        lineOne.classList.remove("anim1");
        lineTwo.classList.toggle("anim2r");
        lineTwo.classList.remove("anim2");
        lineThree.classList.toggle("hit2");
        lineThree.classList.remove("hit");
        open = false;
        }

    
})




let gal = document.getElementsByClassName("item");
let last = gal[gal.length-1];
let next = document.getElementById("next");
let prev= document.getElementById("prev");
next.addEventListener("click",()=>{
    let current = document.querySelector('.current');
    current.classList.remove("current");
    if(current.nextElementSibling.classList.contains("item")){
        current.nextElementSibling.classList.add("current");
        current.nextElementSibling.className += " fade";

    }
    else{
        current.classList.remove("current");
        gal[0].classList.add("current");
        gal[0].classList.add("fade");
    }

})


prev.addEventListener("click",()=>{
    let current = document.querySelector('.current');
    current.classList.remove("current");
    if(current.previousElementSibling){
        current.previousElementSibling.classList.add("current");
    }
    else{
        current.classList.remove("current");
        last.classList.add("current");
    }

})