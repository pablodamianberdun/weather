import styled from "styled-components";

export const Container = styled.div`
    width: 90%;
    margin: 30px auto;
    padding: 30px;
    color: white;
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 20px;
`;

export const Icon = styled.img`
    display: inline-block;
    width: 100px;
`;

export const City = styled.h2`
    display: block;

    span {
        font-size: 25px;
    }
`;

export const Temp = styled.h1`
    font-size: 10vw;
    display: inline-block;
    margin: 0;

    @media (min-width: 768px) {
        font-size: 5vw;
    }
`;
export const HighLowTemp = styled.p``;

export const Description = styled.p`
    padding-right: 30px;
`;

export const Flex = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: ${(props) => props.width};
`;
