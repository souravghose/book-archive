// search book name
const searchBook = () =>{
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    // console.log(searchText);
    searchField.value = '';
    if(searchText === ''){
        // show text warning 
        const searchWarning = document.getElementById('search-warning');
        searchWarning.innerHTML = 'Search something. search field can not empty';
    }
    else{
    const url = `https://openlibrary.org/search.json?q=${searchText}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displaySearchResults(data.docs));
}
}
// display book results
const displaySearchResults = books => {
    // text warning hide
    const searchWarning = document.getElementById('search-warning');
    searchWarning.style.display = 'none';
    // display how many search results founded
    const searchResultAmount = document.getElementById('search-result-amount');
    searchResultAmount.innerHTML = `<h4 class="text-success">${books.length} results found</h4>`;
    const searchResults = document.getElementById('search-results');
    searchResults.innerText = '';
    books?.forEach(book => {
        const cover_i = book.cover_i; 
        const div = document.createElement('div');
        div.classList.add('card');
        div.innerHTML = `
           <img src="https://covers.openlibrary.org/b/id/${cover_i}-M.jpg" class="card-img-top" width="200px"/>
           <h6 class="card-title">Book Name: ${book.title ? book.title : 'not available'} </h6>
           <h6 class="card-title">Author: ${book.author_name? book.author_name : 'not available'}</h6>
           <h6 class="card-title">First Publish: ${book.first_publish_year ? book.first_publish_year : 'not available'}</h6>
           <h6 class="card-title">Publisher: ${book.publisher ? book.publisher.slice(0,1) : 'not available'}</h6>
        `;
        searchResults.appendChild(div);
    })
} 