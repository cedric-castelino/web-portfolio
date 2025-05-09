import Carousel from './Carousel';

import shop1 from './assets/shop.png';
import shop2 from './assets/shopping2.png';
import shop3 from './assets/shopping4.png';
import shop4 from './assets/shopping5.png';
import link from './assets/link.png';
import cyber1 from './assets/cyber.png';
import cyber2 from './assets/cyber1.jpg';
import cyber3 from './assets/cyber2.png';
import cyber4 from './assets/cyber3.png';
import cyber5 from './assets/cyber4.png';
import cyber6 from './assets/death.gif';
import cloudy1 from './assets/cloudy.png';
import cloudy2 from './assets/cloudy1.png';
import cloudy3 from './assets/cloudy2.png';
import cloudy4 from './assets/cloudy3.png';
import cloudy5 from './assets/cloudy4.png';
import beans from './assets/UNSWBeans.png';
import satellite from './assets/BlackoutController.png';
import dungeon from './assets/dungeon_mania.png';
import brain from './assets/brain1.png';
import brain1 from './assets/brain2.png';
import brain2 from './assets/brain3.png';
import brain3 from './assets/brain4.png';
import brain4 from './assets/brain5.png';
import brain5 from './assets/brain6.png';
import brain6 from './assets/brain7.png';
import brain7 from './assets/brain8.png';


const cyberImages = [cyber1, cyber2, cyber3, cyber4, cyber5, cyber6];
const cloudyImages = [cloudy1, cloudy2, cloudy3, cloudy4, cloudy5];
const brainImages = [brain, brain1, brain2, brain3, brain4, brain5, brain6, brain7];

