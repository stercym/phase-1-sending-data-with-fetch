// To send name and email
function submitData(name, email) {
  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    // stringify the object
    body: JSON.stringify({
      name: name,
      email: email
    })
  })
  .then(response => response.json())
  .then(data => {
    // Append the new user's ID to the DOM
    const body = document.querySelector("body");
    const p = document.createElement("p");
    p.textContent = `User ID: ${data.id}`;
    body.appendChild(p);
  })
  // Catch and display any error message encountered
  .catch(error => {
    const body = document.querySelector("body");
    const p = document.createElement("p");
    p.textContent = `Error: ${error.message}`;
    body.appendChild(p);
  });
}

