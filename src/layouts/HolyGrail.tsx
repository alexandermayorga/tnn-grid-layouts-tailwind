const HolyGrail = () => {
  return (
    <div className="grid grid-cols-[1fr_3fr_1fr] gap-x-8">
      <header className="col-span-3 border-b border-b-zinc-300 py-7">
        <h1 className="text-center text-4xl font-bold">The Fog Wall</h1>
      </header>

      <nav className="col-span-3 border-b border-b-zinc-300 p-8 xl:col-span-1 xl:border-b-0 xl:border-r xl:border-r-zinc-300">
        <p className="mb-4">Categories</p>
        <li className="mr-3 inline-block list-none underline">Film & Cinema</li>
        <li className="mr-3 inline-block list-none underline">
          Books & Reading
        </li>
        <li className="mr-3 inline-block list-none underline">
          Games & Consoles
        </li>
        <li className="mr-3 inline-block list-none underline">Food & Drink</li>
        <li className="mr-3 inline-block list-none underline">World News</li>
        <li className="mr-3 inline-block list-none underline">
          Outdoor Living
        </li>
      </nav>

      <article className="col-span-3 p-8 lg:col-span-2 xl:col-span-1">
        <h2 className="mb-7 text-3xl font-bold">
          The Best 5 Open World Adventure Games
        </h2>
        <img
          src="/img/raw/enrique-guzman-egas-gSstgCAgd3U-unsplash.jpg"
          alt="article banner"
          className="mb-7"
        />
        <p className="mb-7 leading-7">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
          perspiciatis quo laborum aspernatur eius aliquam, esse minima
          voluptates ea, ad accusantium quia asperiores id officia? Cumque, eum
          neque praesentium expedita sed voluptate dignissimos labore molestias
          beatae facilis rerum unde debitis iste eaque itaque natus. Alias rem,
          et cumque eveniet molestias dolor rerum accusamus possimus pariatur
          voluptates officiis in. Aspernatur illo ducimus ad, suscipit
          distinctio sint error asperiores, accusamus hic dolor provident nobis
          aperiam! Nemo, rem!
        </p>
        <p className="leading-7">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
          perspiciatis quo laborum aspernatur eius aliquam, esse minima
          voluptates ea, ad accusantium quia asperiores id officia? Cumque, eum
          neque praesentium expedita sed voluptate dignissimos labore molestias
          beatae facilis rerum unde debitis iste eaque itaque natus. Alias rem,
          et cumque eveniet molestias dolor rerum accusamus possimus pariatur
          voluptates officiis in. Aspernatur illo ducimus ad, suscipit
          distinctio sint error asperiores, accusamus hic dolor provident nobis
          aperiam! Nemo, rem!
        </p>
      </article>

      <aside className="col-span-3 border-t border-t-zinc-300 p-8 lg:col-span-1 lg:border-l lg:border-t-0 lg:border-l-zinc-300">
        <ul>
          <li>
            <p>
              <strong>Published on:</strong>
            </p>
            <p>May 15th 2022</p>
          </li>
          <li>
            <p>
              <strong>In the category:</strong>
            </p>
            <p>Games & Consoles</p>
          </li>
          <li>
            <p>
              <strong>Writted by:</strong>
            </p>
            <p>Mario</p>
          </li>
        </ul>
      </aside>

      <footer className="col-span-3 border-t border-t-zinc-300 p-7 text-center">
        <p>Copyright 2022 The Fog Wall</p>
      </footer>
    </div>
  );
};

export default HolyGrail;
