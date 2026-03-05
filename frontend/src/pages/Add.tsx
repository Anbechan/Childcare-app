import type { Nursery } from "../date";
import InputCard from "../components/InputCard";

type Props = {
  addNursery: (nursery: Nursery) => void;
  goHome: () => void;
};

const Add = ({ addNursery, goHome }: Props) => {
  return (
    <main className="text-yellow-900 p-4">
      <h6 className="text-xl font-bold text-yellow-600">新規登録</h6>
      <InputCard
        onSubmit={(date) => {
          addNursery(date);
          goHome();
        }}
      />
    </main>
  );
};

export default Add;
