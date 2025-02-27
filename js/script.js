document.addEventListener("DOMContentLoaded", function () {
    let images = [
        "assets/img/japan1.jpg",
        "assets/img/japan2.jpg",
        "assets/img/japan3.jpg"
    ];

    let index = 0;
    let imgElement = document.getElementById("testimonial-slide");

    function changeImage() {
        index = (index + 1) % images.length; // Loop ke awal jika sudah di gambar terakhir
        imgElement.src = images[index];
    }

    setInterval(changeImage, 3000); // Ganti gambar setiap 3 detik

    document.getElementById("contactForm").addEventListener("submit", function (event) {
        event.preventDefault();

        let isValid = true;

        // Validasi Nama
        let name = document.getElementById("name").value.trim();
        let nameError = document.getElementById("nameError");
        if (name === "") {
            nameError.textContent = "Nama harus diisi!";
            isValid = false;
        } else {
            nameError.textContent = "";
        }

        // Validasi Email
        let email = document.getElementById("email").value.trim();
        let emailError = document.getElementById("emailError");
        let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email === "") {
            emailError.textContent = "Email harus diisi!";
            isValid = false;
        } else if (!emailPattern.test(email)) {
            emailError.textContent = "Format email tidak valid!";
            isValid = false;
        } else {
            emailError.textContent = "";
        }

        // Validasi Destinasi
        let destination = document.getElementById("travel_destination").value;
        let destinationError = document.getElementById("destinationError");
        if (destination === "") {
            destinationError.textContent = "Silakan pilih destinasi!";
            isValid = false;
        } else {
            destinationError.textContent = "";
        }

        if (isValid) {
            alert("Form berhasil dikirim!");
            document.getElementById("contactForm").reset(); // Reset form
        }
    });
});

