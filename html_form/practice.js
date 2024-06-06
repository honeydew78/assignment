const darkModeToggle = document.querySelector('.darkModeToggle')
const body = document.body

darkModeToggle.addEventListener('click',()=>{
   body.classList.toggle('dark')
});