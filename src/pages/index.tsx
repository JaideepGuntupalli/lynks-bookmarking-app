import { FC } from 'react';
import Link from 'next/link';
import { signIn, signOut, useSession } from 'next-auth/react';

const Home: FC = () => {
  const { data: session, status } = useSession();
  const loading = status === 'loading';
  return (
    <div className="flex justify-center items-center h-screen flex-col gap-10 border-white/10 border-2">
      <div className="flex justify-center items-left flex-col gap-10 border-white/10 border-2 p-10 px-20 rounded-md max-w-sm">
        {!session && (
          <>
            <h1 className="text-5xl font-bold font-poppins">Lynks</h1>
            <p className="text-white/50">
              Lynks is a bookmarking app that lets you bookmark sites, sort them
              into lists/projects, share them with friends and collaborate
              together,
            </p>
            <a
              className="text-lg bg-white text-black p-2 rounded-md px-8 font-dm font-medium text-center"
              onClick={() => signIn()}
            >
              Login
            </a>
          </>
        )}
        {session && (
          <>
            <h1 className="text-5xl font-bold font-poppins">
              Welcome to Lynks, {session.user.name}
            </h1>
            <p className="text-white/50">
              App coming soon! Lynks is a bookmarking app that lets you bookmark
              sites, sort them into lists/projects, share them with friends and
              collaborate together,
            </p>
            <a
              className="text-lg bg-white text-black p-2 rounded-md px-8 font-dm font-medium text-center"
              onClick={() => signOut()}
            >
              Sign Out
            </a>
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
