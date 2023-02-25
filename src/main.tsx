import ReactDOM from 'react-dom/client'
import App from './App'
import FontStyles from './assets/fonts/fonts'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <>
  <FontStyles/>
    <App />
  </>,
)
