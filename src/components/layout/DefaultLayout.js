import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Layout } from 'antd';
import NavHeader from './Header';
import Home from '../pages/Home';
import LostDetails from '../pages/LostDetails';
import LostList from '../pages/LostList';
import WrappedPostForm from '../pages/PostForm';

const { Content, Footer } = Layout;


const DefaultLayout = () => {
    return (
        <Layout className="layout">
            <NavHeader />
            <Content className="content">
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/losts" component={LostList} />
                    <Route exact path="/lost-details/:id" component={LostDetails} />
                    <Route exact path="/post" component={WrappedPostForm} />
                </Switch>
            </Content>
            <Footer className="footer">Find-And-Lost ©2019 Created by Faisal</Footer>
        </Layout>
    );
}

export default DefaultLayout;