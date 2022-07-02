import "./intro.scss"
import { init } from 'ityped'
import { useEffect, useRef } from "react"

export default function Intro() {

        const textRef = useRef();
        useEffect(()=>{
            init(textRef.current, { 
                backDelay: 1500,
                showCursor: true, 
                strings: ['Developer', 'Engineer', 'Student', 'Learner'] })
        },[]);
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                <img src="assets/man.png" alt="" srcset="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                <h2>Hi! I am</h2>
                <h1>Uzwal Paswan</h1>
                <h3>and I am a <span ref={textRef}></span></h3>
                </div>
                    <a href="#portfolio">
                        <img src="assets/down.png" alt="" srcset="" />
                    </a>
            </div>
        </div>
    )
}
