import './AppButton.scss';

class AppButton {
    buttonCssClass = 'app-button';
    
    render() {
        const button = document.createElement('button');
        button.innerHTML = 'Press me';
        const body = document.querySelector('body');
        button.onclick = function () {
            const p = document.createElement('p');
            p.innerHTML = 'Learning Webpack 4';
            p.classList.add('app-text');
            body.appendChild(p);
        };
        button.classList.add(this.buttonCssClass);
        body.appendChild(button);
    }
}

export default AppButton;