const displayAlert = (message, alertName) => {
    const alertDIV = document.createElement("div");
    alertDIV.className = `alert alert-${alertName} mt-4`;
    alertDIV.appendChild(document.createTextNode(message));
    const navbar = document.querySelector("nav");
    navbar.insertAdjacentElement('beforeend', alertDIV);

    setTimeout(() => document.querySelector(".alert").remove(), 1500);
}

const charLimit = (characters) => {
    displayAlert("Characters must not exceed 10 letters", "warning")
}

export { displayAlert, charLimit}