export function showModal(title, contentHTML) {
    let dlg = document.createElement('dialog');
    dlg.innerHTML = `
      <button class="close" aria-label="Close">&times;</button>
      <h2 style="padding:1rem">${title}</h2>
      <div style="padding:1rem">${contentHTML}</div>`;
    document.body.appendChild(dlg);
    dlg.showModal();
    dlg.querySelector('.close').onclick = () => dlg.close();
    dlg.addEventListener('close', () => dlg.remove());
  }
  