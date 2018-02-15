document.querySelector('.get-jokes').addEventListener('click', getJokes);

const inputForm = document.querySelector('.inputForm');
const num = document.querySelector('#number');

function getJokes(e) {
  const number = document.querySelector('input[type="number"]').value;

  const xhr = new XMLHttpRequest();

  // if (num.value === '') {
  //     selectNumber();
  //   } else {
  //   let para = document.createTextNode('Please enter a number! ');
  //     inputForm.removeChild(para);
  // }
  
  xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);

  xhr.onload = function () {
    if(this.status === 200){
      const response = JSON.parse(this.responseText);

      let output = '';

      if(response.type === 'success'){
        response.value.forEach(function (joke) {
          output += `<li>${joke.joke}</li>`
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

// function selectNumber() {
//   let para = document.createTextNode('Please enter a number! ');
//   inputForm.appendChild(para);
// }