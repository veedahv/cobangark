const tabs = document.querySelectorAll('.tab');
const radioTabs = document.querySelectorAll('.radio-tab');
const overviewContainers = document.querySelectorAll('.overview-container');
const prevBtn = document.querySelector('#prev-btn');
const nextBtn = document.querySelector('#next-btn');
const lessonCardBody = document.querySelector('#lesson-card-body');
const lessonContainer = document.querySelector('#lessons-container');
const lessonContainerMd = document.querySelector('#lessons-container-md');
const courseTitle = document.querySelector('#course-title');
const sectionTitle = document.querySelector('#section-title');
const instructorImage = document.querySelectorAll('.instructor-img');
const instructorName = document.querySelectorAll('.instructor-name');


// // Select elements here
// const video = document.getElementById('video');
// const videoControls = document.getElementById('video-controls');
// const playButton = document.getElementById('play');
// const playbackIcons = document.querySelectorAll('.playback-icons use');
// const timeElapsed = document.getElementById('time-elapsed');
// const duration = document.getElementById('duration');
// const progressBar = document.getElementById('progress-bar');
// const seek = document.getElementById('seek');
// const seekTooltip = document.getElementById('seek-tooltip');
// const volumeButton = document.getElementById('volume-button');
// const volumeIcons = document.querySelectorAll('.volume-button use');
// const volumeMute = document.querySelector('use[href="#volume-mute"]');
// const volumeLow = document.querySelector('use[href="#volume-low"]');
// const volumeHigh = document.querySelector('use[href="#volume-high"]');
// const volume = document.getElementById('volume');
// const playbackAnimation = document.getElementById('playback-animation');
// const fullscreenButton = document.getElementById('fullscreen-button');
// const videoContainer = document.getElementById('video-container');
// const fullscreenIcons = fullscreenButton.querySelectorAll('use');
// const pipButton = document.getElementById('pip-button');

// const videoWorks = !!document.createElement('video').canPlayType;
// if (videoWorks) {
//   video.controls = false;
//   videoControls.classList.remove('hidden');
// }

// // Add functions here

// // togglePlay toggles the playback state of the video.
// // If the video playback is paused or ended, the video is played
// // otherwise, the video is paused
// function togglePlay() {
//   if (video.paused || video.ended) {
//     video.play();
//   } else {
//     video.pause();
//   }
// }

// // updatePlayButton updates the playback icon and tooltip
// // depending on the playback state
// function updatePlayButton() {
//   playbackIcons.forEach((icon) => icon.classList.toggle('hidden'));

//   if (video.paused) {
//     playButton.setAttribute('data-title', 'Play (k)');
//   } else {
//     playButton.setAttribute('data-title', 'Pause (k)');
//   }
// }

// // formatTime takes a time length in seconds and returns the time in
// // minutes and seconds
// function formatTime(timeInSeconds) {
//   const result = new Date(timeInSeconds * 1000).toISOString().substr(11, 8);

//   return {
//     minutes: result.substr(3, 2),
//     seconds: result.substr(6, 2),
//   };
// }

// // initializeVideo sets the video duration, and maximum value of the
// // progressBar
// function initializeVideo() {
//   const videoDuration = Math.round(video.duration);
//   console.log(videoDuration);
//   seek.setAttribute('max', videoDuration);
//   progressBar.setAttribute('max', videoDuration);
//   const time = formatTime(videoDuration);
//   duration.innerText = `${time.minutes}:${time.seconds}`;
//   duration.setAttribute('datetime', `${time.minutes}m ${time.seconds}s`);
// }

// // updateTimeElapsed indicates how far through the video
// // the current playback is by updating the timeElapsed element
// function updateTimeElapsed() {
//   const time = formatTime(Math.round(video.currentTime));
//   timeElapsed.innerText = `${time.minutes}:${time.seconds}`;
//   timeElapsed.setAttribute('datetime', `${time.minutes}m ${time.seconds}s`);
// }

// // updateProgress indicates how far through the video
// // the current playback is by updating the progress bar
// function updateProgress() {
//   seek.value = Math.floor(video.currentTime);
//   progressBar.value = Math.floor(video.currentTime);
// }

// // updateSeekTooltip uses the position of the mouse on the progress bar to
// // roughly work out what point in the video the user will skip to if
// // the progress bar is clicked at that point
// function updateSeekTooltip(event) {
//     // console.log(event.offsetX);
//     // console.log(event.target.clientWidth);
//     console.log(parseInt(event.target.getAttribute('max'), 10));
//     console.log(parseInt(event.target.getAttribute('max')));
//   const skipTo = Math.round(
//     (event.offsetX / event.target.clientWidth) *
//             parseInt(event.target.getAttribute('max'), 10)
//   );
//   seek.setAttribute('data-seek', skipTo);
//   const t = formatTime(skipTo);
//   seekTooltip.textContent = `${t.minutes}:${t.seconds}`;
//   const rect = video.getBoundingClientRect();
//   seekTooltip.style.left = `${event.pageX - rect.left}px`;
// }

// // skipAhead jumps to a different point in the video when the progress bar
// // is clicked
// function skipAhead(event) {
//   const skipTo = event.target.dataset.seek
//     ? event.target.dataset.seek
//     : event.target.value;
//   video.currentTime = skipTo;
//   progressBar.value = skipTo;
//   seek.value = skipTo;
// }

// // updateVolume updates the video's volume
// // and disables the muted state if active
// function updateVolume() {
//   if (video.muted) {
//     video.muted = false;
//   }

//   video.volume = volume.value;
// }

// // updateVolumeIcon updates the volume icon so that it correctly reflects
// // the volume of the video
// function updateVolumeIcon() {
//   volumeIcons.forEach((icon) => {
//     icon.classList.add('hidden');
//   });

//   volumeButton.setAttribute('data-title', 'Mute (m)');

