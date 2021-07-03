import React from "react";
import {
    HeaderContainer,
    Container,
    Logo,
    ImageContainer,
    Image,
    Title,
    SearchContainer,
    Input,
    Button,
} from "./styled";
import WeatherLogo from "../../assets/images/logo.png";

const Header = () => {
    return (
        <HeaderContainer>
            <Container>
                <Logo>
                    <ImageContainer>
                        <Image src={WeatherLogo} />
                    </ImageContainer>
                    <Title>Weather App</Title>
                </Logo>
                <SearchContainer>
                    <Input type="text" placeholder="Search City" />
                    <Button>Search</Button>
                </SearchContainer>
            </Container>
        </HeaderContainer>
    );
};

export default Header;
