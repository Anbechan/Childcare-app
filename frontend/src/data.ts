export type NurseryType = "認可" | "認可外";

export type Nursery = {
  id: number;
  name: string;
  distance: string;
  type: NurseryType;
  visited: boolean;
  rating: number;
  post: string;
  address: string;
  time: string;
  holidays: string;
  phone: string;
  email: string;
  goodPoints?: string[];
  badPoints?: string[];
  memo?: string[];
};

export const nurseryDate: Nursery[] = [
  {
    id: 1,
    name: "ひまわり保育園",
    distance: "徒歩３分",
    type: "認可",
    visited: false,
    rating: 3,
    post: "123-4567",
    address: "東京都目黒区北見８−１２−２４",
    time: "7:00 〜 20:00",
    holidays: "日曜・祝日・年末年始",
    phone: "03-9876-5432",
    email: "himawari_hoikuen@gamail.com",
    goodPoints: [""],
    badPoints: [""],
    memo: [""],
  },
  {
    id: 2,
    name: "ゆめの森保育園",
    distance: "自転車８分",
    type: "認可外",
    visited: true,
    rating: 4,
    post: "123-4567",
    address: "東京都目黒区北見８−１２−２４",
    time: "7:00 〜 20:00",
    holidays: "日曜・祝日・年末年始",
    phone: "03-9876-5432",
    email: "himawari_hoikuen@gamail.com",
    goodPoints: ["園庭が広い", "先生が丁寧に子どもを見てくれる"],
    badPoints: ["給食の種類が少ない"],
    memo: ["延長保育は１９：００〜で補食が出る"],
  },
];
