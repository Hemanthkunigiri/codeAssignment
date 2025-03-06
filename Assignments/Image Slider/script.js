const images = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLat8bZvhXD3ChSXyzGsFVh6qgplm1KhYPKA&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzxPO_i9ncFyUUQiyX_E4-NlHfCPGASb-UpEqkIgZh4kSeBAgBQzyT3ZNmYhQihH9rPMI&usqp=CAU',
    'https://media.istockphoto.com/id/1403500817/photo/the-craggies-in-the-blue-ridge-mountains.jpg?s=612x612&w=0&k=20&c=N-pGA8OClRVDzRfj_9AqANnOaDS3devZWwrQNwZuDSk=',
    'https://media.istockphoto.com/id/1317323736/photo/a-view-up-into-the-trees-direction-sky.jpg?s=612x612&w=0&k=20&c=i4HYO7xhao7CkGy7Zc_8XSNX_iqG0vAwNsrH1ERmw2Q='

];

let currentIndex = 0;
const sliderImage = document.getElementById('slider-image');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

function updateImage() {
    sliderImage.src = images[currentIndex];
}

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
});

// Initialize with the first image
updateImage();
