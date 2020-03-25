import React, { Component } from 'react';

class BeforeImageList extends Component {
    state = {
        selectedChannel: null
    }

    times = "1260244844.813 1259228526.063 1260219512.188 1260944009.688 1260804098.867 1260162922.688 1260239848.063 1260262343.625 1259299563.906 1260285681.813 1260201272.188 1257449232.813 1260176895.438 1260220059.313 1261486545.563 1261067040.313 1259674229.438 1259271247.125 1259236985.813 1261493573.563 1259257956.875 1259221795.063 1261866525.375 1261477028.438 1261680207.563 1257271937.938 1259255342.063 1259233408.219 1258292832.625 1261275723.625 1257303861.625 1259232455.813 1259207087.625 1257475272.813 1258203238.047 1260810096.68 1260943484.188 1260202460.938 1261344663.125 1260205095.688 1259265016.188 1259258396.438 1259240781.938 1258143921.188 1259229559.219 1260305896.406 1259252626.563 1260278743.938 1261477495.563 1260147457.063".split(' ').sort();

    generateImages = (channel) => {
        return this.times.map(time => {
            // no important
            let key = new Date() + Math.random(0, 1000);
            //
            let url = `https://ldas-jobs.ligo-la.caltech.edu/~jane.glanzer/omega_scans/output/outputgpstimepre/${time}/plots/${channel}-qscan_whitened-16.png`;
            return (<img src={url} className="image" key={key} />);
        })
    }

    render() {
        const { channel } = this.props;
        if (!channel) return null;
        return (
            <div className="ImageList">
                {/* <h2>Plots from {this.times[0]} -- {this.times[this.times.length - 1]}</h2> */}
                {this.generateImages(channel)}
            </div>
        );
    }
}

export default BeforeImageList;