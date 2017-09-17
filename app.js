const btn = document.querySelector('button')
const img = document.querySelector('img')
btn.addEventListener('click', () => {
  btn.style.display = 'none'
  img.style.display = 'block'
})

img.addEventListener('click', () => {
  btn.style.display = 'block'
  img.style.display = 'none'
})
