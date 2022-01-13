function EventHandler() {
    let zxBody = document.getElementById("zx_body");
    let zxBackground = document.querySelector(".zx-dynamic-background");
    let scrollTimeout = null;

    return {
        onLoadHandler: (event) => {

        }, 
        onScrollHandler: (event) => {
            // if (zxBackground && zxBody) {
            //     const offsetTop = (zxBody.getBoundingClientRect().top * 0.2).toFixed(0);
            //     zxBackground.style.backgroundPosition = "0px " + offsetTop + "px";
            // }
        }
    }
}

const eventHandler = EventHandler();

window.addEventListener('load', eventHandler.onLoadHandler);
document.body.addEventListener('scroll', eventHandler.onScrollHandler)