import IconPhone from '../../../assets/icons/phone.png'
import IconMessage from '../../../assets/icons/message.svg'
import IconInsta from '../../../assets/icons/instagram.svg'
import Icon2Gis from '../../../assets/icons/2gis.svg'
import { ConnectButton } from '../styled'

export const Connect = () => {
  return (
    <div className="connect">
      <div className='item-blocks'>
        <div className="connect-items">
          <img src={IconPhone} alt='IconPhone' />
          <p>
            +996 501 06 55 05
          </p>
        </div>
        <div className="connect-items">
          <img src={IconMessage} alt='IconMessage' />
          <p>bono51@gmail.com</p>
        </div>
      </div>
      <div className='item-blocks'>
        <div className="connect-items">
          <img src={IconInsta} alt='IconInsta' />
          <p>instagram</p>
        </div>
        <div className="connect-items">
          <img src={Icon2Gis} alt='Icon2Gis' />
          <p>2Gis</p>
        </div>
        <ConnectButton ghost>Заказать</ConnectButton>
      </div>

    </div >
  )
}