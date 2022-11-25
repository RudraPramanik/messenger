'use client';

function LogOutButton() {
  return (
    <div>
      <button
        onClick={() => console.log('hi')}
        className=" bg-blue-500 text-white font-bold py-2 px-4 rounded "
      >
        sign out
      </button>
    </div>
  );
}

export default LogOutButton;
