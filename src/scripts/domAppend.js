//interests display container
import data from "./data"

const appendInterests = {

    appendInterest() {
    let htmlContainer = document.querySelector(".output");

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
                interestDisplaySection.setAttribute("id", `interest--display--section--${interest.id}`);
                // interestsFragment.apprenticeChild(interestDisplaySection);

                //interest name display
                let interestNameDisplay = document.createElement("h2");
                interestNameDisplay.setAttribute = ("id", `interest--display--${interest.name}`);
                interestNameDisplay.innerHTML = interest.poi;
                interestDisplaySection.appendChild(interestNameDisplay);

                //description display
                let descriptionNameDisplay = document.createElement("p");
                descriptionNameDisplay.setAttribute("id", `interest--display--${interest.description}`);
                descriptionNameDisplay.innerHTML = interest.description;
                interestDisplaySection.appendChild(descriptionNameDisplay);

                //cost display
                let costNameDisplay = document.createElement("p");
                costNameDisplay.setAttribute("id", `interest--display--${interest.cost}`);
                costNameDisplay.innerHTML = interest.cost;
                interestDisplaySection.appendChild(costNameDisplay);

                //location display
                let locationNameDisplay = document.createElement("p");
                locationNameDisplay.setAttribute("id", `interest--display--${interest.location}`);
                locationNameDisplay.innerHTML = interest.location;
                interestDisplaySection.appendChild(locationNameDisplay);

                //review display or review field
                let locationReviewInput = document.createElement("p");
                locationReviewInput.setAttribute("id", `interest--display--${interest.review}`);
                locationReviewInput.placeholder = interest.review;
                interestDisplaySection.appendChild(locationReviewInput);

                /*
                review display or review field
                let locationReviewInput = document.createElement("input");
                locationReviewInput.setAttribute("type", "text")
                locationReviewInput.setAttribute("id", `interest--display--${interest.review}`);
                locationReviewInput.placeholder = "Review your experience!";
                interestDisplaySection.appendChild(locationReviewInput);
                */

                //submit button for review
                let reviewButton = document.createElement("button");
                reviewButton.setAttribute("id", "reviewButton--interests");
                reviewButton.textContent = "Edit Review"
                interestDisplaySection.appendChild(reviewButton);
                //edit button event listener
                reviewButton.addEventListener("click", () => {
                    console.log("test");
                });

                //delete button for saved interest
                let deleteButton = document.createElement("button");
                deleteButton.setAttribute("id", "deleteButton--interests");
                deleteButton.textContent = "Delete Interest"
                interestDisplaySection.appendChild(deleteButton);
                //edit button event listener
                deleteButton.addEventListener("click", () => {
                    console.log("test");
                });

                interestsFragment.appendChild(interestDisplaySection);

            })
            interestContainer.appendChild(interestsFragment);
        })
    }
}

export default appendInterests