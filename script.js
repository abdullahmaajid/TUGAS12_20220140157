document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registrationForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Mencegah pengiriman form secara default
        kirimData(); // Memanggil fungsi kirimData ketika form dikirim
    });
});

function kirimData(){
    var nama = document.getElementById("nama").value;
    var nim = document.getElementById("nim").value;
    var peminatan = document.querySelector("input[name=peminatan]:checked").value;
    var alamat = document.getElementById("alamat").value;

    alert(
        "Nama Mahasiswa: " + nama + "\n" +
        "NIM: " + nim + "\n" +
        "Peminatan: " + peminatan + "\n" +
        "Alamat: " + alamat
    );
}