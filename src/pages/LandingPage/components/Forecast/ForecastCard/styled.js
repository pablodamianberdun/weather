import styled from "styled-components";

export const Card = styled.div`
    padding: 10px;
    margin: 10px;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 180px;
    min-width: 100px;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 10px;
`;

export const Text = styled.p`
    text-align: center;
`;

export const Icon = styled.img`
    width: 70%;
`;

export const Div = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 70%;
`;
