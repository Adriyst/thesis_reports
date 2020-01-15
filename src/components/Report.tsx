import React from 'react';
import {RouteComponentProps, Link} from 'react-router-dom';

import '../css/App.css';

interface ReportText {
	state: string; 
}

const Report = ({ location }: RouteComponentProps<ReportText>) => {
	return (
		<div className="reportelement">
			<div style={{ width: "100%" }} 
		dangerouslySetInnerHTML={{ __html: location.state.name }}></div>
			<Link className="backbutton" to="/">Back</Link>
		</div>
	);
}

export default Report;
