import { AppProps } from 'next/app';

type NextApp = (props: AppProps) => JSX.Element;

const App: NextApp = ({ Component, pageProps }) => <Component {...pageProps} />;

export default App;
