document.getElementById('gen-qr').onclick = () => {
  const link = document.getElementById('figma-link').value.trim();
  if (!link) return alert('Wklej link do Figma!');
  const url = `${location.origin}/${location.pathname.split('/')[1]}/?proto=${encodeURIComponent(link)}`;
  QRCode.toCanvas(document.getElementById('qr'), url);
};
