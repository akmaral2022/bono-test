import { ResevationForm } from './components/form'
import { SectionTitle } from './components/styled'
import './style.css'
export const Reservation = () => {
  return (
    <div className="Reservation">
      <SectionTitle>
        Бронирование столика
      </SectionTitle>
      <ResevationForm />
    </div>
  )
}