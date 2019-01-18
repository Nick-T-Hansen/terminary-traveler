//fetch calls for JSON

const data = {

    getPlacesData() {
        //GET places object
        return fetch("http://localhost:8088/places")
        .then(response => response.json())
    },

    getInterestsData() {
        return fetch("http://localhost:8088/interests")
        .then(response => response.json())
    },
    // GET interests object

    postNewInterest(newInterestToPost) {
        //POST new entry
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