import "./App.css";

import { Header, List } from "semantic-ui-react";
import React, { useEffect, useState } from "react";

import axios from "axios";
import logo from "./logo.svg";

function App() {
	const [activities, setActivities] = useState([]);
	useEffect(() => {
		axios.get("http://localhost:5000/api/activities").then((response) => {
			setActivities(response.data);
		});
	}, []);
	return (
		<div>
			<Header as="h2" icon="users" content="Activities" />
			<List>
				{activities.map((activity: any) => (
					<li key={activity.id}>{activity.title}</li>
				))}
			</List>
		</div>
	);
}

export default App;
