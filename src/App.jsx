
import './App.css'
import Index from './routes/Index'
import {Provider} from 'react-redux'
import Store from './REDUX/Store'
function App() {

  return (
    <Provider store={Store}>
      <div className='app'>
        <Index />
      </div>
    </Provider>



  )
}

export default App
