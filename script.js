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

const createTypeContainer = (index) => {
    const typeDiv = document.createElement('div');
    typeDiv.style.backgroundColor = colors[index].secondary;
    return typeDiv;
}
const createIconAndTextContainer = () => {
    const typeImgAndTextDiv = document.createElement('div')
    return typeImgAndTextDiv;

}
const createImageTag = (type) => {
    const typeImg = document.createElement('img');
    typeImg.setAttribute('src', type.icon);
    return typeImg

}
const createTextTag = (type, index) => {

    const typetext = document.createElement('p');
    typetext.style.color = colors[index].primary;
    typetext.innerText = type.category;
    return typetext
}

const createScoreText = (type) => {
    const typeScore = document.createElement('span')
    typeScore.innerHTML = `<span>${type.score}</span> / 100`;
    return typeScore
}

fetch('data.json').then(response => {
    response.json().then(types => {
        types.map((type, index) => {
            const scoreTypeContainer = createTypeContainer(index);
            const iconAndTextContainer = createIconAndTextContainer();
            const icon = createImageTag(type);
            const typeText = createTextTag(type, index);
            const scoreText = createScoreText(type);
            iconAndTextContainer.appendChild(icon);
            iconAndTextContainer.appendChild(typeText);
            scoreTypeContainer.appendChild(iconAndTextContainer);
            scoreTypeContainer.appendChild(scoreText);
            typesScoreDiv.appendChild(scoreTypeContainer);

        })
    })
})