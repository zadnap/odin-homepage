import './contactSection.scss';
import createPicture from './picture';
import createText from './text';

function createContactSection() {
  const contactSection = document.createElement('footer');

  contactSection.appendChild(createText());
  contactSection.appendChild(createPicture());

  return contactSection;
}

export default createContactSection;
