
import styles from './Style.module.css';
import { LuArrowUpRight } from "react-icons/lu";
import Button from  '../Button'

function Footer() {
  return (
    <div className="section w-full xs:mt-20 sm:mt-30">
      <div className="topfoot bg-[#f5f19c] pt-10 xs:pt-12 sm:pt-16 pb-10 xs:pb-12 sm:pb-16 sm:flex items-center justify-between">
        <div className="left sm:w-1/2 px-4 xs:px-6 sm:px-8">
          <div className="first order-1 font-[SansitaReg] text-[4.5vh] xs:text-[5vh] leading-[5.5vh] xs:leading-[6vh] sm:text-[4.2rem] w-full xs:w-2/3 sm:w-1/3 sm:leading-[5rem] sm:mb-10">
            <h1>Discover POSSPOLE MedTech.</h1>
          </div>
          {/* <Bu/> */}
          <div className='middle order-3 sm:order-2 w-[18vh] xs:w-[20vh] text-center mt-4 xs:mt-6 px-3 xs:px-4 py-3 xs:py-4 sm:w-fit sm:px-4 sm:py-[1.6vh] bg-[--black] text-[#f5f19c] whitespace-nowrap'>
            <div 
              className= {`${styles.masker} flex items-center 
              gap-2 overflow-hidden 
              relative cursor-pointer`}
            >
              <span 
                className={`${styles.spanMask} font-[Sansita] 
                text-[1.8vh] xs:text-[2.1vh] capitalize tracking-normal 
                font-semibold `}
              >
                LET&apos;S GO
              </span>
              <LuArrowUpRight 
                style={{
                  fontSize: "20px", 
                  color: "#f5f19c", 
                }} 
                className={`${styles.iconMask}`} 
              /> 
            </div>
          </div>
        </div>

        <div className="right order-2 sm:order-3 flex sm:w-1/2 items-center justify-between sm:px-10">
          <div className="rght1 w-full xs:w-5/6 sm:w-2/3 flex flex-col items-start xs:items-end px-4 xs:px-6 sm:px-8 mt-6">
            <h3 className="text-[2vh] xs:text-[2.2vh] sm:text-[1.4rem] font-[Sansita] font-medium">
              Find out how POSSPOLE MedTech's innovative
              technologies can transform healthcare delivery
              and improve patient outcomes.
            </h3>
          </div>
          <div className="hidden sm:inline-block rght2 relative w-[150px] h-[150px] overflow-hidden">
            <div className={`${styles.loopFoot}`}></div>
            <div className="icon w-[120px] h-[120px] rounded-full border-black border-[1px] px-10 py-10 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 overflow-hidden">
              <div className="w-10 h-10 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
                <svg width="100%" height="100%" viewBox="0 0 32 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 0.703124C16 9.53968 8.83656 16.7031 0 16.7031" stroke="black" strokeWidth="2"></path>
                  <path d="M16 0.703124C16 9.53968 23.1634 16.7031 32 16.7031" stroke="black" strokeWidth="2"></path>
                  <path d="M16 0.703125L16 37.2746" stroke="currentColor" strokeWidth="2"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="downfoot w-full h-fit bg-[var(--black)] px-4 xs:px-6 sm:px-8 py-8 xs:py-10 sm:py-32">
        <div className='flex flex-col sm:flex-row sm:items-start justify-between space-y-4 sm:space-y-0 sm:space-x-4'>
          <div className='hidden sm:inline-block'>
            {["Home", "Healthcare Solutions", "Technology", "Our Team", "Contact Us"].map((item, index) => {
              return (
                <div key={index} className='pb-4'>
                  <h3 className='font-[SansitaReg] text-[2.5vh] text-white font-semibold'>
                    {item}
                  </h3>  
                </div>
              ) 
            })}
          </div>
          <div className='w-full'>
            <h1 className='text-white pb-4 xs:pb-6 font-[SansitaReg] text-[2.4vh] xs:text-[2.8vh] font-semibold'>Let's Collaborate on the Future of Healthcare</h1>
            <p className='text-white pb-4 xs:pb-6 font-[SansitaReg] text-[1.8vh] xs:text-[2vh]'>Whether you're a healthcare provider, investor, or partner, we'd love to hear from you.</p>
            <div className='text-white pb-4 xs:pb-6'>
              <p className='font-[SansitaReg] text-[1.8vh] xs:text-[2vh] pb-2'><span className='font-semibold'>Email:</span> letmein@posspole.com</p>
              <p className='font-[SansitaReg] text-[1.8vh] xs:text-[2vh] pb-2'><span className='font-semibold'>Phone:</span> +91 91412 19269</p>
              <p className='font-[SansitaReg] text-[1.8vh] xs:text-[2vh] pb-2'><span className='font-semibold'>Address:</span> POSSPOLE PVT LTD, Krishi Bhavan, Before, Cubbon Park Rd, Nunegundlapalli, Ambedkar Veedhi, Bengaluru, Karnataka 560001</p>
              <a href="https://maps.app.goo.gl/vXgRSuzGaVrg52Kd7" target="_blank" rel="noopener noreferrer" className='text-[#f5f19c] underline'>View on Google Maps</a>
            </div>
            <h2 className='text-white pb-3 xs:pb-4 font-[SansitaReg] text-[2.2vh] xs:text-[2.4vh] font-semibold'>Contact Form</h2>
            <div className='flex flex-col gap-3 xs:gap-4 pb-6'>
              <input 
                type="text" 
                placeholder="Name" 
                className="bg-[var(--light)] w-full sm:w-[350px] h-[4.5vh] xs:h-[5vh] px-3 xs:px-4 text-[1.8vh] xs:text-[2vh]"
              />
              <input 
                type="email" 
                placeholder="Email" 
                className="bg-[var(--light)] w-full sm:w-[350px] h-[4.5vh] xs:h-[5vh] px-3 xs:px-4 text-[1.8vh] xs:text-[2vh]"
              />
              <textarea 
                placeholder="Message" 
                className="bg-[var(--light)] w-full sm:w-[350px] h-[12vh] xs:h-[15vh] px-3 xs:px-4 py-2 text-[1.8vh] xs:text-[2vh]"
              ></textarea>
              <div className='w-fit'>
                <Button text="SEND MESSAGE" bgColor="bg-[#f5f19c]" />
              </div>
            </div>
          </div>
          <div className=' hidden sm:inline-block '>
            {["Research", "Case Studies", "Medical Resources", "Careers", "Support"].map((item, index) => {
              return (
                <div key={index} className='pb-4'>
                  <h3 className='font-[SansitaReg] text-[2.5vh] text-white font-semibold'>
                    {item}
                  </h3>  
                </div>
              ) 
            })}
          </div>  
        </div>
      </div>
    </div>
  )
}

export default Footer
