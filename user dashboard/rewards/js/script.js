
const rewardCarousel = document.querySelector('#reward-carousel');
const rewardsBody = document.querySelector('#reward-body');
const usersBody = document.querySelector('#users-tbody');
const referralInput = document.querySelector('#referral-code');
const copyBtn = document.querySelector('#copy-btn');

let referralCode = 'cobang35689627';


referralInput.textContent = referralCode;


let users = [
    {
        username: 'ogopedia',
        country:'Nigeria',
        plan: 'Premium'
    },
    {
        username: 'charless',
        country:'USA',
        plan: 'Business'
    },
    {
        username: 'essien',
        country:'Ghana',
        plan: 'Basic'
    }
]

let rewards = {
        basic: 50,
        premium: 0,
        business: 0,
        referral: 104
    }
    

const addNewUsers = () => {
    // let sN = 1;
    users.forEach(user => {
        let userRow = `
        <tr>
            <td class="px-3.5 py-5 text-sm">${user.username}</td>
            <td class="px-3.5 py-5 text-sm">${user.country}</td>
            <td class="px-3.5 py-5 text-sm">${user.plan}</td>
        </tr>
        `

        usersBody.innerHTML += userRow;
    });
}

const fillRewards = () => {
    // let sN = 1;
        let row = `
        <tr>
            <td class="px-3.5 py-4 text-sm">${rewards.basic}</td>
            <td class="px-3.5 py-4 text-sm">${rewards.premium}</td>
            <td class="px-3.5 py-4 text-sm">${rewards.business}</td>
            <td class="px-3.5 py-4 text-sm">${rewards.referral}</td>
        </tr>
        `

        rewardsBody.innerHTML += row;
}


copyBtn.addEventListener('click', () => {
    let copyText = document.querySelector("#referral-input");
    console.log(copyText);
    copyText.value = referralCode;
    copyText.select();
    document.execCommand("copy");   
    // console.log('doone'); 
})

rewardCarousel.scrollLeft = 150;

let pos = { left: 0, x: 0 };

const mouseMoveHandler = (e) => {
    const dx = e.clientX - pos.x;
    rewardCarousel.scrollLeft = pos.left - dx;
};

const mouseUpHandler = () => {
    document.removeEventListener('mousemove', mouseMoveHandler);
    document.removeEventListener('mouseup', mouseUpHandler);

    rewardCarousel.style.cursor = 'grab';
    rewardCarousel.style.removeProperty('user-select');
};

const mouseDownHandler = (e) => {
    rewardCarousel.style.cursor = 'grabbing';
    rewardCarousel.style.userSelect = 'none';
    pos = {
        left: rewardCarousel.scrollLeft,
        x: e.clientX
    };

    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mouseup', mouseUpHandler);
};

rewardCarousel.addEventListener('mousedown', mouseDownHandler);


addNewUsers();
fillRewards();