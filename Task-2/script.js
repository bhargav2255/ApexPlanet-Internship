function addTask(name) {
  const list = document.getElementById('taskList');

  const li = document.createElement('li');
  li.textContent = name;

  const removeBtn = document.createElement('button');
  removeBtn.textContent = "Remove";
  removeBtn.className = "remove-btn";
  removeBtn.onclick = function () {
    list.removeChild(li);
  };

  li.appendChild(removeBtn);
  list.appendChild(li);
}

function validateForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    alert("All fields are required.");
    return false;
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email)) {
    alert("Please enter a valid email.");
    return false;
  }

  alert("Form submitted successfully!");
  return true;
}
