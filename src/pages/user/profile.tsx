import { FC, useState } from 'react';
import axios from 'axios';

const Profile: FC = ({ user }) => {
  //   async function getUserDetails() {
  //     const response = await axios.post('/users/details', {
  //       headers: { Authorization: window.localStorage.getItem('jwtToken') },
  //     });
  //     console.log(response.data);
  //     return response.data;
  //   }
  return (
    <div className="flex justify-center items-center h-screen flex-col gap-10 border-white/10 border-2">
      <div className="flex justify-center items-left flex-col gap-8 border-white/10 border-2 p-10 px-20 rounded-md">
        <a href="/">
          <h2 className="text-xl font-medium font-poppins text-white/60">
            Lynks
          </h2>
          <p>{user.name}</p>
          <p>{user.email}</p>
        </a>
      </div>
    </div>
  );
};

export default Profile;

export async function getStaticProps() {
  const data = await axios.post('/users/details', {
    headers: { Authorization: window.localStorage.getItem('jwtToken') },
  });
  return {
    props: {
      user: data,
    },
  };
}
