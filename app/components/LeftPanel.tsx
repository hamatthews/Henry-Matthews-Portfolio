import Logo from "./logo";

export default function LeftPanel({stuckClass, currentHeader, mainRef, bioRef, projectsRef, contactRef} : {stuckClass: string, currentHeader: string, mainRef: React.MutableRefObject<any>, bioRef: React.MutableRefObject<any>, projectsRef: React.MutableRefObject<any>, contactRef: React.MutableRefObject<any>}) {

    let scrollToTop = () => {
        if (mainRef.current) {
            mainRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }

    let scrollToBio = () => {
        if (bioRef.current) {
            bioRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }
    let scrollToProjects = () => {
        if (projectsRef.current) {
            projectsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }
    let scrollToContact = () => {
        if (contactRef.current) {
            contactRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }

    const baseClass = "left-panel-link";
    let bioClass = baseClass;
    let projectsClass = baseClass;
    let contactClass = baseClass;

    switch (currentHeader) {
        case "bio":
            bioClass += " current-header";
            break;
        case "projects":
            projectsClass += " current-header";
            break;
        case "contact":
            contactClass += " current-header";
            break;
    }    
    
    return (
        <div className={"left-panel" + stuckClass}>
            <div className={"left-panel-links" + stuckClass}>
                <Logo onClickHandler={scrollToTop}/>
                <div className={bioClass} onClick={scrollToBio}>Bio</div>
                <div className={projectsClass} onClick={scrollToProjects}>Projects</div>
                <div className={contactClass} onClick={scrollToContact}>Contact</div>
            </div>
        </div>
    );
}