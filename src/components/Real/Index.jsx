
import img1 from '../../assets/images/real4.jpg'
import img2 from '../../assets/images/real2.jpg'
import img3 from '../../assets/images/real3.jpg'
import img4 from '../../assets/images/real1.jpg'
import img5 from '../../assets/images/real5.jpg'
import icon1 from '../../assets/images/icon1.png';
import icon2 from '../../assets/images/icon2.png';
import icon3 from '../../assets/images/icon3.png';
import img6 from '../../assets/images/real6.jpg'
import img7 from '../../assets/images/real7.jpg'
import img8 from '../../assets/images/real8.jpg'
import img9 from '../../assets/images/real9.jpg'
import { useRef} from 'react';
import { gsap } from "gsap";
import { Power2,} from 'gsap/gsap-core';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

function Real() {

    const container = useRef(null);
    
    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
            trigger: ".real",
            start: "top top",
            end: "bottom bottom",
            scrub: 1,
            }
         });
         tl.to(".slide", {
            xPercent: -300,
            ease: Power2
         })
         tl.to(".image7", {
            opacity: 0,
         })              
    }, container );


  return (
    <div  
        data-color="salmon" 
        ref={container} 
        className="real section sm:w-full  px-8 sm:px-8 mt-32"
    >
      <div 
        className="cont h-[400vh] relative"
    >
        <div  
            className="slides w-full h-[130vh] overflow-hidden
             sticky top-0 left-0 flex"
        >
            {/* 1st slide */}
            <div 
                className="slide w-full flex sm:flex items-center 
                justify-center h-screen flex-shrink-0 "
            >
                
                <div 
                    className="text1 font-[SansitaReg] text-[7vh] leading-[8vh]
                    sm:text-[15vh] sm:leading-[18vh]"
                >
                    <h1 className="">
                        Real Innovation,    
                    </h1>
                    <h1 className="">
                        Real Healthcare
                    </h1>
                </div>
                <div 
                    className="image absolute w-[20vh] h-[20vh] sm:w-[45vh] sm:h-[45vh] -translate-y-2/5
                    top-1/2 sm:-translate-y-1/2 translate-x-1/2
                    right-0 "
                >
                    <img 
                        src={img1}
                        className="w-full h-full object-contain rounded-full"
                    />

                </div>
            </div>
            {/* 2nd slide */}
            <div   
                className="slide w-full h-screen sm:flex flex items-center 
                justify-center flex-shrink-0 relative "
            >
                <div 
                    className="image absolute w-[20vh] h-[20vh] sm:w-[40vh] sm:h-[40vh] 
                    top-10 -translate-y-1/2 right-1/6"
                >
                    <img 
                        src={img2}
                        className="w-full h-full object-contain rounded-full"
                    />
                </div>
                <div className='w-[80%] xs:w-[70%] sm:w-[60%] text-center font-[SansitaReg] relative'>
                    <h3 
                        className='font-[Sansita] w-full xs:w-2/3 sm:w-1/3 text-left font-semibold 
                        tracking-tight text-[1.8vh] xs:text-[2vh] sm:text-[2.2vh] absolute top-0 left-0 z-[3] -translate-y-[15vh] xs:-translate-y-[20vh] sm:-translate-y-1/2 -translate-x-1/4 xs:-translate-x-1/3'
                    >
                        We're on a mission to transform healthcare through innovative technology and improve patient outcomes worldwide. Here's our impact.
                    </h3>
                    <h1 className='font-semibold text-[8vh] xs:text-[10vh] sm:text-[20vh] leading-none text-white'>
                        1.2K
                    </h1>
                    <h3 className='text-[1.8vh] xs:text-[2vh] sm:text-[5vh] font-semibold leading-[2.5vh] xs:leading-[3vh] sm:leading-[7vh]'>
                        Patients benefiting from our diagnostic and monitoring solutions.
                    </h3>    
                </div>
                <div 
                    className="image absolute w-[10vh] xs:w-[12vh] sm:w-[20vh] sm:h-[20vh] bottom-[10vh] xs:bottom-[12vh] left-[10%] xs:left-[15%]
                    sm:top-2/3 sm:left-1/4 -translate-x-1/2"
                >
                    <img 
                        src={img4}
                        className="w-full h-full object-contain rounded-full"
                    />
                </div>
                <div 
                    className="image absolute w-[16vh] xs:w-[20vh] sm:w-[45vh] sm:h-[45vh] 
                    bottom-[5vh] xs:bottom-[8vh] right-[5%] xs:right-[10%] sm:bottom-0 sm:right-1/6 
                    sm:-translate-x-2/3 sm:translate-y-1/2"
                >
                    <img 
                        src={img3}
                        className="w-full h-full object-contain rounded-full"
                    />
                </div>
                <div 
                    className="image absolute w-[16vh] xs:w-[20vh] top-[15vh] xs:top-[10vh] right-[-10%] xs:right-[-15%] sm:w-[45vh] sm:h-[45vh] sm:top-1/2 
                    sm:-translate-y-1/2 sm:translate-x-1/2
                    sm:right-0"
                >
                    <img 
                        src={img5}
                        className="w-full h-full object-contain rounded-full"
                    />

                </div>
            </div>
            
            {/* 3rd slide */}
            <div 
                className="slide w-full h-screen flex items-center justify-center 
                flex-shrink-0 relative"
            >
                <div 
                    className="image absolute w-[16vh] h-[16vh] xs:w-[18vh] xs:h-[18vh] sm:w-[45vh] sm:h-[45vh]  
                    bottom-[15vh] xs:bottom-[18vh] right-[10%] xs:right-[15%] sm:top-20 sm:-translate-x-1/5 
                    sm:-translate-y-1/2 sm:right-1/6"
                >
                    <img 
                        src={icon2}
                        className="w-full h-full object-contain rounded-full"
                    />
                </div>
                <div className='w-[80%] xs:w-[70%] sm:w-[60%] text-center font-[SansitaReg] relative'>
                    <h3 
                        className='font-[Sansita] w-full xs:w-2/3 sm:w-1/3 text-left font-semibold tracking-tight 
                        text-[1.6vh] xs:text-[1.8vh] sm:text-[2.5vh] absolute top-0 left-0 -translate-x-1/4 xs:-translate-x-1/3 -translate-y-[15vh] xs:-translate-y-[20vh] z-[3] 
                        sm:top-0 sm:-translate-y-1/2 sm:-translate-x-1/3'
                    >
                        Our team combines medical expertise with technological innovation to create solutions that address real healthcare challenges.
                    </h3>
                    <h1 className='font-semibold text-[8vh] xs:text-[10vh] sm:text-[20vh] leading-none text-white'>
                        43%
                    </h1>
                    <h3 className='text-[2.5vh] xs:text-[3vh] sm:text-[6vh] font-semibold leading-[3vh] xs:leading-[4vh] sm:leading-[6vh]'>
                        Reduction in diagnostic errors.
                    </h3>    
                </div>
                <div 
                    className="image absolute w-[20vh] xs:w-[25vh] sm:w-[60vh] sm:h-[60vh] bottom-[5vh] xs:bottom-[8vh] left-[10%] xs:left-[15%] 
                    sm:bottom-10 sm:right-2/4 sm:translate-y-1/3 sm:-translate-x-1/5"
                >
                    <img 
                        src={icon1}
                        className="w-full h-full object-contain rounded-full"
                    />
                </div>
                <div 
                    className="hidden sm:inline-block image absolute w-[20vh] sm:w-[50vh] sm:h-[50vh] top-1/2 -translate-y-1/4 translate-x-1/3
                    right-0"
                >
                    <img 
                        src={icon3}
                        className="w-full h-full object-contain rounded-full"
                    />

                </div>
            </div>

            {/* 4th slide */}
            <div 
                className="slide w-full h-screen flex  sm:flex items-center justify-center 
                relative flex-shrink-0 "
            >
                <div 
                    className="hidden sm:inline-block image absolute w-[20vh] h-[20vh] sm:w-[40vh] sm:h-[40vh] top-10 translate-x-1/2
                    -translate-y-1/2 right-2/3"
                >
                    <img 
                        src={img6}
                        className="w-full h-full object-contain rounded-full"
                    />
                </div>
                <div className='w-[60%] text-center font-[SansitaReg] relative'>                   
                    <h1 className=' font-semibold text-[10vh] sm:text-[20vh] leading-none text-white'>
                        28
                    </h1>
                    <h3 className='text-[3.1vh] leading-[3.4vh] sm:text-[6vh] font-semibold sm:leading-[8vh]'>
                        Hospitals and Medical Centers <br/> Using Our Technology.
                    </h3>    
                </div>
                <div 
                    className="image7 absolute sm:w-[45vh] sm:h-[45vh] bottom-0 right-2/4 
                    translate-y-1/2 -translate-x-1/2"
                >
                    <img 
                        src={img7}
                        className="w-full h-full object-contain rounded-full"
                    />
                </div>
                <div 
                    className="image absolute top-0 -right-10 w-[20vh] h-[20vh] sm:w-[45vh] sm:h-[45vh] sm:top-0 sm:translate-y-1/5
                    sm:translate-x-2/3  sm:right-0 "
                >
                    <img 
                        src={img9}
                        className="w-full h-full object-contain rounded-full"
                    />
                </div>
                <div 
                    className="image absolute w-[15vh] h-[15vh] top-2/3 translate-y-1/5
                    -translate-x-1/3  right-1/4 "
                >
                    <img 
                        src={img8}
                        className="w-full h-full object-contain rounded-full"
                    />
                </div>
            </div>   
        </div>
      </div>
    </div>
  )
}

export default Real;
