import img1 from '../assets/images/img1.png';
import img2 from '../assets/images/img2.png';
import img3 from '../assets/images/img3.png';
import img4 from '../assets/images/img4.png';
import img5 from '../assets/images/img5.png';
import img6 from '../assets/images/img6.png';
import img7 from '../assets/images/img7.png';


import PropTypes from 'prop-types';

function Row({ translateClass, direction }) {

    const items = [
        { text: "reliable", image: img7 },
        { text: "intuitive", image: img2 },     
        { text: "innovative", image: img3 },     
        { text: "precise", image: img4 },     
        { text: "advanced", image: img5 },
        { text: "compliant", image: img2 },
        { text: "certified", image: img4 },     
        { text: "clinical", image: img5 },
        { text: "supportive", image: img2 },     
        { text: "research-driven", image: img6 },
        { text: "quality", image: img1 },      
        { text: "regulatory", image: img6 },
        { text: "training", image: img5 },
        { text: "manufacturing", image: img2 },
        { text: "ISO 13485", image: img4 },
                      
    ]

  return (
    <div 
        className={`${translateClass} ${direction} row w-full flex 
        items-center  
        gap-4 xs:gap-6 sm:gap-8 
        whitespace-nowrap mb-2`}
    >
        {items.map((item, index) => {
            return (
                <div 
                    key={index} 
                    className='elem flex items-center gap-4 xs:gap-6 sm:gap-8'
                >
                    <h1 
                        className='font-[SansitaBold] text-[4vh] xs:text-[5vh] sm:text-[8.4vh] 
                        leading-[4vh] xs:leading-[5vh] sm:leading-[9vh]'
                    >
                        {item.text}
                    </h1>
                    <div className='imgdiv w-[4vh] h-[4vh] xs:w-[4.5vh] xs:h-[4.5vh] sm:w-[5vh] sm:h-[5vh]'>
                        <img 
                            className=''
                            src={item.image} 
                        />
                    </div>
                </div>
            )
        })}
    </div>
  )
}

Row.propTypes = {
    translateClass: PropTypes.string.isRequired,
    direction: PropTypes.string.isRequired
  };

export default Row
