const colorCode=[1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
const btn=document.querySelector(".btn");
const box=document.querySelector(".main");
btn.addEventListener("click",function(){
    let color="#";
    for(let i=0; i<6; i++){
        color+=colorCode[randomNum()];
    }
    box.style.backgroundColor=color;
    document.querySelector(".ColorName").innerText=color;
})
function randomNum(){
    return Math.floor(Math.random()* colorCode.length);
}
