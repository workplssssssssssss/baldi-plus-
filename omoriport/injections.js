function applycanvasmode() {
    let maxW = window.innerWidth;
    let maxH = window.innerHeight;
    if ((maxW * 0.75) > maxH) {
        h = maxH;
        w = Math.floor((maxH / 3) * 4);
    } else {
        w = maxW;
        h = Math.floor((maxW / 4) * 3);
    }
    document.querySelector("#GameCanvas").style.width = w + "px";
    document.querySelector("#GameCanvas").style.height = h + "px";
    document.querySelector("#GameVideo").style.width = w + "px";
    document.querySelector("#GameVideo").style.height = h + "px";
    document.querySelector("#UpperCanvas").style.width = w + "px";
    document.querySelector("#UpperCanvas").style.height = h + "px";
}
setInterval(applycanvasmode, 100);