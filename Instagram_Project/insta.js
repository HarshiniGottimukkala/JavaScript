let url = "https://fakestoreapi.com/products";
let images = document.querySelector(".images");


let imageFetch = () => {
    return new Promise((resolve, reject) => {
        if (url) {
            resolve(fetch(url));
            return;
        }
        else {
            reject();
        }
    });
};

imageFetch()
    .then((response) => {
        return response.json();
    })
    .then((data) => {

        let imageUrls = data.map((pict) => pict.image);

        let loadMoreBtn = document.querySelector(".loadMoreBtn");
        let currentIndex = 0;

        let appendImages = () => {
            for (let i = 0; i < 3; i++) {
                if (currentIndex < imageUrls.length) {

                    let image = document.createElement("div");
                    image.classList.add("image");
                    images.appendChild(image);

                    var profile = document.createElement('div');
                    profile.classList.add('profile');

                    var profileImage = document.createElement("img");
                    profileImage.classList.add("profileImage");
                    profileImage.src = "dp.jpeg";
                    profileImage.setAttribute('data-url', "dp.jpeg");

                    var profileName = document.createElement("h5");
                    profileName.classList.add("profileName");
                    profileName.innerHTML = "Lorem Epsum";

                    var imageItem = document.createElement('div');
                    imageItem.classList.add('image-item');

                    var fig = document.createElement('div');
                    fig.classList.add('fig');

                    var heart = document.createElement('p');
                    heart.classList.add('heart');
                    heart.classList.add('bi');
                    heart.classList.add('bi-heart');

                    var comment = document.createElement('p');
                    comment.classList.add('comment');
                    comment.classList.add('bi');
                    comment.classList.add('bi-chat');

                    var send = document.createElement('p');
                    send.classList.add('send');
                    send.classList.add('bi');
                    send.classList.add('bi-send');

                    image.appendChild(profile);
                    profile.appendChild(profileImage);
                    profile.appendChild(profileName);


                    var imageElement = document.createElement('img');
                    imageElement.src = imageUrls[currentIndex];
                    imageItem.appendChild(imageElement);
                    image.appendChild(imageItem);

                    image.appendChild(fig);
                    fig.appendChild(heart);
                    fig.appendChild(comment);
                    fig.appendChild(send);
                    currentIndex++;
                }
            }
        }
        appendImages(3);
        loadMoreBtn.addEventListener('click', () => {
            appendImages();
        });



    })
    .catch(() => {
        console.log("Error");
    })