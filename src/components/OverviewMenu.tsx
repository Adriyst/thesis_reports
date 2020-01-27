import React, { useState, useEffect } from 'react';
import fetchData from '../apis/data-fetch';
import { Link } from 'react-router-dom';

import '../css/App.css';

interface Sprint {
	id: number;
	start: string;
	end: string;
	text: string;
}

interface Semester {
	num: number;
	sprints: Sprint[];
}


const OverviewMenu: React.FC = () => {
	const [posts, setPosts] = useState([]);

	const fetchPosts = async () => {
		const response = await fetchData.get("");
		const fetched = response.data;
		console.log(response)
		setPosts(fetched);
	}

	const setVisible = (id: number) => {
		const changed = document.getElementById(`sem_${id}`)
		if (changed == null) {
			return;
		}

		changed.style.visibility = changed.style.visibility === "hidden" ? "" : "hidden"
	} 

	useEffect(() => {
		fetchPosts()
	}, []);

	const renderList = () => {
		return posts.map((semester: Semester) => {
			return (
				<div key={semester.num} style={{ width: "75%" }}>
					<h3 onClick={() => setVisible(semester.num)}>Semester #{semester.num}</h3>
					<div style={{ visibility: "hidden", width: "80%" }} id={`sem_${semester.num}`}>
						{semester.sprints.map((sprint: Sprint) => (
							<div>
							<Link key={sprint.id} to={{
								pathname: `/report/${sprint.id}`,
								state: {
									name: sprint.text
								}
							}}>{sprint.start} - {sprint.end}</Link>
							<br />
							</div>
						))}
					</div>
				</div>
			)
		});
	}

	return (
		<div className="reportlist mainsite">
			<h2>Reports for</h2>
			{renderList()}	
		</div>
	);
}

export default OverviewMenu;