//   if (video.muted || video.volume === 0) {
//     volumeMute.classList.remove('hidden');
//     volumeButton.setAttribute('data-title', 'Unmute (m)');
//   } else if (video.volume > 0 && video.volume <= 0.5) {
//     volumeLow.classList.remove('hidden');
//   } else {
//     volumeHigh.classList.remove('hidden');
//   }
// }

// // toggleMute mutes or unmutes the video when executed
// // When the video is unmuted, the volume is returned to the value
// // it was set to before the video was muted
// function toggleMute() {
//   video.muted = !video.muted;

//   if (video.muted) {
//     volume.setAttribute('data-volume', volume.value);
//     volume.value = 0;
//   } else {
//     volume.value = volume.dataset.volume;
//   }
// }

// // animatePlayback displays an animation when
// // the video is played or paused
// function animatePlayback() {
//   playbackAnimation.animate(
//     [
//       {
//         opacity: 1,
//         transform: 'scale(1)',
//       },
//       {
//         opacity: 0,
//         transform: 'scale(1.3)',
//       },
//     ],
//     {
//       duration: 500,
//     }
//   );
// }

// // toggleFullScreen toggles the full screen state of the video
// // If the browser is currently in fullscreen mode,
// // then it should exit and vice versa.
// function toggleFullScreen() {
//   if (document.fullscreenElement) {
//     document.exitFullscreen();
//   } else if (document.webkitFullscreenElement) {
//     // Need this to support Safari
//     document.webkitExitFullscreen();
//   } else if (videoContainer.webkitRequestFullscreen) {
//     // Need this to support Safari
//     videoContainer.webkitRequestFullscreen();
//   } else {
//     videoContainer.requestFullscreen();
//   }
// }

// // updateFullscreenButton changes the icon of the full screen button
// // and tooltip to reflect the current full screen state of the video
// function updateFullscreenButton() {
//   fullscreenIcons.forEach((icon) => icon.classList.toggle('hidden'));

//   if (document.fullscreenElement) {
//     fullscreenButton.setAttribute('data-title', 'Exit full screen (f)');
//   } else {
//     fullscreenButton.setAttribute('data-title', 'Full screen (f)');
//   }
// }

// // togglePip toggles Picture-in-Picture mode on the video
// async function togglePip() {
//   try {
//     if (video !== document.pictureInPictureElement) {
//       pipButton.disabled = true;
//       await video.requestPictureInPicture();
//     } else {
//       await document.exitPictureInPicture();
//     }
//   } catch (error) {
//     console.error(error);
//   } finally {
//     pipButton.disabled = false;
//   }
// }

// // hideControls hides the video controls when not in use
// // if the video is paused, the controls must remain visible
// function hideControls() {
//   if (video.paused) {
//     return;
//   }

//   videoControls.classList.add('hide');
// }

// // showControls displays the video controls
// function showControls() {
//   videoControls.classList.remove('hide');
// }

// // keyboardShortcuts executes the relevant functions for
// // each supported shortcut key
// function keyboardShortcuts(event) {
//   const { key } = event;
//   switch (key) {
//     case 'k':
//       togglePlay();
//       animatePlayback();
//       if (video.paused) {
//         showControls();
//       } else {
//         setTimeout(() => {
//           hideControls();
//         }, 2000);
//       }
//       break;
//     case 'm':
//       toggleMute();
//       break;
//     case 'f':
//       toggleFullScreen();
//       break;
//     case 'p':
//       togglePip();
//       break;
//   }
// }

// initializeVideo();

// // Add eventlisteners here
// playButton.addEventListener('click', togglePlay);
// video.addEventListener('play', updatePlayButton);
// video.addEventListener('pause', updatePlayButton);
// video.addEventListener('loadedmetadata', initializeVideo);
// video.addEventListener('timeupdate', updateTimeElapsed);
// video.addEventListener('timeupdate', updateProgress);
// video.addEventListener('volumechange', updateVolumeIcon);
// video.addEventListener('click', togglePlay);
// video.addEventListener('click', animatePlayback);
// video.addEventListener('mouseenter', showControls);
// video.addEventListener('mouseleave', hideControls);
// videoControls.addEventListener('mouseenter', showControls);
// videoControls.addEventListener('mouseleave', hideControls);
// seek.addEventListener('mousemove', updateSeekTooltip);
// seek.addEventListener('input', skipAhead);
// volume.addEventListener('input', updateVolume);
// volumeButton.addEventListener('click', toggleMute);
// fullscreenButton.addEventListener('click', toggleFullScreen);
// videoContainer.addEventListener('fullscreenchange', updateFullscreenButton);
// pipButton.addEventListener('click', togglePip);

// document.addEventListener('DOMContentLoaded', () => {
//   if (!('pictureInPictureEnabled' in document)) {
//     pipButton.classList.add('hidden');
//   }
// });
// document.addEventListener('keyup', keyboardShortcuts);



//  courseId = 1;
let lessonNo = 0;
let sectionNo = 0;

let windowURL = window.location.href;
// console.log(windowURL);

let paramString = windowURL.split('#')[1];
// console.log(paramString);

let courseId = paramString;

