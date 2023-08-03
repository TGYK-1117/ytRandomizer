import React, { useState, useEffect } from "react"; 

const embedVideo = () => {

	const apiUrl = "http://localhost:3000/api/v1/videos"
	const [ videoUrl, setVideoUrl ] = useState([])

	function nextButton() {
    	window.location.reload(false);
  	}

  	function timer() {
  		const [startTime, setStartTime] = useState();
  		const [now, setNow] = useState();

  		setStartTime(Date.now());
  		setNow(Date.now());
  		setInterval(() => {
  			setNow(Date.now())
  		}, 1000);
  	}

	const fetchVideo = () => {
		fetch(apiUrl)
			.then((response) => response.json())
			.then((data) => {
				setVideoUrl("https://youtube.com/embed/" + data.video_id + "?autoplay=1" + "&mute=1")
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
				        allow="autoplay"
				/>
			</div>
			<div className="pad">
      			<button onClick={nextButton}>Next Bideo</button>
    		</div>
		</>
	)

}

export default embedVideo;