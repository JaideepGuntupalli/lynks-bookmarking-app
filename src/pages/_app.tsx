import { FC } from 'react';
import { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import '../styles/global.css';

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <SessionProvider session={pageProps.session}>
      <Component {...pageProps} />;
    </SessionProvider>
  );
};

export default App;
