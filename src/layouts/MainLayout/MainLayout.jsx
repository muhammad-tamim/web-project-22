import React from 'react';
import Navbar from '../../shared/components/structure/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../../shared/components/structure/Footer/Footer';
import Container from '../../shared/components/structure/Container/Container';

const MainLayout = () => {
    return (
        <Container>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </Container>
    );
};

export default MainLayout;