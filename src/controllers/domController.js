import createWorkSection from '@/components/workSection/workSection';
import createContactSection from '@/components/contactSection/contactSection';

const domController = (function () {
  const app = document.querySelector('#app');

  function renderWorkSection() {
    app.appendChild(createWorkSection());
  }

  function renderContactSection() {
    app.appendChild(createContactSection());
  }

  return {
    renderWorkSection,
    renderContactSection,
  };
})();

export default domController;
