import { ChangeEvent, useState } from "react";
import FormButton from "./FormButton";
import InputForm from "./InputForm";

function App() {
  const [signUp, setSignUp] = useState({ id: "", pw: "", pwch: "" });

  const isAllLength = !!signUp.id.length && !!signUp.pw.length && !!signUp.pwch.length;
  const isAllPassed = signUp.id.includes("@") && signUp.pw === signUp.pwch;

  const handleId = (e: ChangeEvent<HTMLInputElement>) => {
    setSignUp((v) => ({ ...v, id: e.target.value }));
  };

  const handlePw = (e: ChangeEvent<HTMLInputElement>) => {
    setSignUp((v) => ({ ...v, pw: e.target.value }));
  };

  const handlePwch = (e: ChangeEvent<HTMLInputElement>) => {
    setSignUp((v) => ({ ...v, pwch: e.target.value }));
  };

  return (
    <div className="App">
      <InputForm onChange={handleId} guide="아이디" />
      <InputForm onChange={handlePw} guide="비밀번호" />
      <InputForm onChange={handlePwch} guide="비밀번호 확인" />
      <FormButton isPass={isAllLength && isAllPassed} />
    </div>
  );
}

export default App;
