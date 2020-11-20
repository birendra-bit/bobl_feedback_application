import React from 'react';
import Navigationbar from '../../components/navbar/navbar'
import Footer from '../../components/footer/footer'
import {Container,Col,Row} from 'react-bootstrap'
import Card from '../../components/card/card'


const Dashboard = (props)=>(
    <div>
        <Navigationbar/>
        <Container>
            <Col sm={12} md={12} lg={8} >
                <Row >
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/> 
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </Row>
            </Col>
            <Col sm={12} md={12} lg={4}></Col>
        </Container>
        <Footer/>
    </div>
)

export default Dashboard