// clear the specific div for editing and populate with the edit form

interestEditForm = {

    createAndAppendForm() {
        // document.querySelector(`#${editId}`);
        //i think this goes at the bottom of the page, it is line 57 in fridgify

        let interestContainer = document.createElement("article");
        interestContainer.setAttribute("id", "interest--container");
        htmlContainer.appendChild(interestContainer);

        //display div
        let interestDisplaySection = document.createElement("section");
        interestDisplaySection.setAttribute("id", `interest--display--section--${interest.id}`);
        // interestsFragment.apprenticeChild(interestDisplaySection);

        //interest name display
        let interestNameDisplay = document.createElement("h2");
        interestNameDisplay.setAttribute = ("id", `interest--display--${interest.name}`);
        interestNameDisplay.textContent = interest.poi;
        interestDisplaySection.appendChild(interestNameDisplay);

        //description display
        let descriptionNameDisplay = document.createElement("p");
        descriptionNameDisplay.setAttribute("id", `interest--display--${interest.description}`);
        descriptionNameDisplay.textContent = interest.description;
        interestDisplaySection.appendChild(descriptionNameDisplay);

        //cost display which can be edited
        let costNameDisplay = document.createElement("input");
        costNameDisplay.setAttribute("id", `interest--display--${interest.cost}`);
        costNameDisplay.setAttribute("type", "text");
        costNameDisplay.placeholder = interest.cost;
        interestDisplaySection.appendChild(costNameDisplay);

        //location display
        let locationNameDisplay = document.createElement("p");
        locationNameDisplay.setAttribute("id", `interest--display--${interest.placeId}`);
        locationNameDisplay.textContent = interest.placeId;
        interestDisplaySection.appendChild(locationNameDisplay);

        //review display which can be edited
        let locationReviewInput = document.createElement("input");
        locationReviewInput.setAttribute("id", `interest--display--${interest.review}`);
        locationReviewInput.setAttribute("type", "text")
        locationReviewInput.textContent = interest.review;
        interestDisplaySection.appendChild(locationReviewInput);

        //submit changes button
    }
}

export default interestEditForm