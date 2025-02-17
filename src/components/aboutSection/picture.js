import erenAvatar from '@/assets/images/eren-avatar.jpg';

function createPicture() {
  const pictureContainer = document.createElement('div');
  pictureContainer.className = 'picture-container';

  const picture = document.createElement('img');
  picture.src = erenAvatar;
  picture.alt = '';
  pictureContainer.appendChild(picture);

  const label = document.createElement('p');
  label.className = 'picture-label';
  label.textContent = 'Eren Yeager';
  pictureContainer.appendChild(label);

  return pictureContainer;
}

export default createPicture;
