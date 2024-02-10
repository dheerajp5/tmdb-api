function createDiv(className = null, id = null ) {
    const div = document.createElement("div");

    if(id) div.setAttribute("id", id);
    if(className) div.setAttribute("class", className);

    return div;
}

function createImg(src, className=null, alt = null) {
    const img = document.createElement('img');
    img.setAttribute('src', src);
    if(className) img.setAttribute('class', className);
    if(alt) img.setAttribute('alt', alt);

    return img;
}

function createH3(text, className=null) {
    const h3 = document.createElement('h3');
    h3.textContent = text;
    if(className) h3.setAttribute('class', className);

    return h3;
}

function createP(text, className=null) {
    const p = document.createElement('p');
    p.textContent = text.slice(0, 100)+" ...";
    if(className) p.setAttribute('class', className);

    return p;
}