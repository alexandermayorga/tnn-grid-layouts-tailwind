const Masonry = () => {
  return (
    <>
      <header className="bg-white p-6">
        <nav className="container mx-auto grid grid-cols-4 items-center text-center md:max-w-6xl md:grid-cols-5">
          <h1 className="col-span-4 mb-4 text-2xl uppercase leading-6 md:col-span-1 md:col-start-3 md:mb-0">
            <div className="font-extrabold tracking-widest">Express</div>
            <div className="font-normal">Yourself</div>
          </h1>
          <a href="/" className="md:col-start-1 md:row-start-1">
            Home
          </a>
          <a href="/" className="md:col-start-2 md:row-start-1">
            Articles
          </a>
          <a href="/">Guides</a>
          <a href="/">Contact</a>
        </nav>
      </header>
      <main className="mx-auto my-14 grid max-w-md auto-rows-[250px] grid-cols-1 gap-8 p-5 md:max-w-4xl md:grid-cols-2 lg:max-w-6xl lg:grid-cols-3">
        <div className="short row-span-1 overflow-hidden rounded-md border-[16px] border-white bg-white shadow-md ">
          <h3 className="font-bold">A note about style</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam,
            reprehenderit.
          </p>
          <a href="" className="underline">
            Read more
          </a>
        </div>
        <div className="tall row-span-2 flex flex-col items-center justify-center overflow-hidden rounded-md border-[16px] border-white bg-white shadow-md">
          <img
            className="h-full min-w-full max-w-none"
            src="img/cut/khaled-ghareeb-p47oVX9qhkA-unsplash.jpg"
            alt="model"
          />
        </div>
        <div className="short row-span-1 overflow-hidden rounded-md border-[16px] border-white bg-white shadow-md ">
          <h3 className="font-bold">A note about style</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam,
            reprehenderit.
          </p>
          <a href="" className="underline">
            Read more
          </a>
        </div>
        <div className="tall row-span-2 flex flex-col items-center justify-center overflow-hidden rounded-md border-[16px] border-white bg-white shadow-md">
          <img
            className="h-full min-w-full max-w-none"
            src="img/cut/mahdi-chaghari-BGMuQUY91w4-unsplash.jpg"
            alt="model"
          />
        </div>
        <div className="tall row-span-2 flex flex-col items-center justify-center overflow-hidden rounded-md border-[16px] border-white bg-white shadow-md">
          <img
            className="h-full min-w-full max-w-none"
            src="img/cut/taylor-Xqb7GmV_VoQ-unsplash.jpg"
            alt="model"
          />
        </div>
        <div className="tall row-span-2 overflow-hidden rounded-md border-[16px] border-white bg-white shadow-md ">
          <h3 className="font-bold">A note about style</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam,
            reprehenderit.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas
            perspiciatis natus sit dicta repellendus quia mollitia. Voluptas
            ullam ipsa dolorem.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse
            accusamus possimus asperiores fugiat at nostrum odio repellendus
            voluptates. Iusto asperiores voluptate similique maiores ut omnis
            dolores corporis, tenetur excepturi quis?
          </p>
          <a href="" className="underline">
            Read more
          </a>
        </div>
        <div className="short row-span-1 overflow-hidden rounded-md border-[16px] border-white bg-white shadow-md ">
          <h3 className="font-bold">A note about style</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam,
            reprehenderit.
          </p>
          <a href="" className="underline">
            Read more
          </a>
        </div>
        <div className="tall row-span-2 flex flex-col items-center justify-center overflow-hidden rounded-md border-[16px] border-white bg-white shadow-md">
          <img
            className="h-full min-w-full max-w-none"
            src="img/cut/omid-armin-qFKIqEaaw5A-unsplash.jpg"
            alt="model"
          />
        </div>
        <div className="short row-span-1 overflow-hidden rounded-md border-[16px] border-white bg-white shadow-md ">
          <h3 className="font-bold">A note about style</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam,
            reprehenderit.
          </p>
          <a href="" className="underline">
            Read more
          </a>
        </div>
        <div className="short row-span-1 overflow-hidden rounded-md border-[16px] border-white bg-white shadow-md ">
          <h3 className="font-bold">A note about style</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam,
            reprehenderit.
          </p>
          <a href="" className="underline">
            Read more
          </a>
        </div>
      </main>
    </>
  );
};

export default Masonry;
