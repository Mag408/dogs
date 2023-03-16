async function getImg() {
  let list = document.querySelector(".images");
  for (let i = 0; i < 9; i++) {
    let respons = await fetch("https://dog.ceo/api/breeds/image/random");
    let content = await respons.json();

    list.innerHTML += `
    <li class="image">
        <img
          src=${content.message}
          
          
        />
      </li>`;
  }
}

getImg();
