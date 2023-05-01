const items = [
  {
    name: "Lion",
    image: "1/2..jpg",
    description: "“Lonely lion is better than famous sheep.”",
    url: "https://en.wikipedia.org/wiki/Lion"
    
  },
  {
    name: "Bear",
    image: "1/1..png",
    description: "“Bears are very nice as long as you are nice to them.”",
    url:"https://en.wikipedia.org/wiki/Lion"
  },
  {
    name: "Wolf",
    image: "1/3..png",
    description: "“The wolf on the hill is not as hungry as the wolf climbing the hill.”",
    url:"https://en.wikipedia.org/wiki/Lion"
  },

  {
    name: "Tiger",
    image: "1/4..png",
    description: "“Save the tigers before they are silenced forever.”",
    url:"https://en.wikipedia.org/wiki/Lion"
  },
  {
    name: "Elephant",
    image: "1/5..png",
    description: "“When the elephant walks, the forest walks with them.”",
    url:"https://en.wikipedia.org/wiki/Lion"
  },

];

const container = document.getElementById("card-container");

for (let i = 0; i < items.length; i++) {
  const item = items[i];
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <div class="front" style="background-image: url(${item.image})"></div>
    <div class="back" >
      <div class="bg-image" style="background-image: url(${item.image})"></div>
      <div class="bg-text">
      <a href=${item.url}>${item.name}</a>
      <p >${item.description}</p></div></div>
    
  `;
  container.appendChild(card);
}
