import Bed from '../img/3.jpg';

function addImage () {
    const img = document.createElement('img');
    img.all = 'Bed';
    img.width = 300;
    img.src = Bed;

    const body = document.querySelector('body');
    body.appendChild(img);
}

export default addImage;