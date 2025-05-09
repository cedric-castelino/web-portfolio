function Contact() {
    return (
        <div className="flex flex-col items-center">
        <div className="flex flex-col items-center bg-base-200 pb-8 w-100 mt-10 rounded-xl">
        <h1 className="text-3xl font-bold mt-5">Contact Information</h1>
        <div className="join mt-5">
            <span className="btn join-item rounded-l-full cursor-default select-none bg-base-300">Email</span>
            <span className="input join-item bg-base-100 text-base-content rounded-r-full">
                cedric0703@gmail.com
            </span>
        </div>
        <h1 className="text-xl font-bold mt-5">Social Media Links</h1>
        <ul className="menu bg-base-200 lg:menu-horizontal rounded-box mt-5 bg-base-300">
            <li>
                <a
                    href="https://www.linkedin.com/in/cedric-castelino/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.2c-.97 0-1.5-.66-1.5-1.5s.54-1.5 1.5-1.5 1.5.66 1.5 1.5-.54 1.5-1.5 1.5zm13.5 11.2h-3v-5.6c0-1.33-.47-2.24-1.64-2.24-.9 0-1.44.61-1.68 1.2-.08.2-.1.48-.1.76v5.88h-3s.04-9.55 0-10.55h3v1.5c.4-.62 1.12-1.5 2.72-1.5 1.98 0 3.46 1.3 3.46 4.1v6.45z" />
                </svg>
                LinkedIn
                </a>
            </li>
            <li>
                <a
                    href="https://www.instagram.com/cedric.castelino/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M7.75 2h8.5C19.55 2 22 4.45 22 7.75v8.5C22 19.55 19.55 22 16.25 22h-8.5C4.45 22 2 19.55 2 16.25v-8.5C2 4.45 4.45 2 7.75 2zm0 2C5.68 4 4 5.68 4 7.75v8.5C4 18.32 5.68 20 7.75 20h8.5C18.32 20 20 18.32 20 16.25v-8.5C20 5.68 18.32 4 16.25 4h-8.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6zm4.5-2a1.5 1.5 0 110 3 1.5 1.5 0 010-3z" />
                </svg>
                Instagram
                </a>
            </li>
            <li>
                <a 
                    href="https://github.com/cedric-castelino" 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.39 7.86 10.92.58.11.79-.25.79-.56v-2.17c-3.2.7-3.88-1.42-3.88-1.42-.52-1.31-1.28-1.66-1.28-1.66-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.97.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.72 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.45.11-3.01 0 0 .97-.31 3.18 1.18a11.1 11.1 0 015.8 0c2.21-1.49 3.18-1.18 3.18-1.18.63 1.56.24 2.72.12 3.01.74.81 1.18 1.84 1.18 3.1 0 4.45-2.7 5.43-5.26 5.72.41.35.77 1.04.77 2.1v3.11c0 .31.21.68.8.56A10.5 10.5 0 0023.5 12c0-6.35-5.15-11.5-11.5-11.5z" />
                </svg>
                GitHub
                </a>
            </li>
        </ul>
        <h1 className="text-xl font-bold mt-5">Resume</h1>
        <ul className="menu bg-base-200 lg:menu-horizontal rounded-box mt-5 bg-base-300">
            <li>
                <a
                    href="https://drive.google.com/drive/folders/1LeHdcfWNOjL3M8ssz_xL_CyHvOsDFT5G?usp=drive_link" 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6 2a2 2 0 0 0-2 2v16c0 1.103.897 2 2 2h12a2 2 0 0 0 2-2V8l-6-6H6zm7 1.5L18.5 9H13V3.5zM8 13h8v2H8v-2zm0 4h8v2H8v-2z" />
                </svg>
                Cedric Castelino - Resume
                </a>
            </li>
        </ul>
        </div>
      </div>
    )
  }
  
  export default Contact