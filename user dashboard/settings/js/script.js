const main = document.querySelector('#main-body');
const settingsHome = document.querySelector('#settings-home');
const settingsSection = document.querySelector('#settings-section');
const confirmModal = document.querySelector('#confirm-modal');
const cancelBtns = document.querySelectorAll('.cancel-btn');


// const  = document.querySelector('#');



let allNotifications = [
    {
        id: 'course-update',
        name: 'Course Update',
        checked: false
    },
    {
        id: 'course-completed',
        name: 'Course Completed',
        checked: true
    },
    {
        id: 'course-listing',
        name: 'New Course Listing',
        checked: false
    },
    {
        id: 'new-referral',
        name: 'New Referral',
        checked: true
    },
    {
        id: 'new-reward',
        name: 'New Reward',
        checked: false
    },
    {
        id: 'easy-withdrawal',
        name: 'Easy Withdrawal',
        checked: true
    },
    {
        id: 'login',
        name: 'Login from different device',
        checked: false
    },
    {
        id: 'every-transaction',
        name: 'Every Transaction',
        checked: false
    },
]

let withdrawalOpts = [
    {
        type: 'Bank Account',
        details: {
            bankName: 'GTBank',
            acctNo: '013334578',
            acctName: 'OGOLUWA SIMON OJEWALE'
        }
    },
    {
        type: 'Crypto Account',
        details: {
            cryptoType: 'USDT/TRC20',
            address: '013334578013334578',
        }
    },
    {
        type: 'Bank Account',
        details: {
            bankName: 'GTBank',
            acctNo: '013334578',
            acctName: 'OGOLUWA SIMON OJEWALE'
        }
    }
]


let userProfile = {
    image: '../assets/images/Frame 246.png',
    fName: 'Ogoluwa',
    lName: 'Ojewale',
    phoneNo: '08062112993',
    mail: 'hello@ogopedia.com',
    gender: 'Male',
    age: 52,
    occupation: 'Entrepreneur',
    address: 'Somewhere in Uyo, Akwa Ibom',
    country: 'Nigeria'
}

let countries = ['Nigeria', 'Rwanda', 'Ghana', 'Nigeria'];

const createNotification = (notificationBox) => {
    allNotifications.forEach(eachNoti => {
        let isChecked = eachNoti.checked ? 'checked' : '';
        let noti = `
        <li class="flex items-center">
            <input type="checkbox" name="notifications" id="${eachNoti.id}"
                class="noti-check hidden" ${isChecked}>
            <label for="${eachNoti.id}" class="checkbox border-2 border-secondary rounded-sm flex items-center justify-center w-5 h-5 p-0">
                <img src="../assets/images/Checkmark.png" class="w-2.5" alt="check">
            </label>
            <label for="${eachNoti.id}" class="my-1 mx-1.5">${eachNoti.name}</label>
        </li>
        `
        notificationBox.innerHTML += noti;
    });
}

const addCountries = (country) => {
    countries.forEach(countryVal => {
        let countryOption = `
        <option value="${countryVal}">${countryVal}</option>
        `
        country.innerHTML += countryOption;
    });
}

const checkTabs = (tabs, radioTab) => {
    tabs.forEach(tab => {
        // console.log(tab)'
        tab.classList.remove('tab-active')
        if (radioTab.id === tab.htmlFor && radioTab.checked === true) {
            tab.classList.add('tab-active')
            // console.log(tab.htmlFor)
        }
    });
}

const withdrawalTable = (withdrawalTBodies) => {
    withdrawalTBodies.forEach(withdrawalTBody => {
        withdrawalOpts.forEach(opt => {
            let optRow;
            if (opt.type === 'Bank Account') {
                optRow = `
                <tr>
                    <td class="px-3.5 py-3 text-sm">${opt.type}</td>
                    <td class="px-3.5 py-3 text-sm">
                        <span class="block">${opt.details.bankName}</span>
                        <span class="block">${opt.details.acctNo}</span>
                    </td>
                    <td class="px-3.5 py-3 text-sm">
                        <div class="flex items-center gap-2">
                            <button class="btn">
                                <img src="../assets/images/Table-Edit.png"
                                    alt="edit image" class="edit-img w-5">
                            </button>
                            <button class="btn delete-btn">
                                <img src="../assets/images/trash-2.png"
                                    alt="delete image" class="del-img w-5">
                            </button>
                        </div>
                    </td>
                </tr>
                `
            } else if (opt.type === 'Crypto Account') {
                optRow = `
                <tr>
                    <td class="px-3.5 py-3 text-sm">${opt.type}</td>
                    <td class="px-3.5 py-3 text-sm">${opt.details.address}</td>
                    <td class="px-3.5 py-3 text-sm">
                        <div class="flex items-center gap-2">
                            <button class="btn">
                                <img src="../assets/images/Table-Edit.png"
                                    alt="edit image" class="edit-img w-5">
                            </button>
                            <button class="btn delete-btn">
                                <img src="../assets/images/trash-2.png"
                                    alt="delete image" class="del-img w-5">
                            </button>
                        </div>
                    </td>
                </tr>
                `
            }
            withdrawalTBody.innerHTML += optRow;
        });

        let delBtns = withdrawalTBody.querySelectorAll('.delete-btn');

        delBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                confirmModal.style.display = 'block';
            })
        });
    });
}



