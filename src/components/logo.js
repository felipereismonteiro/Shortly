import styled from "styled-components";
import imgLogo from "../img/twemoji_shorts.png";

export default function Logo() {
    return (
        <Container>
            <Name>Shortly</Name>
            <Img src={imgLogo}></Img>
        </Container>
    )
}
const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
const Img = styled.img`
    width: 100px;
    height: 100px;
`
const Name = styled.h1`
    font-weight: 100px;
    font-size: 64px;
`