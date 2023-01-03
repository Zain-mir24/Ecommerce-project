import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'tw-elements';
import './index.css'
import { Provider } from 'react-redux'
import { BrowserRouter } from "react-router-dom"
import { persistor, store } from "./store/Store"
import { PersistGate } from 'redux-persist/lib/integration/react'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>

  ,

)
