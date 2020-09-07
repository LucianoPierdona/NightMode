import styled from 'styled-components';

export const Container = styled.section`
    width: 100vw;
    height: 100vh;
    margin: 0 auto;
    padding: 0;
`;

export const Night = styled.section`
    width: 100vw;
    height: 100vh;
    margin: 0 auto;
    padding: 0;
    background-color: #444;
`;

export const Header = styled.header`
    color: #28df99;
    font-weight: 700;
    font-size: 2rem;
    width: 70%;
    padding: 5rem;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
`;

export const HeaderNight = styled.header`
    color: #f6f7d4;
    font-weight: 700;
    font-size: 2rem;
    width: 70%;
    padding: 5rem;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
`;

export const Content = styled.div`
    text-align: center;
    width: 90%;
    margin: 0 auto;
`;

export const Button = styled.button`
    background-color: #99f3bd;
    color: #f6f7d4;
    font-size: 1rem;
    padding: .9rem;
    border: 0;
    border-radius: 12px;
    transition: 0.2s;
    &:hover {
        color: #000;
        background-color: #28df99;
    }
    &:focus {
        outline: none;
    }
`;

export const Title = styled.h1`
    color: #28df99;
    font-size: 3rem;
    margin-bottom: 1.5rem;
`;

export const TitleNight = styled.h1`
    color: #f6f7d4;
    font-size: 3rem;
    margin-bottom: 1.5rem;
`;

export const P = styled.p`
    width: 75%;
    margin: 0 auto;
    color: #444;
    font-size: 1.3rem;
`;

export const PNight = styled.p`
    width: 75%;
    margin: 0 auto;
    color: #99f3bd;
    font-size: 1.3rem;
`;