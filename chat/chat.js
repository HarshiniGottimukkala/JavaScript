
// Fetch images from the given URL
var apiUrl = "https://fakestoreapi.com/products";

fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        // Extract image URLs from the data
        var imageUrls = data.map(product => product.image);

        // Display images on the web page
        var imageContainer = document.getElementById('imageContainer');

        imageUrls.forEach(url => {
            var imageItem = document.createElement('div');
            imageItem.className = 'image-item';

            var imageElement = document.createElement('img');
            imageElement.src = url;
            imageElement.alt = 'Product Image';
            imageElement.setAttribute('data-url', url); // Set data-url attribute with the image URL

            imageItem.appendChild(imageElement);
            imageContainer.appendChild(imageItem);
        });
    })
    .catch(error => console.error('Error fetching images:', error));
