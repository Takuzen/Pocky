// import App from "next/app";
// main.scss files needs to be imported here! if inserted to index.tsx
// it will occur webpack error idk why
import type { AppProps /*, AppContext */ } from 'next/app'
import '../styles/global.scss'
import '../styles/main.scss'

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
