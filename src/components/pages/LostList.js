import React, { useEffect, useState } from 'react';
import { List, Avatar, message } from 'antd';
import { Link } from 'react-router-dom';
import axios from 'axios';

const LostList = () => {

    const [posts, setPost] = useState([]);


    useEffect(() => {

        axios.get("http://localhost:5000/api/posts").then(res => {
            setPost(res.data);
        }).catch(err => {
            message.error("Post data can not be fatched.");
        })

    }, []);

    return (
        <List
            itemLayout="horizontal"
            dataSource={posts}
            renderItem={item => (
                <List.Item>
                    <List.Item.Meta
                        avatar={<Avatar icon="user" />}
                        title={<Link to={`/lost-details/${item.postCreator[0].name}`}>{item.postCreator[0].name}</Link>}
                        description={item.post}
                    />
                </List.Item>
            )}
        />
    );
}

export default LostList;