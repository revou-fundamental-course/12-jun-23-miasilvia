function hitungFehrentheit() {  //ini adalah fungsi dengan nama hitungKonversi
  var Celcius = document.getElementById("Celcius").value; //ini variabel Ferentheit
  var konversi = (1.8 * Celcius) + 32;  //ini variabel konversi untuk menentukan rumus perhitungan
  document.getElementById("Fehrentheit").innerHTML = konversi;
  document.getElementById("kalkulasi").innerHTML = Celcius + ("&#176 * (9/5) + 32 = ") + konversi + ("&#176F");
  document.getElementById("rumus").innerHTML = "Konversi Suhu dari Celcius (&#176C) ke Fahrenheit (F) <br> F = (9/5) C + 32 <br> F = suhu dalam skala Fahrenheit <br> C = suhu dalam skala Celcius"
}
function resetFields() { //fungsi untuk reset form
  document.getElementById("Celcius").value = "";
  document.getElementById("Fehrentheit").value = "";
  document.getElementById("kalkulasi").value = "";

}
function hitungCelcius() {
  var Fehrentheit = document.getElementById("Fehrentheit").value;
  var konversi2 = (5 / 9) * (Fehrentheit - 32);
  document.getElementById("Celcius").innerHTML = konversi2;
  document.getElementById("kalkulasi").innerHTML = ("5/9 * ") + (Fehrentheit + "&#176 - 32 = " + konversi2);
  document.getElementById("rumus").innerHTML = "Konversi Suhu dari Fahrenheit (F) ke Celcius (&#176C) <br> C = (5/9) *(F&#176 + 32) <br> F = suhu dalam skala Fahrenheit <br> C = suhu dalam skala Celcius"
}