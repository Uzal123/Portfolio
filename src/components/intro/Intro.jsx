import "./intro.scss"

export default function intro() {
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
                <h1>Ujjwal Paswan</h1>
                <h3>and I am a <span>Developer</span></h3>
                </div>
                <div>
                    <a href="#portfolio">
                        <img src="assets/down.png" alt="" srcset="" />
                    </a>
                </div>
            </div>
        </div>
    )
}
