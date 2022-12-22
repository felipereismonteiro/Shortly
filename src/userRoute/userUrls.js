import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import DeleteButton from "./deleteButton";


export default function UserUrls({ loading }) {
  const token = JSON.parse(localStorage.getItem("token"));
  const [urls, setUrls] = useState([]);
  const [loadUrls, setLoadUrls] = useState(true);

  const config = {
    headers: {
      Authorization: `Bearer ` + token.token,
    },
  };

  useEffect(() => {
    axios
      .get("https://shortly-api-22wb.onrender.com/users/me", config)
      .then((r) => {
        setUrls(r.data.shortenedUrls);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }, [loading, loadUrls]);

  return (
    <Container>
      <ContainerBox>
        {urls !== undefined ? (
          urls.map((obj) => (
            <ContainerInside key={obj.id}>
              <Box>
                <Url>{obj.url}</Url>
                <Linked href={`https://shortly-api-22wb.onrender.com/urls/open/${obj.short_url}`}>{obj.short_url}</Linked>
                <H1>Quantidade de visitantes: {obj.visited}</H1>
              </Box>
              <DeleteButton loadUrls={loadUrls} setLoadUrls={setLoadUrls} id={obj.id}/>
            </ContainerInside>
          ))
        ) : (
          <SemTexto>Você não possui urls, cadastre agora!!!</SemTexto>
        )}
      </ContainerBox>
    </Container>
  );
}
const Linked = styled.a`
    text-decoration: underline;
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    color: #ffffff;
    cursor: pointer;
`
const SemTexto = styled.h1`
  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  color: "black";
`;
const ContainerInside = styled.div`
  display: flex;
  margin: 10px 0px;
`;
const ContainerBox = styled.div`
  display: flex;
  flex-direction: column;
`;
const Url = styled.h1`
  max-width: 300px;
  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  color: #ffffff;
`;
const H1 = styled.h1`
  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  color: #ffffff;
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 30px;
`;
const Box = styled.div`
  width: 80vw;
  height: 60px;
  background: #80cc74;
  box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
  border-radius: 12px 0px 0px 12px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

