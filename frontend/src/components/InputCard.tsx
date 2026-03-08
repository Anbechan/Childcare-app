import { useState } from "react";
import BasicSection from "./BasicSection";
import AccessSection from "./AccessSection";
import TextAreaSection from "./TextAreaSection";
import type { Nursery, NurseryType } from "../data";

type Props = {
  onSubmit: (nursery: Nursery) => void;
  goHome?: () => void;
};

const InputCard = ({ onSubmit, goHome }: Props) => {
  const [name, setName] = useState("");
  const [distance, setDistance] = useState("");
  const [type, setType] = useState<NurseryType | "">("" as NurseryType | "");
  const [rating, setRating] = useState(0);
  const [visited, setVisited] = useState(false);
  const [post, setPost] = useState("");
  const [address, setAddress] = useState("");
  const [time, setTime] = useState("");
  const [holidays, setHolidays] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [good_points, setGoodPoints] = useState("");
  const [bad_points, setBadPoints] = useState("");
  const [memo, setMemo] = useState("");

  const handleSubmit = () => {
    const newNursery: Nursery = {
      id: Date.now(),
      name,
      rating,
      distance,
      type: type as NurseryType,
      visited,
      post,
      address,
      time,
      holidays,
      phone,
      email,
      good_points: good_points ? good_points.split("\n") : [],
      bad_points: bad_points ? bad_points.split("\n") : [],
      memo: memo ? memo.split("\n") : [],
    };
    onSubmit(newNursery);
    if (goHome) {
      goHome();
    }
  };
  return (
    <>
      <BasicSection
        name={name}
        setName={setName}
        distance={distance}
        setDistance={setDistance}
        type={type}
        setType={setType}
        rating={rating}
        setRating={setRating}
        visited={visited}
        setVisited={setVisited}
      />
      <h5 className="text-white bg-yellow-900 pl-2 mt-3"> 基本情報 </h5>
      <AccessSection
        post={post}
        setPost={setPost}
        address={address}
        setAddress={setAddress}
        time={time}
        setTime={setTime}
        holidays={holidays}
        setHolidays={setHolidays}
        phone={phone}
        setPhone={setPhone}
        email={email}
        setEmail={setEmail}
      />

      <TextAreaSection
        title="良かった点"
        value={good_points}
        setValue={setGoodPoints}
      />
      <TextAreaSection
        title="気になった点"
        value={bad_points}
        setValue={setBadPoints}
      />
      <TextAreaSection title="メモ" value={memo} setValue={setMemo} />

      <div className="card-actions mt-3">
        <button
          onClick={handleSubmit}
          className="btn btn-outline text-yellow-600"
        >
          追加
        </button>
      </div>
    </>
  );
};

export default InputCard;
