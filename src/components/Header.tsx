import React from 'react';
import { Link } from 'react-router-dom';
import '../css/App.css';

const Header = () => {
	return (
		<div className="menuoptions mainsite">
			<Link to="/" className="menubutton">Reports</Link>
			<Link to="/about" className="menubutton">About</Link>
		</div>
	)
}

export default Header;
