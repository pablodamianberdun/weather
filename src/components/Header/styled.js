import styled from "styled-components";

export const HeaderContainer = styled.header`
    width: 100%;
`;

export const Container = styled.div`
    max-width: 90%;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }
`;

export const Logo = styled.div`
    display: flex;
    align-items: center;
    width: 30%;
    height: auto;

    @media (max-width: 768px) {
        width: 100%;
        justify-content: center;
    }
`;

export const ImageContainer = styled.div``;

export const Image = styled.img`
    display: inline-block;
    width: 80px;
    height: 100px;
    object-fit: contain;
`;

export const Title = styled.h1`
    display: inline-block;
    color: white;
    font-size: 30px;
`;

export const SearchContainer = styled.div``;

export const Input = styled.input`
    height: 25px;
    border: 1px solid #ccc;
    padding: 0 10px;
    border-radius: 3px;
`;

export const Button = styled.button`
    height: 25px;
    padding: 5px 15px;
    color: white;
    margin-left: 10px;
    background-color: dodgerblue;
    border: none;
    border-radius: 3px;

    &:hover {
        background-color: blue;
    }
`;
