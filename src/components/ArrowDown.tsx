
const ArrowDown = () => {
  return (
    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
      <svg
        className="fill-current h-4 w-4"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path d="M10 12l-6-6 1.41-1.41L10 9.17l4.59-4.58L16 6z"/>
      </svg>
    </div>
  );
};

export default ArrowDown;