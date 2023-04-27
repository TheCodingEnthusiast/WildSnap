const items = [
  {
    name: "Lion ",
    image: "https://source.unsplash.com/400x400/?nature",
    description: "awufbi aufwonuawufbi baufwonu baufwonubaufwonubaufwonu baufwonu baufwonu baufwonu baufwonu  ",
    url: "https://en.wikipedia.org/wiki/Lion"
    
  },
  {
    name: "Item 2",
    image: "https://source.unsplash.com/400x400/?food",
    description: "Description of item 2",
    url:"https://en.wikipedia.org/wiki/Lion"
  },
  {
    name: "Item 3",
    image: "https://source.unsplash.com/400x400/?animals",
    description: "Description of item 3",
    url:"https://en.wikipedia.org/wiki/Lion"
  },

  {
    name: "Item 4",
    image: "https://source.unsplash.com/400x400/?outdoor",
    description: "Description of item 4",
    url:"https://en.wikipedia.org/wiki/Lion"
  },
  {
    name: "Item 5",
    image: "https://source.unsplash.com/400x400/?water",
    description: "Description of item 4",
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
