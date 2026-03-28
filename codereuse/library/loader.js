fetch("library/navbar.html")
  .then(r => r.text())
  .then(data => {
    document.getElementById("navbar").innerHTML = data;
  });

fetch("library/footer.html")
  .then(r => r.text())
  .then(data => {
    document.getElementById("footer").innerHTML = data;
  });
