import type { Nursery } from "../data";
import { getNurseryDetail } from "../services/api";
import { useEffect, useState } from "react";
import { deleteNursery } from "../services/api";

type Props = {
  selectedId: number;
  goHome: () => void;
};

const Detail = ({ selectedId, goHome }: Props) => {
  const [nursery, setNursery] = useState<Nursery | null>(null);

  useEffect(() => {
    if (!selectedId) return;
    const loadDetail = async () => {
      const data = await getNurseryDetail(selectedId);
      setNursery(data);
    };
    loadDetail();
  }, [selectedId]);

  if (!nursery) return <p>保育園が見つかりません</p>;

  const handleDelete = async () => {
    if (!nursery) return;
    if (confirm(`${nursery.name} を削除しますか？`)) {
      await deleteNursery(nursery.id);
      goHome(); // 削除後に一覧画面へ戻る
    }
  };

  return (
    <main className="text-yellow-900 p-4">
      <div className="flex text-yellow-600">
        <button onClick={goHome}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </button>

        <p className="ml-2">戻る</p>
      </div>

      <div className="flex gap-2 text-xl mt-3">
        <h3 className="font-bold">{nursery.name}</h3>
        <p>★{nursery.rating}</p>
      </div>
      <div className="flex items-center">
        <span className="">{nursery.distance}</span>
        <span className="mx-3 h-4 border-l border-yellow-900"></span>
        <span>{nursery.type}</span>
      </div>

      <div>
        <h5 className="text-white bg-yellow-900 pl-2 mt-3"> 基本情報 </h5>
        <h5 className="my-2 font-bold">【 住所 】</h5>
        <span>〒</span>
        {nursery.post}
        <p>{nursery.address}</p>
        <h5 className="my-2 font-bold">【 開園時間・休園日 】</h5>
        <div className="time flex gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
          <p>{nursery.time}</p>
        </div>
        <p className="">＊{nursery.holidays}</p>
        <h5 className="font-bold my-2">【 電話番号・メールアドレス 】</h5>
        <div className="phone flex gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
            />
          </svg>
          <p>{nursery.phone}</p>
        </div>
        <div className="mail flex gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
            />
          </svg>
          <p>{nursery.email}</p>
        </div>
        <h4 className="text-white bg-yellow-900 my-2 pl-2">良かった点</h4>
        <p>{nursery.good_points}</p>
        <h4 className="text-white bg-yellow-900 my-2 pl-2">気になった点</h4>
        <p>{nursery.bad_points}</p>
        <h4 className="text-white bg-yellow-900 my-2 pl-2">メモ</h4>
        <p>{nursery.memo}</p>
        <div className="card-actions mt-3">
          <button className="btn btn-outline text-yellow-900">編集</button>
          <button
            onClick={handleDelete}
            className="btn btn-outline bg-yellow-900 text-white"
          >
            削除
          </button>
        </div>
      </div>
    </main>
  );
};

export default Detail;
