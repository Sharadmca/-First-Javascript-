
const images = [
    {
        src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1000",
        thumb: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=200",
        caption: "Beautiful Nature"
    },
    {
        src: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=1000",
        thumb: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=200",
        caption: "Mountain and Lake"
    },
    {
        src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1000",
        thumb: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=200",
        caption: "Scenic Landscape"
    },
    {
        src: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=1000",
        thumb: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=200",
        caption: "Sunrise View"
    }
];

const mainImage = document.getElementById("main-image");
const caption = document.getElementById("image-caption");
const thumbnailContainer =
    document.getElementById("thumbnail-container");
const prevButton = document.getElementById("prev-btn");
const nextButton = document.getElementById("next-btn");
const imageCounter = document.getElementById("image-counter");

let currentIndex = 0;

// Display the selected image
function showImage(index) {
    currentIndex = index;

    const image = images[currentIndex];

    mainImage.src = image.src;
    mainImage.alt = image.caption;
    caption.textContent = image.caption;

    imageCounter.textContent =
        `${currentIndex + 1} / ${images.length}`;

    // Highlight the selected thumbnail
    const thumbnails =
        thumbnailContainer.querySelectorAll(".thumbnail");

    thumbnails.forEach((thumbnail, i) => {
        thumbnail.classList.toggle(
            "selected",
            i === currentIndex
        );

        thumbnail.setAttribute(
            "aria-pressed",
            String(i === currentIndex)
        );
    });

    // Disable buttons at the ends
    prevButton.disabled = currentIndex === 0;
    nextButton.disabled = currentIndex === images.length - 1;
}

// Create thumbnails
function createThumbnails() {
    images.forEach((image, index) => {
        const button = document.createElement("button");
        button.className = "thumbnail";
        button.type = "button";
        button.setAttribute(
            "aria-label",
            `Show image ${index + 1}: ${image.caption}`
        );

        const img = document.createElement("img");
        img.src = image.thumb;
        img.alt = "";

        button.appendChild(img);

        button.addEventListener("click", () => {
            showImage(index);
        });

        thumbnailContainer.appendChild(button);
    });
}

// Show the previous image
function showPrevious() {
    if (currentIndex > 0) {
        showImage(currentIndex - 1);
    }
}

// Show the next image
function showNext() {
    if (currentIndex < images.length - 1) {
        showImage(currentIndex + 1);
    }
}

// Button click events
prevButton.addEventListener("click", showPrevious);
nextButton.addEventListener("click", showNext);

// Start the gallery
createThumbnails();
showImage(0);
