import indianFlag from "../../assets/Flag_of_India.svg";

function HomePage({ navigateToLogin }) {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white px-4 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 opacity-10 select-none pointer-events-none rotate-180">
        <svg viewBox="0 0 1440 320" className="w-full h-32 md:h-48">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,256L60,234.7C120,213,240,171,360,170.7C480,171,600,213,720,208C840,203,960,149,1080,144C1200,139,1320,181,1380,202.7L1440,224L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          ></path>
        </svg>
      </div>

      <div className="text-center z-10 mt-12">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">
          Welcome to TaskFlow 🚀
        </h1>
        <p className="text-lg md:text-xl max-w-xl mx-auto text-gray-300 mb-8">
          Manage tasks efficiently. Assign, track, and collaborate with your
          team in a seamless way.
        </p>

        <button
          onClick={navigateToLogin}
          className="bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold px-8 py-3 rounded-xl text-base md:text-lg shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300"
        >
          Login
        </button>

        <div className="flex gap-2 items-center justify-center mt-4">
          <h1 className="text-xl font-semibold">
            <span className="text-[#FF9933]">Pow</span>
            <span className="text-white">ere</span>
            <span className="text-[#138808]">d by</span>
          </h1>
          <img className="w-8" src={indianFlag} alt="" />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 opacity-10 select-none pointer-events-none">
        <svg viewBox="0 0 1440 320" className="w-full h-32 md:h-48">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,256L60,250.7C120,245,240,235,360,224C480,213,600,203,720,192C840,181,960,171,1080,149.3C1200,128,1320,96,1380,80L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
}

export default HomePage;
