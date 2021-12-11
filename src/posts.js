function updatePosts(data) {
  let titleName = " ";
  data.forEach((item) => {
    titleName += `<div class="card">
    <div class="title"> ${item.title}</div>
    <div class="body">${item.body}</div>
    </div>
    <br>`;
  });
  document.getElementById("title").innerHTML = titleName;
}

fetch(`https://jsonplaceholder.typicode.com/posts/?_limit=10`)
  .then((response) => response.json())
  .then((data) => updatePosts(data));
