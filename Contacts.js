document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(this);
    const name = formData.get("Name");
    const subject = formData.get("Subject");
    const message = formData.get("Message");

    const content = `Ім'я: ${name}\nТема: ${subject}\nПовідомлення:\n${message}\nДата: ${new Date().toLocaleString()}\n\n`;

    // Створення Blob (файлу) і посилання на нього
    const blob = new Blob([content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);

    // Створення тимчасового посилання для завантаження
    const a = document.createElement("a");
    a.href = url;
    a.download = "повідомлення.txt"; // Ім’я файлу
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    alert("Повідомлення збережено у файл!");
    this.reset();
});