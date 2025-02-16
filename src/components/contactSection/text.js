function createText() {
  const text = document.createElement('section');
  text.className = 'contact-text';

  const heading = document.createElement('h1');
  heading.textContent = 'Contact me';
  text.appendChild(heading);

  const description = document.createElement('p');
  description.className = 'desc';
  description.textContent =
    'Please get in touch if you think our work could be mutually beneficial';
  text.appendChild(description);

  const address = document.createElement('p');
  address.className = 'address';
  address.textContent = '140, Shiganshina District, south side of Wall Maria';
  text.appendChild(address);

  const phoneNumber = document.createElement('span');
  phoneNumber.ariaLabel = 'Phone number';
  phoneNumber.className = 'phone-number';
  phoneNumber.innerHTML =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>phone</title><path d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z" /></svg> 555-555-5555';
  text.appendChild(phoneNumber);

  const email = document.createElement('span');
  email.ariaLabel = 'Email';
  email.className = 'email';
  email.innerHTML =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>email-outline</title><path d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6M20 6L12 11L4 6H20M20 18H4V8L12 13L20 8V18Z" /></svg> erenyeagerisademon@gmail.com';
  text.appendChild(email);

  const linksToSocial = document.createElement('div');
  linksToSocial.className = 'links-to-social';

  const githubLink = document.createElement('a');
  githubLink.href = '';
  githubLink.innerHTML =
    '<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" />';
  githubLink.target = '_blank';
  githubLink.ariaLabel = 'Open Github on new tab';
  linksToSocial.appendChild(githubLink);

  const linkedInLink = document.createElement('a');
  linkedInLink.href = '';
  linkedInLink.innerHTML =
    '<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-plain.svg" />';
  linkedInLink.target = '_blank';
  linkedInLink.ariaLabel = 'Open Linkedin on new tab';
  linksToSocial.appendChild(linkedInLink);

  const xLink = document.createElement('a');
  xLink.href = '';
  xLink.innerHTML =
    '<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/twitter/twitter-original.svg" />';
  xLink.target = '_blank';
  xLink.ariaLabel = 'Open X on new tab';
  linksToSocial.appendChild(xLink);

  text.appendChild(linksToSocial);

  return text;
}

export default createText;
