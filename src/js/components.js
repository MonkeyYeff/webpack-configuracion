import '../css/components.css';
import imgWebpack from '../assets/índice.png';

export const crearTitulo = () => {
	const newDiv = document.createElement('div');
	document.body.appendChild(newDiv);
	newDiv.classList.add('container');

	const h1 = document.createElement('h1');
	h1.innerHTML = 'Hola mundo desde Webpack!!';
	h1.classList.add('title');

	newDiv.appendChild(h1);
	const img = document.createElement('img');
	img.src = `${imgWebpack}`;
	img.classList.add('logo');

	newDiv.appendChild(img);
};
