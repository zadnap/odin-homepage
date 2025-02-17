import createWorkSection from '@/components/workSection/workSection';
import createContactSection from '@/components/contactSection/contactSection';
import createAboutSection from '@/components/aboutSection/aboutSection';

const domController = (function () {
  const app = document.querySelector('#app');

  function renderAboutSection() {
    app.appendChild(createAboutSection());
  }

  function renderWorkSection() {
    app.appendChild(createWorkSection());
  }

  function renderContactSection() {
    app.appendChild(createContactSection());
  }

  return {
    renderAboutSection,
    renderWorkSection,
    renderContactSection,
  };
})();

export default domController;
