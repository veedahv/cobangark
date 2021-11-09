const dpBtn = document.querySelector('#dp-btn')
const dp = document.querySelector('#profile-image')
const imageInput = document.querySelector('#change-image')
const firstName = document.querySelector('#first-name');
const lastName = document.querySelector('#last-name');
const email = document.querySelector('#email');
const phoneNumber = document.querySelector('#phone-number');
const gender = document.querySelector('#gender');
const age = document.querySelector('#age');
const occupation = document.querySelector('#occupation');
const country = document.querySelector('#country');
const address = document.querySelector('#address');
// const  = document.querySelector('#');



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

const addCountries = () => {
    countries.forEach(countryVal => {
        let countryOption = `
        <option value="${countryVal}">${countryVal}</option>
        `
        country.innerHTML += countryOption;
    });
}

const loadProfile = () => {
    dp.src = userProfile.image;
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


dpBtn.addEventListener('click', () => {
    console.log('clicked');
    imageInput.click();
})

imageInput.addEventListener('change', () => {
    console.log(imageInput);
    console.log(imageInput.files[0]);
    let reader = new FileReader();
    reader.onload = (e) => {
        dp.src = e.target.result
    }
    reader.readAsDataURL(imageInput.files[0])
})


addCountries();
loadProfile();