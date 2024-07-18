import {useState, useEffect} from "react";
import BannerSvg from "./bannerSvg";

export default function Banner({loadedClass, stuckClass} : {loadedClass: string, stuckClass: string}) {
    return (      
        <div className={"banner" + loadedClass}>
            <div className="banner-background">
                <BannerSvg loadedClass={loadedClass}/>
            </div>
        </div>
    );
}