function albumData() {
  fetch("https://jsonplaceholder.typicode.com/albums")
    .then((response) => response.json())
    .then((albumData) => displayAlbumData(albumData));
}

function displayAlbumData(albumData) {
  const ul = document.getElementById("album-list");

  for (const data of albumData) {
    const li = document.createElement("li");
    li.innerText = `Id- ${data.id} Title: ${data.title}`;
    ul.appendChild(li);
  }
}

// loadData3
function loadData3() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data3) => displayData3(data3));
}

function displayData3(data3) {
  const ul = document.getElementById("data3-list");

  for (const data of data3) {
    const li = document.createElement("li");
    li.innerText = data.title;
    ul.appendChild(li);
  }
}
