import LogoIcon from '../../../assets/icons/logo.svg'
export const OptionalMenu = () => {
  return (
    <div className='optional-menu'>
      <div className='optional-items'>
        <img src={LogoIcon} alt='Bono' />
      </div>
      <div className='optional-items'>
        <ul>
          <li>Главная</li>
          <li>Меню</li>
          <li>Доставка</li>
          <li>О нас</li>
          <li>Контакты</li>
        </ul>
      </div>
    </div>
  )
}