import React, {Component} from 'react';
import faker from 'faker';
import { Col, Row, Grid, ScrollView } from 'react-easy-grid';
import 'veenbox/dist/css-reset.css';


function getWords(n){
    return faker.lorem.words(n)
}
class GeekyAntGrid extends Component {
    render() {
        return (
             <Grid style={{
                 height:'100vh',
             }}>
                    <Col style={{backgroundColor:'red'}}>
                        <Grid>
                            <Col style={{width:300,backgroundColor:'#333'}}></Col>
                            <Col  style={{backgroundColor:'#777'}}></Col>
                            <Col  style={{backgroundColor:'#aaa'}}></Col>
                        </Grid>
                    </Col>
                    <Col>
                        <Grid>
                            <Row size={50} style={{backgroundColor:'green'}}>
                                <Grid>
                                    <Col style={{ width: 140, backgroundColor:'green' }}> Fixed width </Col>
                                    <Col style={{  backgroundColor:'#999' }}> Fluid width </Col>
                                </Grid>
                            </Row>
                            <Row size={50} style={{backgroundColor:'blue'}}>
                                <Grid>
                                    <Row  style={{height:50,backgroundColor:'yellow'}}></Row>
                                    <Row>
                                        <ScrollView style={{backgroundColor:'teal'}}>
                                            {getWords(300)}
                                        </ScrollView>                                        
                                    </Row>
                                    <Row   style={{height:50,backgroundColor:'pink'}}></Row>
                                </Grid>
                            </Row>
                        </Grid>
                    </Col>
             </Grid>
        );
    }
}

export default GeekyAntGrid;