import React from 'react'
import { RouterApp } from './routers/RouterApp'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { Store } from './store/store'

export const CalendarApp = () => {
  return (
    <Provider store={Store}>
      <BrowserRouter>
        <RouterApp/>
      </BrowserRouter>
    </Provider>
  )
}
