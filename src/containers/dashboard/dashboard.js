import React, {Component} from 'react';
import Navigationbar from '../../components/navbar/navbar'
import Footer from '../../components/footer/footer'
import {Container,Col,Row} from 'react-bootstrap'
import Card from '../../components/card/card'
import FeedbackGiven from '../../components/feedback_given/feedback_given'


class Dashboard extends Component{
    constructor(props=[]){
        super(props)
        this.state=
            {
                info:[
                    {
                        'name':'Tshering Dorji Wangchuk',
                        'designation': 'Manager',
                        'branch':'Thimphu Main Branch',
                        'department':'HR',
                        'dzongkhag':'Thimphu',
                        'email':'example@bobl.bt'
                    },
                    {
                        'name':'abjdls',
                        'designation': 'Manager',
                        'branch':'Thimphu Main Branch',
                        'department':'HR',
                        'dzongkhag':'Thimphu',
                        'email':'example@bobl.bt'
                    },
                    {
                        'name':'abjdls',
                        'designation': 'Manager',
                        'branch':'Thimphu Main Branch',
                        'department':'HR',
                        'dzongkhag':'Thimphu',
                        'email':'example@bobl.bt'
                    },
                    {
                        'name':'abjdls',
                        'designation': 'Manager',
                        'branch':'Thimphu Main Branch',
                        'department':'HR',
                        'dzongkhag':'Thimphu',
                        'email':'example@bobl.bt'
                    },
                    {
                        'name':'abjdls',
                        'designation': 'Manager',
                        'branch':'Thimphu Main Branch',
                        'department':'HR',
                        'dzongkhag':'Thimphu',
                        'email':'example@bobl.bt'
                    }, {
                        'name':'abjdls',
                        'designation': 'Manager',
                        'branch':'Thimphu Main Branch',
                        'department':'HR',
                        'dzongkhag':'Thimphu',
                        'email':'example@bobl.bt'
                    }, {
                        'name':'abjdls',
                        'designation': 'Manager',
                        'branch':'Thimphu Main Branch',
                        'department':'HR',
                        'dzongkhag':'Thimphu',
                        'email':'example@bobl.bt'
                    }, {
                        'name':'abjdls',
                        'designation': 'Manager',
                        'branch':'Thimphu Main Branch',
                        'department':'HR',
                        'dzongkhag':'Thimphu',
                        'email':'example@bobl.bt'
                    }, {
                        'name':'abjdls',
                        'designation': 'Manager',
                        'branch':'Thimphu Main Branch',
                        'department':'HR',
                        'dzongkhag':'Thimphu',
                        'email':'example@bobl.bt'
                    }
                ],
                view_feeds:false
            }
    }
    render(){
        let cards = this.state.info.map((info, index) => {
            return (
                <Col sm={2} md={2} lg={2} key={index}>
                    <Card info={info} />
                </Col>
            )
        })
        return(
            <div>
                <Navigationbar/>
                <Container fluid={false}>
                {/* <FeedbackGiven/> */}
                    <Row>
                        <Col sm={12} md={12} lg={12} xs={12}>
                            <Row >
                                {cards}
                            </Row>
                        </Col>
                        <Col sm={12} md={12} lg={4}></Col>
                    </Row>        
                </Container>
                <Footer/>
            </div>
        )
    }
}

export default Dashboard