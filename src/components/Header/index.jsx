import React from "react";
import {
    HeaderContainer,
    Container,
    Logo,
    ImageContainer,
    Image,
    Title,
    SearchForm,
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

    const handleSearch = (e) => {
		e.preventDefault()
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
                <SearchForm onSubmit={handleSearch}>
                    <Input
                        type="text"
                        value={search}
                        placeholder="Search City"
                        onChange={handleChange}
                    />
                    <Button type="submit">
                        Search
                    </Button>
                </SearchForm>
            </Container>
        </HeaderContainer>
    );
};

export default Header;
