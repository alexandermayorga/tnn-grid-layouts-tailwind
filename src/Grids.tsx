export default function Grids() {
  // const bgColors = [
  //   "teal",
  //   "lime",
  //   "cyan",
  //   "indigo",
  //   "purple",
  //   "violet",
  //   "pink",
  //   "rose",
  //   "amber",
  //   "zinc",
  //   "orange",
  //   "stone",
  //   "green",
  //   "fuchsia",
  //   "emerald",
  //   "sky",
  // ];
  // const gridItemRepeater = (Quantity: number) => {
  //   return <div>Grid Item {Quantity}</div>;
  // };

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-3 gap-3 bg-zinc-100 *:rounded *:border-2 *:border-violet-600 *:p-2">
        <div className="col-start-2 col-end-3 bg-rose-100">Grid Item 1</div>
        <div className="col-start-1 row-span-3 bg-teal-100">Grid Item 2</div>
        <div className="bg-purple-100 ">Grid Item 3</div>
        <div className="bg-lime-100 ">Grid Item 4</div>
        <div className="bg-amber-100">Grid Item 5</div>
        <div className="bg-orange-100 ">Grid Item 6</div>
        <div className="bg-emerald-100 ">Grid Item 7</div>
        <div className="bg-indigo-100 ">Grid Item 8</div>
        <div className="bg-cyan-100 ">Grid Item 9</div>
      </div>
    </div>
  );
}
