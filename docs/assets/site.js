'use strict';

// All learning content and links also work without JavaScript.
const printButtons = document.querySelectorAll('[data-print]');
printButtons.forEach(button => {
  button.hidden = false;
  button.addEventListener('click', () => window.print());
});

const search = document.querySelector('[data-search]');
const readyOnly = document.querySelector('[data-ready-only]');
if (search && readyOnly) {
  const rows = [...document.querySelectorAll('[data-lesson]')];
  const sections = [...document.querySelectorAll('[data-topic]')];
  const status = document.querySelector('[data-filter-status]');
  const empty = document.querySelector('[data-empty]');
  const normalize = value => value.toLocaleLowerCase('de').normalize('NFD').replace(/[\u0300-\u036f]/g, '').trim();
  const update = () => {
    const query = normalize(search.value);
    let visible = 0;
    rows.forEach(row => {
      const matches = normalize(row.textContent).includes(query);
      row.hidden = !(matches && (!readyOnly.checked || row.dataset.ready === 'true'));
      if (!row.hidden) visible++;
    });
    sections.forEach(section => { section.hidden = ![...section.querySelectorAll('[data-lesson]')].some(row => !row.hidden); });
    empty.hidden = visible > 0;
    status.textContent = `${visible} von ${rows.length} Checklistenpunkten angezeigt`;
  };
  document.querySelector('[data-toolbar]').hidden = false;
  search.addEventListener('input', update);
  readyOnly.addEventListener('change', update);
  // Topic navigation resets filters so anchor destinations remain visible.
  document.querySelectorAll('[data-topic-link]').forEach(link => link.addEventListener('click', () => {
    search.value = ''; readyOnly.checked = false; update();
  }));
  update();
}

let openBeforePrint = [];
window.addEventListener('beforeprint', () => {
  openBeforePrint = [...document.querySelectorAll('details')].map(el => [el, el.open]);
  openBeforePrint.forEach(([el]) => { el.open = true; });
});
window.addEventListener('afterprint', () => {
  openBeforePrint.forEach(([el, state]) => { el.open = state; });
});
