const form = document.getElementById("form")
const userURL = "http://localhost:3000/users/"

form.addEventListener("submit", (e) => {
    e.preventDefault()
    const newUser = {
        "first_name": e.target.firstName.value,
        "last_name": e.target.lastName.value,
    }
    postNewUser(newUser);
})

function postNewUser(newUser) {
    const options = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify(newUser),
    }

    fetch(userURL, options)
}