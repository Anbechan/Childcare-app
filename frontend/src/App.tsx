import { useState } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import { type Nursery } from "./data";
import Add from "./pages/Add";
import { createNursery } from "./services/api";

const App = () => {
  const [nurseries, setNurseries] = useState<Nursery[]>([]);
  const addNursery = async (newNursery: Nursery) => {
    const result = await createNursery(newNursery);
    setNurseries([...nurseries, { ...newNursery, id: result.id }]);
  };
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [page, setPage] = useState<"home" | "detail" | "add">("home");

  const goDetail = (id: number) => {
    setSelectedId(id);
    setPage("detail");
  };

  const deleteNurseryFromState = (id: number) => {
    setNurseries(nurseries.filter((n) => n.id !== id));
  };

  return (
    <>
      <Header onAdd={() => setPage("add")} />
      {page === "home" && (
        <Home goAdd={() => setPage("add")} goDetail={goDetail} />
      )}
      {page === "detail" && (
        <Detail
          selectedId={selectedId}
          nurseries={nurseries}
          goHome={() => {
            deleteNurseryFromState(selectedId!);
            setPage("home");
          }}
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
