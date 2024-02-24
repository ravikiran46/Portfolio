import p1 from "../../assets/Project1.png"

const Project = () => {
  const portfolios = [
    {
      id:1,
      src:p1
    }
    
  ];

  return (
    <div
      name="Projects"
      className="bg-black w-full text-white  md:h-screen pb-32"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg duration-200 hover:scale-105">
              <img
                src={src}
                alt=""
                className="rounded-md "
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href="https://ecommerce-atx6.vercel.app/" target="_blank" rel="noopener noreferrer">Demo</a>
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href="https://github.com/ravikiran46/Ecommerce" target="_blank" rel="noopener noreferrer">Code</a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;