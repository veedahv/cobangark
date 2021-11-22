
const courseCarousel = document.querySelector('#course-carousel');
const transactionBody = document.querySelector('#trans-tbody');
const transactionCarousel = document.querySelector('#transaction-carousel');
const usersBody = document.querySelector('#users-tbody');
const referralInput = document.querySelector('#referral-code');
const copyBtn = document.querySelector('#copy-btn');

let referralCode = 'cobang35689627';


referralInput.textContent = referralCode;

let courses = [
    {
        courseCartegory: `Frontend Development`,
        courseSubCartegory: `Angular`,
        courseTitle: `Learn angular.js from scratch to experts`,
        courseImage: `../assets/images/angular@2x.png`,
        courseDesc: `Master Angular Js from the basics to building an advanced appication with Firebase's Firestore as ...`,
        courseColor: `red`,
        courseProgress: 35,
    },
    {
        courseCartegory: `UI/UX Design`,
        courseSubCartegory: `Sketch`,
        courseTitle: `Sketch from A to Z (2019): Become an app designer`,
        courseImage: `../assets/images/skech@2x.png`,
        courseDesc: `Finally a comprehensive guide to using Sketch for designing mobile. Learn to design an app from A ...`,
        courseColor: `yellow`,
        courseProgress: 65,
    },
    {
        courseCartegory: `Backend Development`,
        courseSubCartegory: `Laravel`,
        courseTitle: `Laravel 2018, complete guide with real world projects`,
        courseImage: `../assets/images/laravel@2x.png`,
        courseDesc: `Build a RESTFUL API for a market system using Laravel and dominates the challengng RESTFUL ...`,
        courseColor: `indigo`,
        courseProgress: 80,
    }
];

let transactions = [
    {
        transaction: 56757522736373765,
        date: `5 minutes ago`,
        description: `Purchase`,
        amount: 500,
        balance: 2300
    },
    {
        transaction: 56757522736373765,
        date: `Sep 20, 2021`,
        description: `Po Upgrade`,
        amount: 1200,
        balance: 1200
    },
    {
        transaction: 56757522736373765,
        date: `Sep 15, 2021`,
        description: `Withdrawal`,
        amount: 250,
        balance: 300
    },
    {
        transaction: 56757522736373765,
        date: `Sep 12, 2021`,
        description: `Retrieval`,
        amount: 80,
        balance: 900
    }
]

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

const addCourses = () => {
    courses.forEach(course => {
        let courseCard = `
        <div class="w-72">
            <div class="card">
                <div class="flex mb-2 justify-between items-center">
                    <div
                        class="course-category capitaize font-medium text-sm text-${course.courseColor}-500 bg-${course.courseColor}-500 bg-opacity-20 px-2">
                        ${course.courseCartegory}                         
                    </div>
                    <div class="course-logo w-5">
                        <img src="${course.courseImage}" class="w-5"
                            alt="${course.courseSubCartegory} logo">
                    </div>
                </div>
                <h2 class="course-title font-bold mb-2">
                    ${course.courseTitle}
                </h2>
                <p class="course-desc text-sm">
                    ${course.courseDesc}
                </p>
                <div class="progress-bar-box relative my-2">
                    <div class="pogress-bar relative bg-gray-100 z-10 h-1 w-full"></div>
                    <div class="progress absolute left-0 top-0 bg-secondary z-40 h-1"
                        style="width: ${course.courseProgress}%"></div>
                    <div class="progress-circle absolute transform -translate-y-1/2 top-1/2 z-50 border-2 border-secondary bg-white rounded-full h-2.5 w-2.5"
                        style="left: ${course.courseProgress}%">
                    </div>
                </div>
            </div>
        </div>        
        `

        courseCarousel.innerHTML += courseCard;
    });
}

const addTransactions = () => {
    let sN = 1;
    transactions.forEach(transaction => {
        let transactionRow = `
        <tr>
            <td class="px-3.5 py-5 text-sm">${sN}</td>
            <td class="px-3.5 py-5 text-sm">${transaction.transaction}</td>
            <td class="px-3.5 py-5 text-sm">${transaction.date}</td>
            <td class="px-3.5 py-5 text-sm">${transaction.description}</td>
            <td class="px-3.5 py-5 text-sm">${transaction.amount}</td>
            <td class="px-3.5 py-5 text-sm">${transaction.balance}</td>
        </tr>       
        `

        transactionBody.innerHTML += transactionRow;
        sN++;
    });
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


transactionCarousel.scrollLeft = 150;

let pos = { left: 0, x: 0 };

const mouseMoveHandler = (e) => {
    const dx = e.clientX - pos.x;
    transactionCarousel.scrollLeft = pos.left - dx;
};

const mouseUpHandler = () => {
    document.removeEventListener('mousemove', mouseMoveHandler);
    document.removeEventListener('mouseup', mouseUpHandler);

    transactionCarousel.style.cursor = 'grab';
    transactionCarousel.style.removeProperty('user-select');
};

const mouseDownHandler = (e) => {
    transactionCarousel.style.cursor = 'grabbing';
    transactionCarousel.style.userSelect = 'none';
    pos = {
        left: transactionCarousel.scrollLeft,
        x: e.clientX
    };

    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mouseup', mouseUpHandler);
};

transactionCarousel.addEventListener('mousedown', mouseDownHandler);


copyBtn.addEventListener('click', () => {
    let copyText = document.querySelector("#referral-input");
    copyText.value = referralCode;
    copyText.select();
    document.execCommand("copy");  
})


addNewUsers();
addTransactions();
addCourses();


