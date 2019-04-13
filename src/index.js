import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import './index.css';
// import App from './App';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import registerServiceWorker from './registerServiceWorker';

const API_KEY = 'AIzaSyB5YmwM0awhz3g-mGWnQO9diJ4BcJeMIkI';



class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };

        this.videoSearch('surf')
    }

    videoSearch(term) {
        YTSearch({ key: API_KEY, term: term }, (videos) => {
            this.setState({
                videos,
                selectedVideo: videos[0]
            });
        });
    }

    render() {

        const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch} />

                {/* <div className="media"> */} 
                    {/* <div className="media-left col-md-8 col-lg-8 col-sm-8 col-xs-8"> */}
                        {/* <VideoDetail video={this.state.selectedVideo} /> */}
                    {/* </div> */}
                    {/* <div className="videoList media-body col-md-4 col-lg-4 col-sm-4 col-xs-4"> */}
                        <VideoList
                            onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
                            videos={this.state.videos} />
                    {/* </div> */}
                {/* </div>*/}
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
