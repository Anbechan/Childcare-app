type Props = {
  title: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
};

const TextAreaSection = ({ title, value, setValue }: Props) => {
  return (
    <>
      <h4 className="text-white bg-yellow-900 my-2 pl-2">{title}</h4>
      <fieldset className="fieldset">
        <legend className="fieldset-legend"></legend>
        <textarea
          className="textarea h-24"
          placeholder=""
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </fieldset>
    </>
  );
};

export default TextAreaSection;
