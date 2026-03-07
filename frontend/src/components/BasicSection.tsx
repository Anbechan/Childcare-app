import type { NurseryType } from "../data";

type Props = {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  distance: string;
  setDistance: React.Dispatch<React.SetStateAction<string>>;
  type: NurseryType | "";
  setType: React.Dispatch<React.SetStateAction<NurseryType | "">>;
  rating: number;
  setRating: React.Dispatch<React.SetStateAction<number>>;
  visited: boolean;
  setVisited: React.Dispatch<React.SetStateAction<boolean>>;
};

const BasicSection = ({
  name,
  setName,
  distance,
  setDistance,
  type,
  setType,
  rating,
  setRating,
  visited,
  setVisited,
}: Props) => {
  return (
    <>
      <div className=" text-xl mt-3">
        <div className="flex">
          <fieldset className="fieldset">
            <legend className="fieldset-legend text-yellow-900">園名</legend>
            <input
              type="text"
              className="input"
              placeholder=""
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </fieldset>
          <div className="flex">
            <input
              type="radio"
              name="radio-4"
              className="radio mt-10 ml-4"
              checked={!visited}
              onChange={() => setVisited(false)}
            />
            <p className="text-base  mt-10 ml-2">未見学</p>
          </div>

          <div>
            <input
              type="radio"
              name="radio-4"
              className="radio mt-10 ml-4"
              checked={visited}
              onChange={() => setVisited(true)}
            />
          </div>
          <p className="text-base  mt-10 ml-2">見学済み</p>
        </div>

        <div className="rating my-2">
          <input
            type="radio"
            name="rating-1"
            className="mask mask-star bg-yellow-900"
            checked={rating === 1}
            onChange={() => setRating(1)}
            aria-label="1 star"
          />
          <input
            type="radio"
            name="rating-1"
            className="mask mask-star bg-yellow-900"
            checked={rating === 2}
            onChange={() => setRating(2)}
            aria-label="2 star"
          />
          <input
            type="radio"
            name="rating-1"
            className="mask mask-star bg-yellow-900"
            checked={rating === 3}
            onChange={() => setRating(3)}
            aria-label="3 star"
          />
          <input
            type="radio"
            name="rating-1"
            className="mask mask-star bg-yellow-900"
            checked={rating === 4}
            onChange={() => setRating(4)}
            aria-label="4 star"
          />
          <input
            type="radio"
            name="rating-1"
            className="mask mask-star bg-yellow-900"
            checked={rating === 5}
            onChange={() => setRating(5)}
            aria-label="5 star"
          />
        </div>
      </div>
      <div className="flex items-center">
        <fieldset className="fieldset">
          <legend className="fieldset-legend text-yellow-900">距離</legend>
          <input
            type="text"
            className="input"
            placeholder="徒歩○分など"
            value={distance}
            onChange={(e) => setDistance(e.target.value)}
          />
        </fieldset>
        <span className="mx-8 h-8 border-l border-yellow-900"></span>
        <fieldset className="fieldset">
          <legend className="fieldset-legend text-yellow-900">
            認可の有無
          </legend>
          <select
            value={type}
            onChange={(e) => setType(e.target.value as NurseryType | "")}
            className="select"
          >
            <option value=""></option>
            <option value="認可">認可</option>
            <option value="認可外">認可外</option>
          </select>
        </fieldset>
      </div>
    </>
  );
};

export default BasicSection;
