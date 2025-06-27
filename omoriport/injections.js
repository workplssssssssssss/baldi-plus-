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

const originalFetch = window.fetch;

window.fetch = async function(...args) {
    let [url, options] = args;

    if (typeof url === "string" && url.endsWith("loading.png")) {
        url = url.replace("loading.png", "Loading.png");
        return originalFetch.call(this, url, options);
    }

    return originalFetch.apply(this, args);
};

const originalOpen = XMLHttpRequest.prototype.open;

XMLHttpRequest.prototype.open = function(method, url, ...rest) {
    if (typeof url === "string" && url.endsWith("loading.png")) {
        url = url.replace("loading.png", "Loading.png");
    }
    return originalOpen.call(this, method, url, ...rest);
};

const originalImage = window.Image;

window.Image = function(...args) {
    const img = new originalImage(...args);

    Object.defineProperty(img, "src", {
        set(url) {
            if (typeof url === "string" && url.endsWith("loading.png")) {
                url = url.replace("loading.png", "Loading.png");
            }
            img.setAttribute("src", url);
        },
        get() {
            return img.getAttribute("src");
        },
        configurable: true
    });

    return img;
};

