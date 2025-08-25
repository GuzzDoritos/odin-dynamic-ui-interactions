const CAROUSEL_CLASSNAME = "carousel";

class ImageCarousel {
    constructor(imageElsArr) {
        this.arraySize = imageElsArr.length;
        this.imageIndex = 0;
    };

    next() {
        if (this.imageIndex === this.arraySize - 1) {
            this.imageIndex = 0;
        } else {
            this.imageIndex++;
        };
    };

    previous() {
        if (this.imageIndex === 0) {
            this.imageIndex = this.arraySize - 1;
        } else {
            this.imageIndex--;
        };
    };
};

function initCarousels() {
    const carousels = [];

    if (document) {
        const carouselDivs = document.querySelectorAll(`.${CAROUSEL_CLASSNAME}`);
        if (carouselDivs) {
            carouselDivs.forEach(div => {
                if (div.querySelector("img")) {
                    const images = [];
                    div.querySelectorAll("img").forEach(img => images.push(img));
                    carousels.push(new ImageCarousel(images));
                };
            });
        };
    }
};