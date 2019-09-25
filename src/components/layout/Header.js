import React, { Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu, Input, Button } from 'antd';
import { GlobalContext } from '../../contexts/GlobalContextProvider';

const { Header } = Layout;
const { Search } = Input;

const NavHeader = () => {

    const { authContext } = useContext(GlobalContext);

    const logout = () => {
        authContext.logoutRequest();
    }

    return (
        <Fragment>
            <div className="top-header">
                <Link to="/">Find-And-Lost</Link>
                <Search className="global-search" placeholder="input search text"
                    onSearch={value => console.log(value)}
                    enterButton
                    size="large"
                />
                <div>
                    {/* <Link to="/post"><Button size='large' type="primary">Post</Button></Link> &nbsp; */}
                    <Button onClick={logout} size='large' type="danger">Logout</Button>
                </div>
            </div>
            <Header className="header">
                <Menu
                    theme="light"
                    mode="horizontal"
                    defaultSelectedKeys={['home']}
                    style={{ lineHeight: '64px' }}
                >
                    <Menu.Item key="home">
                        Home
                    <Link to="/" />
                    </Menu.Item>
                    <Menu.Item key="losts">
                        Lost-Details
                    <Link to="/losts" />
                    </Menu.Item>
                    <Menu.Item key="post">
                        Post
                    <Link to="/post" />
                    </Menu.Item>
                </Menu>
            </Header>
        </Fragment>
    );
}

export default NavHeader;