import { useState } from "react";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import MultiColumn from "./MultiColumn";
import HolyGrail from "./HolyGrail";
import Masonry from "./Masonry";
import Portfolio from "./Portfolio";
import TwelveCol from "./TwelveCol";

type PropTypes = {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
};

const CollapsibleSidebar = ({ isSidebarOpen, toggleSidebar }: PropTypes) => {
  //[ ] Function to Change Layout
  //[X] Function to Open/Close Sidebar
  const [activeLayout, setActiveLayout] = useState("portfolio");

  const handleSidebarToggle = () => {
    toggleSidebar();
  };
  const handleActiveLayoutChange = (layout: string) => {
    setActiveLayout(layout);
  };

  return (
    <>
      {/* <header>
        Sidebar is: {isSidebarOpen ? "open" : "closed"}{" "}
        <button onClick={handleSidebarToggle}>toggle</button>
      </header> */}
      <div
        className={`grid h-full transition-all duration-300 ease-out ${isSidebarOpen ? "grid-cols-[240px_auto]" : "grid-cols-[0px_auto]"} `}
      >
        <aside
          className={`relative z-10 w-full overflow-auto   border-r-slate-200 bg-slate-100 ${isSidebarOpen ? "border-r-2" : "border-r-0"}`}
        >
          <div className="min-w-[240px] p-7">
            <h4 className="mb-1">Layouts</h4>
            <ul className="leading-7">
              <li
                className="cursor-pointer hover:underline"
                onClick={() => handleActiveLayoutChange("multicolumn")}
              >
                Multi Column
              </li>
              <li
                className="cursor-pointer hover:underline"
                onClick={() => handleActiveLayoutChange("holygrail")}
              >
                Holy Grail
              </li>
              <li
                className="cursor-pointer hover:underline"
                onClick={() => handleActiveLayoutChange("masonry")}
              >
                Masonry
              </li>
              <li
                className="cursor-pointer hover:underline"
                onClick={() => handleActiveLayoutChange("portfolio")}
              >
                Portfolio
              </li>
              <li
                className="cursor-pointer hover:underline"
                onClick={() => handleActiveLayoutChange("twelvecolumn")}
              >
                Twelve Column
              </li>
            </ul>
          </div>
        </aside>

        <div
          id="toggle-tab"
          className={`absolute left-0 top-[50%] z-0 ${isSidebarOpen ? "ml-[240px]" : "ml-0"} -translate-y-1/2 cursor-pointer rounded-br-md rounded-tr-md bg-slate-200 px-0.5 py-7 text-sm duration-300 ease-out hover:bg-slate-300`}
          onClick={handleSidebarToggle}
        >
          {" "}
          {isSidebarOpen ? <FaChevronLeft /> : <FaChevronRight />}
        </div>
        <main className={`bg-stone-100 duration-300 ease-out  `}>
          {activeLayout === "multicolumn" && <MultiColumn />}
          {activeLayout === "holygrail" && <HolyGrail />}
          {activeLayout === "masonry" && <Masonry />}
          {activeLayout === "portfolio" && <Portfolio />}
          {activeLayout === "twelvecolumn" && <TwelveCol />}
        </main>
      </div>
    </>
  );
};

export default CollapsibleSidebar;
