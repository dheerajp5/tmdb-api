

function fetch(url, parentID= 'popular', start, end) {
    let response = axios.get(url);
    response.then(moviesData => {
        addDataToDOM(moviesData.data.results, parentID, start, end);
    })
}
