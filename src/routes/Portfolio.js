import React from 'react'
import Card from "../components/Portfolio/Card"
import {portfolioData} from "../data"

const Portfolio = (props) => {

  return (
    <div className="portfolio_wrapper" id="portfolio">
      <h1>Примеры готовых проектов</h1>
      <main>
        {portfolioData.map(data => <Card key={data.type} data={data}/>)}
      </main>
    </div>
  )
}


export default Portfolio