const form = document.getElementById('search-form');
const searchField = document.getElementById('search-keyword');
const responseContainer = document.getElementById('response-container');
let searchForText;

form.addEventListener('submit', function (e){
    e.preventDefault();
    responseContainer.innerHTML = '';
    searchForText = searchField.value;
    getNews();
});

function getNews() {
    const articleRequest = new XMLHttpRequest(); // construimos nuestro objeto
    articleRequest.open('GET', `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchForText}&api-key=8bbbb3f633684a9ea8edb0f6fd8359d4`);
    articleRequest.onload = addNews;
    articleRequest.onerror = handleError;
    articleRequest.send();
}
 function  handleError() {
    console.log('Se ha presentado un error');
    
}
function addNews() {
    const data = JSON.parse(this.responseText);
    const article = data.response.docs[0];
    const title = article.headline.main;
    const snippet = article.snippet;
   

    let li = document.createElement('li');
    li.className = 'articleClass';
    li.innerText = snippet;
    responseContainer.appendChild(li);
};
