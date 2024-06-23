type FormButtonProps = {
  isPass: boolean;
};

const FormButton = ({ isPass }: FormButtonProps) => {
  return <button className={isPass ? "border-sky-300 bg-sky-300 rounded-md p-2" : "border-red-300 bg-red-300 rounded-md p-2"}>{isPass ? "등록 완료" : "등록 불가"}</button>;
};
export default FormButton;
