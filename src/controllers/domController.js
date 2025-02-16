import createWorkSection from '@/components/workSection/workSection';

const domController = (function () {
  const app = document.querySelector('#app');

  function renderWorkSection() {
    app.appendChild(createWorkSection());
  }

  return {
    renderWorkSection,
  };
})();

export default domController;
