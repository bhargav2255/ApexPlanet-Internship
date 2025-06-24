const plants = [
  { name: "Aloe Vera", price: 120, rating: 4, category: "outdoor", img:"C:/Users/ASUS/OneDrive/Desktop/alovera.jpg"  },
  { name: "Snake Plant", price: 200, rating: 4.5, category: "indoor", img:"C:/Users/ASUS/OneDrive/Desktop/snake plant.jpg"  },
  { name: "Venus Flytrap", price: 800, rating: 5, category: "rare", img:"C:/Users/ASUS/OneDrive/Desktop/venus.jpg"  },
  { name: "Bonsai Tree", price: 450, rating: 4.8, category: "rare", img: "C:/Users/ASUS/OneDrive/Desktop/bonasi.webp" },
  { name: "Peace Lily", price: 300, rating: 4.2, category: "indoor", img: "C:/Users/ASUS/OneDrive/Desktop/lilly.jpg" }
];

function renderPlants(data) {
  const container = document.getElementById("plantList");
  container.innerHTML = data.map(p => `
    <div class="product">
      <img src="${p.img}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p>₹${p.price} | ⭐ ${p.rating}</p>
    </div>
  `).join('');
}

function applyFilterSort() {
  const category = document.getElementById("categoryFilter").value;
  const sort = document.getElementById("sortFilter").value;
  let filtered = [...plants];

  if (category !== "all") {
    filtered = filtered.filter(p => p.category === category);
  }

  if (sort === "price") filtered.sort((a, b) => a.price - b.price);
  else if (sort === "rating") filtered.sort((a, b) => b.rating - a.rating);

  renderPlants(filtered);
}

document.getElementById("categoryFilter").onchange = applyFilterSort;
document.getElementById("sortFilter").onchange = applyFilterSort;

renderPlants(plants);

const noteInput = document.getElementById("noteInput");
const noteList = document.getElementById("noteList");

function addNote() {
  const value = noteInput.value.trim();
  if (value === "") return;

  const li = document.createElement("li");
  li.textContent = value;
  li.onclick = () => {
    li.remove();
    saveNotes();
  };
  noteList.appendChild(li);
  noteInput.value = "";
  saveNotes();
}

function saveNotes() {
  localStorage.setItem("plantNotes", noteList.innerHTML);
}

function loadNotes() {
  noteList.innerHTML = localStorage.getItem("plantNotes") || "";
  Array.from(noteList.children).forEach(li => {
    li.onclick = () => {
      li.remove();
      saveNotes();
    };
  });
}
loadNotes();
