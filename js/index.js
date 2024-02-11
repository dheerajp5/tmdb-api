const apiKey = `16356dbe4a1f54135a1f22a226ddaf68`;   // get api key from https://api.themoviedb.org
let collection ='popular';
let page =1;
const urlPrefix = `https://api.themoviedb.org/3/movie/`;
const urlSuffix = `?api_key=${apiKey}&language=en-US&page=${page}`;




let tempUrl = `${urlPrefix}${collection}${urlSuffix}`
fetch(tempUrl,collection, 0, 11);

collection = `top_rated`;
tempUrl = `${urlPrefix}${collection}${urlSuffix}`
fetch(tempUrl, collection);

