"use strict";
const $form = document.querySelector('#contact-form');
if (!$form)
    throw new Error('formElements does not exist');
function submitFunction(event) {
    event.preventDefault();
    const $formElements = $form.elements;
    const name = $formElements.name.value;
    const email = $formElements.email.value;
    const message = $formElements.message.value;
    const objectForm = { name, email, message };
    console.log(objectForm);
    $form.reset();
}
$form.addEventListener('submit', submitFunction);
