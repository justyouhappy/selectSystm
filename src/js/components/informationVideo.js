import React from 'react';
import '../../scss/video.scss';
class informationVideo extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
            playing :false
        }
        
    }
    clickHandle (){
        if(!this.state.playing){
            this.refs.videoPlays.play();
        } else {
            this.refs.videoPlays.pause();
        }
        this.setState({ playing : !this.state.playing });
    }
	render() {
        return(
            <div  className ='main-video'>
                <div className = 'main-video-title'>
                    <div className = 'video-title-text'>视频</div>
                    <div className = 'video-title-line'></div>
                </div>
                <div className = 'main-video-content'>
                    <video 
                        onPause={()=> {
                            this.setState({playing: false});
                        }}
                        ref="videoPlays"
                        controls width="600"
                        height="400" 
                        className = 'video-content-source'
                        src='http://www.yuhuajian.com/schoolVideo/source/video.mp4'
                    ></video>  
                    <div ref="plays" className ="video-shelter" ref="plays" >
                        <div onClick = { this.clickHandle.bind(this)} className = {this.state.playing ? 'video-shelter-btn shelter-btn-play' : 'video-shelter-btn'}></div>
                    </div>
                </div>
            </div>
        )

	}
}
export default informationVideo