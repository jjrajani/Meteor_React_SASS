import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <ul>
            <Link to="/todos">Todods</Link>
            <Link to="/users">Users</Link>
        </ul>
    );
};

export default Nav;
