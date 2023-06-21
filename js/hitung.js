function hitungFehrentheit() {  //ini adalah fungsi dengan nama hitungKonversi
    var Celcius = document.getElementById("Celcius").value; //ini variabel Ferentheit
    var konversi = (1.8 * Celcius) + 32;  //ini variabel konversi untuk menentukan rumus perhitungan
    document.getElementById("Fehrentheit").innerHTML = konversi;
    document.getElementById("kalkulasi").innerHTML = Celcius + ("&#176 * (9/5) + 32 = ") + konversi + ("&#176F");
   
  }
  function resetFields() { //fungsi untuk reset form
    document.getElementById("Celcius").value = "";
    document.getElementById("Fehrentheit").value = "";
    document.getElementById("kalkulasi").value = "";
  }
  function hitungCelcius(){
    var Fehrentheit = document.getElementById("Fehrentheit").value;
    var konversi2 = (5/9) * (Fehrentheit - 32);
    document.getElementById("Celcius").innerHTML = konversi2;
    document.getElementById("kalkulasi").innerHTML = ("5/9 * ") + (Fehrentheit + "&#176 - 32 = " + konversi2);
  }