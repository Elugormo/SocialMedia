import React from 'react';
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SingedOutLinks';
import { connect } from 'react-redux'
import { link } from 'fs';
const NavBar = (props) => {
    const { auth, profile } = props;
   const links = auth.uid ? <SignedInLinks profile={profile} /> : <SignedOutLinks />
    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to='/' className='brand-logo'>React Blog</Link>
                {links}
            </div>
        </nav>
    )
}

const MapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

export default connect(MapStateToProps)(NavBar)