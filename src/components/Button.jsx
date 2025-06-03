import { LuArrowUpRight } from "react-icons/lu";
import styles from './Button.module.css';
import PropTypes from 'prop-types';

function Button({bgColor, text}) {
  return (
    <div 
      style={{
        backgroundColor: bgColor
      }}
      className={`${styles.button} rounded-full p-2 px-4`}
    >
      <div 
        className={`${styles.masker} flex items-center gap-2 overflow-hidden 
        relative cursor-pointer`}
      >
        <span 
          className={`${styles.spanMask} font-[Sansita] text-[1.6vh] xs:text-[1.7vh] sm:text-[1.8vh] 
          capitalize tracking-normal
          font-semibold`}
        >
          {text}
        </span>
        <LuArrowUpRight 
          style={{
            fontSize: "20px", 
            color: "black", 
          }} 
          className={`${styles.iconMask} text-[18px] xs:text-[20px] sm:text-[24px]`} 
        /> 
      </div>         
    </div>
  )
}

Button.propTypes = {
  bgColor: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default Button
