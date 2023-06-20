function hitungKonversi() {  //ini adalah fungsi dengan nama hitungKonversi
    var Fehrentheit = document.getElementById("Fehrentheit").value; //ini variabel Ferentheit
    var konversi = (1.8 * Fehrentheit) + 32;  //ini variabel konversi untuk menentukan rumus perhitungan
    document.getElementById("konversi").innerHTML = konversi;
    document.getElementById("Fehrentheit2").innerHTML = Fehrentheit + ("&#176 * (9/5) + 32 = ") + konversi + ("&#176F");
    
  }
  function resetFields() { //fungsi untuk reset form
    document.getElementById("Fehrentheit").value = "";
    document.getElementById("konversi").value = "";
    document.getElementById("Fehrentheit2").value = "";
  }