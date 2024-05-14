export default function MultiColumn() {
  return (
    <>
      <div className="p-7">
        <header className="mb-10 border-b-2 border-emerald-400 pb-7">
          <h1 className="text-4xl font-bold">Globe Roamer</h1>
        </header>
        <main className="lg:grid lg:grid-cols-3 lg:gap-14">
          {/* FEATURED ARTICLE */}
          <article className="featured col-span-3 mb-12 grid-cols-2 items-center gap-14 border-b-2 border-emerald-400 pb-11 md:grid lg:mb-0">
            <img
              src="/img/cut/pexels-te-lensfix-380994-1371360.jpg"
              alt="ed img"
              className="mb-5 rounded-lg border-4 border-emerald-400 shadow-md shadow-slate-400"
            />
            <div className="">
              <h2 className="mb-2 text-3xl font-bold">Balloon Magic</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                atque sit molestias corporis quod quis velit at ea laborum? Quia
                repellendus nobis eveniet, eligendi obcaecati est odit molestias
                quisquam maxime voluptatem mollitia, explicabo atque tempore
                vitae optio? Asperiores, deserunt commodi?
              </p>
            </div>
          </article>
          {/* NORMAL ARTICLES */}
          <article className="group mb-12 md:max-lg:grid md:max-lg:grid-cols-2 md:max-lg:items-center md:max-lg:gap-14">
            <img
              src="/img/cut/pexels-rpnickson-2864763.jpg"
              alt="article img"
              className="mb-5 rounded-lg border-4 border-emerald-400 shadow-md shadow-slate-400"
            />
            <div>
              <h3 className="mb-2 text-2xl font-semibold">Balloon Magic</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Delectus nisi minus placeat hic animi eveniet consectetur
                voluptates aliquid, sunt accusamus!
              </p>
            </div>
          </article>
          <article className="group mb-12 md:max-lg:grid md:max-lg:grid-cols-2 md:max-lg:items-center md:max-lg:gap-14">
            <img
              src="/img/cut/pexels-ionelceban-2577440.jpg"
              alt="article img"
              className="mb-5 rounded-lg border-4 border-emerald-400 shadow-md shadow-slate-400"
            />
            <div>
              <h3 className="mb-2 text-2xl font-semibold">Road to Freedom</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Delectus nisi minus placeat hic animi eveniet consectetur
                voluptates aliquid, sunt accusamus!
              </p>
            </div>
          </article>
          <article className="group mb-12 md:max-lg:grid md:max-lg:grid-cols-2 md:max-lg:items-center md:max-lg:gap-14">
            <img
              src="/img/cut/pexels-freestockpro-3278215.jpg"
              alt="article img"
              className="mb-5 rounded-lg border-4 border-emerald-400 shadow-md shadow-slate-400"
            />
            <div>
              <h3 className="mb-2 text-2xl font-semibold">The Clear Blue</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Delectus nisi minus placeat hic animi eveniet consectetur
                voluptates aliquid, sunt accusamus!
              </p>
            </div>
          </article>
        </main>
      </div>
    </>
  );
}