let courses = [
    {
        courseId: 1,
        courseCartegory: `Frontend Development`,
        courseSubCartegory: `Angular`,
        courseTitle: `Learn angular.js from scratch to experts`,
        courseImage: `../assets/images/angular@2x.png`,
        courseInstructor: `Ogoluwa Ojewale`,
        instructorImage: `../assets/images/instructor@2x.png`,
        courseDesc: `Master Angular Js from the basics to building an advanced appication with Firebase's Firestore as ...`,
        courseColor: `red`,
        courseProgress: 35,
        lessons: [
            {
                title: 'Intro',
                section: 0,
                type: 'video',
                duration: '1 hour',
                quantity: 1,
                done: false,
                sections: [
                    {
                        title: 'Introduction',
                        type: 'video',
                        duration: '20 min',
                        subLesson: 1,
                        quantity: 1,
                        notes: [
                            'Welcome to the first lecture in our series on Product Design. I want to start by introducing the four lecturers who are going to be speaking in the series.',
                            'Prepare for a career in the high-growth field of UX design, no experience or degree required. With professional training designed by Google, get on the fast-track to a competitively paid job. There are currently 113,700 U.S. job openings in UX design with an average entry-level salary of $58,600.',
                            'User experience (UX) designers focus on the interaction that users have with products, like websites, apps, and physical objects. They make those everyday interactions useful, enjoyable, and accessible.',
                            'Over 7 courses, gain in-demand skills that will prepare you for an entry-level job. At under 10 hours per week, you can complete the certificate in less than 6 months.'
                        ],
                        done: false
                    }
                ]
            },
            {
                // title: 'What you need to know',
                title: 'Product Designing for Beginners',
                section: 1,
                type: 'video',
                duration: '2 hr',
                quantity: 1,
                done: false,
                sections: [
                    {
                        title: 'Introduction',
                        type: 'video',
                        duration: '20 min',
                        subLesson: 1,
                        quantity: 1,
                        notes: [
                            'Welcome to the first lecture in our series on Product Design. I want to start by introducing the four lecturers who are going to be speaking in the series.',
                            'Prepare for a career in the high-growth field of UX design, no experience or degree required. With professional training designed by Google, get on the fast-track to a competitively paid job. There are currently 113,700 U.S. job openings in UX design with an average entry-level salary of $58,600.',
                            'User experience (UX) designers focus on the interaction that users have with products, like websites, apps, and physical objects. They make those everyday interactions useful, enjoyable, and accessible.',
                            'Over 7 courses, gain in-demand skills that will prepare you for an entry-level job. At under 10 hours per week, you can complete the certificate in less than 6 months.'
                        ],
                        done: true
                    },
                    {
                        title: 'What you need to know',
                        type: 'video',
                        duration: '40 min',
                        subLesson: 3,
                        quantity: 1,
                        notes: [
                            'Welcome to the first lecture in our series on Product Design. I want to start by introducing the four lecturers who are going to be speaking in the series.',
                            'Prepare for a career in the high-growth field of UX design, no experience or degree required. With professional training designed by Google, get on the fast-track to a competitively paid job. There are currently 113,700 U.S. job openings in UX design with an average entry-level salary of $58,600.',
                            'User experience (UX) designers focus on the interaction that users have with products, like websites, apps, and physical objects. They make those everyday interactions useful, enjoyable, and accessible.',
                            'Over 7 courses, gain in-demand skills that will prepare you for an entry-level job. At under 10 hours per week, you can complete the certificate in less than 6 months.'
                        ],
                        done: true
                    },
                    {
                        title: 'Understanding ArtBoards',
                        type: 'pdf',
                        duration: '20 min',
                        subLesson: 4,
                        quantity: 1,
                        notes: [
                            'Welcome to the first lecture in our series on Product Design. I want to start by introducing the four lecturers who are going to be speaking in the series.',
                            'Prepare for a career in the high-growth field of UX design, no experience or degree required. With professional training designed by Google, get on the fast-track to a competitively paid job. There are currently 113,700 U.S. job openings in UX design with an average entry-level salary of $58,600.',
                            'User experience (UX) designers focus on the interaction that users have with products, like websites, apps, and physical objects. They make those everyday interactions useful, enjoyable, and accessible.',
                            'Over 7 courses, gain in-demand skills that will prepare you for an entry-level job. At under 10 hours per week, you can complete the certificate in less than 6 months.'
                        ],
                        done: false
                    },
                    {
                        title: 'Using Colors and Graphic Styles',
                        type: 'video',
                        duration: '30 min',
                        subLesson: 5,
                        quantity: 1,
                        notes: [
                            'Welcome to the first lecture in our series on Product Design. I want to start by introducing the four lecturers who are going to be speaking in the series.',
                            'Prepare for a career in the high-growth field of UX design, no experience or degree required. With professional training designed by Google, get on the fast-track to a competitively paid job. There are currently 113,700 U.S. job openings in UX design with an average entry-level salary of $58,600.',
                            'User experience (UX) designers focus on the interaction that users have with products, like websites, apps, and physical objects. They make those everyday interactions useful, enjoyable, and accessible.',
                            'Over 7 courses, gain in-demand skills that will prepare you for an entry-level job. At under 10 hours per week, you can complete the certificate in less than 6 months.'
                        ],
                        done: false
                    },
                    {
                        title: 'Creating Text Styles',
                        type: 'video',
                        duration: '30 min',
                        subLesson: 6,
                        quantity: 1,
                        notes: [
                            'Welcome to the first lecture in our series on Product Design. I want to start by introducing the four lecturers who are going to be speaking in the series.',
                            'Prepare for a career in the high-growth field of UX design, no experience or degree required. With professional training designed by Google, get on the fast-track to a competitively paid job. There are currently 113,700 U.S. job openings in UX design with an average entry-level salary of $58,600.',
                            'User experience (UX) designers focus on the interaction that users have with products, like websites, apps, and physical objects. They make those everyday interactions useful, enjoyable, and accessible.',
                            'Over 7 courses, gain in-demand skills that will prepare you for an entry-level job. At under 10 hours per week, you can complete the certificate in less than 6 months.'
                        ],
                        done: false
                    },
                    {
                        title: '10 Quick Tips!',
                        type: 'video',
                        duration: '30 min',
                        subLesson: 2,
                        quantity: 1,
                        notes: [
                            'Welcome to the first lecture in our series on Product Design. I want to start by introducing the four lecturers who are going to be speaking in the series.',
                            'Prepare for a career in the high-growth field of UX design, no experience or degree required. With professional training designed by Google, get on the fast-track to a competitively paid job. There are currently 113,700 U.S. job openings in UX design with an average entry-level salary of $58,600.',
                            'User experience (UX) designers focus on the interaction that users have with products, like websites, apps, and physical objects. They make those everyday interactions useful, enjoyable, and accessible.',
                            'Over 7 courses, gain in-demand skills that will prepare you for an entry-level job. At under 10 hours per week, you can complete the certificate in less than 6 months.'
                        ],
                        done: false
                    }
                ]
            },
            {
                title: 'Sketch 3 Intermediate level',
                section: 2,
                type: 'video',
                duration: '30 min',
                quantity: 1,
                done: false,
                sections: [
                    {
                        title: 'Introduction',
                        type: 'video',
                        duration: '30 min',
                        quantity: 1,
                        subLesson: 1,
                        notes: [
                            'Welcome to the first lecture in our series on Product Design. I want to start by introducing the four lecturers who are going to be speaking in the series.',
                            'Prepare for a career in the high-growth field of UX design, no experience or degree required. With professional training designed by Google, get on the fast-track to a competitively paid job. There are currently 113,700 U.S. job openings in UX design with an average entry-level salary of $58,600.',
                            'User experience (UX) designers focus on the interaction that users have with products, like websites, apps, and physical objects. They make those everyday interactions useful, enjoyable, and accessible.',
                            'Over 7 courses, gain in-demand skills that will prepare you for an entry-level job. At under 10 hours per week, you can complete the certificate in less than 6 months.'
                        ],
                        done: false
                    }
                ]
            },
            {
                title: 'Sketch Advanced Stuff',
                section: 3,
                type: 'video',
                duration: '20 min',
                quantity: 1,
                done: false,
                sections: [
                    {
                        title: 'Introduction',
                        type: 'video',
                        duration: '20 min',
                        quantity: 1,
                        subLesson: 1,
                        notes: [
                            'Welcome to the first lecture in our series on Product Design. I want to start by introducing the four lecturers who are going to be speaking in the series.',
                            'Prepare for a career in the high-growth field of UX design, no experience or degree required. With professional training designed by Google, get on the fast-track to a competitively paid job. There are currently 113,700 U.S. job openings in UX design with an average entry-level salary of $58,600.',
                            'User experience (UX) designers focus on the interaction that users have with products, like websites, apps, and physical objects. They make those everyday interactions useful, enjoyable, and accessible.',
                            'Over 7 courses, gain in-demand skills that will prepare you for an entry-level job. At under 10 hours per week, you can complete the certificate in less than 6 months.'
                        ],
                        done: false
                    }
                ]
            }
        ]
    }
];


