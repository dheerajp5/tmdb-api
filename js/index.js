const apiKey = `Your API Key goes here`;   // get api key from https://api.themoviedb.org
let collection ='popular';
let page =1;
const urlPrefix = `https://api.themoviedb.org/3/movie/`;
const urlSuffix = `?api_key=${apiKey}&language=en-US&page=${page}`;




let tempUrl = `${urlPrefix}${collection}${urlSuffix}`
fetch(tempUrl,collection, 0, 11);

collection = `top_rated`;
tempUrl = `${urlPrefix}${collection}${urlSuffix}`
fetch(tempUrl, collection);

