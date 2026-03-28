let prefix = "";

if (window.location.pathname.includes("/yucky-things/")) {
  prefix = "../";
}

fetch(prefix + "library/navbar.html")
  .then(r => r.text())
  .then(data => {
    document.getElementById("navbar").innerHTML = data;
  });

fetch(prefix + "library/footer.html")
  .then(r => r.text())
  .then(data => {
    document.getElementById("footer").innerHTML = data;
  });
