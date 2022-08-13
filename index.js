// Add your code here
function submitData (name, email) {
    let userEmail = {
        name: name,
        email: email,
    }
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(userEmail)
    })
    .then(res => res.json())
    .then(obj => {
        let h2 = document.createElement('h2');
        h2.innerHTML = obj.id;
        document.body.appendChild(h2);
    })
    .catch(err => {
        let h3 = document.createElement('h3');
        h3.innerHTML = err.message;
        document.body.appendChild(h3);
    })
}
