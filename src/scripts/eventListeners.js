
import appendInterests from "./domAppend";
import data from "./data"


const eventListeners = {
    submitButtonEventListener () {
        //event listener for submit button which will take the response fields and populate an object which will post to the json server in the correct key:value pairs.
        console.log("submit button test");
        // let resetResponses = document.querySelector("#interest--container");
        // resetResponses.innerHTML = " ";
        let getNameInput = document.querySelector("#input--poi").value
        let getDescriptionInput = document.querySelector("#input--description").value
        let getCostInput = document.querySelector("#input--cost").value
        let getLocationSelect = document.querySelector("#location--select").value
        //review add here
        console.log(newInterestObject);

        let newInterestObject = {
            poi: getNameInput,
            description: getDescriptionInput,
            cost: getCostInput,
            location: getLocationSelect
            //review add here
        };

        data.postNewInterest(newInterestObject)
            .then(() => {
                appendInterests.appendInterest()
            });
    },
    reviewButtonEventListener () {
    }

}

export default eventListeners