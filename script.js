let radioValue = ""
let boxValue = ""
const postData = (bodyContent) => {
    fetch("http://localhost:3000/users/", {
        headers: {
            "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(bodyContent),
    })
};

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let name = e.target[0].value;
    let email = e.target[1].value;
    let company = e.target[2].value;
    let city = e.target[3].value;
    let pincode = e.target[4].value;
    let message = e.target[5].value;
    let bodyContent = {
        Name: `${name}`,
        Email: `${email}`,
        Company: `${company}`,
        City: `${city}`,
        Pincode: `${pincode}`,
        EnquiryType: `${radioValue}`,
        Product: `${boxValue}`,
        Message: `${message}`
    };
    postData(bodyContent);
});

document.getElementById('Submit').onclick = function () {
    var radios = document.getElementsByName('Enquiry');
    var boxes = document.getElementsByClassName('check');
    for (var radio of radios) {
        if (radio.checked) {
            radioValue = radio.value;
        }
    }
    for (var box of boxes) {
        if (box.checked) {
            boxValue =boxValue +","+ box.value;
        }
    }
}
