const colors = [
    {
        'primary': '#FF5555',
        'secondary': 'rgb(255,244,244)'
    },
    {
        'primary': '#FFB21E',
        'secondary': 'rgb(255,250,242)'
    },
    {
        'primary': '#00BB8F',
        'secondary': 'rgb(240,251,247)'
    },
    {
        'primary': '#1125D6',
        'secondary': 'rgb(240,242,252)'
    }
]




const typesScoreDiv = document.querySelector('.type-score-div');




fetch('data.json').then(response => {
    response.json().then(types => {
        types.map((type, index) => {
            const typeDiv = document.createElement('div');
            typeDiv.style.backgroundColor = colors[index].secondary
            const typeImgAndTextDiv = document.createElement('div')
            const typeImg = document.createElement('img');
            typeImg.setAttribute('src', type.icon);
            const typetext = document.createElement('p');
            typetext.style.color = colors[index].primary;

            typetext.innerText = type.category;
            const typeScore = document.createElement('span')
            typeScore.innerHTML = `<span>${type.score}</span> / 100`;
            typeImgAndTextDiv.appendChild(typeImg);
            typeImgAndTextDiv.appendChild(typetext);
            typeDiv.appendChild(typeImgAndTextDiv);
            typeDiv.appendChild(typeScore);
            typesScoreDiv.appendChild(typeDiv);

        })
    })
})