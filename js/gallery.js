document.addEventListener('DOMContentLoaded', () => {
    // Selecting DOM elements
    const featuredImage = document.querySelector('#gallery figure img'); // The large featured image element
    const thumbnails = document.querySelectorAll('#thumbnails img'); // Array of thumbnail image elements
    const figcaption = document.querySelector('#gallery figure figcaption'); // Caption element for the featured image

    // Image data (full-size and thumbnail pairs with titles)
    const images = [
        { full: 'images/flowers-pink-large.jpg', thumb: 'images/flowers-pink-small.jpg', title: 'Pink Flowers: Blossoming in Summer Radiance' },
        { full: 'images/flowers-purple-large.jpg', thumb: 'images/flowers-purple-small.jpg', title: 'Purple Flowers: A Splendid Display in Sunlight' },
        { full: 'images/flowers-red-large.jpg', thumb: 'images/flowers-red-small.jpg', title: 'Red Flowers: Glowing with Summer Warmth' },
        { full: 'images/flowers-white-large.jpg', thumb: 'images/flowers-white-small.jpg', title: 'White Flowers: Serene Beauty Under the Summer Sky' },
        { full: 'images/flowers-yellow-large.jpg', thumb: 'images/flowers-yellow-small.jpg', title: 'Yellow Flowers: Basking in Summers Golden Glow' }
    ];

    // Initial setup: set first image as active
    let currentImage = 0; // Index of the currently displayed image
    setFeaturedImage(currentImage); // Display the initial featured image

    // Adding click event listeners to each thumbnail
    thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener('click', () => {
            currentImage = index; // Update current image index
            setFeaturedImage(currentImage); // Display the clicked thumbnail as the featured image
            updateThumbnailClasses(currentImage); // Update classes to show active thumbnail
        });
    });

    // Function to set the featured image and its caption
    function setFeaturedImage(index) {
        const image = images[index]; // Get image data by index
        featuredImage.src = image.full; // Set the source of the large image
        figcaption.textContent = image.title; // Set the caption text
    }

    // Function to update classes for thumbnails to show active/inactive states
    function updateThumbnailClasses(currentIndex) {
        thumbnails.forEach((thumb, index) => {
            if (index === currentIndex) {
                thumb.classList.add('active'); // Highlight the clicked thumbnail
                thumb.classList.remove('inactive');
            } else {
                thumb.classList.remove('active'); // Remove highlight from other thumbnails
                thumb.classList.add('inactive');
            }
        });
    }

    // Initialize the thumbnails: set all to inactive except the first one
    thumbnails.forEach((thumb, index) => {
        if (index !== 0) {
            thumb.classList.add('inactive'); // Initially set all thumbnails to inactive
        }
    });
});
