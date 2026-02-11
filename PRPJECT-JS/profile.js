async function profile() {

    let adres = 'http://46.100.94.88:3000/get/my-posts';
    let token = localStorage.getItem('token');
    let url = 'http://46.100.94.88:3000/';

    let result = await fetch(adres, {
        method: 'GET',
        headers: { 'Authorization': `Bearer ${token}` }
    });

    let r = "";

    if (result.status === 200) {
        let data = await result.json();
        data.my_posts.forEach(d => {
            r += `<div class="post_list"><div class="post_box"> <h3></h3> <div class="image_container"><img src="${url}${d.image}"/></div><p>${d.description}</p></div></div>`;
        });
    }
    else {
        alert("erorr");
    }

    document.getElementById('res').innerHTML = r;
}


       profile();

       // مدیریت منقضی شدن توکن بعد از ۵ دقیقه بی‌حرکتی
const inactivityTime = 150000; // ۵ دقیقه = ۳۰۰,۰۰۰ میلی‌ثانیه
let inactivityTimer;

function resetTimer() {
    clearTimeout(inactivityTimer);
    inactivityTimer = setTimeout(() => {
        alert("are you sleepy ? ");
        window.location.href = "login.html";
        localStorage.removeItem("token"); // پاک کردن توکن
    }, inactivityTime);
}

// رصد کردن فعالیت کاربر
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