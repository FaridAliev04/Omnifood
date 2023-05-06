const listClick=document.querySelector(".nav_none-button")
const navMobile=document.querySelector(".list_mobile")
const divNoneButton=document.querySelector(".nav_none")
const mainFirstTop=document.querySelector(".main__first")

listClick.addEventListener("click",function(){
    navMobile.classList.add("nav_mobile")
    divNoneButton.classList.add("button_mobile-none")
    listClick.classList.add("button_mobile-none")
    mainFirstTop.style.marginTop="5rem"
    // navMobile.style.opacity="1"
})

document.addEventListener("keydown",function(e){
    console.log(e)
    if(e.key==="Escape"){
        navMobile.classList.remove("nav_mobile")
    }
    listClick.classList.remove("button_mobile-none")
    mainFirstTop.style.marginTop=""
})