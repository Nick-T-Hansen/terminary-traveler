//build form HTML in DOM when page is loaded

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

        let dropdownChoice = document.createElement("option");
        dropdownChoice.setAttribute = ("value", "city");
        dropdownChoice.innerHTML = "City"

        let dropdownChoice2 = document.createElement("option");
        dropdownChoice2.setAttribute = ("value", "place");
        dropdownChoice2.innerHTML = "Place"

        locationSelect.appendChild(dropdownChoice);
        locationSelect.appendChild(dropdownChoice2);
        poiContainer.appendChild(locationSelect);

        //add button
        let submitButton = document.createElement("button");
        submitButton.setAttribute("id", "submitButton--interests");
        submitButton.textContent = "Submit"
        poiContainer.appendChild(submitButton);
        //add event listener
        submitButton.addEventListener("click", () => {
            console.log("test");
        });

        //edit button
        let editButton = document.createElement("button");
        editButton.setAttribute("id", "editButton--interests");
        editButton.textContent = "Edit"
        poiContainer.appendChild(editButton);
        //edit event listener
        editButton.addEventListener("click", () => {
            console.log("test");
        });
    }
}

export default domBuilder