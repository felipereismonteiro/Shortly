import styled from "styled-components"

export default function Header(values) {
    const {mainText, options} = values;

    function color(o) {
        if(values.page === "SignUp" && o === "Cadastre-se"){
            return "#5D9040";
        } else if(values.page === "SignIn" && o === "Entrar"){
            return "#5D9040";
        } 
    }

    return(
        <Container>
            <MainText>{mainText}</MainText>
            <Option>
                {options.map((o, index) => <Options key={index} href="google.com" color={color(o)}>{o}</Options>)}
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
