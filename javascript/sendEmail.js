const sendBtn = document.getElementById('sendButton');
const form = document.getElementById('sendForm');
const nameField = document.getElementById('name');
const emailField = document.getElementById('email');
const messageField = document.getElementById('message');
const formInfo = document.getElementById('form__info');
const formPopupTxt = document.getElementById('form__popup-txt');

form.addEventListener('submit', sendEmail);
function form_mine(){
  return new Promise((resolve, reject) => {
    if (true) {
      resolve("done");
    } else {
      reject(new Error('Form elements not found'));
    }
  });
}
async function sendEmail(e) {
  e.preventDefault();
  formInfo.classList.add('hide');
  sendBtn.value = 'Sending...';

  

  try {
    await new form_mine();
    sendBtn.value = 'Send';
    nameField.value = '';
    emailField.value = '';
    messageField.value = '';
    formInfo.style.backgroundColor = 'rgb(0 113 12)';
    formPopupTxt.textContent = 'Email was successfully sent!';
    formInfo.classList.remove('hide');
  } catch (err) {
    sendBtn.value = 'Send';
    formInfo.style.backgroundColor = '#8b1a09';
    formPopupTxt.textContent = 'Error sending email! Try again!';
    formInfo.classList.remove('hide');
  }
}

export { sendEmail };
