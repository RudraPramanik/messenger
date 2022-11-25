import React from 'react';

const ChatInput = () => {
  return (
    <div>
      <form action=" flex ">
        <input
          placeholder="enter message hare"
          className="flex-1 rounded border border-gray-300 focus:outline-none px-5 py-3 disabled:opacity-50 disabled:cursor-not-allowed  "
        />
        <button
          type="submit"
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded disabled:opacity-50 disabled:cursor-not-allowed "
        >
          button
        </button>
      </form>
    </div>
  );
};

export default ChatInput;
