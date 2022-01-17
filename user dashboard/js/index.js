const aside = document.querySelector('#aside');
const hamburger = document.querySelector('#hamburger');
const navToggle = document.querySelector('#nav-toggle');
const menuContain = document.querySelector('#menu-contain');
const logoContain = document.querySelector('#logo-contain');
const searchContain = document.querySelector('#search-contain');
const searchBtn = document.querySelector('#search-btn');
const searchInput = document.querySelector('#search-input');
const toggleHide = document.querySelector('#toggle-hide');
const cancelSearch = document.querySelector('#cancel-search');
const notificationBtn = document.querySelector('#notification-btn');
const notificationContainer = document.querySelector('#notification-container');
const notificationList = document.querySelector('#notification-list');

let notifications = [
    'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
]


searchBtn.addEventListener('click', () => {
    searchContain.className = 'search-contain absolute top-0 left-0 lg:relative w-full lg:w-96 lg:border rounded-lg px-2 py-1';
    toggleHide.classList.remove('hidden');
    logoContain.style.visibility = "hidden";
    menuContain.style.visibility = "hidden";
    // menuContain.disabled = "true";
})

cancelSearch.addEventListener('click', () => {
    searchContain.className = 'search-contain';
    toggleHide.classList.add('hidden');
    logoContain.style.visibility = "visible";
    menuContain.style.visibility = "visible";
    searchInput.value = '';
    // menuContain.disabled = "true";
})

notificationBtn.addEventListener('click', () => {
    if (notificationContainer.classList.contains('hidden')) {        
        notificationContainer.classList.remove('hidden');
    } else {        
        notificationContainer.classList.add('hidden');
    }
})

const addNotifications = () => {
    let notificationLi;
    if (notifications.length > 0) {
        notifications.forEach(notification => {
            notificationLi = `
                <li class="notification text-xs px-4 py-2 font-light">
                    ${notification}
                </li>
            `;
            notificationList.innerHTML += notificationLi;
        });        
    } else {
        notificationLi = `
            <p class="notification text-lg text-center px-8 py-10 font-medium">
                You do not have any notifications yet.
            </p>
        `;
        notificationList.innerHTML = notificationLi;        
    }
}

addNotifications();

document.addEventListener('click',(e) => {
    let isAsideInsideElement = aside.contains(e.target);
    let isHamburgInsideElement = menuContain.contains(e.target);
    let isNavToggleInsideElement = navToggle.contains(e.target);
    if (!isAsideInsideElement && !isHamburgInsideElement && !isNavToggleInsideElement) {
        navToggle.checked = false;
    }
})
