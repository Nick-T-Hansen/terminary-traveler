import data from "./data"
import appendInterests from "./domAppend";


const eventListeners = {
    submitButtonEventListener () {
        //event listener for submit button which will take the response fields and populate an object which will post to the json server in the correct key:value pairs.
        console.log("test");
        // let resetResponses = document.querySelector("#output");
        // resetResponses.innerHTML = " ";
        let getNameInput = document.querySelector("#input--poi");
        let getDescriptionInput = document.querySelector("#input--description");
        let getCostInput = document.querySelector("#input--cost");
        let getLocationSelect = document.querySelector("#location--select");

        let newInterestObject = {
            poi: getNameInput.value,
            description: getDescriptionInput.value,
            cost: getCostInput.value,
            location: getLocationSelect.value
        };

        data.postNewInterest(newInterestObject)
            .then(() => {
                appendInterests.appendInterest()
            });
    }
}

export default eventListeners