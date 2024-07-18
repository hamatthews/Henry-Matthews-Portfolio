export default function ContentColumn({stuckClass, bioRef, projectsRef, contactRef, bioInViewRef, projectsInViewRef, contactInViewRef} :
{
    stuckClass: string, bioRef: React.MutableRefObject<any>, projectsRef: React.MutableRefObject<any>, contactRef: React.MutableRefObject<any>,
    bioInViewRef: React.MutableRefObject<any>, projectsInViewRef: React.MutableRefObject<any>, contactInViewRef: React.MutableRefObject<any>
}) {


    return (
        <>
            <div className={"content-background" + stuckClass}>
            </div>
            <div className={"content-column" + stuckClass}>
                <div className="content-segments">

                    <div className="segment-view-ref" ref={bioInViewRef} />
                    <div ref={bioRef} className="content-segment first-segment">
                        <h1>Henry Matthews</h1>
                        <br />
                        <p>I am a self-taught software developer with over a year of industry experience. In my freetime I build everything from Chrome extensions to Unity games, but my professional focus is on full-stack web development. My journey into tech has been driven by curiosity and a love for creating innovative solutions.</p>
                        <br />
                        <p>Before I discovered a passion for programming, I was working in the field of clinical research. I have always loved to work with people, and with organizations that I believe are contributing to the common good. I am eager to bring my diverse skill set and enthusiasm to a purpose-driven development team.</p>
                    </div>
                    <div className="segment-view-ref" ref={projectsInViewRef} />
                    <div ref={projectsRef} className="content-segment">
                        <h1>Projects</h1>
                        <br />
                        <p>As an adolescent, I had my earliest experiences with programming through designing death robots in Garry’s Mod, a physics sandbox game, and through writing auto-clicking scripts in the otherwise click-intensive MMO RuneScape. To this day, I’ve continued to use video games both as a learning tool and a creative outlet, but now instead of tampering with existing games, I’ve begun to work on my own.</p>
                        <br />
                        <p><a href="https://hamatthews.github.io/NimrodGame/" target="_blank">Nimrod</a> is a 2D game built in Unity where you jump between platforms and dodge deadly obstacles in a perilous attempt to scale the Tower of Babel. The faster you climb each floor, and the more close calls you have with traps, the more points you collect as you go. Every floor is randomly generated, so no two playthroughs are the same. Give it a whirl, and see if you can get past level 5!</p>
                        <br />
                        <p><a href="https://captcha-frontend-nine.vercel.app/menu" target="_blank">I’m Not a Robot!</a> is a browser game built in React that I submitted as a finalist in the 2023 Lighthall Software Engineering Super League. The prompt was very simple: we had one week to create an app from scratch that presented a novel solution to some problem we faced in our day-to-day lives. I wracked my brain trying to devise a way to improve on the designs of existing productivity apps, before I realized that if I wanted to create a new solution, I should look at a new problem. At the time, AI art and AI chatbots had just begun to take over the internet, and so I decided to make a browser game/motivational tool that would address the fresh fear that I, and surely many others were now facing, that we would all soon be replaced by robots.</p>
                    </div>
                    <div className="segment-view-ref" ref={contactInViewRef} />
                    <div ref={contactRef} className="content-segment  last-segment">
                        <h1>Contact</h1>
                        <br />
                        <p>Email: <a href="mailto:Hm110896@gmail.com">Hm110896@gmail.com</a></p>
                        <br />
                        <p>Linkedin: <a href="https://www.linkedin.com/in/henry-matthews-b14a5019a/" target="_blank">https://www.linkedin.com/in/henry-matthews-b14a5019a/</a></p>
                        <br />
                        <p>Phone: 845-825-9893</p>
                    </div>
                </div>
            </div>
        </>
    );
}