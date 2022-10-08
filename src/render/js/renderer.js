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

const alertError = (message) => {
  toastify.toast({
    text: message,
    duration: 5000,
    close: false,
    style: {
      backgroundColor: 'red',
      color: 'white',
      textAlign: 'center',
    },
  });
};

const alertSuccess = (message) => {
  toastify.toast({
    text: message,
    duration: 5000,
    close: false,
    style: {
      backgroundColor: 'green',
      color: 'white',
      textAlign: 'center',
    },
  });
};

const sendImage = (event) => {
  event.preventDefault();

  const width = widthInput.value;
  const height = heightInput.value;

  if (!img.files[0]) {
    return alertError('Загрузи изображение');
  }

  if (!(width && height)) {
    return alertError('Заполни ширину и высоту');
  }
};

const loadImage = (event) => {
  const file = event.target.files[0];

  if (!checkImageType(file)) {
    return alertError('Выбери изображение');
  }

  const image = new Image();
  image.src = URL.createObjectURL(file);
  image.onload = function () {
    widthInput.value = this.width;
    heightInput.value = this.height;
  };

  form.style.display = 'block';
  filename.textContent = file.name;
  outputPath.textContent = path.join(os.homeDir(), 'imageresize');

  console.log('Топ');
};

img.addEventListener('change', loadImage);
form.addEventListener('submit', sendImage);
