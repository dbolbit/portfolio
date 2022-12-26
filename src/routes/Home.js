import React, {useState} from 'react'
import {motion, AnimatePresence} from "framer-motion"
import {MModal} from "../components/Modal/Modal"

const Home = (props) => {
  const [modalShow, setModalShow] = useState(false)
  const hVariants = {
    hide: {
      x: -500,
      opacity: 0
    },
    show: {
      x: 0,
      opacity: 1
    }
  }
  const pVariants = {
    hide: {
      opacity: 0,
      scale: 0
    },
    show: {
      opacity: 1,
      scale: 1
    }
  }

  const handlerClick = e => {
    setModalShow(!modalShow)
    !modalShow ? document.body.classList.add('no-scroll') : document.body.classList.remove('no-scroll')

  }
  return (
    <div className="home_page_wrapper" id="greeting">
      <section
        className="home_page__content">
        <motion.h1
          initial={'hide'}
          animate={'show'}
          transition={{duration: 1.5}}
          variants={hVariants}
        >Привет &#128075;, нужен сайт ?
        </motion.h1>
        <motion.p
          initial={'hide'}
          animate={'show'}
          transition={{duration: 1, delay: 2}}
          variants={pVariants}
        >Мы небольшая web-студия которая занимается web-разработкой различной сложности(от простых
          landingPage до полноценных многостраничных приложений), оставляйте свои контакты и краткое
          описание будущего проекта, и вскоре мы с вами свяжемся)
        </motion.p>

        <motion.div
          initial={{opacity: 0, x: 120}}
          animate={{opacity: 1, x: 0}}
          transition={{duration: 1}}
          className="btn_wrapper">
          <div className="btn_wrapper_back_elem"></div>
          <button onClick={handlerClick}>Заказать проект</button>
        </motion.div>

      </section>
      <AnimatePresence>
        {modalShow && <MModal
          isModalShow={modalShow}
          showModal={handlerClick}
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          exit={{opacity: 0}}
          transition={{duration: 0.5}}
        />
        }
      </AnimatePresence>
    </div>
  )
}


export default Home