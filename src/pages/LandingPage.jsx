import React, {useState} from "react"
import NavBar from "../components/NavBar"
import picture from "../images/ball--image.png"
import picture2 from "../images/man--image.png"
import picture3 from "../images/the-big-idea-1.png"
import picture4 from "../images/third--one.png"
import picture5 from "../images/fourth--one.png"
import picture6 from "../images/fifth--one.png"
// import picture7 from "../images/purple--lens-flare.png"

export default function LandingPage(){

    const[toggle, setToggle] = useState(false);

    function handleClick(){
        setToggle(!toggle)
    }

    const signChange = toggle ? "-" :  "+";

    const plusStyle = {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        cursor: "pointer",
    }
    
    const answerStyle =  {
        display: toggle ? "block" : "none"
    }
    return(
        <>
         <NavBar/>
         <div>
            <h1 className="first--text"><i>Igniting a Revolution in <span>HR Innovation</span></i></h1>
        <div className="landing--section">
            <div className="text--section">
             <h1>getlinked Tech</h1>
             <h1>Hackathon <span>1.0</span></h1>
             <p>Participate in getlinked tech Hackathon 2023 stand 
a chance to win a Big prize</p>
             <button>Register</button>
             <div className="timer">
                <p>00<span>H</span></p>
                <p>00<span>M</span></p>
                <p>00<span>S</span></p>
             </div>
            </div>
            <div className="image--section">
            <img src={picture2} alt="man" className="background"></img>
            <img src={picture} alt="ball" className="overlay"></img>
            </div>
        </div>
        <div className="overall">
        <div className="another--section">
            <div>
                <img src={picture3} alt="idea"></img>
            </div>
            <div className="side--section">
                <h1>introduction to getlinked <span>techHackathon 1.0</span></h1>
                <p>Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as day: to shape the future. Whether you're a coding genius, a design maverick, or a concept wizard, you'll have the chance to transform your ideas into reality. Solving real-world problems, pushing the boundaries of technology, and creating solutions that can change the world, that's what we're all about!</p>
            </div>
        </div>
        </div>
        <div className="overall">
        <div className="another--section">
            <div className="side--section">
                <h1>Rules and</h1>
                <h1 className="second--head">Guidelines</h1>
                <p>Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as day: to shape the future. Whether you're a coding genius, a design maverick, or a concept wizard, you'll have the chance to transform your ideas into reality. Solving real-world problems, pushing the boundaries of technology, and creating solutions that can change the world, that's what we're all about!</p>
            </div>
            <div>
                <img src={picture4} alt="guide"></img>
            </div>
        </div>
        </div>
        <div className="overall">
        <div className="another--section2">
            <div>
                <img src={picture5} alt="attribute"></img>
            </div>
            <div>
                <h1>Judging Criteria</h1>
                <h1 className="second--head">Key Attribute</h1>
                <p><span>Innovation and Creativity:</span> Evaluate the uniqueness and creativity of the solution. Consider whether it addresses a real-world problem in a novel way or introduces innovative features.</p>
                <p><span>Functionality:</span> Assess how well the solution works. Does it perform its intended functions effectively and without major issues? Judges would consider the completeness and robustness of the solution.</p>
                <p><span>Impact and Relevance:</span> Determine the potential impact of the solution in the real world. Does it address a significant problem, and is it relevant to the target audience? Judges would assess the potential social, economic, or environmental benefits.</p>
                <p><span>Technical Complexity:</span> Evaluate the technical sophistication of the solution. Judges would consider the complexity of the code, the use of advanced technologies or algorithms, and the scalability of the solution.</p>
                <p><span>Adherence to Hackathon Rules:</span> Judges will Ensure that the team adhered to the rules and guidelines of the hackathon, including deadlines, use of specific technologies or APIs, and any other competition-specific requirements.</p>
                <button>Read More</button>
            </div>
        </div>
        </div>
        <div className="overall">
            <div className="another--section3">
            <div className="side--section2">
                <h1>Frequently Asked</h1>
                <h1 className="second--head">Questions</h1>
                <p>We got answers to the questions that you might want to ask about getlinked Hackathon 1.0</p>
                <div className="questions">
                    <div>    
                        <p>Can I work on a project I started before the hackathon?</p>
                        <p className="plus">+</p>
                        <p></p>
                    </div>
                <div>
                    <p>What happens if I need help during the hackathon?</p>
                    <p style={plusStyle} onClick={handleClick}>{signChange}</p>
                    <p style={answerStyle}> bojodiva mehn</p>
                </div>
                <div>
                    <p>What happens if I don't have an idea for a project?</p>
                    <p className="plus">+</p>
                    <p></p>
                </div>
                <div>
                    <p>Can I join a team or do I have to come with one?</p>
                    <p className="plus">+</p>
                    <p></p>
                </div>
                <div>
                    <p>What happens after the hackathon ends</p>
                    <p className="plus">+</p>
                    <p></p>
                </div>
                <div>
                    <p>Can I work on a project I started before the hackathon?</p>
                    <p className="plus">+</p>
                    <p></p>
                </div>
            </div>
            </div>
            <div>
                <img src={picture6} alt="questions" className="stubborn"></img>
            </div>
        </div>
        </div>
        <div className="timeline">
            <div className="timeline--first">
            <h3>Timeline</h3>
            <p>Here is the breakdown of the time we anticipate using for the upcoming event.</p>
            </div>
            <div className="timeline--section">
                <div className="timeline--second">
                    <div>
                        <h3>Hackathon Announcement</h3>
                        <p>The getlinked tech hackathon 1.0 is formally announced to the general public and teams begin to get ready to register</p>
                    </div>
                    <div className="timeline--number">
                        <p>1</p>
                    </div>
                    <div></div>
                    <div>
                        <h3>November 18 2023</h3>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </>
    )
}