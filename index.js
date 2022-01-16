document.querySelector("#user-form").addEventListener("submit", handleUserData);

function handleUserData(event) {
    event.preventDefault();
    let userName = event.target.enteredName.value;
    let userEmail = event.target.enteredEmail.value;
    submitData(userName, userEmail);
}

function submitData(name, email) {
    // event.preventDefault();
    // let userObj = {
    //     name: event.target.enteredName.value,
    //     email: event.target.enteredEmail.value
    // }
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify({
            name,
            email
        }),
    })
    .then(res => res.json())
    .then(user => renderUsers(user))
    .catch(error => {
        let p = document.createElement("p");
        document.querySelector("#user-form").appendChild(p);
        p.append(error.message);
    });
}

function renderUsers(users) {
    let div = document.createElement("div");
    div.innerHTML = `<p>${users.id}</p>`
    document.querySelector("#user-form").appendChild(div);
}