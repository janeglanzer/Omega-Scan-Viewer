import React, { Component } from "react";
import "./index.css";
import SelectImage from './SelectImage.jsx';
import ImageList from './ImageList';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.saveTimes = this.saveTimes.bind(this);
  }
  state = {
    selectedChannel: null,
    beforeTimes: null,
    afterTimes: null,
    inputSaved: false
  }

  beforeTimes = "1260244844.813 1259228526.063 1260219512.188 1260944009.688 1260804098.867 1260162922.688 1260239848.063 1260262343.625 1259299563.906 1260285681.813 1260201272.188 1257449232.813 1260176895.438 1260220059.313 1261486545.563 1261067040.313 1259674229.438 1259271247.125 1259236985.813 1261493573.563 1259257956.875 1259221795.063 1261866525.375 1261477028.438 1261680207.563 1257271937.938 1259255342.063 1259233408.219 1258292832.625 1261275723.625 1257303861.625 1259232455.813 1259207087.625 1257475272.813 1258203238.047 1260810096.68 1260943484.188 1260202460.938 1261344663.125 1260205095.688 1259265016.188 1259258396.438 1259240781.938 1258143921.188 1259229559.219 1260305896.406 1259252626.563 1260278743.938 1261477495.563 1260147457.063".split(' ').sort();
  afterTimes = "1264178264.875 1264213799.875 1263833493.031 1264016560.906 1264023162.18 1265047718.852 1263976802.781 1263260637.094 1263147869.828 1263814624.844 1264213712.016 1264080741.688 1265147847.039 1263190745.938 1264211561.859 1264036181.844 1265307972.234 1264790037.438 1264650916.938 1265281246.086 1263846186.094 1264106088.875 1264097895.281 1264233726.188 1264135227.656 1263893589.188 1265047463.945 1263905520.625 1265071965.555 1264308734.719 1264319097.375 1265001864.328 1263645652.797 1263156159.813 1265128384.258 1265127938.164 1263793574.188 1265123911.992 1264315732.031 1264297050.625 1265096318.656 1263132943.813 1265122594.852 1264031460.688 1265110146.18 1263322990.406 1265085141.969 1263115483.344 1264055760.063 1265281011.336 1263742727.875 1265325147.695 1263118132.875 1264252843.844 1263848178.563 1265016632.828 1263228930.563 1265213234.711 1263623006.313 1264411496.219 1263295197.109 1263643021.438 1263764572.766 1265128391.336 1263362038.922 1264256919.789 1265115742.617 1264170967.594 1265121881.586 1265123907.469 1265001086.766 1263290096.219 1263347158.875 1263973593.844 1263638583.438 1263975227.125 1264221971.156 1263870974.094 1264099912.094 1264366261.125 1264017507.797 1265002187.156 1265123369.063 1263641493.719 1263967737.688 1264245896.531 1265122931.18 1264725739.469 1264331791.031 1264414038.938 1264650655.938 1264426451.844 1263897015.406 1264171810.422 1262754129.438 1263847850.969 1263341736.563 1265119354.023 1265281237.078 1264295895.813".split(' ').sort();
  changeChannel = (channel) => {
    this.setState({ selectedChannel: channel });
  }

  displayImages = () => {
    const { selectedChannel, beforeTimes, afterTimes } = this.state;
    return (
      <div>
        <SelectImage onSelect={this.changeChannel} selectedImage={selectedChannel} />
        <ImageList outputDirectory={'outputgpstimepre'} times={beforeTimes} channel={selectedChannel} />
        <ImageList outputDirectory={'apriloct'} times={afterTimes} channel={selectedChannel} />
      </div>
    );
  }

  handleChange = (val, event) => {
    this.setState({ [val]: event.target.value });
  }

  saveTimes = () => {
    const { selectedChannel, beforeTimes, afterTimes } = this.state;
    if (!beforeTimes || !afterTimes) {
      window.alert("Please provide times for both before and after.")
      return;
    }

    const tmpBefore = beforeTimes.replace(/\r?\n|\r/g, '.0 ').split(' ').sort();
    const tmpAfter = afterTimes.replace(/\r?\n|\r/g, '.0 ').split(' ').sort();
    this.setState({ inputSaved: true, beforeTimes: tmpBefore, afterTimes: tmpAfter });
  }

  displayInput = () => {
    const { beforeTimes, afterTimes } = this.state;
    return (
      <div className="time-inputs">
        <div>
          <h1>Before Times</h1>
          <textarea
            placeholder='Enter GPS Time Coordinates in list form'
            onChange={(event) => this.handleChange('beforeTimes', event)} value={beforeTimes || ''} name="beforeTimes">
          </textarea>
        </div>
        <div>
          <h1>After Times</h1>
          <textarea
            placeholder="Enter GPS Time Coordinates in list form"
            onChange={(event) => this.handleChange('afterTimes', event)} value={afterTimes || ''} name="afterTimes">
          </textarea>
        </div>
        <button type="submit"
          onClick={this.saveTimes}>Generate Images</button>
      </div>
    );
  }

  render() {
    const { selectedChannel, beforeTimes, afterTimes, inputSaved } = this.state;
    return (
      <div className="App">
        <div className="Header">
          <h1>Omega Scan Viewer</h1>
        </div>
        {inputSaved ? this.displayImages() : this.displayInput()}
      </div>
    );
  }
}