(this.webpackJsonpjane_site=this.webpackJsonpjane_site||[]).push([[0],{10:function(e,t,a){e.exports=a(15)},15:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(8),l=a.n(s),i=(a(7),a(9)),c=a(1),o=a(2),m=a(5),u=a(3),_=a(4),p=function(e){Object(_.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,s=new Array(n),l=0;l<n;l++)s[l]=arguments[l];return(e=t.call.apply(t,[this].concat(s))).channels="L1-GDS_CALIB_STRAIN L1-ASC_X_TR_A_PIT_OUT_DQ L1-ASC_Y_TR_B_NSUM_OUT_DQ L1-ASC_X_TR_B_PIT_OUT_DQ L1-ASC_Y_TR_A_NSUM_OUT_DQ L1-ASC_Y_TR_B_PIT_OUT_DQ L1-ASC_X_TR_A_NSUM_OUT_DQ L1-ASC_X_TR_B_NSUM_OUT_DQ L1-ASC_Y_TR_A_PIT_OUT_DQ L1-ASC_Y_TR_B_YAW_OUT_DQ L1-ASC_X_TR_B_YAW_OUT_DQ L1-ASC_Y_TR_A_YAW_OUT_DQ L1-ASC_X_TR_A_YAW_OUT_DQ".split(" "),e.generateDropDownOptions=function(){return e.channels.map((function(e,t){return r.a.createElement("option",{value:e,key:t},e)}))},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this,t=this.props.selectedImage;return r.a.createElement("div",{className:"SelectImage"},r.a.createElement("h1",null,"Select channel"),r.a.createElement("select",{onChange:function(t){return e.props.onSelect(t.target.value)},value:t||"Select a Channel"},this.generateDropDownOptions()))}}]),a}(n.Component),h=function(e){Object(_.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,s=new Array(n),l=0;l<n;l++)s[l]=arguments[l];return(e=t.call.apply(t,[this].concat(s))).state={selectedChannel:null},e.generateImages=function(t){return e.props.times.map((function(a){var n=new Date+Math.random(0,1e3),s="https://ldas-jobs.ligo-la.caltech.edu/~jane.glanzer/omega_scans/output/".concat(e.props.outputDirectory,"/").concat(a,"/plots/").concat(t,"-qscan_whitened-16.png");return r.a.createElement("img",{src:s,className:"image",key:n})}))},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props.channel;return e?r.a.createElement("div",{className:"ImageList"},r.a.createElement("h2",null,"Plots from ",this.props.times[0]," -- ",this.props.times[this.props.times.length-1]),this.generateImages(e)):null}}]),a}(n.Component),f=function(e){Object(_.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={selectedChannel:null,beforeTimes:null,afterTimes:null,inputSaved:!1},n.beforeTimes="1260244844.813 1259228526.063 1260219512.188 1260944009.688 1260804098.867 1260162922.688 1260239848.063 1260262343.625 1259299563.906 1260285681.813 1260201272.188 1257449232.813 1260176895.438 1260220059.313 1261486545.563 1261067040.313 1259674229.438 1259271247.125 1259236985.813 1261493573.563 1259257956.875 1259221795.063 1261866525.375 1261477028.438 1261680207.563 1257271937.938 1259255342.063 1259233408.219 1258292832.625 1261275723.625 1257303861.625 1259232455.813 1259207087.625 1257475272.813 1258203238.047 1260810096.68 1260943484.188 1260202460.938 1261344663.125 1260205095.688 1259265016.188 1259258396.438 1259240781.938 1258143921.188 1259229559.219 1260305896.406 1259252626.563 1260278743.938 1261477495.563 1260147457.063".split(" ").sort(),n.afterTimes="1264178264.875 1264213799.875 1263833493.031 1264016560.906 1264023162.18 1265047718.852 1263976802.781 1263260637.094 1263147869.828 1263814624.844 1264213712.016 1264080741.688 1265147847.039 1263190745.938 1264211561.859 1264036181.844 1265307972.234 1264790037.438 1264650916.938 1265281246.086 1263846186.094 1264106088.875 1264097895.281 1264233726.188 1264135227.656 1263893589.188 1265047463.945 1263905520.625 1265071965.555 1264308734.719 1264319097.375 1265001864.328 1263645652.797 1263156159.813 1265128384.258 1265127938.164 1263793574.188 1265123911.992 1264315732.031 1264297050.625 1265096318.656 1263132943.813 1265122594.852 1264031460.688 1265110146.18 1263322990.406 1265085141.969 1263115483.344 1264055760.063 1265281011.336 1263742727.875 1265325147.695 1263118132.875 1264252843.844 1263848178.563 1265016632.828 1263228930.563 1265213234.711 1263623006.313 1264411496.219 1263295197.109 1263643021.438 1263764572.766 1265128391.336 1263362038.922 1264256919.789 1265115742.617 1264170967.594 1265121881.586 1265123907.469 1265001086.766 1263290096.219 1263347158.875 1263973593.844 1263638583.438 1263975227.125 1264221971.156 1263870974.094 1264099912.094 1264366261.125 1264017507.797 1265002187.156 1265123369.063 1263641493.719 1263967737.688 1264245896.531 1265122931.18 1264725739.469 1264331791.031 1264414038.938 1264650655.938 1264426451.844 1263897015.406 1264171810.422 1262754129.438 1263847850.969 1263341736.563 1265119354.023 1265281237.078 1264295895.813".split(" ").sort(),n.changeChannel=function(e){n.setState({selectedChannel:e})},n.displayImages=function(){var e=n.state,t=e.selectedChannel,a=e.beforeTimes,s=e.afterTimes;return r.a.createElement("div",null,r.a.createElement(p,{onSelect:n.changeChannel,selectedImage:t}),r.a.createElement(h,{outputDirectory:"outputgpstimepre",times:a,channel:t}),r.a.createElement(h,{outputDirectory:"apriloct",times:s,channel:t}))},n.handleChange=function(e,t){n.setState(Object(i.a)({},e,t.target.value))},n.saveTimes=function(){var e=n.state,t=(e.selectedChannel,e.beforeTimes),a=e.afterTimes;if(t&&a){var r=t.replace(/\r?\n|\r/g,".0 ").split(" ").sort(),s=a.replace(/\r?\n|\r/g,".0 ").split(" ").sort();n.setState({inputSaved:!0,beforeTimes:r,afterTimes:s})}else window.alert("Please provide times for both before and after.")},n.displayInput=function(){var e=n.state,t=e.beforeTimes,a=e.afterTimes;return r.a.createElement("div",{className:"time-inputs"},r.a.createElement("div",null,r.a.createElement("h1",null,"Before Times"),r.a.createElement("textarea",{placeholder:"Enter GPS Time Coordinates in list form",onChange:function(e){return n.handleChange("beforeTimes",e)},value:t||"",name:"beforeTimes"})),r.a.createElement("div",null,r.a.createElement("h1",null,"After Times"),r.a.createElement("textarea",{placeholder:"Enter GPS Time Coordinates in list form",onChange:function(e){return n.handleChange("afterTimes",e)},value:a||"",name:"afterTimes"})),r.a.createElement("button",{type:"submit",onClick:n.saveTimes},"Generate Images"))},n.saveTimes=n.saveTimes.bind(Object(m.a)(n)),n}return Object(o.a)(a,[{key:"render",value:function(){var e=this.state,t=(e.selectedChannel,e.beforeTimes,e.afterTimes,e.inputSaved);return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"Header"},r.a.createElement("h1",null,"Omega Scan Viewer")),t?this.displayImages():this.displayInput())}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,a){}},[[10,1,2]]]);
//# sourceMappingURL=main.0259db81.chunk.js.map