import styled from "styled-components"

export default function Header(values) {
    const {options} = values;
    const token = JSON.parse(localStorage.getItem("token"));

    function color(o) {
        if(values.page === "SignUp" && o === "Cadastre-se"){
            return "#5D9040";
        } else if(values.page === "SignIn" && o === "Entrar"){
            return "#5D9040";
        } else {
            return "black"
        }
    }

    function link(o) {
        switch(o) {
            case "Cadastre-se":
                return "/signUp";
            case "Entrar":
                localStorage.clear();
                return "/signIn";
            case "Sair":
                return "/signIn";
            case "Home":
                return "/user";
            default:
                return "";
        }
    }

    return(
        <Container>
            <MainText>{token !== null && `Seja bem vindo(a), ${token.userName.name}`}</MainText>
            <Option>
                {options.map((o, index) => <Options key={index} href={link(o)} color={color(o)}>{o}</Options>)}
            </Option>
        </Container>
    )
}

const Container = styled.div`
    width: 100wh;
    height: 80px;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 0px 30px;
`
const MainText = styled.h1`
    color: #5D9040;
    font-size: 14px;

    font-family: 'Lexend Deca';
    font-size: 14px;
    font-weight: bold;
`
const Options = styled.a`
    margin-right: 20px;
    color: ${props => props.color};
    text-decoration: none;
    font-family: 'Lexend Deca';
    font-size: 14px;
    font-weight: bold;
`
const Option = styled.div`
`
