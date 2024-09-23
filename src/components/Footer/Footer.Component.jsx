import React from 'react';
import githubIcon from '../images/github-icon.png';
import linkedinIcon from '../images/linkedin-icon.png';

function Header() {
    return (
        <nav className="h-16 bg-gray-900 flex items-center px-9 overflow-x-hidden">
            <div className="flex w-1/2">
                <span className="text-center text-white">Developed with ❤️️ by Anish Das</span>
            </div>
            <div className="flex justify-end w-1/2">
                <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/Anish-Das-GH/ShowTime"
                    className="pr-5"
                >
                    <img src={githubIcon} alt="Github Icon" className="h-7" />
                </a>
                <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.linkedin.com/in/anish-das-lin/"
                >
                    <img src={linkedinIcon} alt="LinkedIn Icon" className="h-7" />
                </a>
            </div>
        </nav>
    );
}

export default Header;
