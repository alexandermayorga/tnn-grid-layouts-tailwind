const TwelveCol = () => {
  return (
    <div className="">
      {/* SOF HEADER */}
      <header className="grid grid-cols-12 items-center gap-7 bg-white p-5">
        <h1 className="col-span-6 text-4xl font-bold">12-Col Grid</h1>
        <nav className="col-span-6 justify-self-end text-gray-800">
          <a href="" className="mr-4">
            Home
          </a>
          <a href="" className="mr-4">
            About
          </a>
          <a href="">Contact</a>
        </nav>
      </header>

      {/* SOF MAIN */}
      <main className="container mx-auto my-16 grid grid-cols-12 gap-7 p-5">
        <img
          className="col-span-10 col-start-2 rounded-md md:col-span-6 md:col-start-1"
          src="img/cut/ghosts-buster.jpg"
          alt="ghosts buster logo"
        />
        <div className="welcome col-span-8 col-start-3 text-center md:col-span-5 md:col-start-8 md:text-left">
          <h2 className="mb-4 text-3xl font-bold">Welcome</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,
            cumque molestiae culpa nisi voluptatibus laudantium mollitia
            obcaecati omnis in, ea adipisci, deleniti praesentium? Similique
            aspernatur amet dolor illum, ea tempore animi laborum. Temporibus
            explicabo, omnis molestiae cum eos quidem officia.
          </p>
        </div>
        <h2 className="col-span-12 mb-4 pt-5 text-center text-3xl font-bold">
          Services
        </h2>
        <div className="card col-span-8 col-start-3 rounded-md bg-white px-5 py-3 shadow-md md:col-span-4 md:col-start-auto">
          <h3>Hello.</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero,
            itaque.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero,
            itaque.
          </p>
        </div>
        <div className="card col-span-8 col-start-3 rounded-md bg-white px-5 py-3 shadow-md md:col-span-4 md:col-start-auto">
          <h3>Hello.</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero,
            itaque.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero,
            itaque.
          </p>
        </div>
        <div className="card col-span-8 col-start-3 rounded-md bg-white px-5 py-3 shadow-md md:col-span-4 md:col-start-auto">
          <h3>Hello.</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero,
            itaque.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero,
            itaque.
          </p>
        </div>
      </main>
    </div>
  );
};

export default TwelveCol;
