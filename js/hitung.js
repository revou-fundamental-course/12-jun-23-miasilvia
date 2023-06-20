function hitungKonversi() {
    var Fehrentheit = document.getElementById("Fehrentheit").value;
    var konversi = (1.8 * Fehrentheit) + 32;
    document.getElementById("konversi").innerHTML = konversi;
    document.getElementById("Fehrentheit2").innerHTML = Fehrentheit + ("&#176 * (9/5) + 32 = ") + konversi + ("&#176F");
  }