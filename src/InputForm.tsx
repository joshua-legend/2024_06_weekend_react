import { ChangeEvent } from "react";

type InputFormProps = {
  guide?: string;
  placeholder?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const InputForm = ({ guide = "None", placeholder = "", onChange }: InputFormProps) => {
  return (
    <div className=" p-4 border border-slate-300 rounded-md bg-white flex items-center space-x-2">
      <h4 className="text-lg w-fit text-slate-500">{guide}</h4>
      <input placeholder={placeholder} onChange={onChange} type="text" className="w-full p-2 border border-gray-300 rounded-md focus:outline-none" />
    </div>
  );
};

export default InputForm;
