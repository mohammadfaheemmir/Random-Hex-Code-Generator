const getColor = () => {
    const randNum = Math.floor(Math.random() * 1677215);
    const randCode = "#" + randNum.toString(16);
    document.body.style.backgroundColor = randCode;
    document.getElementById('color-code').innerText = randCode;
}

document.getElementById('btn').addEventListener('click', getColor);

getColor();
