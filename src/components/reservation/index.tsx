import { ResevationForm } from './components/form'
import { Slider } from './components/slider'
import { SectionTitle } from './components/styled'
import './style.css'
export const Reservation = () => {
  return (
    <div className="Reservation">
      <SectionTitle>
        Бронирование столика
      </SectionTitle>
      <ResevationForm />
      <Slider />
    </div>
  )
}