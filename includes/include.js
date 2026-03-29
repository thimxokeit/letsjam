async function loadComponent(id, file) {
  const res = await fetch(file);
  const html = await res.text();
  document.getElementById(id).innerHTML = html;
}

loadComponent("header", "/letsjam/includes/header.html");
loadComponent("footer", "/letsjam/includes/footer.html");
