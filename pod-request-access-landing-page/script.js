const email = document.getElementById('email')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
  e.preventDefault()
  let errorMessage = [];
  if (email.value === '') {
    errorMessage.push('Oops ! Please check your email')
  } else {
    alert(`${email.value} submitted!`)
  }

  if (errorMessage.length > 0) {
    e.preventDefault();
    errorElement.innerText = errorMessage.join(',')
  }
})