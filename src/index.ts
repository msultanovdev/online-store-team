import image from './assets/lazy.png';

const createImage = (src: string) => new Promise((res, rej) => {
  const img = new Image();
  img.onload = () => res(img);
  img.onerror = rej;
  img.src = src;
});

async function render() {
  const subHeader: HTMLElement = document.createElement('h2') as HTMLElement;
  subHeader.innerHTML = 'This elements was created by js';
  const myImage: HTMLImageElement = await createImage(image) as HTMLImageElement;
  document.body.appendChild(subHeader);
  document.body.appendChild(myImage);
}

render();
