import { FC } from 'react';

const Home: FC = () => {
  return (
    <div className="flex justify-center items-center h-screen flex-col gap-10 border-white/10 border-2">
      <div className="flex justify-center items-left flex-col gap-10 border-white/10 border-2 p-10 px-20 rounded-md max-w-sm">
        <h1 className="text-5xl font-bold font-poppins">Lynks</h1>
        <p className="text-white/50">
          Lynks is a bookmarking app that lets you bookmark sites, sort them
          into lists/projects, share them with friends and collaborate together,
        </p>
        <a
          className="text-lg bg-white text-black p-2 rounded-md px-8 font-dm font-medium text-center"
          href="/login"
        >
          Visit the app
        </a>
      </div>
    </div>
  );
};

export default Home;
