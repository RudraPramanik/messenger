import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import LogOutButton from './LogOutButton';

const Header = () => {
  const session = true;
  if (session)
    return (
      <header className="sticky top-0 z-50 bg-red-100 flex justify-between items-center p-10 shadow-md">
        <div className="flex space-x-2">
          <Image
            src="https://www.pexels.com/photo/man-smiling-behind-wall-220453/"
            alt="image"
            height={10}
            width={50}
          />
          <div>
            <p className="text-blue-300">logged in as:</p>
            <p className="font-bold text-2xl"> rudra </p>
          </div>
        </div>
        <div>
          {' '}
          <LogOutButton />
        </div>
      </header>
    );
  return (
    <header className=" sticky top-0 z-50 bg-red-100 flex justify-center items-center p-10 shadow-md ">
      <div className="flex flex-col items-center ">
        <div className=" flex space-x-2 items-center ">
          <Image
            src="https://www.pexels.com/photo/man-smiling-behind-wall-220453/"
            alt="image"
            height={10}
            width={50}
          />
          <p className="text-blue-400">welcome to messenger</p>
        </div>
        <Link
          href="auth/signup"
          className=" bg-blue-500 text-white font-bold py-2 px-4 rounded "
        >
          signup
        </Link>
      </div>
    </header>
  );
};

export default Header;
