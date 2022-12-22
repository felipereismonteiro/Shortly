import { useContext, useState } from "react";
import styled from "styled-components";
import Header from "../header";
import Logo from "../logo";
import { ThreeDots } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import UserUrls from "./userUrls";
import { Context } from "../../context/context";
import axios from "axios";

export default function UserRoute() {
  const options = ["Home", "Ranking", "Sair"];
  const [loading, setLoading] = useState(false);
  const token = JSON.parse(localStorage.getItem("token"));

  async function postUrl(e) {
    try {
      const body = {url: e.target.url.value}
      e.preventDefault();
      setLoading(true);
      const config = {
        headers: {
            "Authorization": "Bearer "  + token.token
        }
    }

    await axios.post("https://shortly-api-22wb.onrender.com/urls/shorten",body, config)
    setLoading(false);
    } catch (err) {
      alert(err.response.data);    
      setLoading(false);
    }
  }

  return (
    <>
      <Header
        mainText="Seja bem-vindo(a), Pessoa!"
        options={options}
        page={"SignIn"}
      />
      <Logo />

    
      <Form onSubmit={postUrl}>
        <Input
          type="text"
          name="url"
          required
          placeholder="Links que cabem no bolso"
        />
        {loading === false ? (
          <Submit type="submit" value={"Encurtar link"}></Submit>
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
      <UserUrls loading={loading} />
    </>
  );
}
const Form = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
`
const Input = styled.input`
  width: 80vw;
  height: 60px;
  margin: 30px 10px;
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
