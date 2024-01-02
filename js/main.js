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