const videoFunc = async () => {
    // const videoFunc = () => {
    const video = lessonCardBody.querySelector('#video');
    const videoContainer = lessonCardBody.querySelector('.video-container');
    const videoControls = lessonCardBody.querySelector('#video-controls-container');
    const progressBar = lessonCardBody.querySelector('#progress-bar');
    const seek = lessonCardBody.querySelector('#seek');
    const seekTooltip = lessonCardBody.querySelector('#seek-tooltip');
    const playBtn = lessonCardBody.querySelector('#play-btn');
    const bigPlayBtn = lessonCardBody.querySelector('#big-play-btn');
    // const pauseBtn = lessonCardBody.querySelector('#pause-btn');
    const timeElapsed = lessonCardBody.querySelector('#time-elapsed');
    const duration = lessonCardBody.querySelector('#duration');
    const backwardBtn = lessonCardBody.querySelector('#backward-btn');
    const selectSpeed = lessonCardBody.querySelector('#select-speed');
    const forwardBtn = lessonCardBody.querySelector('#forward-btn');
    const bookmarkBtn = lessonCardBody.querySelector('#bookmark-btn');
    const muteBtn = lessonCardBody.querySelector('#mute-btn');
    const videoSettingBtn = lessonCardBody.querySelector('#video-setting-btn');
    const fullsizeBtn = lessonCardBody.querySelector('#fullsize-btn');
    const videoWidthBtn = lessonCardBody.querySelector('#video-width-btn');

    video.addEventListener('loadeddata', function () {
        console.log(playBtn);
        console.log(bigPlayBtn);
        // Video is loaded and can be played

        const videoWorks = !!document.createElement('video').canPlayType;
        if (videoWorks) {
            video.controls = false;
            videoControls.classList.remove('hidden');
            initializeVideo();
        }

        // // Add functions here

        // togglePlay toggles the playback state of the video.
        // If the video playback is paused or ended, the video is played
        // otherwise, the video is paused
        function togglePlay() {
            if (video.paused || video.ended) {
                video.play();
            } else {
                video.pause();
            }
        }
        function videoPlayFunc() {
                video.play();
                bigPlayBtn.classList.add('hidden');
        }

        // updatePlayButton updates the playback icon and tooltip
        // depending on the playback state
        function updatePlayButton() {
            playbackIcons.forEach((icon) => icon.classList.toggle('hidden'));
            if (video.paused) {
                playButton.setAttribute('data-title', 'Play (k)');
            } else {
                playButton.setAttribute('data-title', 'Pause (k)');
            }
        }

        // formatTime takes a time length in seconds and returns the time in
        // minutes and seconds
        function formatTime(timeInSeconds) {
            const result = new Date(timeInSeconds * 1000).toISOString().substr(11, 8);

            return {
                minutes: result.substr(3, 2),
                seconds: result.substr(6, 2),
            };
        }


        // initializeVideo sets the video duration, and maximum value of the
        // progressBar
        function initializeVideo() {
            // console.log(video);
            // console.log(video.duration);
            const videoDuration = Math.round(video.duration);
            // console.log(videoDuration);
            seek.setAttribute('max', videoDuration);
            progressBar.setAttribute('max', videoDuration);
            const time = formatTime(videoDuration);
            duration.innerText = `${time.minutes}:${time.seconds}`;
            duration.setAttribute('datetime', `${time.minutes}m ${time.seconds}s`);
        }

        function updateTimeElapsed() {
            const time = formatTime(Math.round(video.currentTime));
            timeElapsed.innerText = `${time.minutes}:${time.seconds}`;
            timeElapsed.setAttribute('datetime', `${time.minutes}m ${time.seconds}s`);
        }


        // updateTimeElapsed indicates how far through the video
        // the current playback is by updating the timeElapsed element
        function updateTimeElapsed() {
            const time = formatTime(Math.round(video.currentTime));
            timeElapsed.innerText = `${time.minutes}:${time.seconds}`;
            timeElapsed.setAttribute('datetime', `${time.minutes}m ${time.seconds}s`);
        }

        // updateProgress indicates how far through the video
        // the current playback is by updating the progress bar
        function updateProgress() {
            seek.value = Math.floor(video.currentTime);
            progressBar.value = Math.floor(video.currentTime);
        }

        function skipAhead(event) {
            const skipTo = event.target.dataset.seek
                ? event.target.dataset.seek
                : event.target.value;
            video.currentTime = skipTo;
            progressBar.value = skipTo;
            seek.value = skipTo;
        }

        // updateSeekTooltip uses the position of the mouse on the progress bar to
        // roughly work out what point in the video the user will skip to if
        // the progress bar is clicked at that point
        // function updateSeekTooltip(event) {
        //     console.log(parseInt(event.target.getAttribute('max'), 10));
        //     console.log(parseInt(event.target.getAttribute('max')));
        //     const skipTo = Math.round(
        //         (event.offsetX / event.target.clientWidth) *
        //         parseInt(event.target.getAttribute('max'), 10)
        //     );
        //     const t = formatTime(skipTo);
        //     seekTooltip.textContent = `${t.minutes}:${t.seconds}`;
        //     const rect = video.getBoundingClientRect();
        //     seekTooltip.style.left = `${event.pageX - rect.left}px`;
        // }

        const playFunc = () => {
            console.log('play');
            if (video.paused || video.ended) {
                video.play();
                // console.log(videoControls.closest('.video-controls-container'));
                videoControls.closest('.video-controls-container').classList.add('hidden');
            } else {
                video.pause();
                bigPlayBtn.classList.remove('hidden');
                // console.log(videoControls.closest('.video-controls-container'));
                videoControls.closest('.video-controls-container').classList.remove('hidden');
            }
        }
        function hideControls() {
            if (video.paused) {
                return;
            }
            // console.log(videoControls.closest('.video-controls-container'));
            videoControls.closest('.video-controls-container').classList.add('hidden');
        }

        // showControls displays the video controls
        function showControls() {
            // console.log(videoControls.closest('.video-controls-container'));
            videoControls.closest('.video-controls-container').classList.remove('hidden');
        }

        // const pauseFunc = () => {
        //     console.log('pause');
        // }

        const backwardFunc = () => {
            console.log('backward');
            const skipTo = video.currentTime - 5;
            video.currentTime = skipTo;
            progressBar.value = skipTo;
            seek.value = skipTo;
        }
        const forwardFunc = () => {
            console.log('forward');
            const skipTo = video.currentTime + 5;
            video.currentTime = skipTo;
            progressBar.value = skipTo;
            seek.value = skipTo;
        }

        const speedFunc = (e) => {
            console.log('speed');
            console.log(e.target);
            console.log(e.target.value);
            console.log(video.defaultPlaybackRate);
            // video.defaultPlaybackRate = 1.0;
// video.play();

/* now play three times as fast just for the heck of it */
console.log(video.playbackRate);
video.playbackRate = e.target.value;
console.log(video.playbackRate);
        }

        const bookmarkFunc = () => {
            console.log('bookmark');
        }

        const muteFunc = () => {
            video.muted = !video.muted;
            console.log('mute');
            console.log(video.muted);
        }

        const videoSettingFunc = () => {
            console.log('videoSetting');
        }

        const fullsizeFunc = () => {
            console.log('fullsize');
              if (document.fullscreenElement) {
                document.exitFullscreen();
              } else if (document.webkitFullscreenElement) {
                // Need this to support Safari
                document.webkitExitFullscreen();
              } else if (videoContainer.webkitRequestFullscreen) {
                // Need this to support Safari
                videoContainer.webkitRequestFullscreen();
              } else {
                videoContainer.requestFullscreen();
              }
        }
        const videoWidthFunc = () => {
            console.log('videoWidth');
        }
        // const playFunc = () => {
        //     console.log('play');
        // }



        playBtn.addEventListener('click', playFunc);
        bigPlayBtn.addEventListener('click', videoPlayFunc);
        // pauseBtn.addEventListener('click', pauseFunc);
        backwardBtn.addEventListener('click', backwardFunc);
        forwardBtn.addEventListener('click', forwardFunc);
        selectSpeed.addEventListener('change', speedFunc);
        bookmarkBtn.addEventListener('click', bookmarkFunc);
        muteBtn.addEventListener('click', muteFunc);
        videoSettingBtn.addEventListener('click', videoSettingFunc);
        fullsizeBtn.addEventListener('click', fullsizeFunc);
        videoWidthBtn.addEventListener('click', videoWidthFunc);
        video.addEventListener('timeupdate', updateTimeElapsed);
        video.addEventListener('timeupdate', updateProgress);
        videoContainer.addEventListener('mouseenter', showControls);
        videoContainer.addEventListener('mouseleave', hideControls);
        // seek.addEventListener('mousemove', updateSeekTooltip);
        seek.addEventListener('input', skipAhead);

        // video.addEventListener('play', updatePlayButton);
        // video.addEventListener('pause', updatePlayButton);
        // video.addEventListener('volumechange', updateVolumeIcon);
        // video.addEventListener('loadedmetadata', initializeVideo);
        // video.addEventListener('click', animatePlayback);
        // video.addEventListener('mouseenter', showControls);
        // video.addEventListener('mouseleave', hideControls);
        // videoControls.addEventListener('mouseenter', showControls);
        // videoControls.addEventListener('mouseleave', hideControls);
        // videoContainer.addEventListener('fullscreenchange', updateFullscreenButton);
    }, false);


}

