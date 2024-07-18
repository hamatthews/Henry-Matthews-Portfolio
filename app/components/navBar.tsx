
export default function NavBar({loadedClass, stuckClass} : {loadedClass: string, stuckClass: string}) {

    return (
        <>
            <nav className={stuckClass}>
                    <div />
                    <div className="nav-links">
                        <img className={"nav-profile-picture" + loadedClass +  stuckClass} src="/headshot.jpg" alt="Profile" width="200px" height="200px"/>
                        <a className="nav-link" href="mailto:hm110896@gmail.com">Email</a>
                        <a className="nav-link" href="/Resume-Henry-Matthews.pdf" target="_blank">Resume</a>
                        <a className="nav-link" href="https://www.linkedin.com/in/henry-matthews-b14a5019a/" target="_blank">Linkedin</a>
                    </div>
                    <div />
            </nav>
        </>
    );
}