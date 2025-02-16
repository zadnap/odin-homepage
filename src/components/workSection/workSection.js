import './workSection.scss';
import workList from './workList';
import createWorkItem from './workItem';

function createWorkSection() {
  const workSection = document.createElement('sections');
  workSection.className = 'works';

  const heading = document.createElement('h1');
  heading.textContent = 'My work';
  workSection.appendChild(heading);

  const list = document.createElement('div');
  list.className = 'work-list';
  workList.map((workInfo) => {
    const workItem = createWorkItem(workInfo);
    list.appendChild(workItem);
  });
  workSection.appendChild(list);

  return workSection;
}

export default createWorkSection;
