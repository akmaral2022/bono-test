import './App.css'
import { ConfigProvider } from 'antd'
import { theme } from './styles/antd-tokens'
import { Reservation } from './components/reservation'
import { HeaderContent } from './components/header'

function App() {

  return (
    <div className='App'>
      <ConfigProvider theme={theme}>
        <HeaderContent />
        <Reservation />
      </ConfigProvider>
    </div>
  )
}

export default App
