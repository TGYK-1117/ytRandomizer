import React, { useState, useEffect } from "react"; 

const embedVideo = () => {

	const apiUrl = "http://localhost:3000/api/v1/videos"
	const [ videoUrl, setVideoUrl ] = useState([])

	const fetchVideo = () => {
		fetch(apiUrl)
			.then((response) => response.json())
			.then((data) => {
				setVideoUrl("https://youtube.com/embed/" + data.video_id)
				console.log(data)
		})
	}

	useEffect(() => {fetchVideo()}, [])

	return(
		<>
			<div className="center">
				<iframe src={videoUrl}
						width={window.innerWidth}
						height={window.innerHeight - 100}
				        title='video'
				/>
			</div>
		</>
	)

}

export default embedVideo;