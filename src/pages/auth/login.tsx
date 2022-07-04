import { FC } from 'react';

const Login: FC = () => {
  return (
    <div className="flex justify-center items-center h-screen flex-col gap-10 border-white/10 border-2">
      <div className="flex justify-center items-left flex-col gap-8 border-white/10 border-2 p-10 px-20 rounded-md">
        <a href="/">
          <h2 className="text-xl font-medium font-poppins text-white/60">
            Lynks
          </h2>
        </a>
        <form action="" className="flex flex-col gap-6">
          <h1 className="text-3xl font-medium font-poppins">Log In</h1>
          <div className="flex flex-col gap-2">
            <label htmlFor="email">Email Address</label>
            <input
              type="text"
              id="email"
              className="p-2 text-black rounded-sm"
              placeholder="Email address"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              className="p-2 text-black rounded-sm"
              placeholder="Password"
            />
          </div>
          <input
            type="submit"
            value="Login"
            className="text-lg bg-white text-black p-2 rounded-md px-8 font-dm font-medium"
          />
        </form>
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
