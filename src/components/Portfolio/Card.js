const Card = ({data}) => {
  const {name, type, time, price, img, url} = data

  return (
    <div className="portfolio_card">
      <div className="portfolio_card_wrapper_bg_img"
           style={{background: `url(${img}) center /cover`}}>
      </div>
      <div className="portfolio_card_hovered_bg">
        <h3 style={{color: 'white'}}>{name}</h3>
        <table>
          <tbody>
          <tr>
            <td>Тип проекта</td>
            <td>{type}</td>
          </tr>
          <tr>
            <td>Время</td>
            <td>{time}</td>
          </tr>
          <tr>
            <td>Цена</td>
            <td>{price}</td>
          </tr>
          </tbody>

        </table>

      </div>
    </div>
  )
}


export default Card