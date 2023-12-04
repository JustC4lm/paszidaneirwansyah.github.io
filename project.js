
let konfirmasi = confirm("Mau main?");
let sifat = ["marah", "senang"];
let sifatAcak = sifat[Math.floor(Math.random() * sifat.length)];

while (konfirmasi) {
    console.log(sifatAcak);

    let usermasukan = prompt("Tebak sifat saya!");
    
    if (sifatAcak === usermasukan) {
        alert("Benar");
    } else if (usermasukan < sifatAcak) {
        alert("Tebakan Anda salah, dia lagi jarang terlihat seperti coca cola yang di kocok");
    } else if (usermasukan > sifatAcak) {
        alert("Tebakan Anda salah, dia lagi jarang sedih");
    }

    konfirmasi = confirm("Mau lanjut tebak?");
}

