const texts = [
    "Welcome To HardSit",
    "We provide Petrol Service",
    "Mechanic Service",
    "Emergency Service",
    "24/7 Roadside Assistance"
];

let textIndex = 0;
let charIndex = 0;
let deleting = false;

function typeAnimation() {

    let currentText = texts[textIndex];
    let element = document.getElementById("typing");

    if (!deleting) {

        element.innerHTML =
            currentText.substring(0, charIndex);

        charIndex++;

        if (charIndex > currentText.length) {

            deleting = true;

            setTimeout(typeAnimation, 1500);
            return;
        }

    } else {

        element.innerHTML =
            currentText.substring(0, charIndex);

        charIndex--;

        if (charIndex < 0) {

            deleting = false;

            textIndex++;

            if (textIndex >= texts.length) {
                textIndex = 0;
            }
        }
    }

    setTimeout(typeAnimation, 100);
}

typeAnimation();
