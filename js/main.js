export function qs(sel, parent = document) { return parent.querySelector(sel); }
export function qsa(sel, parent = document) { return [...parent.querySelectorAll(sel)]; }
export function toggleMenu() {
  const menu = qs('#menu');
  menu.classList.toggle('open');
}
export function setYear() {
  qs('#year').textContent = new Date().getFullYear();
  qs('#lastModified').textContent = `Last modified: ${document.lastModified}`;
}

export function initTheme() {
  const saved = localStorage.getItem('theme') || 'light';
  document.documentElement.dataset.theme = saved;
  qs('#themeToggle').addEventListener('click', () => {
    const now = document.documentElement.dataset.theme === 'light' ? 'dark' : 'light';
    document.documentElement.dataset.theme = now;
    localStorage.setItem('theme', now);
  });
}
