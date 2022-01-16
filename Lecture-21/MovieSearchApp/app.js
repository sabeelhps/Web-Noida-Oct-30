const form = document.querySelector('#form');
const result = document.getElementById('result');


function removeSearchResult() {
    while (result.firstChild) {
        result.firstChild.remove();
    }
}




async function getTvShows(searchText) {
    const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchText}`);
    
    for (const item of res.data) {
        if (item.show.image) {
            const imgUrl = item.show.image.medium;
            const image = document.createElement('img');
            image.style.margin = '10px';
            image.src = imgUrl;
            result.append(image);
        }
    }
}




form.addEventListener('submit', (e) => {
    e.preventDefault();
    const searchText = form.elements[0].value;
    removeSearchResult();
    getTvShows(searchText);
    form.elements[0].value = "";
});

