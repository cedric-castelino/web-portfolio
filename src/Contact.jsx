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
                <button className="btn bg-[#0967C2] text-white border-[#0059b3]">
                <svg aria-label="LinkedIn logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill="white" d="M26.111,3H5.889c-1.595,0-2.889,1.293-2.889,2.889V26.111c0,1.595,1.293,2.889,2.889,2.889H26.111c1.595,0,2.889-1.293,2.889-2.889V5.889c0-1.595-1.293-2.889-2.889-2.889ZM10.861,25.389h-3.877V12.87h3.877v12.519Zm-1.957-14.158c-1.267,0-2.293-1.034-2.293-2.31s1.026-2.31,2.293-2.31,2.292,1.034,2.292,2.31-1.026,2.31-2.292,2.31Zm16.485,14.158h-3.858v-6.571c0-1.802-.685-2.809-2.111-2.809-1.551,0-2.362,1.048-2.362,2.809v6.571h-3.718V12.87h3.718v1.686s1.118-2.069,3.775-2.069,4.556,1.621,4.556,4.975v7.926Z" fillRule="evenodd"></path></svg>
                LinkedIn
                </button>
                </a>
            </li>
            <li>
                <a
                href="https://github.com/cedric-castelino"
                target="_blank"
                rel="noopener noreferrer"
                >
                <button className="btn bg-black text-white border-black">
                <svg aria-label="GitHub logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="white" d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"></path></svg>
                GitHub
                </button>
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