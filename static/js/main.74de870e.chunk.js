(this.webpackJsonpjane_site=this.webpackJsonpjane_site||[]).push([[0],{13:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(7),l=n.n(c),o=(n(6),n(1)),s=n(2),_=n(3),i=n(4),u=function(e){Object(i.a)(n,e);var t=Object(_.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),l=0;l<a;l++)c[l]=arguments[l];return(e=t.call.apply(t,[this].concat(c))).channels="L1-GDS_CALIB_STRAIN L1-ASC_X_TR_A_PIT_OUT_DQ L1-ASC_Y_TR_B_NSUM_OUT_DQ L1-ASC_X_TR_B_PIT_OUT_DQ L1-ASC_Y_TR_A_NSUM_OUT_DQ L1-ASC_Y_TR_B_PIT_OUT_DQ L1-ASC_X_TR_A_NSUM_OUT_DQ L1-ASC_X_TR_B_NSUM_OUT_DQ L1-ASC_Y_TR_A_PIT_OUT_DQ L1-ASC_Y_TR_B_YAW_OUT_DQ L1-ASC_X_TR_B_YAW_OUT_DQ L1-ASC_Y_TR_A_YAW_OUT_DQ L1-ASC_X_TR_A_YAW_OUT_DQ".split(" "),e.generateDropDownOptions=function(){return e.channels.map((function(e,t){return r.a.createElement("option",{value:e,key:t},e)}))},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this,t=this.props.selectedImage;return r.a.createElement("div",{className:"SelectImage"},r.a.createElement("h1",null,"Select channel"),r.a.createElement("select",{onChange:function(t){return e.props.onSelect(t.target.value)},value:t||"Select a Channel"},this.generateDropDownOptions()))}}]),n}(a.Component),h=function(e){Object(i.a)(n,e);var t=Object(_.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),l=0;l<a;l++)c[l]=arguments[l];return(e=t.call.apply(t,[this].concat(c))).state={selectedChannel:null},e.times="1260244844.813 1259228526.063 1260219512.188 1260944009.688 1260804098.867 1260162922.688 1260239848.063 1260262343.625 1259299563.906 1260285681.813 1260201272.188 1257449232.813 1260176895.438 1260220059.313 1261486545.563 1261067040.313 1259674229.438 1259271247.125 1259236985.813 1261493573.563 1259257956.875 1259221795.063 1261866525.375 1261477028.438 1261680207.563 1257271937.938 1259255342.063 1259233408.219 1258292832.625 1261275723.625 1257303861.625 1259232455.813 1259207087.625 1257475272.813 1258203238.047 1260810096.68 1260943484.188 1260202460.938 1261344663.125 1260205095.688 1259265016.188 1259258396.438 1259240781.938 1258143921.188 1259229559.219 1260305896.406 1259252626.563 1260278743.938 1261477495.563 1260147457.063".split(" ").sort(),e.generateImages=function(t){return e.times.map((function(e){var n=new Date+Math.random(0,1e3),a="https://ldas-jobs.ligo-la.caltech.edu/~jane.glanzer/omega_scans/output/outputgpstimepre/".concat(e,"/plots/").concat(t,"-qscan_whitened-16.png");return r.a.createElement("img",{src:a,className:"image",key:n})}))},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this.props.channel;return e?r.a.createElement("div",{className:"ImageList"},this.generateImages(e)):null}}]),n}(a.Component),m=function(e){Object(i.a)(n,e);var t=Object(_.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={selectedChannel:null},e.changeChannel=function(t){e.setState({selectedChannel:t})},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this.state.selectedChannel;return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"Header"},r.a.createElement("h1",null,"Omega Scan Ligo Observation")),r.a.createElement(u,{onSelect:this.changeChannel,selectedImage:e}),r.a.createElement(h,{channel:e}),r.a.createElement(h,{channel:e}))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(m,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},6:function(e,t,n){},8:function(e,t,n){e.exports=n(13)}},[[8,1,2]]]);
//# sourceMappingURL=main.74de870e.chunk.js.map