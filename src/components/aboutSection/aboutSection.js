import './aboutSection.scss';
import createPicture from './picture';
import createText from './text';

function createAboutSection() {
  const aboutSection = document.createElement('section');
  aboutSection.className = 'about-me';

  const backgroundShape = document.createElement('div');
  backgroundShape.className = 'background-shape';
  aboutSection.appendChild(backgroundShape);

  aboutSection.appendChild(createPicture());
  aboutSection.appendChild(createText());

  return aboutSection;
}

export default createAboutSection;
