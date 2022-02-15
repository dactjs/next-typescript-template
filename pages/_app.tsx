import { EnhancedNextApp } from '@/types';

const App: EnhancedNextApp = ({ Component, pageProps }) => {
  const getLayout = Component.getLayout ?? ((page) => page);

  return getLayout(<Component {...pageProps} />);
};

export default App;
