document.addEventListener("DOMContentLoaded", function () {
    const toggleButtons = document.querySelectorAll(".toggle-btn");

    toggleButtons.forEach(button => {
        button.addEventListener("click", function () {
            const section = this.closest(".toggle_section");
            section.classList.toggle("active");

            // Đổi dấu "+" thành "-" khi mở, ngược lại khi đóng
            this.textContent = section.classList.contains("active") ? "-" : "+";
        });
    });
});
