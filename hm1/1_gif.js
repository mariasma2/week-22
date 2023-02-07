let btn = document.querySelector("#searchs");
let result = document.querySelector("#responce");
let array = [];

btn.addEventListener("click", (e) => {
  result.innerHTML = "";
  array = [];
  e.preventDefault();
  async function fetchToDo() {
    let input = document.querySelector(".search").value;

    try {
      const responce = await fetch(
        `https://api.giphy.com/v1/gifs/search?api_key=EwOmWGb4UqWf79KsjbfzikWI8KBiO7WS&limit=5&offset=0&q=${input}`
      );
      data = await responce.json();
      input.value = "";
      if (responce.status != 200) {
        throw new Error("Сервер не доступен");
      }
      return data;
    } catch (error) {
      alert("Ошибка: " + error.message);
      console.log(error.message);
    }
  }
  async function getImg() {
    const data = await fetchToDo();
    array = data.data;
    array.forEach((el) => {
      result.innerHTML += `<img src="${el.images.downsized.url}" alt = "">`;
    });
  }

  getImg();
});

