import React from 'react';

import Portrait from '../static/self_image.jpg';
import '../css/App.css';

const About = () => {
	return (
		<div className="about_window">
			<div className="image_and_name">
				<img src={Portrait} alt="Adrian Tysnes" className="portrait"/>
			</div>
			<div className="text_about_self">
				<p>My name is Adrian Tysnes, and I am a 20-something year old master
				student at the language technology group at the department of 
				informatics at the University of Oslo.</p>
				<p>I am mostly keeping this blog to structure my thoughts and ideas
				about my thesis, but would of course appreciate input. I hope to add
				some option to provide input in form of a comment section at a certain
				point, for the fun of implementing it if nothing else.</p>
				<p>Feel free to contact me at adrian@tysn.es</p>
			</div>
		</div>
	); 
}

export default About;