const overviewMain = () => {
    courses.forEach(course => {
        let overviewBody;
        let videoLesson;
        let pdfLesson;
        if (course.courseId == courseId) {
            instructorImage.forEach(img => {
                img.src = course.instructorImage;
            });
            instructorName.forEach(name => {
                name.textContent = course.courseInstructor;
            });
            courseTitle.textContent = course.courseTitle;
            let sectionBody = course.lessons[lessonNo].sections[sectionNo].notes;
            sectionTitle.textContent = course.lessons[lessonNo].sections[sectionNo].title;
            sectionBody.forEach(sBody => {
                overviewBody = `
                    <p class="font-medium my-3 text-light text-md">${sBody}</p>
                `;
                overviewContainers.forEach(overviewContainer => {
                    overviewContainer.innerHTML += overviewBody;
                });
            });
            pdfLesson = `
            <div class="pdf-container p-2 w-full h-full relative">
                <div class="flex items-center h-full justify-center gap-10">
                    <img src="../assets/images/pdf icon.png" class="w-16 md:w-36"
                        alt="pdf file">
                    <div class="course-info w-44 md:w-64">
                        <p class="font-light text-2xl mb-3">
                            ${course.lessons[lessonNo].sections[sectionNo].title}
                        </p>
                        <a href="" class="flex text-white font-medium text-lg justify-start px-5 gap-5" download>
                            <img src="../assets/images/Download Icon.png" class="w-6" alt="download">
                            <span>Download</span>
                        </a>
                    </div>
                </div>
            </div>
            `;
            videoLesson = `
            <div class="video-container flex flex-column items-center w-full h-full relative">
                <div class="video-body w-full h-full relative">
                    <video controls class="video w-full h-full" id="video"
                    preload="metadata">
                    <!-- preload="metadata" poster="../assets/images/Cover image.png"> -->
                        <source src="../assets/images/video.mp4" type="video/mp4">
                        </source>
                    </video>
                </div>
                <div class="video-controls-container hidden bg-black bg-opacity-20 absolute top-0 left-0 w-full h-full"
                    id="video-controls-container">
                    <div class="video-overlay absolute top-0 right-0 left-0 bottom-0">
                        <button id="big-play-btn"
                            class="btn w-14 absolute z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <img src="../assets/images/play icon.png" alt="">
                        </button>
                    </div>
                    <div
                        class="course-info absolute text-white top-0 right-0 w-1/2 px-8 py-8">
                        <div class="">
                            <div
                                class="course-icon mb-4 w-10 h-10 bg-white rounded-full p-2">
                                <img src="../assets/images/skech@2x.png" alt="">
                            </div>
                            <p class="font-normal my-1 text-2xl">
                                Product Designer For Beginners
                            </p>
                            <div
                                class="instructor-tag-container rounded-sm overflow-hidden">
                                <div
                                    class="instructor-tag-box bg-blue-300 pl-6 py-1.5 rounded-bl-full">
                                    <p class="text-base">Ogoluwa Ojewale</p>
                                    <p class="text-xs font-light text-capitalize">Senior
                                        Product designer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="video-controls bg-black bg-opacity-10 flex flex-col right-0 left-0 absolute bottom-0">
                        <div class="relative">
                            <div class="video-progress relative">
                                <progress class="w-full absolute top-0" id="progress-bar" value="0"
                                    min="0"></progress>
                                    <!-- <input class="seek" id="seek" value="0" min="0" -->
                                <input class="seek cursor-pointer w-full absolute top-0 m-0" id="seek" value="0" min="0"
                                    type="range" step="1">
                                <!-- <div class="seek-tooltip" id="seek-tooltip">00:00</div> -->
                            </div>
                        </div>
                        <div class="items-end flex justify-between pt-1 pb-2 px-2.5">
                            <div class="flex items-center gap-1 controls-left">
                                <div class="play-control">
                                    <button class="btn block" id="play-btn"
                                        data-title="Play (k)">
                                        <div class="play">
                                            <img src="../assets/images/videoactive-sm.png"
                                                class="w-4" alt="">
                                        </div>
                                        <div class="pause hidden">
                                            <img src="../assets/images/play.png"
                                                class="w-4" alt="">
                                        </div>
                                    </button>
                                    <!-- <button class="btn hidden" data-title="Pause (k)" id="pause-btn">
                                <img src="../assets/images/play.png" class="w-5" alt="">
                            </button> -->
                                </div>
                                <div class="backward-control">
                                    <button class="btn block" id="backward-btn"
                                        data-title="-10 seconds">
                                        <img src="../assets/images/move-left.png"
                                            class="w-5" alt="">
                                    </button>
                                </div>
                                <div class="speed-control">
                                    <!-- <button class="btn"> -->
                                    <select
                                        class="bg-white select-speed border-0 inline-block rounded-md px-1 text-sm font-medium color-dark"
                                        id="select-speed">
                                        <option value="0.25" class="text-tertiary">0.25x
                                        </option>
                                        <option value="0.50" class="text-tertiary">0.50x
                                        </option>
                                        <option value="0.75" class="text-tertiary">0.75x
                                        </option>
                                        <option value="1.00" class="text-tertiary">1.00x
                                        </option>
                                        <option value="1.25" class="text-tertiary">1.25x
                                        </option>
                                        <option value="1.50" class="text-tertiary">1.50x
                                        </option>
                                        <option value="1.75" class="text-tertiary">1.75x
                                        </option>
                                        <option value="2.00" class="text-tertiary">2.00x
                                        </option>
                                    </select>
                                    <!-- </button> -->
                                </div>
                                <div class="forward-control" id="forward-btn"
                                    data-title="+10">
                                    <button class="btn block">
                                        <img src="../assets/images/move-right.png"
                                            class="w-5" alt="">
                                    </button>
                                </div>
                                <div class="time tracking-wider text-xs font-light">
                                    <time id="time-elapsed">00 : 00</time>
                                    <span> / </span>
                                    <time id="duration">00 : 00</time>
                                </div>
                                <div class="bookmark-control">
                                    <button class="btn block" id="bookmark-btn">
                                        <img src="../assets/images/bookmark.png"
                                            class="w-5" alt="">
                                    </button>
                                </div>
                            </div>
                            <div class="flex items-center gap-1 controls-right">
                                <div class="play-control">
                                    <button class="btn block" id="mute-btn"
                                        data-title="Play (k)">
                                        <img src="../assets/images/volume.png"
                                            class="w-5" alt="">
                                    </button>
                                </div>
                                <div class="play-control">
                                    <button class="btn block" data-title="Play (k)">
                                        <img src="../assets/images/paper.png"
                                            class="w-5" alt="">
                                    </button>
                                </div>
                                <div class="speed-control">
                                    <!-- <button class="btn"> -->
                                    <select
                                        class="bg-white select-speed inline-block border-0 rounded-md px-1 text-sm font-medium color-dark"
                                        id="select-speed">
                                        <option value="cc" class="text-tertiary">cc
                                        </option>
                                    </select>
                                    <!-- </button> -->
                                </div>
                                <div class="setting-control">
                                    <button class="btn block" id="video-setting-btn">
                                        <img src="../assets/images/setting.png"
                                            class="w-5" alt="">
                                    </button>
                                </div>
                                <div class="fullsize-control">
                                    <button class="btn block" id="fullsize-btn"
                                        data-title="-10 seconds">
                                        <img src="../assets/images/fullsize.png"
                                            class="w-5" alt="">
                                    </button>
                                </div>
                                <div class="width-control">
                                    <button class="btn block" id="video-width-btn">
                                        <img src="../assets/images/width.png"
                                            class="w-5" alt="">
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            `;
            if (course.lessons[lessonNo].sections[sectionNo].type === 'video') {
                lessonCardBody.innerHTML = videoLesson;
                videoFunc();
            } else {
                lessonCardBody.innerHTML = pdfLesson;
            }
            prevBtn.addEventListener('click', () => {
                if (sectionNo > 0) {
                    sectionNo--;
                    // console.log(course.lessons[lessonNo].sections.length);
                    console.log('say ayy');
                    nextBtn.disabled = false;
                } else if (lessonNo > 0) {
                    lessonNo--;
                    sectionNo = 0;
                    // console.log(course.lessons.length);
                    console.log('say laaayy');
                    nextBtn.disabled = false;
                } else {
                    prevBtn.disabled = true;
                    console.log(course.lessons[lessonNo].sections.length);
                    console.log(course.lessons.length);
                    console.log('say naayy');
                }
                overviewMain();
            })
            nextBtn.addEventListener('click', () => {
                if (sectionNo < course.lessons[lessonNo].sections.length - 1) {
                    prevBtn.disabled = false;
                    sectionNo++;
                    // console.log(course.lessons[lessonNo].sections.length);
                    console.log('say ayy');
                } else if (lessonNo < course.lessons.length - 1) {
                    prevBtn.disabled = false;
                    lessonNo++;
                    sectionNo = 0;
                    // console.log(course.lessons.length);
                    console.log('say laaayy');
                } else {
                    nextBtn.disabled = true;
                    console.log(course.lessons[lessonNo].sections.length);
                    console.log(course.lessons.length);
                    console.log('say naayy');
                }
                overviewMain();
            })
        }
    });
}

