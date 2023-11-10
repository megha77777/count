const buttons = document.querySelectorAll(".countBtn")
const counter = document.querySelector(".counter");
let count=0;
buttons.forEach((btn)=>{
    btn.addEventListener("click", (e)=>{
        if(btn.classList.contains("prevBtn")){
            count--;
        }
        else if(btn.classList.contains("nextBtn")){
            count++;
        }
        counter.textContent = count;
        if(count<0){
            counter.style.color = "red";
        }
        else if(count>0){
            counter.style.color = "green";
        }
        else counter.style.color = "#333333";
    })
})