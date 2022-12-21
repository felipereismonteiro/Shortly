import axios from "axios";
import { useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/header";
import Logo from "../components/logo";

export default function SignUpRouteComponent() {
  const options = ["Entrar", "Cadastre-se"];
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function signUp(e) {
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;

    if (password !== confirmPassword) {
      e.target.password.value = "";
      e.target.confirmPassword.value = "";
      setLoading(false);
      return alert("Passwords doesn`t match!!!");
    }

    const user = {
      name,
      email,
      password,
      confirmPassword,
    };
    e.preventDefault();
    setLoading(true);

    try {
      await axios.post(
        "https://shortly-api-22wb.onrender.com/signup",
        user
      );
      alert("User registered!!!");
      navigate("/signIn");
    } catch (err) {
      alert(err.response.data);
      e.target.email.value = "";
      setLoading(false);
    }
  }

  return (
    <>
      <Header options={options} page={"SignUp"} />
      <Logo />
      <Form onSubmit={signUp}>
        <Input type="name" name="name" required placeholder="Nome" />
        <Input type="email" name="email" required placeholder="E-mail" />
        <Input type="password" name="password" required placeholder="Senha" />
        <Input
          type="password"
          name="confirmPassword"
          required
          placeholder="Confirmar senha"
        />
        {loading === false ? (
          <Submit type="submit" value={"Criar conta"}></Submit>
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
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 70vh;
`;
const Input = styled.input`
  width: 769px;
  height: 60px;
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
