import type { Nursery } from "../data";

type Props = {
  nursery: Nursery;
  goDetail: (id: number) => void;
};

const Card = ({ nursery, goDetail }: Props) => {
  return (
    <div className="m-3 card bg-base-100 w-50 shadow-sm">
      <div className="text-yellow-900 card-body">
        <h2 className="card-title">{nursery.name}</h2>
        <div className="flex items-center">
          <span className="">{nursery.distance}</span>
          <span className="mx-3 h-4 border-l border-yellow-900"></span>
          <span>{nursery.type}</span>
        </div>

        <div className="card-actions justify-end">
          <button
            onClick={() => goDetail(nursery.id)}
            className="btn btn-outline text-yellow-900"
          >
            詳細
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
