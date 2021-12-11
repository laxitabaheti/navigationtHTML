function updateImages(data) {
  let pictureName = " ";
  data.forEach((item) => {
    pictureName += `<div class="picture-card">
        <img src="${item.url}" title="${item.title}" class="photos">
        </div>
        <br>`;
  });
  document.getElementById("picture").innerHTML = pictureName;
}
fetch(`https://jsonplaceholder.typicode.com/photos/?_limit=10`)
  .then((response) => response.json())
  .then((data) => updateImages(data));
