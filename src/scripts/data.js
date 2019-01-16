//fetch calls for JSON

const data = {
    //get complete database
    getData(data) {
        return fetch("http://localhost:8088/places")
        .then(response => response.json())
    },

    postNewInterest(newInterestToPost) {
        //post new entry
        fetch("http://localhost:8088/interests", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newInterestToPost)
        })
    }
}

export default data