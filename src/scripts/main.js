import domBuilder from "./domBuilder"
import eventListeners from "./eventListeners"
import appendInterests from "./domAppend";


domBuilder.domBuildAndAppend();
appendInterests.appendInterest();
let submitButton = document.querySelector("#submitButton--interests");
submitButton.addEventListener ("click", eventListeners.submitButtonEventListener);