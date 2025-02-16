function createWorkItem({ name, desc, imageSrc, imageAlt, link, chapter }) {
  const workItem = document.createElement('figure');
  workItem.className = 'work-item';

  const picture = document.createElement('img');
  picture.src = imageSrc;
  picture.alt = imageAlt;
  workItem.appendChild(picture);

  const workInfo = document.createElement('figcaption');

  const heading = document.createElement('h2');
  heading.textContent = name;
  workInfo.appendChild(heading);

  const viewMore = document.createElement('a');
  viewMore.className = 'view-more';
  viewMore.target = '_blank';
  viewMore.href = link;
  viewMore.ariaLabel = `Read: Chapter ${chapter} of Attack On Titan on new tab`;
  viewMore.innerHTML =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>open-in-new</title><path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z" /></svg>';
  workInfo.appendChild(viewMore);

  const description = document.createElement('p');
  description.className = 'desc';
  description.textContent = desc;
  workInfo.appendChild(description);

  workItem.appendChild(workInfo);

  return workItem;
}

export default createWorkItem;
