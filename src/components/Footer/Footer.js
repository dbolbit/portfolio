import {BsTelegram, BsGithub} from 'react-icons/bs'
import {AiOutlineMail} from 'react-icons/ai'

const Footer = (props) => {

  return (
    <footer id="contacts">
      <ul>
        <li><a href="https://t.me/kkkiy15t"><BsTelegram/>Telegram</a></li>
        <li><a href="https://t.me/kkkiy15t"><BsGithub/>GitHub</a></li>
        <li><a href="https://t.me/kkkiy15t"><AiOutlineMail/>Email</a></li>
      </ul>
    </footer>
  )
}

export default Footer