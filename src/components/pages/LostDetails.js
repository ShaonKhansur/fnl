import React, { Fragment } from 'react';
import { Row, Col, Carousel, Tabs, Divider, Card, Avatar } from 'antd';

const { TabPane } = Tabs;
const { Meta } = Card;

const LostDetails = () => {
    return (
        <Fragment>
            <Row gutter={24}>
                <Col sm={24} md={16}>
                    <Carousel autoplay>
                        <div>
                            <h3>1</h3>
                        </div>
                        <div>
                            <h3>2</h3>
                        </div>
                        <div>
                            <h3>3</h3>
                        </div>
                        <div>
                            <h3>4</h3>
                        </div>
                    </Carousel>
                    <Divider />
                    <Tabs type="card">
                        <TabPane tab="Descriptions" key="1">
                            <p>Content of Tab Pane 1</p>
                            <p>Content of Tab Pane 1</p>
                            <p>Content of Tab Pane 1</p>
                        </TabPane>
                    </Tabs>
                </Col>
                <Col sm={24} md={8}>
                    <Card className="contact-info-card">
                        <Meta
                            avatar={<Avatar icon="user" />}
                            title="Contact Info"
                        />
                        <Divider />
                        <h4 className="name">name</h4>
                        <p className="reg-date">Registered on March 31, 2018 </p>
                        <h4 className="number">0223243313</h4>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    );
}

export default LostDetails;