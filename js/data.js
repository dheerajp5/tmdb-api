const cardDivStyle = 'w-[255px] border-slate-700 hover:border px-2 py-6 bg-slate-900/50 hover:bg-slate-900/20 rounded-xl hover:shadow-xl transition duration-150 ease-in hover:ease-out'
const cardImgStyle = 'w-[170px] hover:scale-105 mx-auto transition duration-200 ease-in hover:ease-out'
const cardTitleStyle = 'mt-2 text-lg font-bold'
const cardBodyStyle = 'mt-3 text-md font-medium text-neutral-400 ';

const imgBaseUrl = 'http://image.tmdb.org/t/p/';
const imgSize = 'w185';
const imageFullUrl = `${imgBaseUrl}${imgSize}/`


function addDataToDOM(data, parentID , start = 0, end = null) {
    const parent = document.getElementById(parentID);
    console.log(data[0]);
    for (let i = 0; i < (!end?data.length:end); i++) {

        const src = `${imageFullUrl}${data[i].poster_path}`;

        const cardDiv = createDiv(cardDivStyle)
        const cardBody = createDiv(cardBodyStyle);

        let cardImg = createImg(src, cardImgStyle)
        cardTitle = createH3(data[i].title, cardTitleStyle)
        cardText = createP(data[i].overview);

        cardBody.append(cardText);
        cardDiv.appendChild(cardImg);
        cardDiv.appendChild(cardTitle);
        cardDiv.appendChild(cardBody);
        parent.appendChild(cardDiv);
    }
}