let allLessonCheckBoxes;
let allSubLessonCheckBoxes;
let allSubLessonsLink;
const lessonMain = (lessonContainerLayout) => {
    courses.forEach(course => {
        let lessonBody;
        if (course.courseId == courseId) {
            // let isPdf = course.courseType === 'pdf' ? "" : "hidden";
            // let isVideo = course.courseType === 'video' ? "" : "hidden";
            let allLessons = course.lessons;
            let sectionBody = course.lessons[lessonNo].sections[sectionNo].notes;
            sectionTitle.textContent = course.lessons[lessonNo].sections[sectionNo].title;
            let allSubLessons = ``;
            allLessons.forEach(lesson => {
                allSubLessons = ``;
                let subLessons = lesson.sections;
                subLessons.forEach(subLesson => {
                    let subLessonBody = ``;
                    let isPdf = subLesson.type === 'pdf' ? `pdf-sm` : `video-sm`;
                    let isDone = subLesson.done ? "checked" : "hidden";
                    subLessonBody = `
                    <li class="sub-lessons sub-lesson-li w-full">
                        <a class="sub-lessons-link flex gap-3 py-3.5 cursor-pointer" id="link-${lesson.section}-${subLesson.subLesson}">
                            <input type="checkbox" class="lesson-checkbox hidden"
                                id="lesson-checkbox-${lesson.section}-${subLesson.subLesson}" ${isDone}>
                            <span for="lesson-checkbox-${lesson.section}-${subLesson.subLesson}"
                                class="lesson-check border rounded-md flex items-center justify-center w-5 h-5 p-0">
                                <img src="../assets/images/check.png" class="w-2.5"
                                    alt="check">
                            </span>
                            <div for="lesson-checkbox-${lesson.section}-${subLesson.subLesson}"
                                <h4 class="sub-lesson-title">
                                    ${subLesson.subLesson}. <span class="main-sub-lesson-title">${subLesson.title}</span>
                                </h4>
                                <div class="flex items-center gap-1">
                                    <img src="../assets/images/${isPdf}.png"
                                        alt="video icon" class="w-3.5 h-3.5">
                                    <p class="font-light text-sm text-light">${subLesson.quantity} ${subLesson.type} |
                                        ${subLesson.duration}
                                    </p>
                                </div>
                            </div>
                        </a>
                    </li>
                    `;
                    allSubLessons += subLessonBody;
                });
                lessonBody = `
                <li class="my-2.5 lesson-li">
                    <div class="">
                        <label for="view-sections-checkbox${lesson.section}"
                            class="view-sections-check cursor-pointer line-block w-full py-6 px-2">
                            <div class="flex gap-1 items-start justify-between">
                                <div class="">
                                    <h3 class="lesson-title font-medium text-base">Section
                                        ${lesson.section}: <span class="main-lesson-title">${lesson.title}</span></h3>
                                    <div class="flex gap-1 items-center">
                                        <img src="../assets/images/video-sm.png"
                                            alt="video icon" class="w-3.5 h-3.5">
                                        <p class="font-light text-sm text-light">
                                            1 video |
                                            20
                                            min
                                        </p>
                                    </div>
                                </div>
                                <div class="arrow">
                                    <img src="../assets/images/dropdown.png"
                                        class="not-active" alt="arrow down">
                                    <img src="../assets/images/dropdown-active2.png"
                                        class="active hidden" alt="arrow down">
                                    <img src="../assets/images/dropdown-active.png"
                                        class="sub-active hidden" alt="arrow down">
                                </div>
                            </div>
                        </label>
                        <input type="checkbox" name="view-sections" class="view-sections-checkbox hidden"
                            id="view-sections-checkbox${lesson.section}">
                        <ul class="sub-lessons-container ml-4 hidden">
                            ${allSubLessons}
                        </ul>
                    </div>
                </li>
                `;
                lessonContainerLayout.innerHTML += lessonBody;
                allLessonCheckBoxes = lessonContainerLayout.querySelectorAll('.view-sections-checkbox');
                allSubLessonCheckBoxes = lessonContainerLayout.querySelectorAll('.lesson-checkbox');
                allSubLessonsLink = lessonContainerLayout.querySelectorAll('.sub-lessons-link');
                allSubLessonsLink.forEach(link => {
                    link.addEventListener('click', (e) => {
                        e.preventDefault();
                        link.closest('.sub-lesson-li').querySelector('.lesson-checkbox').checked = true;
                        addActiveClass(link);
                        course.lessons.forEach(lsn => {
                            if (link.closest('.lesson-li').querySelector('.main-lesson-title').textContent === lsn.title) {
                                lessonNo = course.lessons.indexOf(lsn);
                                lsn.sections.forEach(section => {
                                    if (link.closest('.sub-lesson-li').querySelector('.main-sub-lesson-title').textContent === section.title) {
                                        sectionNo = lsn.sections.indexOf(section);
                                    }
                                });
                            }
                        });
                        overviewMain();
                    })
                });
            });

            const addActiveClass = (el) => {
                allLessonCheckBoxes.forEach(checkBox => {
                    if (checkBox.id === el.id) {
                        checkBox.closest('li').querySelector('.view-sections-check').classList.add('active');
                    } else {
                        checkBox.closest('li').querySelector('.view-sections-check').classList.remove('active');
                    }
                });
                allSubLessonsLink.forEach(link => {
                    let parentLi = link.closest('.lesson-li').querySelector('.view-sections-checkbox');
                    let parentEl = el.closest('.lesson-li').querySelector('.view-sections-checkbox');
                    if (link.id === el.id) {
                        link.closest('.lesson-li').querySelector('.view-sections-check').classList.add('sub-active');
                        link.closest('.lesson-li').querySelector('.view-sections-check').classList.remove('active');
                        link.closest('.sub-lesson-li').classList.add('active');
                        link.closest('.sub-lesson-li').querySelector('.lesson-check').style.visibility = 'hidden';
                    } else {
                        if (parentLi.id !== parentEl.id) {
                            link.closest('.lesson-li').querySelector('.view-sections-check').classList.remove('sub-active');
                        }
                        link.closest('.sub-lesson-li').querySelector('.lesson-check').style.visibility = 'visible';
                        link.closest('.sub-lesson-li').classList.remove('active');
                    }
                });
            }
            allLessonCheckBoxes.forEach(checkBox => {
                checkBox.addEventListener('change', () => {
                    addActiveClass(checkBox);
                })
            });
        }
    });
}


