import data from "./data"


//build form HTML in DOM when page is loaded
//to do: add review on reload, edit button and functionality, add button to reload page on click
//input id's not showing

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
        nameInput.setAttribute = ("type", "text");
        //replace single quotes for fetch call
        nameInput.setAttribute = ("id", "input--poi");
        nameInput.placeholder = "Where should I go?";
        poiContainer.appendChild(nameInput);

        //description label
        let descriptionInputLabel = document.createElement("label");
        descriptionInputLabel.textContent = "Description:";
        poiContainer.appendChild(descriptionInputLabel);
        //description input
        let descriptionInput = document.createElement("input");
        descriptionInput.setAttribute = ("type", "text");
        //replace single quotes for fetch call
        descriptionInput.setAttribute = ("id", "input--description");
        descriptionInput.placeholder = "What should I do?";
        poiContainer.appendChild(descriptionInput);

        //cost label
        let costInputLabel = document.createElement("cost");
        costInputLabel.textContent = "Cost:";
        poiContainer.appendChild(costInputLabel);
        //cost input
        let costInput = document.createElement("input");
        costInput.setAttribute = ("type", "text");
        //replace single quotes for fetch call
        costInput.setAttribute = ("id", "input--cost");
        costInput.placeholder = "What does it cost?";
        poiContainer.appendChild(costInput);

        //location dropdown
        let locationSelect = document.createElement("select");
        locationSelect.setAttribute ("id", "location--select");
        //GET JSON places to populate the dropdown location  for the form.
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

        //add button
        //add button submits the interest choices and does a PUT to the JSON server.
        let submitButton = document.createElement("button");
        submitButton.setAttribute("id", "submitButton--interests");
        submitButton.textContent = "Submit"
        poiContainer.appendChild(submitButton);
        //add button event listener


    }
}

export default domBuilder