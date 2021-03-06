document.querySelector('.get-jokes').addEventListener('click', getJokes);

const inputForm = document.querySelector('.inputForm');
const num = document.querySelector('#number');
const pTag = document.getElementById('pTag');

function getJokes(e) {
  const number = document.querySelector('input[type="number"]').value;

  const xhr = new XMLHttpRequest();

  if (num.value === '') {
      pTag.innerHTML = 'Please enter a number!'
    } else {
      pTag.innerHTML = ''
  }
  
  xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);

  xhr.onload = function () {
    if(this.status === 200){
      const response = JSON.parse(this.responseText);

      let output = '';

      if(response.type === 'success'){
        response.value.forEach(function (joke) {
          output += `<li class="mb-3">${joke.joke}</>`
        });
      } else {
        output += '<li>Something went wrong...</li>'
      }

      document.querySelector('.jokes').innerHTML = output;
    }
  }

  xhr.send();

  e.preventDefault();
}

