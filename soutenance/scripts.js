
//- Page title
const pageName = window.location.pathname.split("/").pop(-1).replace(".html", "");
document.title = pageName + " - " + document.title;

//- Fill empty a links with text
const el_a = document.querySelectorAll("a");
if (el_a) {
    el_a.forEach((a_link) => {
        if (!a_link.innerText.length > 0) {
            a_link.innerText = a_link.getAttribute("href");
        }
    })
}

//- Videos setup
const el_videos = document.querySelectorAll("video");
if (el_videos) {
    el_videos.forEach((vid) => {
        vid.autoplay = true,
        vid.muted = true;
        vid.loop = true;
    })
}