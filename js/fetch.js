

function fetch(url, parentID= 'popular', start, end) {
    if(!url || url === '') return;
    let response = axios.get(url);
    response.then(moviesData => {
        addDataToDOM(moviesData.data.results, parentID, start, end);
    })
}
