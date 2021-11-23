import styled from "styled-components";

interface IPWColor {
    color: string;
    width: string;
}

export const PWCountainer = styled.div`
    border-radius: 4px;
    background: #ddd;
    width: 60%;
    height: 20px;
    margin: 15px 0px;
`;

export const PWDiv = styled.div`
    background: ${(props: IPWColor) => props.color};
    width: ${(props: IPWColor) => props.width};
    height: 20px;
    transition: width 2s;
    border-radius: 4px;
    color: #fff;
    text-align: center;
`;
