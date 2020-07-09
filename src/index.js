import AppButton from './components/app-button/appButton';
import Heading from './components/heading/heading';
// import addImage from './addImage';

const heading = new Heading();
heading.render();
const appButton = new AppButton();
appButton.render();
// addImage();

if (process.env.NODE_ENV === 'development') {
    console.log('Development build');
} else if (process.env.NODE_ENV === 'production') {
    console.log('Production build');
}