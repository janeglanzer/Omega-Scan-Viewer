import React, { Component } from 'react';

class SelectImage extends Component {
    channels = "L1-GDS_CALIB_STRAIN L1-ASC_X_TR_A_PIT_OUT_DQ L1-ASC_Y_TR_B_NSUM_OUT_DQ L1-ASC_X_TR_B_PIT_OUT_DQ L1-ASC_Y_TR_A_NSUM_OUT_DQ L1-ASC_Y_TR_B_PIT_OUT_DQ L1-ASC_X_TR_A_NSUM_OUT_DQ L1-ASC_X_TR_B_NSUM_OUT_DQ L1-ASC_Y_TR_A_PIT_OUT_DQ L1-ASC_Y_TR_B_YAW_OUT_DQ L1-ASC_X_TR_B_YAW_OUT_DQ L1-ASC_Y_TR_A_YAW_OUT_DQ L1-ASC_X_TR_A_YAW_OUT_DQ".split(' ');

    generateDropDownOptions = () => {
        return this.channels.map((channel, i) => {
            return <option value={channel} key={i}>{channel}</option>
        })
    }

    render() {
        const { selectedImage } = this.props;
        return (
            <div className="SelectImage">
                <h1>Select channel</h1>
                <select onChange={(event) => this.props.onSelect(event.target.value)} value={selectedImage || 'Select a Channel'}>
                    {this.generateDropDownOptions()}
                </select>
            </div>);
    }
}

export default SelectImage;