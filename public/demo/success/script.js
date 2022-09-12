const myButtons = document.querySelectorAll('.js-button');
const myButton = myButtons.item(0);

const myResults = document.querySelectorAll('.js-result');
const myResult = myResults.item(0);


myButton.addEventListener('click', () => {
    addClass_success(myResult);
    addClass_opacity(myButton);
})




const addClass_success = (target) => {
    if (!target.classList.contains('success')) {
        target.classList.add('success');
    };
};

const removeClass_success = (target) => {
    if (target.classList.contains('success')) {
        target.classList.remove('success');
    };
};

const addClass_opacity = (target) => {
    if (!target.classList.contains('opacity')) {
        target.classList.add('opacity');
    };
};

const removeClass_opacity = (target) => {
    if (target.classList.contains('opacity')) {
        target.classList.remove('opacity');
    };
};