function Projects() {
    return (
        <div className="flex flex-col items-center">
            <h1 className="text-3xl font-bold mt-8 mb-4">Project Timeline</h1>
        <ul className="timeline mt-5">
            <li>
                <div className="timeline-start timeline-box hover:bg-base-200">
                    <a href="#shopping-kiosk" className="block w-full h-full">Shopping Kiosk</a>
                </div>
                <div className="timeline-middle">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                >
                    <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                    />
                </svg>
                </div>
                <hr />
            </li>
            <li>
                <hr />
                <div className="timeline-middle">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                >
                    <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                    />
                </svg>
                </div>
                <div className="timeline-end timeline-box hover:bg-base-200">
                    <a href="#cyber-escape" className="block w-full h-full">Cyber Escape</a>
                </div>
                <hr />
            </li>
            <li>
                <hr />
                <div className="timeline-start timeline-box hover:bg-base-200">
                    <a href="#cloudy-minds" className="block w-full h-full">Cloudy Minds</a>
                </div>
                <div className="timeline-middle">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                >
                    <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                    />
                </svg>
                </div>
                <hr />
            </li>
            <li>
                <hr />
                <div className="timeline-middle">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                >
                    <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                    />
                </svg>
                </div>
                <div className="timeline-end timeline-box hover:bg-base-200">
                    <a href="#unsw-beans" className="block w-full h-full">UNSW Beans</a>
                </div>
                <hr />
            </li>
            <li>
                <hr />
                <div className="timeline-start timeline-box hover:bg-base-200">
                    <a href="#satellite-link" className="block w-full h-full">Satellite Simulation</a>
                </div>
                <div className="timeline-middle">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                >
                    <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                    />
                </svg>
                </div>
                <hr />
            </li>
            <li>
                <hr />
                <div className="timeline-middle">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                >
                    <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                    />
                </svg>
                </div>
                <div className="timeline-end timeline-box hover:bg-base-200">
                    <a href="#dungeon-mania" className="block w-full h-full">Dungeon Mania</a>
                </div>
                <hr />
            </li>
            <li>
                <hr />
                <div className="timeline-start timeline-box hover:bg-base-200">
                    <a href="#big-brain" className="block w-full h-full">Big Brain</a>
                </div>
                <div className="timeline-middle">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                >
                    <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                    />
                </svg>
                </div>
                <hr />
            </li>
            <li>
                <hr />
                <div className="timeline-middle">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                >
                    <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                    />
                </svg>
                </div>
                <div className="timeline-end timeline-box hover:bg-base-200">
                    <a href="#web-portfolio" className="block w-full h-full">Web Portfolio</a>
                </div>
            </li>
            </ul>

            <div id="web-portfolio" className="items-start bg-base-200 pl-4 w-[95%] mt-10 rounded-xl relative mb-4">
                <h1 className="text-3xl font-bold mt-5">Web Portfolio</h1>
                <h1 className="text-xl font-bold mt-5 absolute top-0 right-6">2025</h1>
                <ul className="menu bg-base-200 lg:menu-horizontal rounded-box mt-5 bg-base-300">
                    <li>
                        <a 
                            href="https://github.com/cedric-castelino/web-portfolio"
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.39 7.86 10.92.58.11.79-.25.79-.56v-2.17c-3.2.7-3.88-1.42-3.88-1.42-.52-1.31-1.28-1.66-1.28-1.66-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.97.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.72 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.45.11-3.01 0 0 .97-.31 3.18 1.18a11.1 11.1 0 015.8 0c2.21-1.49 3.18-1.18 3.18-1.18.63 1.56.24 2.72.12 3.01.74.81 1.18 1.84 1.18 3.1 0 4.45-2.7 5.43-5.26 5.72.41.35.77 1.04.77 2.1v3.11c0 .31.21.68.8.56A10.5 10.5 0 0023.5 12c0-6.35-5.15-11.5-11.5-11.5z" />
                        </svg>
                        Tailwind, Javascript
                        </a>
                    </li>
                </ul>
                <p className="text-md mt-5 w-[95%] mb-5">This web portfolio was created entirely through the use of React, Tailwind CSS and JavaScript. The website utilises a range of visual elements to provide the user with an informative and engaging experience. The main aim of this project is to showcase my skills and experience in the field of software development and provide an overview of my contact details. The website itself uses a modern colour palette to ensure a high level of visibility and readability. The site also utilises a range of multimedia forms to convey information to the user in differing ways.</p>
            </div>

            <div id="big-brain" className="items-start bg-base-200 pl-4 w-[95%] mt-10 rounded-xl relative mb-4">
                <h1 className="text-3xl font-bold mt-5">Big Brain - Kahoot Clone</h1>
                <h1 className="text-xl font-bold mt-5 absolute top-0 right-6">2025</h1>
                <ul className="menu bg-base-200 lg:menu-horizontal rounded-box mt-5 bg-base-300">
                    <li>
                        <a 
                            href="https://github.com/cedric-castelino/bigbrain-deploy"
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.39 7.86 10.92.58.11.79-.25.79-.56v-2.17c-3.2.7-3.88-1.42-3.88-1.42-.52-1.31-1.28-1.66-1.28-1.66-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.97.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.72 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.45.11-3.01 0 0 .97-.31 3.18 1.18a11.1 11.1 0 015.8 0c2.21-1.49 3.18-1.18 3.18-1.18.63 1.56.24 2.72.12 3.01.74.81 1.18 1.84 1.18 3.1 0 4.45-2.7 5.43-5.26 5.72.41.35.77 1.04.77 2.1v3.11c0 .31.21.68.8.56A10.5 10.5 0 0023.5 12c0-6.35-5.15-11.5-11.5-11.5z" />
                        </svg>
                        Tailwind, Javascript
                        </a>
                    </li>
                </ul>
                <p className="text-md mt-5 w-[95%]">Big Brain is a website program created to mirror the functionality of Kahoot. The website was created and styled using React and Tailwind CSS. The website's functionality was created and tested through the use of JavaScript. The entire website was made from scratch, with unique styling features implemented. The website also allows for multiple users, allowing one quiz session to be played by various users of the website. The program also communicates with an attached backend via API calls, allowing for user data to be stored, changed and accessed as required.</p>
                <p className="text-md mt-5 w-[95%]">The site is entered via a login and registration page. The home page then allows the users to create games, edit games, start a game session, stop a game session or log out. The edit game page allows the user to generate specific questions for the game, allowing for a range of input fields that are utilised for gameplay functionality and scoring. These elements were also tested for mobile functionality, accessibility, and compliance with UI/UX design principles.</p>
                <div className='mt-5 mb-4'>
                    <Carousel images={brainImages} />
                </div>
            </div>

            <div id="dungeon-mania" className="items-start bg-base-200 pl-4 w-[95%] mt-10 rounded-xl relative mb-4">
                <h1 className="text-3xl font-bold mt-5">Dungeon Mania Game</h1>
                <h1 className="text-xl font-bold mt-5 absolute top-0 right-6">2023</h1>
                <ul className="menu bg-base-200 lg:menu-horizontal rounded-box mt-5 bg-base-300">
                    <li>
                        <a 
                            href="https://github.com/cedric-castelino/Dungeon-Mania"
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.39 7.86 10.92.58.11.79-.25.79-.56v-2.17c-3.2.7-3.88-1.42-3.88-1.42-.52-1.31-1.28-1.66-1.28-1.66-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.97.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.72 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.45.11-3.01 0 0 .97-.31 3.18 1.18a11.1 11.1 0 015.8 0c2.21-1.49 3.18-1.18 3.18-1.18.63 1.56.24 2.72.12 3.01.74.81 1.18 1.84 1.18 3.1 0 4.45-2.7 5.43-5.26 5.72.41.35.77 1.04.77 2.1v3.11c0 .31.21.68.8.56A10.5 10.5 0 0023.5 12c0-6.35-5.15-11.5-11.5-11.5z" />
                        </svg>
                        Java
                        </a>
                    </li>
                </ul>
                <p className="text-md mt-5 w-[95%]">This game is a 2D explorer, where the player is put into dynamic environments, with a range of enemies, allies and items. To create this game, I worked collaboratively with one other member, to generate the backend functionality for various elements of the game. This was done entirely in Java and resulted in a fully functional game. Furthermore, we wrote and completed rigorous testing for the game, exploring a range of cases.</p>
                <p className="text-md mt-5 w-[95%]">The game was created for a UNSW course (COMP2511), and required skills in problem-solving, communication and documentation for its completion. This documentation included UML diagrams, inline comments and weekly blog updates with reflections.</p>
                <div className='mt-5 mb-4 flex flex-wrap justify-center'>
                    <img className='w-[30%]' src={dungeon}/>
                </div>
            </div>

            <div id="satellite-link" className="items-start bg-base-200 pl-4 w-[95%] mt-10 rounded-xl relative mb-4">
                <h1 className="text-3xl font-bold mt-5">Satellite Simulation Program</h1>
                <h1 className="text-xl font-bold mt-5 absolute top-0 right-6">2023</h1>
                <ul className="menu bg-base-200 lg:menu-horizontal rounded-box mt-5 bg-base-300">
                    <li>
                        <a 
                            href="https://github.com/cedric-castelino/Satellite"
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.39 7.86 10.92.58.11.79-.25.79-.56v-2.17c-3.2.7-3.88-1.42-3.88-1.42-.52-1.31-1.28-1.66-1.28-1.66-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.97.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.72 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.45.11-3.01 0 0 .97-.31 3.18 1.18a11.1 11.1 0 015.8 0c2.21-1.49 3.18-1.18 3.18-1.18.63 1.56.24 2.72.12 3.01.74.81 1.18 1.84 1.18 3.1 0 4.45-2.7 5.43-5.26 5.72.41.35.77 1.04.77 2.1v3.11c0 .31.21.68.8.56A10.5 10.5 0 0023.5 12c0-6.35-5.15-11.5-11.5-11.5z" />
                        </svg>
                        Java
                        </a>
                    </li>
                </ul>
                <p className="text-md mt-5 w-[95%]">This program was an introduction to object-oriented programming, simulating a range of satellites and devices, each with different attributes. The program would calculate the orbital movement of the satellites and their distances were used to check their communicative range. This range also impacted the attribute of file sharing, which required functionality for file sizes, contents and the impact of moving out of the designated distance while transferring the file. Tests were also written for a variety of cases.</p>
                <p className="text-md mt-5 w-[95%]">The program was created for a UNSW course (COMP2511) and required skills in problem-solving and documentation for its completion. This documentation included UML diagrams and inline comments.</p>
                <div className='mt-5 mb-4 flex flex-wrap justify-center'>
                    <img className='w-[30%]' src={satellite}/>
                </div>
            </div>

            <div id="unsw-beans" className="items-start bg-base-200 pl-4 w-[95%] mt-10 rounded-xl relative mb-4">
                <h1 className="text-3xl font-bold mt-5">UNSW Beans - Microsoft Teams Clone</h1>
                <h1 className="text-xl font-bold mt-5 absolute top-0 right-6">2022</h1>
                <ul className="menu bg-base-200 lg:menu-horizontal rounded-box mt-5 bg-base-300">
                    <li>
                        <a 
                            href="https://github.com/cedric-castelino/UNSW-Beans" 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.39 7.86 10.92.58.11.79-.25.79-.56v-2.17c-3.2.7-3.88-1.42-3.88-1.42-.52-1.31-1.28-1.66-1.28-1.66-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.97.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.72 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.45.11-3.01 0 0 .97-.31 3.18 1.18a11.1 11.1 0 015.8 0c2.21-1.49 3.18-1.18 3.18-1.18.63 1.56.24 2.72.12 3.01.74.81 1.18 1.84 1.18 3.1 0 4.45-2.7 5.43-5.26 5.72.41.35.77 1.04.77 2.1v3.11c0 .31.21.68.8.56A10.5 10.5 0 0023.5 12c0-6.35-5.15-11.5-11.5-11.5z" />
                        </svg>
                        JavaScript
                        </a>
                    </li>
                </ul>
                <p className="text-md mt-5 w-[95%]">For this program, I collaborated with 3 other individuals to write the functionality for the backend of a Microsoft Teams Clone, entitiled 'UNSW Beans'. This required a range of functionality, such as accounts, channels, messaging, notifications and profile photos. This was completed entirely using TypeScript and also required an array of specific tests to be written.</p>
                <p className="text-md mt-5 w-[95%]">The program was created for a UNSW course (COMP1531), and required skills in problem-solving, communication and documentation for its completion. The collaborative aspect of tasks assigned, completed and their due dates were set up using GitLab milestones and required strict adherence to the timeline of tasks set. The documentation included recorded conversations and meetings, as well as inline comments.</p>
                <div className='mt-5 mb-4 flex flex-wrap justify-center'>
                    <img className='w-[30%]' src={beans}/>
                </div>
            </div>

            <div id="cloudy-minds" className="items-start bg-base-200 pl-4 w-[95%] mt-10 rounded-xl relative mb-4">
                <h1 className="text-3xl font-bold mt-5">Cloudy Minds - School Organisation Application</h1>
                <h1 className="text-xl font-bold mt-5 absolute top-0 right-6">2021</h1>
                <ul className="menu bg-base-200 lg:menu-horizontal rounded-box mt-5 bg-base-300">
                    <li>
                        <a 
                            href="https://cedriccastelino.wixsite.com/cloudyminds" 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                        <img className="h-5 w-5" src={link}/>
                        Website
                        </a>
                    </li>
                </ul>
                <p className="mt-4 text-gray-500 italic">Swift</p>
                <p className="text-md mt-5 w-[95%]">Cloudy Minds is an organisational application for macOS made using Xcode. The application has a range of features, such as stored timetables, note-taking, assignment tracking homework recording and Zoom link storage. The application was personalised for the secondary school: Parramatta Marist High, and hence, included specific aspects, such as a shared diary format, customised avatars with different uniforms and a merit/demerit system. The application also saved all information locally, allowing users to continue their work, even after reinstalling. Help sections with images were also provided on each page to help users become acclimated with the program.</p>
                <p className="text-md mt-5 w-[95%]">The project was completed individually in its entirety and was heavily documented. Over 90 pages of developer documentation was written, accompanied by several guides for installation, referencing and user operation. The application was made using the entire software development cycle and hence, underwent the stages of requirement analysis, planning, software design, software development and testing rigorously.</p>
                <div className='mt-5 mb-4'>
                    <Carousel images={cloudyImages} />
                </div>
            </div>

            <div id="cyber-escape" className="items-start bg-base-200 pl-4 w-[95%] mt-10 rounded-xl relative mb-4">
                <h1 className="text-3xl font-bold mt-5">Cyber Escape - Infinite Side-scrolling Game</h1>
                <h1 className="text-xl font-bold mt-5 absolute top-0 right-6">2020</h1>
                <ul className="menu bg-base-200 lg:menu-horizontal rounded-box mt-5 bg-base-300">
                    <li>
                        <a 
                            href="https://cedriccastelino.wixsite.com/cyberescape" 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                        <img className="h-5 w-5" src={link}/>
                        Website
                        </a>
                    </li>
                    <li>
                        <a 
                            href="https://github.com/cedric-castelino/Cyber-Escape" 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.39 7.86 10.92.58.11.79-.25.79-.56v-2.17c-3.2.7-3.88-1.42-3.88-1.42-.52-1.31-1.28-1.66-1.28-1.66-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.97.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.72 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.45.11-3.01 0 0 .97-.31 3.18 1.18a11.1 11.1 0 015.8 0c2.21-1.49 3.18-1.18 3.18-1.18.63 1.56.24 2.72.12 3.01.74.81 1.18 1.84 1.18 3.1 0 4.45-2.7 5.43-5.26 5.72.41.35.77 1.04.77 2.1v3.11c0 .31.21.68.8.56A10.5 10.5 0 0023.5 12c0-6.35-5.15-11.5-11.5-11.5z" />
                        </svg>
                        Python
                        </a>
                    </li>
                </ul>
                <p className="text-md mt-5 w-[95%]">Cyber Escape is an infinite side-scrolling game, made using Pygame. The game utilises a range of dynamic backgrounds, sprites and sound effects to generate an immersive experience, where the player must dodge oncoming obstacles to try and get the highest score. The player can choose from 3 characters, each with a unique ability that is customised to the specific character. Each player also gets a super jump ability. Furthermore, the player can choose an additional power-up from a selection of 3 possible options, each providing some extra functionality.</p>
                <p className="text-md mt-5 w-[95%]">The game also includes 3 obstacles that are randomly generated as the game continues. These obstacles attack for different health amounts and at different heights, requiring the player to either jump or slide for avoidance. The game was heavily documented throughout the development process, and a user manual can be seen posted on the game website. The game was beta-tested by multiple individuals, resulting in meaningful changes for the final version.</p>
                <div className='mt-5 mb-4'>
                    <Carousel images={cyberImages} />
                </div>
            </div>

            <div id="shopping-kiosk" className="items-start bg-base-200 pl-4 w-[95%] mt-10 rounded-xl relative mb-8">
                <h1 className="text-3xl font-bold mt-5">Coles Shopping Kiosk</h1>
                <h1 className="text-xl font-bold mt-5 absolute top-0 right-6">2020</h1>
                <ul className="menu bg-base-200 lg:menu-horizontal rounded-box mt-5 bg-base-300">
                    <li>
                        <a 
                            href="https://github.com/cedric-castelino/Shopping-Kiosk" 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.39 7.86 10.92.58.11.79-.25.79-.56v-2.17c-3.2.7-3.88-1.42-3.88-1.42-.52-1.31-1.28-1.66-1.28-1.66-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.97.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.72 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.45.11-3.01 0 0 .97-.31 3.18 1.18a11.1 11.1 0 015.8 0c2.21-1.49 3.18-1.18 3.18-1.18.63 1.56.24 2.72.12 3.01.74.81 1.18 1.84 1.18 3.1 0 4.45-2.7 5.43-5.26 5.72.41.35.77 1.04.77 2.1v3.11c0 .31.21.68.8.56A10.5 10.5 0 0023.5 12c0-6.35-5.15-11.5-11.5-11.5z" />
                        </svg>
                        Python
                        </a>
                    </li>
                </ul>
                <p className="text-md mt-5 w-[95%]">This application is a self-checkout program, made using PySimpleGUI. The program uses a 4-digit code with randomly generated alternating letters and numbers to save the user's name as an account. The program then offers a range of items for sale, where the user can add them to their shopping cart if the selection does not exceed the stock amount. The user also has a fully customisable cart, allowing them to remove certain items. The user can then pay using cash, a card or a gift card code. The program has several different pages, but employs an intuitive navigation system to keep the user from being overwhelmed.</p>
                <p className="text-md mt-5 w-[95%]">The application also caters to individuals who suffer from colour blindness, offering different colour options such as the Coles colour scheme (default), dark mode, light mode and colour blind mode. Moreover, the program is constantly taking in user input and completing tasks and calculations based on this process.</p>
                <div className='flex flex-wrap justify-center gap-4 mt-5 mb-4 pl-4'>
                <div>
                    <img className="w-70 h-40 mt-5 mb-5" src={shop2}/>
                    <img className="w-70 h-40 mt-5 mb-5" src={shop3}/>
                </div>
                <img className="w-105 mt-5 mb-5" src={shop1}/>
                <img className="w-95 mt-5 mb-5" src={shop4}/>
                </div>
            </div>
      </div>
    )
  }
  
  export default Projects
