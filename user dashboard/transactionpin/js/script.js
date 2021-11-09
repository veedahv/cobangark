
const viewBtns = document.querySelectorAll('.view-input-btn');

viewBtns.forEach(viewBtn => {
    console.log('lalala');
    viewBtn.addEventListener('click', () => {
        if (viewBtn.parentElement.querySelector('input').type === 'text') {
            viewBtn.parentElement.querySelector('input').type = 'password';
        } else {
            viewBtn.parentElement.querySelector('input').type = 'text';
        }
        ;
    })
});