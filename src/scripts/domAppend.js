//interests display container
import data from "./data"

const appendInterests = {

    appendInterest() {
    let interestContainer = document.createElement("article");
    interestContainer.setAttribute = ("id", "interest--container");
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
        })
    }
}

export default appendInterests