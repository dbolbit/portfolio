import React, {useState, useRef} from 'react'
import {motion} from "framer-motion"
import StackContainer from "../components/Stack/StackContainer"
import useScreen from "../hooks/useScreen"


const Stack = (props) => {
  const screenSize = useScreen()
  const [activeLi, setActiveLi] = useState(0)
  const list = ['Basic', 'JS libraries', 'UI libraries', 'Back-end(CMS)', 'Tools']
  const listVariants = {
    show: (i) => (
      {
        opacity: 1,
        x: 0,
        transition: {
          delay: i * 0.5,
          duration: 0.5
        }
      }
    ),
    hide: {
      opacity: 0,
      x: -200
    }
  }

  return (
    <div className="stack_wrapper" id="stack">
      <motion.h1
        initial={{opacity: 0, y: 50, scale: 0.5}}
        whileInView={{opacity: 1, y: 0, scale: 1}}
        viewport={{once: true}}
        transition={{duration: 0.5}}
      >Технологии которые я использую
      </motion.h1>
      <main>
        <ul>
          {list.map((el, i) => (
            <motion.li
              className={activeLi === i ? 'active_li' : ''}
              onClick={() => setActiveLi(i)}
              initial={screenSize > 680 ? 'hide' : 'show'}
              whileInView={"show"}
              custom={i + 1}
              variants={listVariants}
              viewport={{once: true}}
              key={el}>{el}</motion.li>
          ))}
        </ul>
        <StackContainer list={activeLi}/>
      </main>
    </div>
  )
}


export default Stack