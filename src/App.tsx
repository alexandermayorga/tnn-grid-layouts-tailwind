import { useState } from "react";
import "./App.css";
import CollapsibleSidebar from "./layouts/CollapsibleSidebar";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <CollapsibleSidebar
        isSidebarOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
      ></CollapsibleSidebar>
    </>
  );
}

export default App;
