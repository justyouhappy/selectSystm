import React from 'react';
import '../../scss/video.scss';
const video = 'http://k.youku.com/player/getFlvPath/sid/051021436691612e509cb/st/mp4/fileid/03000A01005A0408FDCDA641482BB51591A69E-1912-1AB4-B363-1AC7785CD3AC?k=ef3ad6c22ef9a710282ccecf&hd=0&myp=0&ts=0&ctype=12&ev=1&token=0534&oip=1896107491&ep=cieVGkuMUs0G4yrejj8bMinifSRdXP4J9h%2BF8NJjALshOei7mTans%2B7EP%2FlGF%2F0RcFB0Fer0otGW%0AbElhYfFKqGoQ3j%2FaPfqS%2Ffbg5awit5cHbhxFBs6mx1SeRjP1&ccode=0502&duration=4&expire=18000&psid=a7ed9c4a6ff6b8c49d1008aa2d46cc52&ups_client_netip=113.4.77.227&ups_ts=1510214366&ups_userid=1095248821&utid=4%2FsREkw78j4CAXL4oM8dpRyp&vid=XMzE0NTkzNTI1Ng%3D%3D&vkey=Ad7d455a6a2c0dfd08953815802f62ea5';

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
                    <div className = 'video-content'>
                        <video onPause={()=> {
                            this.setState({playing: false});
                        }} ref="videoPlays" controls width="600" height="400" className = 'video-content-source'  src={video}></video>  
                    </div>
                    <div ref="plays" className ="video-shelter" ref="plays" >
                        <div onClick = { this.clickHandle.bind(this)} className = {this.state.playing ? 'video-shelter-btn shelter-btn-play' : 'video-shelter-btn'}></div>
                    </div>
                </div>
            </div>
        )

	}
}
export default informationVideo