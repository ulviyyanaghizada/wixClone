const spanBold = document.querySelector(".boldSpan")
const spanLight = document.querySelector(".lightSpan")

const change1 = document.getElementById("change1")
const change2 = document.getElementById("change2")
const change3 = document.getElementById("change3")

change1.addEventListener("click",()=>{
    spanBold.innerHTML="Josh Phillips"
    spanLight.innerHTML="Company name"
    change1.style.opacity="1"
    change3.style.opacity=".6"
    change2.style.opacity=".6"
})
change2.addEventListener("click",()=>{
    spanBold.innerHTML="Gabriella Spring"
    spanLight.innerHTML="Company name"
    change2.style.opacity="1"
    change3.style.opacity=".6"
    change1.style.opacity=".6"
})
change3.addEventListener("click",()=>{
    spanBold.innerHTML="Louise Maxwell"
    spanLight.innerHTML="Company name"
    change3.style.opacity="1"
    change2.style.opacity=".6"
    change1.style.opacity=".6"
})
