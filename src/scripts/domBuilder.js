import data from "./data"
import eventListeners from "./eventListeners"

//build form HTML in DOM when page is loaded
//to do: add review on reload, edit button and functionality, add button to reload page on click
//event listener issues- cant target the id on 23 and others of that type, and cant target null error.

const domBuilder = {

    domBuildAndAppend () {
        let htmlContainer = document.querySelector(".output");
        let poiContainer = document.createElement("article");
        htmlContainer.appendChild(poiContainer);

        //point of interest label
        let nameInputLabel = document.createElement("label");
        nameInputLabel.textContent = "Point of Interest:";
        poiContainer.appendChild(nameInputLabel);
        //point of interest input
        let nameInput = document.createElement("input");
        nameInput.setAttribute = ("input", "text");
        //replace single quotes for fetch call
        nameInput.setAttribute = ("id", "input--${poi}");
        nameInput.innerHTML = "Point of Interest";
        poiContainer.appendChild(nameInput);

        //description label
        let descriptionInputLabel = document.createElement("label");
        descriptionInputLabel.textContent = "Description:";
        poiContainer.appendChild(descriptionInputLabel);
        //description input
        let descriptionInput = document.createElement("input");
        descriptionInput.setAttribute = ("input", "text");
        //replace single quotes for fetch call
        descriptionInput.setAttribute = ("id", "input--${description}");
        descriptionInput.innerHTML = "Point of Interest";
        poiContainer.appendChild(descriptionInput);

        //cost label
        let costInputLabel = document.createElement("cost");
        costInputLabel.textContent = "Cost:";
        poiContainer.appendChild(costInputLabel);
        //cost input
        let costInput = document.createElement("input");
        costInput.setAttribute = ("input", "text");
        //replace single quotes for fetch call
        costInput.setAttribute = ("id", "input--${cost}");
        costInput.innerHTML = "Point of Interest";
        poiContainer.appendChild(costInput);

        //location dropdown
        let locationSelect = document.createElement("select");
        locationSelect.setAttribute ("id", "location--select");
        //pull JSON places to populate the dropdown location choices.
        data.getPlacesData()
        .then(allPlaces => {
            // console.log(allPlaces) worked!
            allPlaces.forEach(place => {
                let dropdownChoice = document.createElement("option");
                dropdownChoice.setAttribute = ("id", "dropdown-choice--");
                dropdownChoice.setAttribute = ("value", `${place.name}`);
                dropdownChoice.innerHTML = `${place.name}`
                locationSelect.appendChild(dropdownChoice);
                poiContainer.appendChild(locationSelect);
            });
        });



        //interests display container
        let interestContainer = document.createElement("article")
        interestContainer.setAttribute = ("id", "interest--container")
        htmlContainer.appendChild(interestContainer);

        //appends the DOM
        data.getInterestsData()
        .then(allInterests => {
            let interestsFragment = document.createDocumentFragment()
            allInterests.forEach(interest => {

                //display div
                let interestDisplaySection = document.createElement("section");
                interestDisplaySection.setAttribute("id", "interest--display--section");
                // interestsFragment.apprenticeChild(interestDisplaySection);

                //interest name display
                let interestNameDisplay = document.createElement("h2");
                interestNameDisplay.setAttribute = ("id", "interest--display--${name}");
                interestNameDisplay.innerHTML = interest.poi;
                interestDisplaySection.appendChild(interestNameDisplay);

                //description display
                let descriptionNameDisplay = document.createElement("p");
                descriptionNameDisplay.setAttribute("id", "interest--display--${description}");
                descriptionNameDisplay.innerHTML = interest.description;
                interestDisplaySection.appendChild(descriptionNameDisplay);

                //cost display
                let costNameDisplay = document.createElement("p");
                costNameDisplay.setAttribute("id", "interest--display--${cost}");
                costNameDisplay.innerHTML = interest.cost;
                interestDisplaySection.appendChild(costNameDisplay);

                //location display
                let locationNameDisplay = document.createElement("p");
                locationNameDisplay.setAttribute("id", "interest--display--${location}");
                locationNameDisplay.innerHTML = interest.location;
                interestDisplaySection.appendChild(locationNameDisplay);

                //review display or review field
                //submit button for review

                interestsFragment.appendChild(interestDisplaySection);

            })
            interestContainer.appendChild(interestsFragment);
        });

        //add button
        let submitButton = document.createElement("button");
        submitButton.setAttribute("id", "submitButton--interests");
        submitButton.textContent = "Submit"
        poiContainer.appendChild(submitButton);

        //add button event listener
        submitButton.addEventListener ("click", eventListeners.submitButtonEventListener())

        //edit button (TO DO w/ edit fetch)
        let editButton = document.createElement("button");
        editButton.setAttribute("id", "editButton--interests");
        editButton.textContent = "Edit"
        poiContainer.appendChild(editButton);
        //edit button event listener
        editButton.addEventListener("click", () => {
            console.log("test");
        });
    }
}

export default domBuilder