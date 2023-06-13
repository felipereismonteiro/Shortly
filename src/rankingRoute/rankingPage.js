import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../components/header";
import Logo from "../components/logo";
import trophy from "../img/trophy.png";

export default function RankingPage() {
  let options;
  const token = JSON.parse(localStorage.getItem("token"));
  const [ranking, setRanking] = useState([]);

  useEffect(() => {
    axios.get("https://shortly-api-22wb.onrender.com/ranking").then((res) => {
        setRanking(res.data);
    }).catch((err) => {
        console.log(err.response.data)
    })
  }, [])
    
  if (token === null) {
    options = ["SignIn", "LogOut"];

    return (
        <>
          <Header options={options} />
          <Logo />
          <Container>
            <img src={trophy} alt="ranking" />
            <h1>Ranking</h1>
          </Container>
          <BoxRanking>
            {ranking.map((R, index) => <h1 key={R.id}>{index + 1}. {R.name} - {R.linksCount} links - {R.visitCount} visualizations</h1>)}
          </BoxRanking>
          <NotLogged>Create your account to use our services!</NotLogged>
        </>
      );

  } else {
    options = ["Home", "Ranking", "LogOut"];
  }

  return (
    <>
      <Header options={options} />
      <Logo />
      <Container>
        <img src={trophy} alt="ranking" />
        <h1>Ranking</h1>
      </Container>
      <BoxRanking>
        {ranking.map((R, index) => <h1 key={R.id}>{index + 1}. {R.name} - {R.linksCount} links - {R.visitCount} - views</h1>)}
      </BoxRanking>
    </>
  );
}
const NotLogged = styled.h1`
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    display: flex;
    justify-content: center;
    margin: 30px;
`
const BoxRanking = styled.div`
    width: 80vw;
    height: 50vh;
    background: #FFFFFF;
    border: 1px solid rgba(120, 177, 89, 0.25);
    box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
    border-radius: 24px 24px 0px 0px;
    margin: 0 auto;
    box-sizing: border-box;
    padding: 20px;
    overflow-y: scroll;
    && h1 {
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: bold;
        font-size: 20px;
        margin: 10px 0;
    }
`
const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 30px;
    && h1 {
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 700;
        margin: 0 10px;
        font-size: 30px;
    }
`;
