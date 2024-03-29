const LeftOverlayContent = ({ isAnimated, setIsAnimated }) => {
  return (
    <div className="p-8 text-center">
      <h1 className="text-6xl font-bold text-white mb-4">
        Ngapain daftar
      </h1>

      <h5 className="text-xl text-white">kalo dah punya akun</h5>
      <div className="mt-16">
        <button
          className="py-3 px-6 bg-transparent rounded-full text-center text-white text-xl font-bold uppercase ring-2 ring-white hover:bg-white hover:ring-teal-500 hover:text-teal-500 transition-transform ease-in"
          onClick={(e) => {
            setIsAnimated(!isAnimated);
          }}
        >
          Masuk
        </button>
      </div>
    </div>
  );
};

export default LeftOverlayContent;
