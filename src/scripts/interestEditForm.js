import data from "./data";
import appendInterests from "./domAppend";

// clear the specific div for editing and populate with the edit form

const interestEditForm = {

    createAndAppendForm(interestDomArticle, editInterestObject) {

        //interest name display
        let editNameField = document.createElement("p")

        let editNameLabel = document.createElement("label")
        editNameLabel.textContent = "Interest"
        let editNameInput = document.createElement("input")
        editNameInput.value = editInterestObject.poi

        editNameField.appendChild(editNameLabel)
        editNameField.appendChild(editNameInput)

        //description display
        let editDescriptionField = document.createElement("p")

        let editDescriptionLabel = document.createElement("label")
        editDescriptionLabel.textContent = "Description"
        let editDescriptionInput = document.createElement("input")
        editDescriptionInput.value = editInterestObject.description

        editDescriptionField.appendChild(editDescriptionLabel)
        editDescriptionField.appendChild(editDescriptionInput)

        //cost display which can be edited
        let editCostField = document.createElement("p")

        let editCostLabel = document.createElement("label")
        editCostLabel.textContent = "Cost"
        let editCostInput = document.createElement("input")
        editCostInput.value = editInterestObject.cost

        editCostField.appendChild(editCostLabel)
        editCostField.appendChild(editCostInput)

        //location display
        let editLocationField = document.createElement("p")

        let editLocationLabel = document.createElement("label")
        editLocationLabel.textContent = "Location"
        let editLocationInput = document.createElement("input")
        editLocationInput.value = editInterestObject.location

        editLocationField.appendChild(editLocationLabel)
        editLocationField.appendChild(editLocationInput)

        //review display which can be edited
        let editReviewField = document.createElement("p")

        let editReviewLabel = document.createElement("label")
        editReviewLabel.textContent = "Review"
        let editReviewInput = document.createElement("input")
        editReviewInput.value = editInterestObject.review

        editReviewField.appendChild(editReviewLabel)
        editReviewField.appendChild(editReviewInput)

        //build an object which contains the new interest in the form, object is passed in post request to the JSON
        let newInterestDomArticle = document.querySelector(`#${interestDomArticle}`);

        newInterestDomArticle.innerHTML = " ";

        //submit changes button
        let submitChangesButton = document.createElement("button")
        submitChangesButton.textContent = "Submit Changes"

        newInterestDomArticle.appendChild(editNameField)
        newInterestDomArticle.appendChild(editDescriptionField)
        newInterestDomArticle.appendChild(editCostField)
        newInterestDomArticle.appendChild(editLocationField)
        newInterestDomArticle.appendChild(editReviewField)
        newInterestDomArticle.appendChild(submitChangesButton)

        // button event listener which updates the code
        submitChangesButton.addEventListener("click", () => {
            let modifiedInterestObject = {
                poi: editNameInput.value,
                description: editDescriptionInput.value,
                cost: editCostInput.value,
                location: editLocationInput.value,
                review: editReviewInput.value
            }
            console.log(modifiedInterestObject);
            data.putEditInterest(editInterestObject.id, modifiedInterestObject)
                .then (r => {
                    appendInterests.appendInterest();
                })
        })
    }
}
export default interestEditForm