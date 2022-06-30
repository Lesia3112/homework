const loadTrigger = document.getElementById('js-load-rigger');
const URL = 'https://jsonplaceholder.typicode.com/posts/1';

const getName = loadTrigger.addEventListener('click',() => {
  // 
  fetch(URL)
  .then(response => response.json())
  .then(data => {
    console.log('DATA', data);
  })
});
export{getName};  