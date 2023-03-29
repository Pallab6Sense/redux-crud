import '@/styles/globals.css'
import type { AppProps } from 'next/app';
import {configureStore} from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import usersReducer from '../Redux/Users'

const store=configureStore({
  reducer:{
    users:usersReducer,
  }
})
export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}
