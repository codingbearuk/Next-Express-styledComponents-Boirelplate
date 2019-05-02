import { Component } from 'react';
import styled from 'styled-components';
import MainLayout from './layouts/mainLayout';
import colors from './styles/colors';
import Head from 'next/head';

const Container = styled.div`
    background-color: ${ colors.third };
    border-radius: 5px;
    width: 40vw;
    height: 30vh;
    margin: 50vh 50% auto 50%;
    transform: translateX(-50%)  translateY(-50%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1{
        color: ${ colors.white };
        font-size: 1.2rem;
    }

`;

class Index extends Component{
    
    render(){
        return(
            <MainLayout>
                <Head>
                    <title>Coding-Bear Boilerplate</title>
                </Head>

                <Container>
                    <img src='static/images/logo.png' alt="logo" />
                    <h1>Welcome to coding-bear next boilerplate</h1>
                </Container>
            </MainLayout>
        )
    }
}

export default Index;