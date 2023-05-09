import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/globals.css'
import MainContext from '@/context/Main';

export default function App({ Component, pageProps }) {
  return <MainContext><Component {...pageProps} /></MainContext>
}
