const breadElement = document.getElementById('bread')
const closeBreadElement = document.getElementById('close-bread')
const rightBar = document.getElementById('rightbar')

breadElement.addEventListener("click", () => {
        rightBar.style.transform = "translateX(0%)";
})
closeBreadElement.addEventListener("click", () => {
        rightBar.style.transform = "translateX(100%)";
})