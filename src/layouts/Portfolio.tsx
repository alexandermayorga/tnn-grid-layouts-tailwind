const Portfolio = () => {
  return (
    <main className="grid min-h-full lg:grid-cols-2 xl:grid-cols-[1.2fr_1fr_1fr]">
      {/* WELCOME PANEL */}
      <div
        id="welcome"
        className="panel welcome grid auto-rows-[1fr] bg-teal-700 px-16 py-8"
      >
        <nav>
          <a href="" className="mr-5 text-white">
            Home
          </a>
          <a href="" className="mr-5 text-white">
            Portfolio
          </a>
          <a href="" className="mr-5 text-white">
            Contact
          </a>
        </nav>

        <div>
          <h1 className=" mb-4 text-5xl text-white">Moony</h1>
          <p className="max-w-xl leading-8 text-white">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat
            dignissimos distinctio dolores praesentium iusto! Accusantium
            aspernatur libero dolor delectus amet.
          </p>
        </div>

        <footer className="self-end">
          <p className="leading-8 text-white">
            Lorem ipsum dolor sit amet consectetur.
          </p>
        </footer>
      </div>

      {/* ABOUT PANEL */}
      <div
        id="about"
        className="panel about grid grid-cols-1 grid-rows-[3fr_1fr] overflow-hidden sm:grid-cols-2 sm:max-lg:grid-rows-1 lg:grid-cols-1"
      >
        <img
          //   src="img/cut/mahdi-chaghari-BGMuQUY91w4-unsplash.jpg"
          src="img/cut/1.png"
          alt="main pic"
          className=" min-h-full min-w-full max-w-none justify-self-center"
        />
        <div className="text flex flex-col justify-center bg-zinc-100 px-14 py-7">
          <h2 className="mb-3 text-3xl font-bold">About Me</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
            corrupti.
          </p>
        </div>
      </div>

      {/* PHOTOS PANEL */}
      <div
        id="photos"
        className="panel photos grid grid-cols-1 grid-rows-[3fr_1fr] overflow-hidden sm:grid-cols-2 sm:max-lg:grid-rows-1 lg:col-span-2 lg:grid-rows-1  xl:col-span-1 xl:grid-cols-1 xl:grid-rows-[1fr_3fr] "
      >
        <div className="text row-start-2 flex flex-col justify-center  bg-zinc-100 px-14 py-7 sm:row-start-auto">
          <h2 className="mb-3 text-3xl font-bold">Photography</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae,
            culpa.
          </p>
        </div>
        <img
          //   src="img/cut/taylor-Xqb7GmV_VoQ-unsplash.jpg"
          src="img/cut/2.png"
          alt="landscape pic"
          className=" min-h-full min-w-full max-w-none justify-self-center"
        />
      </div>
    </main>
  );
};

export default Portfolio;
