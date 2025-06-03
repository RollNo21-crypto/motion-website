import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Power4 } from 'gsap/gsap-core';
import Button from '../Button';
import styles from './Style.module.css';

gsap.registerPlugin(ScrollTrigger);

function Services() {
  const container = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    // Animation for the heading text
    var clutter = "";
    const para = document.querySelector(".services-heading")
    if (para) {
      const characters = para.textContent.split("")
      characters.forEach(function(e) {
        if(e === " ") clutter += `<span>&nbsp;</span>`
        else clutter += `<span>${e}</span>`
      })
      para.innerHTML = clutter;
      gsap.set('.services-heading span', {display: 'inline-block'});
      
      gsap.from('.services-heading span', {
        scrollTrigger: {
          trigger: ".services-heading",
          start: "top 80%",
          end: "bottom 20%",
          scrub: 1,
        },
        y: 100,
        opacity: 0,
        duration: 0.5,
        stagger: .03,
      });
    }
  }, []);

  useGSAP(() => {
    // Animation for vision and mission cards
    const visionMissionCards = document.querySelectorAll('.vision-mission-card');
    visionMissionCards.forEach((card, index) => {
      // Card animation
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
          end: "top 40%",
          scrub: 0.5,
        },
        y: 50,
        opacity: 0,
        duration: 1,
        delay: index * 0.2,
        ease: Power4
      });
      
      // Title animation
      const title = card.querySelector('.vision-mission-title');
      gsap.from(title, {
        scrollTrigger: {
          trigger: card,
          start: "top 75%",
          end: "top 35%",
          scrub: 0.5,
        },
        x: index === 0 ? -30 : 30,
        opacity: 0,
        duration: 1,
        delay: 0.1,
        ease: Power4
      });
      
      // Content animation
      const content = card.querySelector('.vision-mission-content');
      gsap.from(content, {
        scrollTrigger: {
          trigger: card,
          start: "top 70%",
          end: "top 30%",
          scrub: 0.5,
        },
        y: 30,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        ease: Power4
      });
    });
    
    // Animation for service cards
    const cards = document.querySelectorAll('.service-card');
    cards.forEach((card, index) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          end: "bottom 15%",
          scrub: 0.5,
        },
        y: 100,
        opacity: 0,
        duration: 1,
        delay: index * 0.1,
        ease: Power4
      });
    });
  }, container);

  return (
    <div ref={container} className="section w-full py-20" data-color="white">
      <div className="container mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="services-heading text-[5vh] sm:text-[6vh] font-[SansitaBold] mb-6">Our Services</h2>
          <p className="text-[2.2vh] max-w-3xl mx-auto font-[Sansita] leading-[3.2vh]">
            Comprehensive healthcare technology solutions designed to transform patient care and clinical outcomes
          </p>
        </div>

        {/* Vision and Mission Section */}
        <div className={`${styles.visionMissionContainer} mb-20`}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Vision Card */}
            <div className={`${styles.visionCard} vision-mission-card relative overflow-hidden p-10 rounded-lg border border-[--black]`}>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#f5f19c] to-transparent"></div>
              <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-[#f5f19c] to-transparent"></div>
              <div className="flex flex-col h-full">
                <h3 className="text-[4vh] font-[SansitaBold] mb-6 vision-mission-title">Our Vision</h3>
                <div className="vision-mission-content">
                  <p className="text-[2.2vh] font-[Sansita] leading-[3.5vh]">
                    We strive to contribute meaningfully to global healthcare by enabling accessible, reliable medical technologies that support clinicians and improve patient well-being. Through collaboration, quality, and innovation, we aim to make healthcare simpler, safer, and more effective for communities everywhere.
                  </p>
                </div>
                <div className="mt-auto pt-6">
                  <div className={`${styles.pulseCircle} w-12 h-12 rounded-full bg-[#f5f19c] flex items-center justify-center`}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 5V19" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M19 12L12 19L5 12" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Mission Card */}
            <div className={`${styles.missionCard} vision-mission-card relative overflow-hidden p-10 rounded-lg border border-[--black]`}>
              <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-l from-[#f5f19c] to-transparent"></div>
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-t from-[#f5f19c] to-transparent"></div>
              <div className="flex flex-col h-full">
                <h3 className="text-[4vh] font-[SansitaBold] mb-6 vision-mission-title">Our Mission</h3>
                <div className="vision-mission-content">
                  <p className="text-[2.2vh] font-[Sansita] leading-[3.5vh]">
                    We design, manufacture, and deliver advanced medical solutions through expert collaboration, innovative research, and comprehensive training. Committed to quality and compliance, we empower healthcare providers with reliable, user-friendly technologies that enhance patient outcomes, optimize clinical workflows, and broaden access to effective care worldwide.
                  </p>
                </div>
                <div className="mt-auto pt-6">
                  <div className={`${styles.pulseCircle} w-12 h-12 rounded-full bg-[#f5f19c] flex items-center justify-center`}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 5V19" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M19 12L12 19L5 12" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Service 1 */}
          <div className={`service-card ${styles.serviceCard} bg-white border border-[--black] p-8 rounded-lg`}>
            <div className="flex items-start gap-6">
              <div className="icon-container w-[10vh] h-[10vh] flex-shrink-0">
                <svg width="100%" height="100%" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path opacity="0.2" d="M45.9998 10H31.9998L19.7271 26L31.9998 56L59.9998 26L45.9998 10Z" fill="currentColor"></path>
                  <path d="M18 10H46L60 26L32 56L4 26L18 10Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                  <path d="M44.2726 26L31.9998 56L19.7271 26L31.9998 10L44.2726 26Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                  <path d="M4 26H60" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </div>
              <div className="content">
                <h3 className={`${styles.serviceTitle} text-[3.5vh] font-[SansitaBold] mb-4`}>Create Our Own MedTech Products</h3>
                <p className="text-[2.2vh] mb-4 font-[Sansita]">Branded POSSPOLE products developed with our expertise, research capabilities, and manufacturing facilities.</p>
                <ul className="list-disc pl-6 text-[2vh] space-y-2 font-[Sansita]">
                  <li>Leveraging our know-how and expertise</li>
                  <li>Utilizing our makers space and research facilities</li>
                  <li>In-house manufacturing capabilities</li>
                  <li>Comprehensive sales and marketing strategies</li>
                  <li>Creating pathway for ISO 13485 certification</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Service 2 */}
          <div className={`service-card ${styles.serviceCard} bg-white border border-[--black] p-8 rounded-lg`}>
            <div className="flex items-start gap-6">
              <div className="icon-container w-[10vh] h-[10vh] flex-shrink-0">
                <svg width="100%" height="100%" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path opacity="0.2" d="M49.0005 54C52.8665 54 56.0005 50.866 56.0005 47C56.0005 43.134 52.8665 40 49.0005 40C45.1345 40 42.0005 43.134 42.0005 47C42.0005 50.866 45.1345 54 49.0005 54Z" fill="currentColor"></path>
                  <path opacity="0.2" d="M15 24C18.866 24 22 20.866 22 17C22 13.134 18.866 10 15 10C11.134 10 8 13.134 8 17C8 20.866 11.134 24 15 24Z" fill="currentColor"></path>
                  <path d="M49.0005 54C52.8665 54 56.0005 50.866 56.0005 47C56.0005 43.134 52.8665 40 49.0005 40C45.1345 40 42.0005 43.134 42.0005 47C42.0005 50.866 45.1345 54 49.0005 54Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                  <path d="M49.0006 40L49.0002 29.9703C49.0001 26.7878 47.7358 23.7358 45.4855 21.4855L36 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                  <path d="M36 22V12H46" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                  <path d="M15 24C18.866 24 22 20.866 22 17C22 13.134 18.866 10 15 10C11.134 10 8 13.134 8 17C8 20.866 11.134 24 15 24Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                  <path d="M15 24L15.0004 34.0297C15.0005 37.2122 16.2648 40.2642 18.5151 42.5145L28.0006 52" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                  <path d="M28.0003 42V52H18.0003" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </div>
              <div className="content">
                <h3 className={`${styles.serviceTitle} text-[3.5vh] font-[SansitaBold] mb-4`}>Partner with Curated Companies</h3>
                <p className="text-[2.2vh] mb-4 font-[Sansita]">Co-create innovative medical products with carefully selected partner companies.</p>
                <ul className="list-disc pl-6 text-[2vh] space-y-2 font-[Sansita]">
                  <li>Branding depends on the partnership agreement</li>
                  <li>Providing specialized expertise missing in partner companies</li>
                  <li>Access to our makers space and research facilities</li>
                  <li>Manufacturing support and capabilities</li>
                  <li>Joint sales and marketing initiatives</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Service 3 */}
          <div className={`service-card ${styles.serviceCard} bg-white border border-[--black] p-8 rounded-lg`}>
            <div className="flex items-start gap-6">
              <div className="icon-container w-[10vh] h-[10vh] flex-shrink-0">
                <svg width="100%" height="100%" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path opacity="0.2" d="M50 38.2155L40.8007 47.4147C40.5565 47.659 40.2532 47.8358 39.9204 47.928C39.5875 48.0201 39.2365 48.0246 38.9014 47.9408L24.4122 44.3185C24.1404 44.2506 23.886 44.1263 23.6653 43.9537L10 33.268L18.1436 17.9475L30.9736 14.2071C31.4319 14.0735 31.9229 14.1082 32.3578 14.3051L41 18.2155H35.8284C35.5658 18.2155 35.3057 18.2672 35.0631 18.3677C34.8204 18.4682 34.5999 18.6155 34.4142 18.8012L24.6306 28.5848C24.428 28.7875 24.2713 29.0313 24.1711 29.2997C24.0709 29.5682 24.0295 29.855 24.0498 30.1408C24.0702 30.4267 24.1517 30.7048 24.2888 30.9564C24.426 31.208 24.6156 31.4271 24.8448 31.5991L26.2 32.6155C27.5848 33.654 29.269 34.2155 31 34.2155C32.731 34.2155 34.4152 33.654 35.8 32.6155L39 30.2155L50 38.2155Z" fill="currentColor"></path>
                  <path d="M60.1794 30.4462L54 33.5359L46 18.2154L52.2423 15.0942C52.7113 14.8597 53.2536 14.8188 53.7525 14.9802C54.2514 15.1416 54.6669 15.4925 54.9096 15.9573L61.0578 27.7316C61.1808 27.967 61.2556 28.2246 61.2779 28.4892C61.3002 28.7539 61.2696 29.0204 61.1878 29.2731C61.1061 29.5258 60.9748 29.7596 60.8016 29.9611C60.6285 30.1625 60.417 30.3274 60.1794 30.4462V30.4462Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                  <path d="M10.0011 33.2681L3.8217 30.1784C3.58414 30.0596 3.37261 29.8947 3.19947 29.6932C3.02633 29.4918 2.89504 29.258 2.81327 29.0052C2.7315 28.7525 2.70088 28.4861 2.7232 28.2214C2.74552 27.9568 2.82033 27.6992 2.94327 27.4638L9.09151 15.6895C9.33421 15.2247 9.74973 14.8738 10.2486 14.7124C10.7475 14.551 11.2898 14.5919 11.7588 14.8264L18.0011 17.9475L10.0011 33.2681Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                  <path d="M54 33.5359L50 38.2154L40.8007 47.4147C40.5565 47.6589 40.2532 47.8357 39.9204 47.9279C39.5875 48.0201 39.2365 48.0245 38.9014 47.9407L24.4122 44.3184C24.1404 44.2505 23.886 44.1262 23.6653 43.9537L10 33.2679" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </div>
              <div className="content">
                <h3 className={`${styles.serviceTitle} text-[3.5vh] font-[SansitaBold] mb-4`}>Trade Products from 3rd Party Companies</h3>
                <p className="text-[2.2vh] mb-4 font-[Sansita]">Exclusive distribution rights for selected medical technology products in specific markets.</p>
                <ul className="list-disc pl-6 text-[2vh] space-y-2 font-[Sansita]">
                  <li>Securing exclusive rights for trading in specific markets</li>
                  <li>Building dedicated sales teams and infrastructure</li>
                  <li>Establishing service and customer support teams</li>
                  <li>Providing comprehensive marketing support</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Service 4 */}
          <div className={`service-card ${styles.serviceCard} bg-white border border-[--black] p-8 rounded-lg`}>
            <div className="flex items-start gap-6">
              <div className="icon-container w-[10vh] h-[10vh] flex-shrink-0">
                <svg width="100%" height="100%" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path opacity="0.2" d="M10 26.6667V12C10 11.4696 10.2107 10.9609 10.5858 10.5858C10.9609 10.2107 11.4696 10 12 10H52C52.5304 10 53.0391 10.2107 53.4142 10.5858C53.7893 10.9609 54 11.4696 54 12V26.6667C54 47.6705 36.1735 54.6292 32.6141 55.8093C32.2161 55.9463 31.7839 55.9463 31.386 55.8093C27.8265 54.6292 10 47.6705 10 26.6667Z" fill="currentColor"></path>
                  <path d="M10 26.6667V12C10 11.4696 10.2107 10.9609 10.5858 10.5858C10.9609 10.2107 11.4696 10 12 10H52C52.5304 10 53.0391 10.2107 53.4142 10.5858C53.7893 10.9609 54 11.4696 54 12V26.6667C54 47.6705 36.1735 54.6292 32.6141 55.8093C32.2161 55.9463 31.7839 55.9463 31.386 55.8093C27.8265 54.6292 10 47.6705 10 26.6667Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                  <path d="M43 24L28.3333 38L21 31" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </div>
              <div className="content">
                <h3 className={`${styles.serviceTitle} text-[3.5vh] font-[SansitaBold] mb-4`}>MedTech Related Services</h3>
                <p className="text-[2.2vh] mb-4 font-[Sansita]">Comprehensive support services for the medical technology industry.</p>
                <ul className="list-disc pl-6 text-[2vh] space-y-2 font-[Sansita]">
                  <li>Manufacturing support</li>
                  <li>Compliance services (quality, regulatory, and clinical)</li>
                  <li>Marketing assets (design, website development)</li>
                  <li>Training Programs for healthcare professionals</li>
                  <li>Quality and regulatory training with certification</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex items-center justify-center mt-16">
          <Button bgColor="bg-[#f5f19c]" text="EXPLORE ALL SERVICES" />
        </div>
      </div>
    </div>
  );
}

export default Services;