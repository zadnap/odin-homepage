import erenFreedom from '@/assets/images/eren-freedom.jpg';
import erenFreedomCropped from '@/assets/images/eren-freedom-cropped.jpg';

function createPicture() {
  const picture = document.createElement('picture');

  const bigPictureSource = document.createElement('source');
  bigPictureSource.type = 'image/jpeg';
  bigPictureSource.media = '(min-width: 1024px)';
  bigPictureSource.srcset = erenFreedom;
  picture.appendChild(bigPictureSource);

  const smallPicture = document.createElement('img');
  smallPicture.src = erenFreedomCropped;
  smallPicture.alt = '';
  picture.appendChild(smallPicture);

  return picture;
}

export default createPicture;
