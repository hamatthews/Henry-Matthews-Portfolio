
import Logo from './logo';

export default function NavBar({stuckClass} : {stuckClass: string}) {
    return (
        <>
            <nav className={stuckClass}>
                {/* <img className={"profile-picture" +  stuckClass} src="/headshot.jpg" alt="Profile"/> */}
                <div className="nav-links">
                    <a className="nav-link" href="mailto:hm110896@gmail.com">Email</a>
                    <a className="nav-link" href="/Resume-Henry-Matthews.pdf" target="_blank">Resume</a>
                    <a className="nav-link" href="https://www.linkedin.com/in/henry-matthews-b14a5019a/" target="_blank">Linkedin</a>
                </div>
            </nav>
        </>
    );
}