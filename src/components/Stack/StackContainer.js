import React, {useState, useLayoutEffect} from 'react'
import {stackData} from "../../data"
import StackItem from "./StackItem"

const StackContainer = ({list}) => {
  const [isLoading, setIsLoading] = useState(false)
  useLayoutEffect(() => {
    setIsLoading(true)
    const id = setTimeout(() => {
      setIsLoading(false)
    }, 1000)
    return () => clearTimeout(id)
  }, [list])

  return (
    <section className="stack_container">
      {
        isLoading ? (<div className="lds-dual-ring"></div>) : (
          stackData[list].map((el, i) => <StackItem key={i} data={el}/>)
        )
      }
    </section>
  )
}


export default StackContainer