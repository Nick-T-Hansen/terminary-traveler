import data from "./data"
import domBuilder from "./domBuilder";

const eventListeners = {
    submitButtonEventListener () {
        console.log("test");
        let resetResponses = document.querySelector("#interest--container");
        resetResponses.innerHTML = " ";
        let getNameInput = document.querySelector("#input--${poi}");
        let getDescriptionInput = document.querySelector("#input--${description}");
        let getCostInput = document.querySelector("#input--${cost}");
        let getLocationSelect = document.querySelector("#location--select");

        let newInterestObject = {
            poi: getNameInput.value,
            description: getDescriptionInput.value,
            cost: getCostInput.value,
            location: getLocationSelect.value
        };

        data.postNewInterest(newInterestObject)
            .then(() => {
                domBuilder.domBuildAndAppend()
            });
    }
}

export default eventListeners