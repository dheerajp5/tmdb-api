

function onInput(e) {
 let key = e.value;
 const s= `https://api.themoviedb.org/3/search/movie?`
 const p =`query=${key}&api_key=${apiKey}&include_adult=false&language=en-US&page=1`
 const u = `${s}${p}`
 fetch(u, 'search',0, 4);
}