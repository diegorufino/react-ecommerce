import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: auto;
    margin: 10px auto;
    background: #FFFFFF;
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    position: relative;
`;

export const Item = styled.div`
    padding: 30px 30px;
    height: auto;
    display: flex;
    flex-direction: column;
`

export const Title = styled.div`
    height: 70px;
    border-bottom: 1px solid #E1E8EE;
    padding: 10px 20px;
    color: #5E6977;
`

export const AddCart = styled.button`
    position: relative;
    top: 5px;
    height: 40px;
    width: 160px;
    background-color: #FFD700;
    padding: 10px;
`

export const Amount = styled.input`
    position: relative;
    top: 5px;
    height: 25px;
    width: 60px;
    border: 1px solid #CCCCCC;
`

export const Image = styled.img`
    margin: 5px;
    height: 90%;
`

export const Price = styled.span`
    padding: 30px 30px;
    height: auto;
    display: flex;
    flex-direction: column;
    position: absolute;
    right: 0;
`