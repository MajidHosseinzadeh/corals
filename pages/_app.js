import '@/styles/globals.css'
import { useInView } from 'react-intersection-observer';

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}