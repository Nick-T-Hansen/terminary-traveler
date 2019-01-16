//fetch calls for JSON

const data = {
    getData(data) {
        return fetch("http://localhost:8088/places`")
        .then(response => response.json())
    }
}
