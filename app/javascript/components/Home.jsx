import React, { useState, useEffect } from "react"; 

const embedVideo = () => {

	const apiUrl = "http://localhost:3000/api/v1/videos"
	const [ videoUrl, setVideoUrl ] = useState()
	const [ startTime, setStartTime ] = useState(null);
	const [ now, setNow ] = useState(null);
	const [ continueFlag, setContinueFlag ] = useState(false);
  
	const fetchVideo = () => {
		fetch(apiUrl) 										//fetch from rails api access point
			.then((response) => response.json())			//get promise returned from fetch and convert response into json 
			.then((data) => 								//take json data and pull video_id from data, combining it into yt embed link
				setVideoUrl("https://youtube.com/embed/"
					+ data.video_id 
					+ "?autoplay=1" 						//autoplay the video when embed loads
					+ "&mute=1")							//yt policy restricts embedded videos from autoplaying unless they are muted
			)
	}

	useEffect(() => {fetchVideo()}, [])	
	useEffect(() => {
		setStartTime(Date.now());
		setNow(Date.now());
		setInterval(() => {									//updates current time every 1000ms
			setNow(Date.now())
		}, 1000);
	}, [])


	if ((((now - startTime)/1000) > 5) && (continueFlag == false)) //timed refresh of the page to fetch a new video
		{window.location.reload(false);}

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
      			<button onClick={window.location.reload(false)}>Next Bideo</button> 			
      				{/*onClick reload the page to fetch the new video*/}
      			{!continueFlag && <button onClick={setContinueFlag(true)}>Continue</button>}
      				{/*onClick set flag to hide continue button once clicked*/}
    		</div>
		</>
	)

}

export default embedVideo;