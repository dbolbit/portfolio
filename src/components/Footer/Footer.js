import {BsTelegram, BsGithub} from 'react-icons/bs'
import {AiOutlineMail} from 'react-icons/ai'

const Footer = (props) => {

  return (
    <footer id="contacts">
      <ul>
        <li><a href="https://t.me/qwerty1559"><BsTelegram/>Telegram</a></li>
        <li><a href="https://github.com/dbolbit"><BsGithub/>GitHub</a></li>
        <li onClick={() => alert('dbolbitweb@gmail.com')}><a><AiOutlineMail/>Email</a></li>
      </ul>
    </footer>
  )
}

export default Footer