async function addData(event) {
    event.preventDefault();

    let l = document.getElementById('body').value;
    let f = document.getElementById('image').files;

    let token = localStorage.getItem('token');

    let bb = new FormData();

    bb.append('img', f[0]);
    bb.append('description', l);

    let address = `http://46.100.94.88:3000/post`
    let res = await fetch(address, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${token}`

        },
        body: bb
    });

}

    addData();



const inactivityTime = 150000; 
let inactivityTimer;

function resetTimer() {
    clearTimeout(inactivityTimer);
    inactivityTimer = setTimeout(() => {
        alert("your token has been expired !");
        window.location.href = "login.html";
        localStorage.removeItem("token");
    }, inactivityTime);
}


window.onload = resetTimer;
document.onmousemove = resetTimer;
document.onkeypress = resetTimer;
document.onclick = resetTimer;


// مدیریت دارک مود
document.getElementById("theme-toggle").addEventListener("click", function (e) {
    e.preventDefault(); // جلوگیری از رفتار پیش‌فرض لینک
    document.body.classList.toggle("dark-mode");

    // تغییر متن و آیکون دکمه
    const themeToggle = document.getElementById("theme-toggle");
    if (document.body.classList.contains("dark-mode")) {
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>  light mod';
    } else {
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>  dark mod';
    }

    // ذخیره تم در localStorage
    localStorage.setItem("theme", document.body.classList.contains("dark-mode") ? "dark" : "light");
});

// بررسی تم ذخیره‌شده هنگام لود صفحه
document.addEventListener("DOMContentLoaded", function () {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
        document.getElementById("theme-toggle").innerHTML = '<i class="fas fa-sun"></i>  light mod';
    }
});