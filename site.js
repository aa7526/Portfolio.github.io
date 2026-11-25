const filters = document.querySelector('#filters');
const cards = [...document.querySelectorAll('[data-kind]')];
const buttons = [...filters.querySelectorAll('button')];

function showProjects(kind) {
  cards.forEach(card => { card.hidden = kind !== 'All' && card.dataset.kind !== kind; });
  buttons.forEach(button => { button.setAttribute('aria-pressed', String(button.dataset.filter === kind)); });
}

buttons.forEach(button => button.addEventListener('click', () => showProjects(button.dataset.filter)));
window.addEventListener('hashchange', () => {
  const target = document.getElementById(location.hash.slice(1));
  if (target?.hidden) {
    showProjects('All');
    target.scrollIntoView();
  }
});
filters.hidden = false;
