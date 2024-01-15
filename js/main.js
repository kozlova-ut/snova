const selectors = document.querySelectorAll('.level-control .selector span');
const levels = document.querySelectorAll('.levels .level');

for (let selector of selectors) {
    selector.addEventListener('click', () => {
        const selectedNum = selector.textContent;

        for (let selector of selectors) {
            if (selector.textContent === selectedNum) {
                selector.classList.add('selected');
            }
            else {
                selector.classList.remove('selected');
            }
        }

        for (let level of levels) {
            if (level.getAttribute('data-num') === selectedNum) {
                level.classList.remove('hidden');
            }
            else {
                level.classList.add('hidden');
            }
        }
    })
}


const buttons = document.querySelectorAll('.button');
const popup = document.querySelector('.popup-wrapper');
const close = document.querySelector('.close');
const heading = popup.querySelector('.heading');
const form = popup.querySelector('form');
const success = popup.querySelector('.success');

for (let button of buttons) {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        popup.style.display = 'flex';
        heading.style.display = 'block';
        form.style.display = 'flex';
        success.style.display = 'none';
    })
}

close.addEventListener('click', () => {
    popup.style.display = 'none';
})

const TOKEN = "5443287425:AAEj0MA2OYh2GShTdzuKSrttCK2QBuDHUvQ";
const CHAT_ID = "-1001682187999";
const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

document.getElementById('tg').addEventListener('submit', function(e) {
    e.preventDefault();

    let message = `<b>Сообщение с сайта</b>\n`;

    message += `<b>Почта:</b> ${this.email.value}\n`;
    message += `<b>Телефон:</b> ${this.phone.value}\n`;
    message += `<b>Имя:</b> ${this.name.value}`;

    axios.post(URI_API, {
        chat_id: CHAT_ID,
        parse_mode: 'html',
        text: message
    })
    .then((res) => {
        heading.style.display = 'none';
        form.style.display = 'none';
        success.style.display = 'block';
    })
    .catch((err) => {
        console.warn(err);
    })
    .finally(() => {
        console.log('Сообщение отправлено');
    })
})