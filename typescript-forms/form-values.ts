interface FormElement extends HTMLFormControlsCollection {
  name: HTMLInputElement;
  email: HTMLInputElement;
  message: HTMLTextAreaElement;
}

const $form = document.querySelector('#contact-form') as HTMLFormElement;

if (!$form) throw new Error('formElements does not exist');

function submitFunction(event: Event): void {
  event.preventDefault();
  const $formElements = $form.elements as FormElement;
  const name = $formElements.name.value;
  const email = $formElements.email.value;
  const message = $formElements.message.value;
  const objectForm = { name, email, message };
  console.log(objectForm);
  $form.reset();
}

$form.addEventListener('submit', submitFunction);
