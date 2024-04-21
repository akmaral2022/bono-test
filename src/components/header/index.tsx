import { Connect } from './components/connect'
import { OptionalMenu } from './components/options'
import './style.css'

export const HeaderContent = () => {
  return (
    <div className="HeaderContent">
      <Connect />
      <div className="line horizontal"></div>
      <OptionalMenu />
    </div>
  )
}