import React, { Fragment } from 'react';
import { Card, Button } from 'antd';

const Home = () => {
    return (
        <Fragment>
            <Card title="Cities" className="city-card">
                <Button type='primary'>Dhaka</Button>
                <Button type='primary'>Chittagong</Button>
                <Button type='primary'>Sylhet</Button>
                <Button type='primary'>Barisal</Button>
                <Button type='primary'>Khulna</Button>
                <Button type='primary'>Rajshahi</Button>
                <Button type='primary'>Rangpur</Button>
            </Card>
        </Fragment>
    );
}

export default Home;