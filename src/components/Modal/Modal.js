import React, {useEffect, useState, forwardRef, useLayoutEffect} from 'react'
import {motion} from "framer-motion"

const Modal = forwardRef((props, ref) => {
  const {showModal, isModalShow} = props
  const [scroll, setScroll] = useState(0)
  useLayoutEffect(() => {
    setScroll(window.scrollY)
  }, [isModalShow])


  return (
    <div className="modal" style={{top: scroll}} ref={ref}>
      <div className="modal_bg" onClick={showModal}>
        <div className="modal_container" onClick={e => e.stopPropagation()}>
          <form>
            <label>Имя:
              <input placeholder="Имя" required/>
            </label>
            <label>E-mail:
              <input placeholder="example@email.com" type="email" required/>
            </label>
            <label>Тип проект
              <select name="projectType" required>
                <option value="landing">Landing page</option>
                <option value="SPA">Многостраничный сайт(SPA)</option>
              </select>
            </label>
            <textarea placeholder="Ссылки на примеры готовых проектов"/>
            <input type="submit" value="Отправить"/>
          </form>
        </div>
      </div>
    </div>
  )
})

export const MModal = motion(Modal)