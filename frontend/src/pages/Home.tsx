import Card from "../components/NurseryCard";
import type { Nursery } from "../date";

type Props = {
  nurseries: Nursery[];
  goDetail: (id: number) => void;
  goAdd: () => void;
};

const Home = ({ nurseries, goDetail, goAdd }: Props) => {
  const unvisited = nurseries.filter((n) => !n.visited);
  const visited = nurseries.filter((n) => n.visited);
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
