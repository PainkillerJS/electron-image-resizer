const form = document.querySelector('#img-form');
const img = document.querySelector('#img');
const outputPath = document.querySelector('#output-path');
const filename = document.querySelector('#filename');
const heightInput = document.querySelector('#height');
const widthInput = document.querySelector('#width');

const checkImageType = (file) => {
  const acceptedImageTypes = ['image/gif', 'image/png', 'image/jpeg'];

  return file && acceptedImageTypes.includes(file['type']);
};

const loadImage = (event) => {
  const file = event.target.files[0];

  if (!checkImageType(file)) {
    return console.log('Выбери изображение');
  }

  

  form.style.display = 'block';
  filename.textContent = file.name;

  console.log('Топ');
};

img.addEventListener('change', loadImage);
