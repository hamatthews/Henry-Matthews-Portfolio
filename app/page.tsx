"use client";

import { useState, useEffect, useRef } from 'react';

import Background from "./components/background";
import Banner from "./components/banner";
import ContentColumn from "./components/contentColumn";
import LeftPanel from "./components/LeftPanel";
import NavBar from './components/navBar';

export default function Home() {

  const stuckElement = useRef<HTMLDivElement>(null);
  const narrowElement = useRef<HTMLDivElement>(null);
  const mainRef = useRef(null);
  const bioRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const bioInViewRef = useRef(null);
  const projectsInViewRef = useRef(null);
  const contactInViewRef = useRef(null);

  const [loadedClass, setLoadedClass] = useState("");
  const [stuckClass, setStuckClass] = useState("");

  const [currentHeader, setCurrentHeader] = useState("");

  useEffect(() => {
      const stuckPoint = stuckElement.current;

      const bioPoint = bioInViewRef.current;
      const projectsPoint = projectsInViewRef.current;
      const contactPoint = contactInViewRef.current;

      let stuckObserver = null;

      let bioObserver = null;
      let projectsObserver = null;
      let contactObserver = null;

      if (bioPoint) {
        bioObserver = new IntersectionObserver(([entry]) => {
            // setBioInView(true);
            if (entry.boundingClientRect.top < 0) {
              setCurrentHeader("bio");
            }
            else {
              setCurrentHeader("");
            }
        }, { threshold: [0, 1.0] });

        bioObserver.observe(bioPoint);
      }

      if (projectsPoint) {
        projectsObserver = new IntersectionObserver(([entry]) => {
          if (entry.boundingClientRect.top < 0) {
            setCurrentHeader("projects");
          }
          else {
            setCurrentHeader(e => e != "" ? "bio" : e);
          }

        }, { threshold: [0, 1.0] });

        projectsObserver.observe(projectsPoint);
      }

      if (contactPoint) {
        contactObserver = new IntersectionObserver(([entry]) => {
          if (entry.boundingClientRect.top < 0) {
            setCurrentHeader("contact");
          }
          else {
            setCurrentHeader(e => e != "bio" && e != "" ? "projects" : e);
          }

        }, { threshold: [0, 1.0] });

        contactObserver.observe(contactPoint);
      }

      if (stuckPoint) {
        stuckObserver = new IntersectionObserver(([entry]) => {
          if (!entry.isIntersecting) {
              setStuckClass(" stuck");
          }
          else setStuckClass("");
        }, { threshold: [0, 1.0] });

        stuckObserver.observe(stuckPoint);
      }

      return () => {
        if (stuckObserver !== null) {
          stuckObserver.disconnect();
        }
      }
    }, []);

    useEffect(() => {
      setLoadedClass(" loaded");
    },[]);

  return (
    <>
      <div ref={stuckElement} className="stuck-point"/>
      <Background/>
      <main className={stuckClass} ref={mainRef}>
        <Banner loadedClass={loadedClass} stuckClass={stuckClass} />
        <div className={"banner-profile-picture-container"}>
          <img className={"banner-profile-picture" + loadedClass + stuckClass} src="/headshot.jpg" alt="Profile"/>  
        </div>
        <NavBar loadedClass={loadedClass} stuckClass={stuckClass} />
        <ContentColumn stuckClass={stuckClass} bioRef={bioRef} projectsRef={projectsRef} contactRef={contactRef} bioInViewRef={bioInViewRef} projectsInViewRef={projectsInViewRef} contactInViewRef={contactInViewRef}/>
        <LeftPanel stuckClass={stuckClass} currentHeader={currentHeader} mainRef={mainRef} bioRef={bioRef} projectsRef={projectsRef} contactRef={contactRef} />
        <div className={"right-panel" + stuckClass}></div>
      </main>
    </>
  );
}
