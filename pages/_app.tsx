import { EnhancedNextApp } from '@/types';

const App: EnhancedNextApp = ({ Component, pageProps }) => (
  <Component {...pageProps} />
);

export default App;
