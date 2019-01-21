//interests display container
import data from "./data"
import eventListeners from "./eventListeners"
// import interestEditForm from "./interestEditForm"

const appendInterests = {

    appendInterest() {
    let htmlContainer = document.querySelector(".output");
    let removeInterestContainer = document.querySelector("#interest--container")

    if(removeInterestContainer !== null)  {
        htmlContainer.removeChild(removeInterestContainer)
    };

    let interestContainer = document.createElement("article");
    interestContainer.setAttribute("id", "interest--container");

    htmlContainer.appendChild(interestContainer);

        //appends the DOM
        data.getInterestsData()
        .then(allInterests => {
            let interestsFragment = document.createDocumentFragment()
            allInterests.forEach(interest => {

                //display div
                let interestDisplaySection = document.createElement("section");
                interestDisplaySection.setAttribute("id", `interest--display--section--${interest.id}`);

                //interest name display
                let interestNameDisplay = document.createElement("h2");
                interestNameDisplay.setAttribute("id", `interest--display--${interest.name}`);
                interestNameDisplay.innerHTML = interest.poi;
                interestDisplaySection.appendChild(interestNameDisplay);

                //description display
                let descriptionNameDisplay = document.createElement("p");
                descriptionNameDisplay.setAttribute("id", `interest--display--${interest.description}`);
                descriptionNameDisplay.textContent = interest.description;
                interestDisplaySection.appendChild(descriptionNameDisplay);

                //cost display
                let costNameDisplay = document.createElement("p");
                costNameDisplay.setAttribute("id", `interest--display--${interest.cost}`);
                costNameDisplay.textContent = interest.cost;
                interestDisplaySection.appendChild(costNameDisplay);

                //location display
                let locationNameDisplay = document.createElement("p");
                locationNameDisplay.setAttribute("id", `interest--display--${interest.placeId}`);
                locationNameDisplay.textContent = interest.placeId;
                interestDisplaySection.appendChild(locationNameDisplay);

                //review display or review field
                let locationReviewInput = document.createElement("p");
                locationReviewInput.setAttribute("id", `interest--display--${interest.review}`);
                locationReviewInput.textContent = interest.review;
                interestDisplaySection.appendChild(locationReviewInput);

                //edit button (includes review fields)
                let editButton = document.createElement("button");
                editButton.setAttribute("id", "editButton--interests");
                editButton.textContent = "Edit Interest"
                interestDisplaySection.appendChild(editButton);
                //edit button event listener
                editButton.addEventListener("click", eventListeners.editButtonEventListener)

                //delete button for saved interest
                let deleteButton = document.createElement("button");
                deleteButton.setAttribute("id", "deleteButton--interests");
                deleteButton.textContent = "Delete Interest"
                interestDisplaySection.appendChild(deleteButton);

                //delete button event listener
                deleteButton.addEventListener("click", eventListeners.deleteButtonEventListener)

                interestsFragment.appendChild(interestDisplaySection);
            });

            interestContainer.appendChild(interestsFragment);
        })
    }
}

export default appendInterests