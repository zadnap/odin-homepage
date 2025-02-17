function createText() {
  const text = document.createElement('div');
  text.className = 'text-container';

  const heading = document.createElement('h1');
  heading.textContent = 'About me';
  text.appendChild(heading);

  const description = document.createElement('p');
  description.ariaLabel = 'Description of me';
  description.className = 'desc';
  description.textContent =
    'I joins the military and enlists in the Survey Corps, hoping to fight Titans and reclaim humanity’s lost territory. However, I later discover that I possess the power to transform into a Titan himself, the Attack Titan, setting off a chain of events that unravel the true history of the world and the conflict between Eldians and Marleyans.';
  text.appendChild(description);

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
