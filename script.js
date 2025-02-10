// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png
const container = document.querySelector('#container');
baseUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
const input = document.querySelector('input');
const btn = document.querySelector('button');

input.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        btn.click();
    }
})
btn.addEventListener('click', function (event) {
    event.preventDefault();
    const number = parseInt(input.value);
    container.innerHTML = '';
    if (parseInt(number) <= 0) {
        const disp = document.createElement('div');
        disp.classList.add("alert", "alert-danger", "d-flex", "justify-content-center");
        disp.innerText = 'Value must greater than 0';
        container.appendChild(disp);
    } else {
        document.querySelector('.alert').classList.add('d-none');
        for (let i = 1; i <= number; i++) {
            const pokemon = document.createElement('div');
            const label = document.createElement('span');
            label.innerText = `#${i}`;
            const newImg = document.createElement('img');
            newImg.src = `${baseUrl}${i}.png`;
            pokemon.appendChild(newImg);
            pokemon.appendChild(label);
            container.appendChild(pokemon);
        }
    }
})


