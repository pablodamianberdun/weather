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
import { WeatherContext } from "../../context/weatherContext";

const Header = () => {
    const { setCity } = React.useContext(WeatherContext);
    const [search, setSearch] = React.useState("");

    const handleChange = (e) => {
        setSearch(e.target.value);
    };

    const handleSearch = () => {
        setCity(search);
        setSearch("");
    };

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
                    <Input
                        type="text"
                        value={search}
                        placeholder="Search City"
                        onChange={handleChange}
                    />
                    <Button type="button" onClick={handleSearch}>
                        Search
                    </Button>
                </SearchContainer>
            </Container>
        </HeaderContainer>
    );
};

export default Header;
