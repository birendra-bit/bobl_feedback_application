import React, { Component } from 'react';
import { Card, Button } from "react-bootstrap";
import UserImage from '../../assets/images/user-male-icon.png'


const Cards =props =>(
    <Card sm={12} md={12} lg={2} className="m-1 text-center pt-1" >
        <Card.Img className="m-auto" style={{ width: '100px',height:'100px'}} src={UserImage}></Card.Img>
        <Card.Body style={{fontSize:'small'}}>
            <Card.Title>Name : Tshering Dorji</Card.Title>
            <Card.Text >
                Designation: Chief<br/>
                Department: HR <br/>
                Contact Number: 17892536<br/>
            </Card.Text>
            {/* <Card.Text></Card.Text>
            <Card.Text></Card.Text>
            <Card.Text>Email: example@bobl.bt</Card.Text> */}
            <Button className="btn-primary btn-sm btn-block">Give Feeds</Button>
        </Card.Body>
    </Card>
)


export default Cards