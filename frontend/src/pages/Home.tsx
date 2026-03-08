import Card from "../components/NurseryCard";
import type { Nursery } from "../data";
import { getNurseries } from "../services/api";
import { useEffect, useState } from "react";

type Props = {
  goDetail: (id: number) => void;
  goAdd: () => void;
};

const Home = ({ goDetail }: Props) => {
  const [visited, setVisited] = useState<Nursery[]>([]);
  const [unvisited, setUnvisited] = useState<Nursery[]>([]);

   // APIからデータ取得
  useEffect(() => {
    const loadData = async () => {
      const data = await getNurseries();
      setVisited(data.visited);
      setUnvisited(data.unvisited);
    };
    loadData();
  }, []);


  return (
    <main className="p-3">
      {/* 未見学 */}
      <div className="">
        <h2 className="text-l font-bold text-red-200 p-3">未見学</h2>
        <div className="bg-red-100 flex flex-wrap gap-4 p-4">
          {/* caed */}
          {unvisited.map((n) => (
            <Card key={n.id} nursery={n} goDetail={goDetail} />
          ))}
          {/*  */}
        </div>
      </div>
      {/* 見学済み */}
      <div className="">
        <h2 className="text-l font-bold text-purple-300 p-3">見学済み</h2>
        <div className="bg-purple-100 flex flex-wrap gap-4 p-4">
          {/* card */}
          {visited.map((n) => (
            <Card key={n.id} nursery={n} goDetail={goDetail} />
          ))}
          {/*  */}
        </div>
      </div>
    </main>
  );
};

export default Home;
