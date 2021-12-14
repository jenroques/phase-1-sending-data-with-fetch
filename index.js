// Add your code here

const submitData = (name, email) => {
    const configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify({
            "name": name,
            "email": email
        })
    };


    return fetch("http://localhost:3000/users", configObj)
        .then(response => response.json())
        .then(newId)
        .catch(response => document.body.innerHTML = 'Unauthorized Access')
};


function newId(object) {
    document.body.innerHTML = object.id
}