import React, {useState} from 'react'
import useScreen from "../../hooks/useScreen"
import {motion} from "framer-motion"

const Navigation = (props) => {
  const screenSize = useScreen()
  const [isShow, setIsShow] = useState(false)
  const handlerClick = e => setIsShow(!isShow)
  const menuVariants = {
    show: {
      opacity: 1,
      x: 0
    },
    hide: {
      opacity: 0,
      x: 120
    }
  }
  return (
    <>
      <nav>
        {screenSize > 767 ? (<MenuList/>) : (
          <>
            <motion.div
              style={{position: isShow ? 'fixed' : 'absolute', top: isShow ? 15 : 5}}
              initial={{x: 0}}
              animate={isShow ? {x: -120} : {x: 0}}
              transition={{duration: 0.5}}
              className="burger_menu"
              onClick={handlerClick}>
              <div className="burger_menu_line_wrapper">
                <span
                  className={`burger_line burger_menu_top_line ${isShow ? 'open' : ''}`}></span>
                <span
                  className={`burger_line burger_menu_center_line ${isShow ? 'open' : ''}`}></span>
                <span
                  className={`burger_line burger_menu_bottom_line ${isShow ? 'open' : ''}`}></span>
              </div>
            </motion.div>
            <motion.div
              variants={menuVariants}
              initial={'hide'}
              animate={isShow ? 'show' : 'hide'}
              transition={{duration: 0.5}}
              className="side_menu"
            >
              <MenuList/>
            </motion.div>
          </>

        )}
      </nav>
    </>

  )
}


export default Navigation

const MenuList = () => (
  <ul>
    <li>
      <a href="#greeting">Hi! <span> &#128075;</span></a>
    </li>
    <li><a href="#stack">Стек технологий</a></li>
    <li><a href="#portfolio">Портфолио</a></li>
    <li><a href="#contacts">Контакты</a></li>
  </ul>
)