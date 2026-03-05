import { useState } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import { type Nursery, nurseryDate } from "./date";
import Add from "./pages/Add";

const App = () => {
  const [nurseries, setNurseries] = useState<Nursery[]>(nurseryDate);
  const addNursery = (newNursery: Nursery) => {
    setNurseries([...nurseries, newNursery]);
  };
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [page, setPage] = useState<"home" | "detail" | "add">("home");

  const goDetail = (id: number) => {
    setSelectedId(id);
    setPage("detail");
  };
  return (
    <>
      <Header onAdd={() => setPage("add")} />
      {page === "home" && <Home nurseries={nurseries} goAdd={() => setPage("add")} goDetail={goDetail} />}
      {page === "detail" && (
        <Detail
          selectedId={selectedId}
          nurseries={nurseries}
          goHome={() => setPage("home")}
        />
      )}
      {page === "add" && (
        <Add addNursery={addNursery} goHome={() => setPage("home")} />
      )}
    </>
  );
};

export default App;

// import { BrowserRouter, Routes, Route } from "react-router-dom";
{
  /* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      </BrowserRouter> */
}
