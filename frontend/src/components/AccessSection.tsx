
type Props = {
    post: string;
    setPost: React.Dispatch<React.SetStateAction<string>>;
    address: string;
    setAddress: React.Dispatch<React.SetStateAction<string>>;
    time: string;
    setTime: React.Dispatch<React.SetStateAction<string>>;
    holidays: string;
    setHolidays: React.Dispatch<React.SetStateAction<string>>;
    phone: string;
    setPhone: React.Dispatch<React.SetStateAction<string>>;
    email: string;
    setEmail: React.Dispatch<React.SetStateAction<string>>;
  };


const AccessSection = ({post, setPost, address, setAddress, time, setTime, holidays, setHolidays, phone, setPhone, email, setEmail}: Props ) => {
    return (
    <>
      <fieldset className="fieldset">
        <legend className="fieldset-legend text-yellow-900">〒</legend>
        <input type="text" className="input" placeholder="郵便番号" value={post} onChange={(e) => setPost(e.target.value)} />
      </fieldset>

      <fieldset className="fieldset ">
        <legend className="fieldset-legend text-yellow-900">住所</legend>
        <input type="text" className="input" placeholder="東京都" value={address} onChange={(e) => setAddress(e.target.value)} />
      </fieldset>
      <div className="time flex gap-2">
        <fieldset className="fieldset ">
          <legend className="fieldset-legend text-yellow-900">開園時間</legend>
          <input type="text" className="input" placeholder="7：00 〜" value={time} onChange={(e) => setTime(e.target.value)} />
        </fieldset>
      </div>

      <fieldset className="fieldset ">
        <legend className="fieldset-legend text-yellow-900">休園日</legend>
        <input type="text" className="input" placeholder="日曜日" value={holidays} onChange={(e) => setHolidays(e.target.value  )} />
      </fieldset>

      <fieldset className="fieldset ">
        <legend className="fieldset-legend text-yellow-900">電話番号</legend>
        <input type="text" className="input" placeholder="080-1234-5678" value={phone} onChange={(e) => setPhone(e.target.value)} />
      </fieldset>

      <fieldset className="fieldset ">
        <legend className="fieldset-legend text-yellow-900">
          メールアドレス
        </legend>
        <input type="text" className="input" placeholder="mail@site.com" value={email} onChange={(e) => setEmail(e.target.value)}/>
      </fieldset>
    </>
  );
};

export default AccessSection;
