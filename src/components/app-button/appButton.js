import './AppButton.css';

class AppButton {
    render() {
        const button = document.createElement('button');
        button.innerHTML = 'Press me';
        button.classList.add('app-button');
        const body = document.querySelector('body');
        button.onclick = function () {
            const p = document.createElement('p');
            p.innerHTML = 'Learning Webpack 4';
            p.classList.add('app-text');
            body.appendChild(p);
        };
        body.appendChild(button);
    }
}

export default AppButton;