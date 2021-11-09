const main = document.querySelector('#main');
const coursesMain = document.querySelector('#courses-main');
const courseContent = document.querySelector('#course-content');



let featuredCourses = [
    {
        courseId: `fc1`,
        courseCartegory: `Frontend Development`,
        courseSubCartegory: `Angular`,
        courseTitle: `Introduction to Photoshop for Web Designers`,
        courseInstructor: `Ogoluwa Ojewale`,
        courseImage: `../assets/images/feature1.png`,
        courseDesc: `Master Angular Js from the basics to building an advanced appication with Firebase's Firestore as ...`,
        courseColor: `red`,
        noOfStudents: `3,708`,
        courseType: 'pdf',
        rating: 5,
        courseProgress: 35,
        lessons: [
            {
                title: '',
                duration: '',
                quantity: 1,
                subLessons: [
                    {
                        title: '',
                        type: '',
                        duration:'',
                        quantity: 1,
                        done: false
                    }
                ]
            }
        ]
    },
    {
        courseId: `fc2`,
        courseCartegory: `Frontend Development`,
        courseSubCartegory: `Angular`,
        courseTitle: `Introduction to Photoshop for Web Designers`,
        courseInstructor: `Ogoluwa Ojewale`,
        courseImage: `../assets/images/feature2.png`,
        courseDesc: `Master Angular Js from the basics to building an advanced appication with Firebase's Firestore as ...`,
        courseColor: `red`,
        noOfStudents: `3,708`,
        courseType: 'video',
        rating: 5,
        courseProgress: 35,
        lessons: [
            {
                title: '',
                duration: '',
                quantity: 1,
                subLessons: [
                    {
                        title: '',
                        type: '',
                        duration:'',
                        quantity: 1,
                        done: false
                    }
                ]
            }
        ]
    },
    {
        courseId: `fc3`,
        courseCartegory: `Frontend Development`,
        courseSubCartegory: `Angular`,
        courseTitle: `Introduction to Photoshop for Web Designers`,
        courseInstructor: `Ogoluwa Ojewale`,
        courseImage: `../assets/images/feature3.png`,
        courseDesc: `Master Angular Js from the basics to building an advanced appication with Firebase's Firestore as ...`,
        courseColor: `red`,
        noOfStudents: `3,708`,
        courseType: 'video',
        rating: 5,
        courseProgress: 35,
        lessons: [
            {
                title: '',
                duration: '',
                quantity: 1,
                subLessons: [
                    {
                        title: '',
                        type: '',
                        duration:'',
                        quantity: 1,
                        done: false
                    }
                ]
            }
        ]
    },
    {
        courseId: `fc4`,
        courseCartegory: `Frontend Development`,
        courseSubCartegory: `Angular`,
        courseTitle: `Introduction to Photoshop for Web Designers`,
        courseInstructor: `Ogoluwa Ojewale`,
        courseImage: `../assets/images/feature4.png`,
        courseDesc: `Master Angular Js from the basics to building an advanced appication with Firebase's Firestore as ...`,
        courseColor: `red`,
        noOfStudents: `3,708`,
        courseType: 'video',
        rating: 5,
        courseProgress: 35,
        lessons: [
            {
                title: '',
                duration: '',
                quantity: 1,
                subLessons: [
                    {
                        title: '',
                        type: '',
                        duration:'',
                        quantity: 1,
                        done: false
                    }
                ]
            }
        ]
    },
    {
        courseId: `fc5`,
        courseCartegory: `Frontend Development`,
        courseSubCartegory: `Angular`,
        courseTitle: `Introduction to Photoshop for Web Designers`,
        courseInstructor: `Ogoluwa Ojewale`,
        courseImage: `../assets/images/feature5.png`,
        courseDesc: `Master Angular Js from the basics to building an advanced appication with Firebase's Firestore as ...`,
        courseColor: `red`,
        noOfStudents: `3,708`,
        courseType: 'video',
        rating: 5,
        courseProgress: 35,
        lessons: [
            {
                title: '',
                duration: '',
                quantity: 1,
                subLessons: [
                    {
                        title: '',
                        type: '',
                        duration:'',
                        quantity: 1,
                        done: false
                    }
                ]
            }
        ]
    },
];


