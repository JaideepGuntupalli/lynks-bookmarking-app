import { FC, useState } from 'react';
import { NextPageContext } from 'next';
// import { useRouter } from 'next/router';
import {
  getProviders,
  signIn,
  getSession,
  getCsrfToken,
} from 'next-auth/react';

interface Props {
  getProviders?: string;
  getCsrfToken?: string;
}

const Login: FC<Props> = ({ getProviders, getCsrfToken }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  // const router = useRouter();

  return (
    <div className="flex justify-center items-center h-screen flex-col gap-10 border-white/10 border-2">
      <div className="flex justify-center items-left flex-col gap-8 border-white/10 border-2 p-10 px-20 rounded-md">
        <a href="/">
          <h2 className="text-xl font-medium font-poppins text-white/60">
            Lynks
          </h2>
        </a>
        <form
          method="POST"
          action="/auth/login"
          className="flex flex-col gap-6"
        >
          <h1 className="text-3xl font-medium font-poppins">Log In</h1>

          <div className="flex flex-col gap-2">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-2 text-black rounded-sm"
              placeholder="Email Address"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="p-2 text-black rounded-sm"
              placeholder="Password"
            />
          </div>
          <input
            type="button"
            value="Login"
            className="text-lg bg-white text-black p-2 rounded-md px-8 font-dm font-medium cursor-pointer"
          />
        </form>
        <p className="text-red-400">{error}</p>
        <p className="text-white/50">
          Don't have an account yet?{' '}
          <a href="/signup" className="hover:text-white underline">
            Sign Up here!
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;

Login.getInitialProps = async (context) => {
  const { req, res } = context;
  const session = await getSession({ req });

  if (session && res && session.accessToken) {
    res.writeHead(302, {
      Location: '/',
    });
    res.end();
    return;
  }

  return {
    session: undefined,
    providers: await getProviders(),
    csrfToken: await getCsrfToken(context),
  };
};
