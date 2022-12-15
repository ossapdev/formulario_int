var scriptURL = 'https://script.google.com/macros/s/AKfycbwbOW3gXdrS0IHNa4GDMm-7Olb8weg-Yk5Pj3OL2JQLoPk0atNmlkQVxc2gr1gCXtQ/exec'

let form = document.forms['submit-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message))
})

