const url = 'https://api.github.com/users/ArthurFAmaral95'
const profileImg = document.querySelector('img')
const login = document.querySelector('#git-login a')
const body = document.querySelector('body')
const gitLink = document.querySelector('#git-link')
const button = document.querySelector('button')

fetch(url)
  .then(response => response.json())
  .then(data => {
    profileImg.src = data.avatar_url
    login.textContent = data.login
    login.href = data.html_url
    gitLink.href = data.html_url
  })

button.addEventListener('click', () => {
  body.classList.toggle('dark')
})
