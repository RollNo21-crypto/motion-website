import video from '../../assets/video/1ENIoa5sjq.mp4'
import Row from '../Row'
import {useEffect, useState, useRef} from 'react';
import {motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { gsap } from "gsap";
import styles from './Style.module.css';
import { Power2, Power4 } from 'gsap/gsap-core';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';
import logo from '../../assets/images/logo.png'
import logoInvert from '../../assets/images/logoinvert.png'
// import { AiOutlineMenu } from "react-icons/ai";
import { BiMenu } from "react-icons/bi";

gsap.registerPlugin(ScrollTrigger);

gsap.set(".slidesm", {scale: 5})

function Home() {

    const container = useRef(null);
    const [currentLogo, setCurrentLogo] = useState(logo);

    useEffect(() => {
        var clutter = "";
        const para = document.querySelector(".toptext")
        const characters = para.textContent.split("")
        characters.forEach(function(e) {
            
            clutter += `<span>${e}</span>`
        })
        para.innerHTML = clutter;   
        gsap.set(".toptext span", {opacity: .1})
        gsap.to(".toptext span", {
            scrollTrigger: {
                trigger: ".home",
                start: "top 50%",
                end: "bottom 90%",
                scrub: 1,
            },
            opacity: 1, 
            stagger: .03,
            
        })
    },[]);

    
    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
            trigger: ".home",
            start: "top top",
            end: "bottom bottom",
            scrub: .5,
            onUpdate: (self) => {
                // Switch to inverted logo after the first keyframe transition (around 25% progress)
                if (self.progress > 0.25) {
                    setCurrentLogo(logoInvert);
                } else {
                    setCurrentLogo(logo);
                }
            }
            }
         });
         tl.to(".vdodiv", {
            clipPath: 'circle(0% at 50% 50%)',
            ease: Power4,
          }, "start")
          tl.to(".slidesm", {
            scale: 1,
            ease: Power2,
         }, 'start');
         tl.to(".lft", {
            xPercent: -10,
            stagger: .03,
            ease: Power4,
            duration: 1,
         }, 'start');
         tl.to(".rgt", {
            xPercent: 10,
            stagger: .03,
            ease: Power4,
            duration: 1,
         }, 'start');           
    }, container )

    const {scrollY} = useScroll();
    const [hidden, setHidden] = useState(false);
  
    useMotionValueEvent(scrollY, "change", (latest) => {

        const previous = scrollY.getPrevious() ?? 0;
        console.log(previous, latest);

        if(latest > previous) {
        setHidden(true);
        }
        else {
        setHidden(false);
        }
    });
   
    
    return (
    <div ref={container} data-color="black" className="home section w-full h-[200vh] relative  ">
        <div className='w-full sticky top-0 left-0 '>
            {/* navbar */}
            <motion.div 
                variants={{
                visible: {y: 0},
                hidden: {y: "-100%"},
                }}
                animate={hidden ? "hidden" : "visible"}
                transition={{duration: 0.35, ease: "easeInOut"}}
                className="section w-[100vw] sm:w-full px-6 fixed top-0 left-0 z-[9]"
            >
                
                <div className="w-full flex sm:flex items-center justify-between  ">
                    <div className="logo w-[20vh] h-[20vh] sm:w-[25vh] sm:h-[18vh] cursor-pointer z-[9] flex items-center">
                        {/* logo */}
                        <img src={currentLogo} alt="POSSPOLE MedTech Logo" width="100%" height="100%" className="object-contain transition-all duration-500" />
                    </div>                   
                    {/* <div className="hidden md:flex gap-2 items-center z-[9] cursor-pointer ">
                        {["Our Products", "Co-Creation", "Training", "Services", "Contact Us"].map((item, index) => (
                            <h4 key={index} className={`${styles.links} h-[3vh] relative py[2.4vh] px-[2.2vh] text-center  flex flex-col
                            font-[Sansita] text-[2.1vh] overflow-hidden font-medium leading-[2.5vh]`}> 
                                <a className={`atag ${styles.atag} relative`}>{item} </a>
                                <a className={`atag ${styles.atag} relative`}>{item} </a>                      
                            </h4>   
                        ))}
                    </div> */}

                <div className="hidden md:flex gap-2 items-center z-[9] cursor-pointer">
                    <button 
                        className={`${styles.getStarted} ml-4 px-6 py-2 text-[2.1vh] font-[Sansita] font-medium 
                        bg-transparent border-2 border-black rounded-full hover:bg-black hover:text-white 
                        transition-colors duration-300`}
                        style={{
                            animation: 'buttonPulseReverse 2s infinite'
                        }}
                    >
                        Get Started
                    </button>
                </div>

<style jsx>{`
    @keyframes buttonPulseReverse {
        0% {
            transform: scale(1);
            box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7);
            background-color: transparent;
            color: black;
        }
        70% {
            transform: scale(1.05);
            box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
            background-color: black;
            color: white;
        }
        100% {
            transform: scale(1);
            box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
            background-color: transparent;
            color: black;
        }
    }
`}</style>

<style jsx>{`
    @keyframes buttonPulse {
        0% {
            transform: scale(1);
            box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7);
        }
        70% {
            transform: scale(1.05);
            box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
        }
        100% {
            transform: scale(1);
            box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
        }
    }
`}</style>
                    
                        <BiMenu
                            style={{
                            
                            fontSize: "5.5vw",
                            }}
                            className=' inline-block sm:hidden z-[9] cursor-pointer'
                        />  
                 
                    
                </div>
            </motion.div>

            <div className='btmtext absolute z-[4] bottom-[4%] left-[25%] text-center sm:text-start sm:bottom-[7%] sm:left-8 w-48 '>
                <h1 className='sm:text-[2vh] font-semibold'>
                    POSSPOLE MedTech.
                    Creating. Manufacturing. Training.
                    For advanced healthcare solutions.
                </h1>
            </div>
            {/* video div */}
            <div 
                
                className={` vdodiv w-full h-screen absolute z-[3] 
                top-0 left-0 overflow-hidden sm:overflow-visible ${styles.vdodiv}`}
            >   
                <video
                    className="absolute w-full h-screen object-cover top-1/2 left-1/2 
                    -translate-x-1/2 -translate-y-1/2"
                    autoPlay
                    loop
                    muted
                    src={video}
                >     
                </video> 
            </div>

            {/* marquee div */}
            <div 
                className="marqueecontainer w-full h-screen 
                relative overflow-hidden "
            >
                {/* /* top Heading div */ }
                <div 
                    className=' heading absolute  top-[12%] sm:top-[7%] left-1/2 
                    -translate-x-1/2 w-72'
                >
                    <h2 className='toptext text-[2.2vh] font-[Sansita] tracking-wide font-medium text-center'>Creating and manufacturing medical technology that is</h2>
                </div>

                <div 
                    
                    className='slidesm absolute scale-[5]  top-1/2 left-1/2
                    -translate-x-1/2 -translate-y-1/2 w-[90%]'
                >    
                    <div className='row'>
                        <Row 
                            translateClass="-translate-x-1/2"  
                            direction="lft"
                        />
                        <Row 
                            translateClass="-translate-x-2/3"  
                            direction="rgt"
                        />
                        <Row 
                            translateClass="-translate-x-1/4"  
                            direction="lft" 
                        />
                        <Row 
                            translateClass="-translate-x-1/3"  
                            direction="rgt"
                        />
                    </div>            
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home
