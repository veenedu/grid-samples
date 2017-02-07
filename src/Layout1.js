import React, {Component} from 'react';
import faker from 'faker';
import { Col, Row, Grid, ScrollView } from 'react-easy-grid';
import 'veenbox/dist/css-reset.css';


function getWords(n){
    return faker.lorem.words(n)
}

let styles= {
    gray1:{
        backgroundColor:'#333'
    },
    gray2:{
        backgroundColor:'#777'
    },
    gray3:{
        backgroundColor:'#999'
    },
    gray4:{
        backgroundColor:'#aaa'
    },
    green:{
        backgroundColor:'green'
    },
    blue:{
       backgroundColor:'blue' 
    },
    yellow:{
       backgroundColor:'yellow' 
    },
    teal:{
        backgroundColor:'teal'
    },
    pink:{
        backgroundColor:'pink'
    }  
}

class Layout1 extends Component {
    render() {
        return (
             <Grid style={{
                 height:'100vh',
             }}>
                    <Col style={{backgroundColor:'red'}}>
                        <Grid>
                            <Col style={ [styles.gray1, {width:300}]}></Col>
                            <Col style={styles.gray2}></Col>
                            <Col style={styles.gray3}></Col>
                        </Grid>
                    </Col>
                    <Col>
                        <Grid>
                            <Row size={50} style={styles.green}>
                                <Grid>
                                    <Col style={[{ width: 140 },styles.green]}> Fixed width </Col>
                                    <Col style={styles.gray4}> Fluid width </Col>
                                </Grid>
                            </Row>
                            <Row size={50} style={styles.blue}>
                                <Grid>
                                    <Row  style={[{height:50},styles.gray1]}></Row>
                                    <Row>
                                        <ScrollView style={styles.teal}>
                                            {getWords(300)}
                                        </ScrollView>                                        
                                    </Row>
                                    <Row   style={[{height:50},styles.pink]}></Row>
                                </Grid>
                            </Row>
                        </Grid>
                    </Col>
             </Grid>
        );
    }
}

export default Layout1;