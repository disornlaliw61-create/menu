/* =========================================
   CLOCK
========================================= */

function updateClock() {

    const now = new Date();

    let hours = String(now.getHours()).padStart(2, "0");
    let minutes = String(now.getMinutes()).padStart(2, "0");
    let seconds = String(now.getSeconds()).padStart(2, "0");

    document.getElementById("time").textContent =
        `${hours}:${minutes}:${seconds}`;


    let day = String(now.getDate()).padStart(2, "0");
    let month = String(now.getMonth() + 1).padStart(2, "0");
    let year = now.getFullYear() + 543;

    document.getElementById("date").textContent =
        `${day}/${month}/${year}`;
}

setInterval(updateClock, 1000);

updateClock();



/* =========================================
   OPEN WEBSITE
========================================= */

function openApp(url) {

    window.open(
        url,
        "_blank"
    );
}



/* =========================================
   SEARCH
========================================= */

function searchWeb(event) {

    if (event.key === "Enter") {

        const text =
            document.getElementById("searchInput").value.trim();

        if (text === "") return;

        const url =
            "https://www.google.com/search?q=" +
            encodeURIComponent(text);

        window.open(
            url,
            "_blank"
        );
    }
}



/* =========================================
   SETTINGS
========================================= */

function openSettings() {

    document
        .getElementById("settingsModal")
        .classList.add("active");

    document
        .getElementById("startMenu")
        .classList.remove("active");
}


function closeSettings() {

    document
        .getElementById("settingsModal")
        .classList.remove("active");
}



/* =========================================
   CHANGE WALLPAPER
========================================= */

function changeWallpaper() {

    const url =
        document
        .getElementById("wallpaperURL")
        .value
        .trim();

    if (!url) {

        alert("กรุณาใส่ลิงก์รูปภาพ");

        return;
    }


    const desktop =
        document.getElementById("desktop");


    desktop.style.backgroundImage =
        `url("${url}")`;


    localStorage.setItem(
        "cyberWallpaper",
        url
    );


    alert("เปลี่ยนพื้นหลังเรียบร้อยแล้ว");

}



/* =========================================
   LOAD WALLPAPER
========================================= */

window.addEventListener(
    "DOMContentLoaded",
    function () {

        const savedWallpaper =
            localStorage.getItem(
                "cyberWallpaper"
            );

        if (savedWallpaper) {

            document
                .getElementById("desktop")
                .style.backgroundImage =
                `url("${savedWallpaper}")`;

            document
                .getElementById("wallpaperURL")
                .value =
                savedWallpaper;
        }

    }
);



/* =========================================
   START MENU
========================================= */

function openStart() {

    document
        .getElementById("startMenu")
        .classList.toggle("active");
}



/* =========================================
   ADD CUSTOM APP
========================================= */

function addApp() {

    const name =
        document
        .getElementById("appName")
        .value
        .trim();

    const url =
        document
        .getElementById("appURL")
        .value
        .trim();


    if (!name || !url) {

        alert(
            "กรุณากรอกชื่อและ URL ให้ครบ"
        );

        return;
    }


    const iconArea =
        document.getElementById(
            "desktopIcons"
        );


    const app =
        document.createElement("div");

    app.className =
        "desktop-icon";


    app.ondblclick =
        function () {

            openApp(url);

        };


    app.innerHTML = `

        <div class="icon-box settings">

            <i class="fa-solid fa-globe"></i>

        </div>

        <span>${name}</span>

    `;


    iconArea.appendChild(app);


    document
        .getElementById("appName")
        .value = "";

    document
        .getElementById("appURL")
        .value = "";


    alert(
        "เพิ่มไอคอนเรียบร้อยแล้ว"
    );
}



/* =========================================
   CLOSE MODAL WHEN CLICK OUTSIDE
========================================= */

document
    .getElementById("settingsModal")
    .addEventListener(
        "click",
        function (event) {

            if (
                event.target === this
            ) {

                closeSettings();

            }

        }
    );
