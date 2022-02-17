import styled from "styled-components";

export const Container = styled.div`
    width: 24%;
    height: 260px;
    margin: 10px 0;
    background-color: #FFFFFF;
    border-radius: 5%;
    padding: 2%;
    position: relative;
    display: flex;
`;

export const Image = styled.img`
    height: 40%;
    position: absolute;
    top: 0;
    margin: 5% 20%;
`

export const Price = styled.h4`
    margin-top: 100px;
    position: absolute;
    width: 100px;
`

export const Title = styled.span`
    margin-top: 120px;
    margin-right: 20px;
    font-size: 12px;
    position: absolute;
`

export const AddCart = styled.button`
    bottom: 10px;
    position: absolute;
    background-color: #FFD700;
    padding: 10px 20px;
    text-align: center;
    display: inline-block;
    font-size: 13px;
    border-radius: 5%;
`