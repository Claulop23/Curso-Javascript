
const imageInput = document.getElementById('imageInput');
const topText = document.getElementById('topText');
const bottomText = document.getElementById('bottomText');
const generateButton = document.getElementById('generateButton');
const memeContainer = document.getElementById('memeContainer');
const memeImage = document.getElementById('memeImage');

// Event para generar el meme
generateButton.addEventListener('click', function () {
    // Crea una imagen 
    const img = new Image();
    img.src = URL.createObjectURL(imageInput.files[0]);
    img.onload = function () {
        // Espacio para texto en la imagen
        const canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0);

        // Agrega el texto superior
        const topTextValue = topText.value;
        const topTextX = canvas.width / 2;
        const topTextY = 50;
        ctx.fillText(topTextValue, topTextX, topTextY);
        ctx.strokeText(topTextValue, topTextX, topTextY);

        // Agrega el texto inferior
        const bottomTextValue = bottomText.value;
        const bottomTextX = canvas.width / 2;
        const bottomTextY = canvas.height - 20;
        ctx.fillText(bottomTextValue, bottomTextX, bottomTextY);
        ctx.strokeText(bottomTextValue, bottomTextX, bottomTextY);

       
    };
});