let courses = [
    {
        courseId: 1,
        courseCartegory: `Frontend Development`,
        courseSubCartegory: `Angular`,
        courseTitle: `Learn angular.js from scratch to experts`,
        courseImage: `../assets/images/angular@2x.png`,
        courseDesc: `Master Angular Js from the basics to building an advanced appication with Firebase's Firestore as ...`,
        courseColor: `red`,
        courseProgress: 35,
        lessons: [
            {
                title: '',
                duration: '',
                quantity: 1,
                subLessons: [
                    {
                        title: '',
                        type: '',
                        duration:'',
                        quantity: 1,
                        done: false
                    }
                ]
            }
        ]
    },
    {
        courseId: 2,
        courseCartegory: `UI/UX Design`,
        courseSubCartegory: `Sketch`,
        courseTitle: `Sketch from A to Z (2019): Become an app designer`,
        courseImage: `../assets/images/skech@2x.png`,
        courseDesc: `Finally a comprehensive guide to using Sketch for designing mobile. Learn to design an app from A ...`,
        courseColor: `yellow`,
        courseProgress: 65,
    },
    {
        courseId: 3,
        courseCartegory: `Backend Development`,
        courseSubCartegory: `Laravel`,
        courseTitle: `Laravel 2018, complete guide with real world projects`,
        courseImage: `../assets/images/laravel@2x.png`,
        courseDesc: `Build a RESTFUL API for a market system using Laravel and dominates the challengng RESTFUL ...`,
        courseColor: `indigo`,
        courseProgress: 80,
    },
    {
        courseId: 4,
        courseCartegory: `UI/UX Design`,
        courseSubCartegory: `Sketch`,
        courseTitle: `Sketch from A to Z (2019): Become an app designer`,
        courseImage: `../assets/images/skech@2x.png`,
        courseDesc: `Finally a comprehensive guide to using Sketch for designing mobile. Learn to design an app from A ...`,
        courseColor: `yellow`,
        courseProgress: 65,
    },
    {
        courseId: 5,
        courseCartegory: `Frontend Development`,
        courseSubCartegory: `Angular`,
        courseTitle: `Learn angular.js from scratch to experts`,
        courseImage: `../assets/images/angular@2x.png`,
        courseDesc: `Master Angular Js from the basics to building an advanced appication with Firebase's Firestore as ...`,
        courseColor: `red`,
        courseProgress: 35,
        lessons: [
            {
                title: '',
                duration: '',
                quantity: 1,
                subLessons: [
                    {
                        title: '',
                        type: '',
                        duration:'',
                        quantity: 1,
                        done: false
                    }
                ]
            }
        ]
    }
];



const addCourses = (coursesContainer) => {
    courses.forEach(course => {
        // <div class="w-full sm:w-72">
        let courseCard = `
            <div class="card w-full" id="${course.courseId}">
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
                    <div class="progress absolute left-0 top-0 bg-secondary z-20 h-1"
                        style="width: ${course.courseProgress}%"></div>
                    <div class="progress-circle absolute transform -translate-y-1/2 top-1/2 z-30 border-2 border-secondary bg-white rounded-full h-2.5 w-2.5"
                        style="left: ${course.courseProgress}%">
                    </div>
                </div>
            </div>
            `
            // </div>        

        coursesContainer.innerHTML += courseCard;
    });
}



const addFeaturedCourses = (courseCarousel) => {
    featuredCourses.forEach(course => {
        let isPdf = course.courseType === 'pdf' ? "" : "hidden";
        let isVideo = course.courseType === 'video' ? "" : "hidden";
        // <div class="w-full sm:w-72">
        let courseCard = `
            <div
                class="card flex-none shadow-md my-3 relative flex flex-col w-64 bg-white rounded-3xl" id="${course.courseId}">
                <small
                    class="absolute top-3 right-3 z-40 bg-red-500 text-white text-xs py-0.5 px-2 rounded-full" ${isPdf}>PDF</small>
                <img src="${course.courseImage}"
                    class="w-full relative rounded-t-3xl" alt="">
                <div class="card-body relative p-2">
                    <div class="flex items-start">
                        <div class="w-20">
                            <img src="../assets/images/featureZ.png"
                                class="rounded-full w-20" alt="instructor image">
                        </div>
                        <div class="course-info">
                            <h3 class="font-medium">
                                ${course.courseTitle}
                            </h3>
                            <h4 class="instructor-name text-xs my-1">${course.courseInstructor}</h4>
                            <div class="flex gap-3">
                                <p class="no-of-students text-xs font-medium">${course.noOfStudents} Students</p>
                                <span class="flex gap-1 items-center">
                                    <div class="w-2.5">
                                        <img src="../assets/images/rating-star.png" alt="rate" class="w-2.5">
                                    </div>
                                    <div class="w-2.5">
                                        <img src="../assets/images/rating-star.png" alt="rate" class="w-2.5">
                                    </div>
                                    <div class="w-2.5">
                                        <img src="../assets/images/rating-star.png" alt="rate" class="w-2.5">
                                    </div>
                                    <div class="w-2.5">
                                        <img src="../assets/images/rating-star.png" alt="rate" class="w-2.5">
                                    </div>
                                    <div class="w-2.5">
                                        <img src="../assets/images/rating-star.png" alt="rate" class="w-2.5">
                                    </div>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            `
            // </div>        

            courseCarousel.innerHTML += courseCard;
    });
}




const goToMain = () => {
    main.innerHTML = '';
    let clone = coursesMain.content.cloneNode(true);
    main.appendChild(clone);
    
    
    const coursesContainer = document.querySelector('#courses-contain');
    const courseCarousel = document.querySelector('#course-carousel');
    addCourses(coursesContainer);
    addFeaturedCourses(courseCarousel);
}



const goToCourse = () => {
    main.innerHTML = '';
    let clone = courseContent.content.cloneNode(true);
    main.appendChild(clone);


    // const coursesContainer = document.querySelector('#courses-contain');
    addCourses(coursesContainer);
}

goToMain();