// addCountries();
// loadProfile();
// withdrawalTable();




const goToHome = () => {
    main.innerHTML = '';
    let clone = settingsHome.content.cloneNode(true);
    main.appendChild(clone);

    // const radioTabs = document.querySelectorAll('.radio-tab');
    const tabs = document.querySelectorAll('.home-tab');


    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            console.log('lala');
            goToSection(tab.htmlFor)
            // console.log('ayy');
            // console.log(radioTab.id);
            // tabs.forEach(tab => {
            //     // console.log(tab)'
            //     tab.classList.remove('tab-active')
            //     if (radioTab.id === tab.htmlFor && radioTab.checked === true) {
            //         tab.classList.add('tab-active')
            //         // console.log(tab.htmlFor)
            //     }
            // });
        })
    });



    // addCourses(coursesContainer);
    // addFeaturedCourses(courseCarousel);
}

const goToSection = (radioID) => {
    main.innerHTML = '';
    let clone = settingsSection.content.cloneNode(true);
    main.appendChild(clone);


    const radioTabs = document.querySelectorAll('.radio-tab');
    const tabs = document.querySelectorAll('.tab');
    const viewBtns = document.querySelectorAll('.view-input-btn');
    // const imageInput = document.querySelector('#change-image')
    const firstName = document.querySelector('#first-name');
    const lastName = document.querySelector('#last-name');
    const email = document.querySelector('#email');
    const phoneNumber = document.querySelector('#phone-number');
    const gender = document.querySelector('#gender');
    const age = document.querySelector('#age');
    const occupation = document.querySelector('#occupation');
    const country = document.querySelector('#country');
    const address = document.querySelector('#address');
    const cryptoForm = document.querySelector('#crypto-form');
    const bankForm = document.querySelector('#bank-form');
    const withdrawalSelect = document.querySelector('#withdrawal-options');
    const withdrawalTBodies = document.querySelectorAll('.withdrawal-options-tbody');
    const notificationBox = document.querySelector('#notification-box');


    withdrawalSelect.addEventListener('change', () => {
        if (withdrawalSelect.value === 'Bank Account') {
            bankForm.style.display = 'inline-block'
            cryptoForm.style.display = 'none'
        } else if (withdrawalSelect.value === 'Crypto Account') {
            bankForm.style.display = 'none';
            cryptoForm.style.display = 'inline-block';
        } else {
            bankForm.style.display = 'none';
            cryptoForm.style.display = 'none';
        }
    })

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

    radioTabs.forEach(radioTab => {
        if (radioTab.id === radioID) {
            radioTab.checked = true;
            checkTabs(tabs, radioTab);
            // tab.classList.add('tab-active')
            // console.log(tab.htmlFor)
        }
        radioTab.addEventListener('change', () => {
            checkTabs(tabs, radioTab);
            // console.log('ayy');
            // console.log(radioTab.id);
        })
    });


    const loadProfile = () => {
        firstName.value = userProfile.fName;
        lastName.value = userProfile.lName;
        phoneNumber.value = userProfile.phoneNo;
        email.value = userProfile.mail;
        gender.value = userProfile.gender;
        age.value = userProfile.age;
        occupation.value = userProfile.occupation;
        address.value = userProfile.address;
        country.value = userProfile.country;
    }


    loadProfile();
    addCountries(country);

    withdrawalTable(withdrawalTBodies);
    createNotification(notificationBox);

    // const coursesContainer = document.querySelector('#courses-contain');
    // addCourses(coursesContainer);
}

cancelBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        confirmModal.style.display = 'none';
    })
});

goToHome();