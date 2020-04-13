import React, { Component } from 'react';

export default class ImageList extends Component {
    state = {
        selectedChannel: null
    }

    

    generateImages = (channel) => {
        return this.props.times.map(time => {
            // no important
            let key = new Date() + Math.random(0, 1000);
            //
            let url = `https://ldas-jobs.ligo-la.caltech.edu/~jane.glanzer/omega_scans/output/${this.props.outputDirectory}/${time}/plots/${channel}-qscan_whitened-16.png`;
            return (<img src={url} className="image" key={key} />);
        })
    }

    render() {
        const { channel } = this.props;
        if (!channel) return null;
        return (
            <div className="ImageList">
                <h2>Plots from {this.props.times[0]} -- {this.props.times[this.props.times.length - 1]}</h2>
                {this.generateImages(channel)}
            </div>
        );
    }
}