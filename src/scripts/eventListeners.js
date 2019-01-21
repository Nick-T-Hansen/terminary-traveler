
import appendInterests from "./domAppend";
import data from "./data"
// import domBuilder from "./domBuilder";
import interestEditForm from "./interestEditForm"


const eventListeners = {
    submitButtonEventListener () {
        //event listener for submit button which will take the response fields and populate an object which will post to the json server in the correct key:value pairs.
        console.log("submit button test");
        let resetResponses = document.querySelector("#interest--container");
        resetResponses.innerHTML = " ";
        let getNameInput = document.querySelector("#input--poi").value
        let getDescriptionInput = document.querySelector("#input--description").value
        let getCostInput = document.querySelector("#input--cost").value
        let getLocationSelect = document.querySelector("#location--select").value
        //review add here


        let newInterestObject = {
            poi: getNameInput,
            description: getDescriptionInput,
            cost: getCostInput,
            location: getLocationSelect,
            review: "No Review Available. Write One Now!"
        };
        console.log(newInterestObject);

        data.postNewInterest(newInterestObject)
            .then(() => {
                appendInterests.appendInterest()
            });
    },
    editButtonEventListener () {
        let interestDomArticle = event.target.parentNode.id
        let editId = interestDomArticle.split("--")[3];
        data.getInterestId(editId)
            .then(response => {
                console.log(interestDomArticle)
                console.log(response)
                interestEditForm.createAndAppendForm(interestDomArticle, response)
            })
    },

    deleteButtonEventListener () {
        if(confirm("Are you sure you want to delete this?") ){
            let interestToDelete = event.target.parentNode.id
            let interestToDeleteId = interestToDelete.split("--")[3];
            console.log(interestToDeleteId)
            data.deleteInterest(interestToDeleteId)
                .then (r => {
                    //need dom to refresh after
                    appendInterests.appendInterest();
                })
        }
    }
}

export default eventListeners