//interests display container
import data from "./data"
import eventListeners from "./eventListeners";

const appendInterests = {

    appendInterest() {
    let htmlContainer = document.querySelector(".output");

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
                // interestsFragment.apprenticeChild(interestDisplaySection);

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

                /*
                review display or review field
                let locationReviewInput = document.createElement("input");
                locationReviewInput.setAttribute("type", "text")
                locationReviewInput.setAttribute("id", `interest--display--${interest.review}`);
                locationReviewInput.placeholder = "Review your experience!";
                interestDisplaySection.appendChild(locationReviewInput);
                */

                //review
                let reviewButton = document.createElement("button");
                reviewButton.setAttribute("id", "reviewButton--interests");
                reviewButton.textContent = "Write Review"
                interestDisplaySection.appendChild(reviewButton);
                //edit button event listener
                // reviewButton.addEventListener("click", event.deleteButtonEventListener())


                //delete button for saved interest
                let deleteButton = document.createElement("button");
                deleteButton.setAttribute("id", "deleteButton--interests");
                deleteButton.textContent = "Delete Interest"
                interestDisplaySection.appendChild(deleteButton);

                //delete button event listener
                // deleteButton.addEventListener("click", eventListeners.deleteButtonEventListener());

                interestsFragment.appendChild(interestDisplaySection);
            });

            interestContainer.appendChild(interestsFragment);
        })
    }
}

export default appendInterests