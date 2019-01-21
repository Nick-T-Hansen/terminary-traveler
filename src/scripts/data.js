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
    // GET interests object DO LAST, expand for line 11 http://localhost:8088/interest?_expand=place

    getInterestId(interestId) {
        return fetch(`http://localhost:8088/interests/${interestId}`)
        .then(response => response.json())
    },

    postNewInterest(newInterestToPost) {
        return fetch("http://localhost:8088/interests", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newInterestToPost)
        })
    },

    deleteInterest(interestId) {
        return fetch(`http://localhost:8088/interests/${interestId}`, {
          method: "DELETE",
          headers: {
              "Content-Type": "application/json"
          }
        })
      },

      putEditInterest(interestId, interestToEdit) {
        return fetch(`http://localhost:8088/interests/${interestId}`, {
          method: "PUT",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify(interestToEdit)
        })
    }
}

export default data