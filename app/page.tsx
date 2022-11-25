import React from 'react';
import ChatInput from './ChatInput';
import MessegeList from './MessegeList';

const homepage = () => {
  return (
    <div className=" text-lg ">
      {/* homepage */}
      <MessegeList />
      <ChatInput />
    </div>
  );
};

export default homepage;
