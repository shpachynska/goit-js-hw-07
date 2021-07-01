const listEl = document.querySelector("#gallery");
listEl.classList.add("gallery-list");
const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const createImages = images.map((image) => {
  image.width = "320";
  const { url, alt, width } = image;

  const imageEl = `<li><img src="${url}" alt="${alt}" width="${width}"></li>`;
  console.log(imageEl);
  return imageEl;
});

createImages.join(" ");
listEl.insertAdjacentHTML("afterbegin", createImages);

//============= another option =====================
// const createImages = (images) =>
//   images.map((image) => {
//     const listItemEl = document.createElement("li");
//     const imageEl = document.createElement("img");
//     imageEl.src = image.url;
//     imageEl.alt = image.alt;
//     imageEl.width = 320;
//     listItemEl.appendChild(imageEl);
//     return listItemEl;
//   });

// const imageListItems = createImages(images);
// console.log(imageListItems);

// listEl.append(...imageListItems);
