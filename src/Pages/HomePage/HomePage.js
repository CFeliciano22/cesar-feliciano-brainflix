import axios from "axios";
import { Component } from "react";
import Main from "../../components/Main/Main";

const Url ='https://project-2-api.herokuapp.com/videos/';
const ApiKey = '?api_key=cb37a238-0bd0-4f02-9855-6ae33c69f64d/';

export default class HomePage extends Component{
        state = {
          Vids: [],
          currentVideo: {},
          comments:[]
        }
        
        getVideoById = (id) => {
            axios
                .get(`${Url}${id}${ApiKey}`)
                .then(response => {
                    console.log(response.data)
                    this.setState({
                        currentVideo: response.data,
                        comments:response.data.comments
                        
                    })
                })
                .catch(err => console.log(err))
        }

        componentDidMount(){
        axios.get(Url + ApiKey).then ((response)=>{
            console.log(response.data)
            this.setState({
                Vids:response.data
            })
            const videoId =  this.props.match.params.id ||  response.data[0].id 
            this.getVideoById(videoId);
        })
        }

componentDidUpdate(prevProps,prevState){
    const videoId =  this.props.match.params.id || this.state.Vids[0].id 
    console.log(videoId)
    if (prevState.currentVideo && prevState.currentVideo.id !== videoId){
        this.getVideoById(videoId)
    }
}

render(){
    return(
        <>
            <Main 
                currentVideo= {this.state.currentVideo}
                Vids = {this.state.Vids}
                comments = {this.state.comments}

            />
        </>
    )
}
}