overviewMain();

const checkScreenSize = () => {
    // console.log(screen.width);
    console.log(window.innerWidth);
    if (window.innerWidth < 768) {
        lessonMain(lessonContainer);
    } else {
        lessonMain(lessonContainerMd);
    }
}

window.addEventListener('load', checkScreenSize);
// window.addEventListener('resize', checkScreenSize);

radioTabs.forEach(radioTab => {
    radioTab.addEventListener('change', () => {
        tabs.forEach(tab => {
            tab.classList.remove('tab-active')
            if (radioTab.id === tab.htmlFor && radioTab.checked === true) {
                tab.classList.add('tab-active')
                // console.log(tab.htmlFor)
            }
        });
    })
});

// videoFunc();


// playBtn.addEventListener('click', playFunc);
// // pauseBtn.addEventListener('click', pauseFunc);
// backwardBtn.addEventListener('click', backwardFunc);
// forwardBtn.addEventListener('click', forwardFunc);
// selectSpeed.addEventListener('click', speedFunc);
// bookmarkBtn.addEventListener('click', bookmarkFunc);
// muteBtn.addEventListener('click', muteFunc);
// videoSettingBtn.addEventListener('click', videoSettingFunc);
// fullsizeBtn.addEventListener('click', fullsizeFunc);
// videoWidthBtn.addEventListener('click', videoWidthFunc);
// video.addEventListener('timeupdate', updateTimeElapsed);
// video.addEventListener('timeupdate', updateProgress);

// // video.addEventListener('play', updatePlayButton);
// // video.addEventListener('pause', updatePlayButton);
// // video.addEventListener('volumechange', updateVolumeIcon);
// // video.addEventListener('loadedmetadata', initializeVideo);
// // video.addEventListener('click', togglePlay);
// // video.addEventListener('click', animatePlayback);
// // video.addEventListener('mouseenter', showControls);
// // video.addEventListener('mouseleave', hideControls);
// // videoControls.addEventListener('mouseenter', showControls);
// // videoControls.addEventListener('mouseleave', hideControls);
// // seek.addEventListener('mousemove', updateSeekTooltip);
// // seek.addEventListener('input', skipAhead);
// // volume.addEventListener('input', updateVolume);
// // volumeButton.addEventListener('click', toggleMute);
// // fullscreenButton.addEventListener('click', toggleFullScreen);
// // videoContainer.addEventListener('fullscreenchange', updateFullscreenButton);
// // .addEventListener('click', );
// // const timeElapsed = document.querySelector('#time-elapsed');
// // const duration = document.querySelector('#duration');
