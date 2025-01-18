// Array of 15 different image URLs (replace with actual image paths or URLs)
const images = [
    "https://img.freepik.com/free-vector/colorful-gradient-collection_91008-267.jpg",
    "https://t3.ftcdn.net/jpg/08/29/48/64/360_F_829486492_TSS0KYI4p51ehlhhPiXztiY1R7IOfRzM.jpg",
    "https://t3.ftcdn.net/jpg/03/22/30/46/360_F_322304683_7ysRarFkmy2osfPKTOYQv7qTPofKelfb.jpg",
    "https://img.freepik.com/free-vector/modern-abstract-minimal-poster-gradient-template-multicolored-light-gradation-background-vector_90220-942.jpg?semt=ais_hybrid",
    "https://img.freepik.com/free-vector/dark-gradient-background-with-copy-space_53876-99548.jpg",
    "https://t4.ftcdn.net/jpg/02/67/40/21/360_F_267402109_jZvsqRQUvSxohAOmcUt549jlapqoRHM0.jpg",
    "https://img.freepik.com/premium-photo/black-dark-blue-gradient-background-abstract-gradient-blue-black-soft-multicolored-backgr_694006-4046.jpg",
    "https://images.unsplash.com/photo-1557682260-96773eb01377?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Z3JhZGllbnQlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww",
    "https://img.freepik.com/free-photo/background-gradient-lights_23-2149304985.jpg?semt=ais_hybrid",
    "https://static.vecteezy.com/system/resources/thumbnails/002/539/942/small/dark-purple-smart-blurred-pattern-abstract-illustration-with-gradient-blur-design-new-design-for-applications-vector.jpg",
    "https://image.shutterstock.com/image-vector/white-blue-gradient-clear-sky-260nw-2484094343.jpg",
    "https://i0.wp.com/css-tricks.com/wp-content/uploads/2020/11/css-gradient.png?fit=1200%2C600&ssl=1",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdpxYicfMSPBj9IpfLFzsLVD8IpFxP7mekOA&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfL86SyIhQu8B3ckUIIITScJFqT-8_QRZdL3-osgwzyCYQfNWpCgXBNCk8_FRBOGIpjDU&usqp=CAU"
];

// Track the current index of the image
let currentIndex = 0;

// Get the button element
const changeImageBtn = document.getElementById("changeImageBtn");

// Add click event to the button
changeImageBtn.onclick = function() {
    // Change the background image to the next image in the array
    document.body.style.backgroundImage = `url('${images[currentIndex]}')`;
    
    // Update the index, and reset if it goes beyond 14 (15 images)
    currentIndex = (currentIndex + 1) % images.length;
};
