import styled from "styled-components";
import { useContext, useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import Header from "../components/header";
import Logo from "../components/logo";
import axios from "axios";
import { Context } from "../context/context";
import UserUrls from "../components/userRoute/userUrls";

export default function SignInComponent() {
  const [loading, setLoading] = useState(false);
  const options = ["Entrar", "Cadastre-se"];
  const navigate = useNavigate();
  const {setToken} = useContext(Context);

  async function signIn(e) {
    e.preventDefault();
    setLoading(true);
    try {
        const email = e.target.email.value;
        const password = e.target.password.value;

        const body = {email,password};

        const token = await axios.post("https://shortly-api-22wb.onrender.com/signIn", body);
        setToken(token.data);
        alert("Logged!!!");
        navigate("/user");
    } catch(err) {
        alert(err.response.data);
        e.target.email.value = ""
        e.target.password.value = ""
        setLoading(false);
    }
  }

  return (
    <>
      <Header options={options} page={"SignIn"} />
      <Logo />
      <Form onSubmit={signIn}>
        <Input type="email" name="email" required placeholder="E-mail" />
        <Input type="password" name="password" required placeholder="Senha" />
        {loading === false ? (
          <Submit type="submit" value={"Entrar"}></Submit>
        ) : (
          <ButtonLoading>
            <ThreeDots
              height="80"
              width="80"
              radius="9"
              color="white"
              ariaLabel="three-dots-loading"
              wrapperStyle={{}}
              wrapperClassName=""
              visible={true}
            />
          </ButtonLoading>
        )}
      </Form>
    </>
  );
}
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 70vh;
`;
const Input = styled.input`
  width: 769px;
  height: 60px;
  margin: 10px 0px;
  background: #ffffff;
  border: 1px solid rgba(120, 177, 89, 0.25);
  box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
  border-radius: 12px;
  color: black;
  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 18px;
  box-sizing: border-box;
  padding: 30px;
`;
const Submit = styled.input`
  width: 182px;
  height: 60px;
  left: 640px;
  top: 701px;

  background: #5d9040;
  border-radius: 12px;
  border: none;
  color: #ffffff;

  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;

  transition: 1s;
  cursor: pointer;
  &&:active {
    transform: translateY(1px);
  }
`;
const ButtonLoading = styled.button`
  width: 182px;
  height: 60px;
  left: 640px;
  top: 701px;
  display: flex;
  justify-content: center;
  align-items: center;

  background: #5d9040;
  border-radius: 12px;
  border: none;
  color: #ffffff;

  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
`;
