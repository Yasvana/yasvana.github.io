//
var GLOBAL_VARIABLES = {
  "init_audio" : false,
  "is_recording" : IS_RECORDING
}


//audio gain
var AUDIO_GAIN = {
  "gain" : {
    "value" : 10,
    "type" : "number"
  }
};

//analyzers
var ANALYZER_TIME_DOMAIN = {
  "fft_size" : {
    "value" : 4096,
    "type" : "number"
  },
  "min_decibels" : {
    "value" : -90,
    "type" : "number"
  },
  "max_decibels" : {
    "value" : -10,
    "type" : "number"
  },
  "smoothing_time_constant" : {
    "value" : 0.85,
    "type" : "number"
  }
}
var ANALYSER_FREQUENCY = {
  "fft_size" : {
    "value" : 256,
    "type" : "number"
  },
  "min_decibels" : {
    "value" : -90,
    "type" : "number"
  },
  "max_decibels" : {
    "value" : -10,
    "type" : "number"
  },
  "smoothing_time_constant" : {
    "value" : 0.85,
    "type" : "number"
  }
}

//visualizers
var VISUALIZER_BY_TIME_DOMAIN = {
  "height" : {
    "value" : 200,
    "type" : "number"
  },
  "width" : {
    "value" : 800,
    "type" : "number"
  },
  "slice_width_coef" : {
    "value" : 0.63,
    "type" : "number"
  },
  "height_coef" : {
    "value" : 1.5,
    "type" : "number"
  }
}
var VISUALIZER_BY_FREQUENCY = {
  "height" :{
    "value" : 400,
    "type" : "number"
  },
  "width" : {
    "value" : 400,
    "type" : "number"
  },
  "threshold" :  {
    "value" : 512,
    "type" : "number"
  },
  "coef_height" :  {
    "value" : 5,
    "type" : "number"
  }
}

//render svg circle in circle
var RENDER_SVG_CIRCLE_IN_CIRCLE = {
  "radius_path" : {
    "value" : 70,
    "type" : "number"
  },
  "x0" : {
    "value" : VISUALIZER_BY_FREQUENCY.width.value/2,
    "type" : "number"
  },
  "y0" : {
    "value" : VISUALIZER_BY_FREQUENCY.height.value/2,
    "type" : "number"
  },
  "angle_step" : {
    "value" : 0.068,
    "type" : "number"
  },
  "angle_counter" : {
    "value" : Math.PI,
    "type" : "number"
  },
  "stroke_style" : {
    "value" : "rgb(0, 0, 0)",
    "type" : "text"
  },
  "line_width" : {
    "value" : 0.5,
    "type" : "number"
  },
  "fill_style" : {
    "value" : "rgb(0, 0, 0)",
    "type" : "text"
  },
  "vertical_margin" : {
    "value" : 1.5,
    "type" : "number"
  },
  "radius" : {
    "value" : 3,
    "type" : "number"
  },
  "radius_coef" : {
    "value" : 0.7,
    "type" : "number"
  },
  "distance_coef" : {
    "value" : 1.5,
    "type" : "number"
  }
}
var RENDER_SVG_CIRCLE_LINEAR_2 = {
  "circle_radius" : {
    "value" : 3,
    "type" : "number"
  },
  "fill_style" : {
    "value" : "rgb(0, 0, 0)",
    "type" : "text"
  },
  "position_x" : {
    "value" : 0,
    "type" : "number"
  },
  "vertical_margin" : {
    "value" : 2,
    "type" : "number"
  },
  "radius_coef" : {
    "value" : 0.7,
    "type" : "number"
  },
  "margin" : {
    "value" : 2,
    "type" : "number"
  }
}
var RENDER_SVG_CIRCLE_LINEAR = {
  "circle_radius" : {
    "value" : 3,
    "type" : "number"
  },
  "fill_style" : {
    "value" : "rgb(0, 0, 0)",
    "type" : "text"
  },
  "position_x" : {
    "value" : 0,
    "type" : "number"
  },
  "margin" : {
    "value" : 2,
    "type" : "number"
  }
}
var RENDER_SVG_BAR_LINEAR = {
  "stroke_style" : {
    "value" : "rgb(0, 0, 0)",
    "type" : "text"
  },
  "line_width" : {
    "value" : 1,
    "type" : "number"
  },
  "position_x" : {
    "value" : 0,
    "type" : "number"
  },
  "margin" : {
    "value" : 2,
    "type" : "number"
  }
}
var RENDER_FREQUENCY_SVG = {
  "value" : 'circle_along_circle'
}


//render_by_time_domain_one_path
var RENDER_TIME_DOMAIN_SVG = {
  "value" : 'linear'
}
var RENDER_BY_TIME_DOMAIN_ONE_PATH = {
  "previous_x" : {
    "value" : 0,
    "type" : "number"
  },
  "previous_y" : {
    "value" : VISUALIZER_BY_TIME_DOMAIN.height.value/2,
    "type" : "number"
  },
  "stroke_style" : {
    "value" : "rgb(0, 0, 0)",
    "type" : "text"
  },
  "line_width" : {
    "value" : 0.5,
    "type" : "number"
  },
  "space_between_point" : {
    "value" : 2,
    "type" : "number"
  },
  "aggregate_threshold" : {
    "value" : 1024,
    "type" : "number"
  }
}
var RENDER_BY_TIME_DOMAIN_ONE_PATH_IN_CIRCLE = {
  "x0" : {
    "value" : VISUALIZER_BY_TIME_DOMAIN.width.value/2,
    "type" : "number"
  },
  "y0" : {
    "value" : VISUALIZER_BY_TIME_DOMAIN.height.value/2,
    "type" : "number"
  },
  "angle_step" : {
    "value" : 0.017,
    "type" : "number"
  },
  "angle_counter" : {
    "value" : Math.PI,
    "type" : "number"
  },
  "stroke_style" : {
    "value" : "rgb(0, 0, 0)",
    "type" : "text"
  },
  "line_width" : {
    "value" : 0.5,
    "type" : "number"
  },
  "distance_coef" : {
    "value" : 0.5,
    "type" : "number"
  },
  "previous_x" : {
    "value" : -1,
    "type" : "number"
  },
  "previous_y" : {
    "value" : -1,
    "type" : "number"
  }
}

//audio files uploaded
var LIST_UPLOAD_FILES = [];

//app for vue.js
var app_main = new Vue({
  el: '#app_main',
  data: {
    time_domain : {
      options_one_path : RENDER_BY_TIME_DOMAIN_ONE_PATH,
      options_one_path_in_circle : RENDER_BY_TIME_DOMAIN_ONE_PATH_IN_CIRCLE,
      analyzer : ANALYZER_TIME_DOMAIN,
      visualizer_selected : RENDER_TIME_DOMAIN_SVG,
      generals : VISUALIZER_BY_TIME_DOMAIN
    },
    frequency : {
      options_bar_linear : RENDER_SVG_BAR_LINEAR,
      options_circle_linear : RENDER_SVG_CIRCLE_LINEAR,
      options_circle_linear_2 : RENDER_SVG_CIRCLE_LINEAR_2,
      options_circle_in_circle : RENDER_SVG_CIRCLE_IN_CIRCLE,
      visualizer_frequency_selected : RENDER_FREQUENCY_SVG,
      analyzer : ANALYSER_FREQUENCY,
      generals : VISUALIZER_BY_FREQUENCY
    },
    audio_gain : {
      generals : AUDIO_GAIN
    },
    global_variables : GLOBAL_VARIABLES,
    list_audio_files : LIST_UPLOAD_FILES
  },
  methods: {
    start: function(source_type,source_id){
      start(source_type,source_id);
    },
    downloadSvg: function(dom_element_id){
      downloadSvg(dom_element_id);
    }
  }
});
//var app_visualizer_time_domain = new Vue({
//    el: '#app_visualizer_time_domain',
//    data: {
//      options_one_path : RENDER_BY_TIME_DOMAIN_ONE_PATH,
//      options_one_path_in_circle : RENDER_BY_TIME_DOMAIN_ONE_PATH_IN_CIRCLE,
//      analyzer : ANALYZER_TIME_DOMAIN,
//      visualizer_selected : RENDER_TIME_DOMAIN_SVG,
//      generals : VISUALIZER_BY_TIME_DOMAIN
//    }
//});
//var app_visualizer_frequency = new Vue({
//    el: '#app_visualizer_frequency',
//    data: {
//      options_bar_linear : RENDER_SVG_BAR_LINEAR,
//      options_circle_linear : RENDER_SVG_CIRCLE_LINEAR,
//      options_circle_linear_2 : RENDER_SVG_CIRCLE_LINEAR_2,
//      options_circle_in_circle : RENDER_SVG_CIRCLE_IN_CIRCLE,
//      visualizer_frequency_selected : RENDER_FREQUENCY_SVG,
//      analyzer : ANALYSER_FREQUENCY,
//      generals : VISUALIZER_BY_FREQUENCY
//    }
//});
//var app_audio_gain = new Vue({
//    el: '#app_audio_gain',
//    data: {
//      generals : AUDIO_GAIN
//    }
//});

//timer functions
var timer;
var timer_value = 0;
var IS_RECORDING = false;

function increaseTimer(){
  timer_element = document.getElementById("timer");
  timer_element.innerHTML = (timer_value+1);
  timer_value += 1;
}
function startTimer(){
  timer = setInterval(increaseTimer, 100);
  IS_RECORDING = true;
}
function stopTimer() {
  timer_value = 0;
  clearInterval(timer);
  IS_RECORDING = false;
}

//upload file
function readFile(files) {
	var fileReader = new FileReader();
		fileReader.readAsArrayBuffer(files[0]);
		fileReader.onload = function(e) {
      var audioURL = window.URL.createObjectURL(files[0])
      var to_add = {
        "id" : "button_audio_uploaded_"+LIST_UPLOAD_FILES.length,
        "filename" : files[0].name,
        "size" : ((Math.floor(files[0].size/1024/1024*100))/100),
        "audioURL" : audioURL
      }
      LIST_UPLOAD_FILES.push(to_add);
			console.log(("Filename: '" + files[0].name + "'"), ( "(" + ((Math.floor(files[0].size/1024/1024*100))/100) + " MB)" ));
		}
}
//var app_list_audio_files_uploaded = new Vue({
//    el: '#app_list_audio_files_uploaded',
//    data: {
//      list : LIST_UPLOAD_FILES
//    },
//    methods: {
//      start: function(source_type,source_id){
//        start(source_type,source_id);
//      }
//    }
//});


//svg object
var svg_bar;
var svg_by_time_domain;

//init audio variable
var audioCtx;
var source_microphone;
var source_last_recording;
var gainNode;
var analyser;
var analyser_frequency;
var audio_button_element;

//object with source created by uploaded files
var sources_from_uploaded_files = {};

function init_audio () {
  audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  ////set up the different audio nodes we will use for the app

  //gain node to add volume and display a graph with enough amplitude
  gainNode = audioCtx.createGain();
  gainNode.gain.setValueAtTime(AUDIO_GAIN.gain.value, audioCtx.currentTime);

  //analyser to get data to display them
  analyser = audioCtx.createAnalyser();
  analyser.minDecibels = ANALYZER_TIME_DOMAIN.min_decibels.value;
  analyser.maxDecibels = ANALYZER_TIME_DOMAIN.max_decibels.value;
  analyser.smoothingTimeConstant = ANALYZER_TIME_DOMAIN.smoothing_time_constant.value;


  //analyser to get data to display them
  analyser_frequency = audioCtx.createAnalyser();
  analyser_frequency.minDecibels = ANALYSER_FREQUENCY.min_decibels.value;
  analyser_frequency.maxDecibels = ANALYSER_FREQUENCY.max_decibels.value;
  analyser_frequency.smoothingTimeConstant = ANALYSER_FREQUENCY.smoothing_time_constant.value;

  gainNode.connect(analyser);
  gainNode.connect(analyser_frequency);

  // Older browsers might not implement mediaDevices at all, so we set an empty object first
  if (navigator.mediaDevices === undefined) {
    navigator.mediaDevices = {};
  }

  // Some browsers partially implement mediaDevices. We can't just assign an object
  // with getUserMedia as it would overwrite existing properties.
  // Here, we will just add the getUserMedia property if it's missing.
  if (navigator.mediaDevices.getUserMedia === undefined) {
    navigator.mediaDevices.getUserMedia = function(constraints) {

      // First get ahold of the legacy getUserMedia, if present
      var getUserMedia = navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;

      // Some browsers just don't implement it - return a rejected promise with an error
      // to keep a consistent interface
      if (!getUserMedia) {
        return Promise.reject(new Error('getUserMedia is not implemented in this browser'));
      }

      // Otherwise, wrap the call to the old navigator.getUserMedia with a Promise
      return new Promise(function(resolve, reject) {
        getUserMedia.call(navigator, constraints, resolve, reject);
      });
    }
  }

  //init audio source microphone
  if (navigator.mediaDevices.getUserMedia) {
     console.log('getUserMedia supported.');
     var constraints = {audio: true}
     navigator.mediaDevices.getUserMedia (constraints)
        .then(
          function(stream) {
            source_microphone = audioCtx.createMediaStreamSource(stream);
            //source_microphone.connect(gainNode);
        })
        .catch( function(err) { console.log('The following gUM error occured: ' + err);})
  } else {
     console.log('getUserMedia not supported on your browser!');
     return null;
  }

  //init audio html element
  audio_button_element = document.getElementById('audio_button');
  source_last_recording = audioCtx.createMediaElementSource(audio_button_element);
  //source_last_recording.connect(gainNode);

  audioCtx.suspend();
  GLOBAL_VARIABLES.init_audio = true;
  document.getElementById('stopBtn').style.display = "none";
  //document.getElementById('record_section').style.display = "none";
}

function downloadSvg(dom_element_id){
  var fileName = "custom.svg"
  var url = "data:image/svg+xml;utf8," + encodeURIComponent(document.getElementById(dom_element_id).innerHTML);
  var link = document.createElement("a");
  link.download = fileName;
  link.href = url;
  link.click();
}


function start(source_type, source_id) {

  //init svg canvas landscape to null
  svg_by_time_domain = document.getElementById('svg_by_time_domain');
  svg_by_time_domain.innerHTML = "";
  svg_bar = document.getElementById('svg_bar');
  svg_bar.innerHTML = "";

  //init start values for rendering
  RENDER_SVG_BAR_LINEAR.position_x.value = 0;
  RENDER_SVG_CIRCLE_LINEAR.position_x.value = 0;
  RENDER_SVG_CIRCLE_LINEAR_2.position_x.value = 0;
  RENDER_SVG_CIRCLE_IN_CIRCLE.x0.value = VISUALIZER_BY_FREQUENCY.width.value/2;
  RENDER_SVG_CIRCLE_IN_CIRCLE.y0.value = VISUALIZER_BY_FREQUENCY.height.value/2;
  RENDER_SVG_CIRCLE_IN_CIRCLE.angle_counter.value = Math.PI;

  RENDER_BY_TIME_DOMAIN_ONE_PATH.previous_x.value = 0;
  RENDER_BY_TIME_DOMAIN_ONE_PATH.previous_y.value = VISUALIZER_BY_TIME_DOMAIN.height.value/2;
  RENDER_BY_TIME_DOMAIN_ONE_PATH_IN_CIRCLE.x0.value = VISUALIZER_BY_TIME_DOMAIN.width.value/2;
  RENDER_BY_TIME_DOMAIN_ONE_PATH_IN_CIRCLE.y0.value = VISUALIZER_BY_TIME_DOMAIN.height.value/2;
  RENDER_BY_TIME_DOMAIN_ONE_PATH_IN_CIRCLE.previous_x.value = -1;
  RENDER_BY_TIME_DOMAIN_ONE_PATH_IN_CIRCLE.previous_y.value = -1;
  RENDER_BY_TIME_DOMAIN_ONE_PATH_IN_CIRCLE.angle_counter.value = Math.PI;

  // set up forked web audio context, for multiple browsers
  // window. is needed otherwise Safari explodes

  //var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  var source;
  //var stream;
  var mediaRecorder;
    //buffer for media recording
    var chunks = [];

  var drawVisual;
  var drawVisualBar;

  //
  var stopBtn = document.getElementById('stopBtn');

  function stopRecord() {
    console.log("CALL stopRecord");

    document.getElementById('record_section').style.display = "inline";
    document.getElementById('startBtn').style.display = "inline";
    document.getElementById('stopBtn').style.display = "none";

    //
    console.log('Stopping animation '+drawVisualBar+'.'+drawVisual+'.');
    window.cancelAnimationFrame(drawVisualBar);
    window.cancelAnimationFrame(drawVisual);
    console.log('Stopped animation');

    stopTimer();
    if (audioCtx && audioCtx.state != 'closed'){
      console.log("close audio context");
      audioCtx.suspend();
    }
    if (mediaRecorder && mediaRecorder.state == "recording"){
      console.log("close media recorder");
      mediaRecorder.stop();
    }
    source.disconnect(gainNode);
  }

  stopBtn.onclick = (event) => {
    stopRecord();
  };

  if (source_type == 'microphone') {
    source = source_microphone;
    play(source);
    recordAudio(source.mediaStream);
  }
  if (source_type == 'last_recording') {
    source = source_last_recording;
    play(source);
    audio_button_element.currentTime = 0
    audio_button_element.play();
  }
  if (source_type == 'uploaded') {
    var audio_button_uploaded = document.getElementById(source_id);
    try {
      sources_from_uploaded_files[source_id] = audioCtx.createMediaElementSource(audio_button_uploaded);
    }
    catch (error) {
      console.warn(error);
    }
    source = sources_from_uploaded_files[source_id];
    play(source);
    audio_button_uploaded.currentTime = 0
    audio_button_uploaded.play();
    audio_button_uploaded.onended = (event) => {
      stopRecord();
      var elements = document.getElementsByClassName('audio_uploaded_start_button');
      for (var i=0; i <elements.length;i++){
        elements[i].removeAttribute('disabled');
      }
    }
    var elements = document.getElementsByClassName('audio_uploaded_start_button');
    for (var i=0; i <elements.length;i++){
      elements[i].setAttribute('disabled',true);
    }
  }


  function play(source){
    source.connect(gainNode);
    audioCtx.resume();
    //analyser.connect(audioCtx.destination);
    document.getElementById('startBtn').style.display = "none";
    document.getElementById('stopBtn').style.display = "inline";
    startTimer();
    visualize_by_time_domain(RENDER_BY_TIME_DOMAIN_ONE_PATH.aggregate_threshold.value);
    visualize_by_frequency();
  }

  function recordAudio(stream){
    mediaRecorder = new MediaRecorder(stream);
    mediaRecorder.start();
    mediaRecorder.ondataavailable = function(e) {
      chunks.push(e.data);
    }
    mediaRecorder.onstop = function(e) {
      var audio = document.getElementById('audio_button');
      audio.onended = (event) => {
        console.log("audio is ended");
        if (IS_RECORDING) {
          console.log("audio is ended and not recording");
          stopRecord();
        }
      };

      const blob = new Blob(chunks, { 'type' : 'audio/ogg; codecs=opus' });
      chunks = [];
      const audioURL = window.URL.createObjectURL(blob);
      audio.src = audioURL;

    }
  }

  function visualize_by_time_domain(threshold) {

    analyser.fftSize = ANALYZER_TIME_DOMAIN.fft_size.value;
    var bufferLength = analyser.frequencyBinCount;
    console.log(bufferLength);
    var dataArray = new Uint8Array(bufferLength);
    var sliceWidth = VISUALIZER_BY_TIME_DOMAIN.width.value * VISUALIZER_BY_TIME_DOMAIN.slice_width_coef.value / bufferLength;
    var counter_x = sliceWidth;

    var draw = function() {

      if (IS_RECORDING) {
        drawVisual = requestAnimationFrame(draw);
      }

      analyser.getByteTimeDomainData(dataArray);
      var buffer_counter = 0;
      for(var i = 0; i < bufferLength; i++) {
        if ( i == 0 || i % threshold != 0) {
          var v = dataArray[i] / 128.0;
          if (v < 0.9 ) {
            v = v / VISUALIZER_BY_TIME_DOMAIN.height_coef.value ;
          }
          else if ( v > 1.1){
            v = v * VISUALIZER_BY_TIME_DOMAIN.height_coef.value ;
          }
          var w = v * VISUALIZER_BY_TIME_DOMAIN.height.value/2;
          buffer_counter += w;
        }
        else {
          //visualize_landscape_mountain(buffer_counter);
          var y = buffer_counter / threshold;
          if ( RENDER_TIME_DOMAIN_SVG.value == 'linear' ) {
            render_by_time_domain_one_path (y,"svg_by_time_domain");
          }
          if ( RENDER_TIME_DOMAIN_SVG.value == 'circle' ) {
            render_by_time_domain_one_path_in_circle(y,"svg_by_time_domain");
          }
        }
      }
    };
    draw();
  }

  function visualize_by_frequency() {
    analyser_frequency.fftSize = ANALYSER_FREQUENCY.fft_size.value;
    var bufferLength = analyser_frequency.frequencyBinCount;
    console.log(bufferLength);
    var dataArray = new Uint8Array(bufferLength);
    var x = 0; //x position for the graph
    var counterStep = 0;
    var coefBarHeight = VISUALIZER_BY_FREQUENCY.coef_height.value; //to adjust the height of the drawing
    var threshold = VISUALIZER_BY_FREQUENCY.threshold.value;//number of values before drawing the average value

    var draw_bar = function() {
      if (IS_RECORDING) {
        drawVisualBar = requestAnimationFrame(draw_bar);
      }

      analyser_frequency.getByteFrequencyData(dataArray);

      //var barWidth = (WIDTH / bufferLength) * 2.5;
      var barHeight = dataArray[0];
      for(var i = 1; i < bufferLength; i++) {
        if ( counterStep == 0 || counterStep % threshold != 0) {
          barHeight += dataArray[i];
        }
        else {
          //visualize_landscape_cloud(barHeight + dataArray[i]);
          barHeight = (barHeight + dataArray[i]) * coefBarHeight / threshold;

          //plain along linear path
          if (RENDER_FREQUENCY_SVG.value == "bar_linear") {
            render_svg_bar(barHeight, 'svg_bar');
          }
          //in circle along linear path
          if (RENDER_FREQUENCY_SVG.value == "circle") {
            render_svg_circle(barHeight, 'svg_bar');
          }
          //in circle 2 along linear path
          if (RENDER_FREQUENCY_SVG.value == "circle2") {
            render_svg_circle_2(barHeight, 'svg_bar');
          }
          //circle along circle path
          if (RENDER_FREQUENCY_SVG.value == "circle_along_circle") {
            render_svg_circle_in_circle(barHeight, 'svg_bar');
          }

        }
        counterStep +=1;
      }
    };
    draw_bar();
  }

  function render_svg_bar (barHeight, html_element_id) {
    html_element_svg = document.getElementById(html_element_id);

    var svg_line_element = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      svg_line_element.setAttribute("style","stroke:"+RENDER_SVG_BAR_LINEAR.stroke_style.value+";stroke-width:"+RENDER_SVG_BAR_LINEAR.line_width.value+";");
      svg_line_element.setAttribute("x1", RENDER_SVG_BAR_LINEAR.position_x.value);
      svg_line_element.setAttribute("y1", VISUALIZER_BY_FREQUENCY.height.value/2 - barHeight);
      svg_line_element.setAttribute("x2", RENDER_SVG_BAR_LINEAR.position_x.value);
      svg_line_element.setAttribute("y2", VISUALIZER_BY_FREQUENCY.height.value/2 + barHeight);

    html_element_svg.appendChild(svg_line_element);

    RENDER_SVG_BAR_LINEAR.position_x.value += RENDER_SVG_BAR_LINEAR.line_width.value + RENDER_SVG_BAR_LINEAR.margin.value;
  }

  function render_svg_circle(barHeight,html_element_id) {
    console.log('visualize_circle barHeight '+barHeight);
    html_element_svg = document.getElementById(html_element_id);

    for (var y= (VISUALIZER_BY_FREQUENCY.height.value-barHeight)/2; y <= barHeight + (VISUALIZER_BY_FREQUENCY.height.value-barHeight)/2 ; y = y + RENDER_SVG_CIRCLE_LINEAR.circle_radius.value*2+RENDER_SVG_CIRCLE_LINEAR.margin.value) {
      var radius = RENDER_SVG_CIRCLE_LINEAR.circle_radius.value;
      var svg_circle_element = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        svg_circle_element.setAttribute("fill",RENDER_SVG_CIRCLE_LINEAR.fill_style.value);
        svg_circle_element.setAttribute("cx", RENDER_SVG_CIRCLE_LINEAR.position_x.value);
        svg_circle_element.setAttribute("cy", y);
        svg_circle_element.setAttribute("r", RENDER_SVG_CIRCLE_LINEAR.circle_radius.value);
      html_element_svg.appendChild(svg_circle_element);
    }
    RENDER_SVG_CIRCLE_LINEAR.position_x.value += RENDER_SVG_CIRCLE_LINEAR.circle_radius.value*2 + RENDER_SVG_CIRCLE_LINEAR.margin.value;
  }

  function render_svg_circle_2(barHeight,html_element_id) {
    html_element_svg = document.getElementById(html_element_id);

    var y = VISUALIZER_BY_FREQUENCY.height.value/2;
    var radius = RENDER_SVG_CIRCLE_LINEAR_2.circle_radius.value;
    var svg_circle_element = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      svg_circle_element.setAttribute("fill",RENDER_SVG_CIRCLE_LINEAR_2.fill_style.value);
      svg_circle_element.setAttribute("cx", RENDER_SVG_CIRCLE_LINEAR_2.position_x.value);
      svg_circle_element.setAttribute("cy", y);
      svg_circle_element.setAttribute("r", RENDER_SVG_CIRCLE_LINEAR_2.circle_radius.value);
    html_element_svg.appendChild(svg_circle_element);

    var counter = 2;
    while ( y  - counter*(RENDER_SVG_CIRCLE_LINEAR_2.circle_radius.value + RENDER_SVG_CIRCLE_LINEAR_2.vertical_margin.value) > VISUALIZER_BY_FREQUENCY.height.value/2 - barHeight/2 ) {
      var y_offset = counter*(RENDER_SVG_CIRCLE_LINEAR_2.circle_radius.value + RENDER_SVG_CIRCLE_LINEAR_2.vertical_margin.value);
      var tmp_radius = RENDER_SVG_CIRCLE_LINEAR_2.circle_radius.value/(counter*RENDER_SVG_CIRCLE_LINEAR_2.radius_coef.value)
      var svg_circle_element_top = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        svg_circle_element_top.setAttribute("fill",RENDER_SVG_CIRCLE_LINEAR_2.fill_style.value);
        svg_circle_element_top.setAttribute("cx", RENDER_SVG_CIRCLE_LINEAR_2.position_x.value);
        svg_circle_element_top.setAttribute("cy", y - y_offset);
        svg_circle_element_top.setAttribute("r", tmp_radius);
      html_element_svg.appendChild(svg_circle_element_top);

      var svg_circle_element_bot = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        svg_circle_element_bot.setAttribute("fill",RENDER_SVG_CIRCLE_LINEAR_2.fill_style.value);
        svg_circle_element_bot.setAttribute("cx", RENDER_SVG_CIRCLE_LINEAR_2.position_x.value);
        svg_circle_element_bot.setAttribute("cy", y + y_offset);
        svg_circle_element_bot.setAttribute("r", tmp_radius);
      html_element_svg.appendChild(svg_circle_element_bot);

      counter = counter + 1;
    }
    RENDER_SVG_CIRCLE_LINEAR_2.position_x.value += RENDER_SVG_CIRCLE_LINEAR_2.circle_radius.value*2 + RENDER_SVG_CIRCLE_LINEAR_2.margin.value;
  }

  function render_svg_circle_in_circle(barHeight,html_element_id) {
    html_element_svg = document.getElementById(html_element_id);

    if ( barHeight <= 0 ) return null;

    var tmp_radius_coordinate =(RENDER_SVG_CIRCLE_IN_CIRCLE.radius_path.value)*RENDER_SVG_CIRCLE_IN_CIRCLE.distance_coef.value;
    var cx = RENDER_SVG_CIRCLE_IN_CIRCLE.x0.value +tmp_radius_coordinate*Math.cos(RENDER_SVG_CIRCLE_IN_CIRCLE.angle_counter.value);
    var cy = RENDER_SVG_CIRCLE_IN_CIRCLE.y0.value +tmp_radius_coordinate*Math.sin(RENDER_SVG_CIRCLE_IN_CIRCLE.angle_counter.value);
    var svg_circle_element = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      svg_circle_element.setAttribute("fill",RENDER_SVG_CIRCLE_IN_CIRCLE.fill_style.value);
      svg_circle_element.setAttribute("cx", cx);
      svg_circle_element.setAttribute("cy", cy);
      svg_circle_element.setAttribute("r", RENDER_SVG_CIRCLE_IN_CIRCLE.radius.value);
    html_element_svg.appendChild(svg_circle_element);

    var y = VISUALIZER_BY_FREQUENCY.height.value / 2;
    var counter = 2;
    while ( y  - counter*(RENDER_SVG_CIRCLE_IN_CIRCLE.radius.value + RENDER_SVG_CIRCLE_IN_CIRCLE.vertical_margin.value) > VISUALIZER_BY_FREQUENCY.height.value/2 - barHeight/2 ) {
      var y_offset = counter*(RENDER_SVG_CIRCLE_IN_CIRCLE.radius.value + RENDER_SVG_CIRCLE_IN_CIRCLE.vertical_margin.value);
      tmp_radius_coordinate = (RENDER_SVG_CIRCLE_IN_CIRCLE.radius_path.value - y_offset)*RENDER_SVG_CIRCLE_IN_CIRCLE.distance_coef.value;
      cx = RENDER_SVG_CIRCLE_IN_CIRCLE.x0.value + tmp_radius_coordinate*Math.cos(RENDER_SVG_CIRCLE_IN_CIRCLE.angle_counter.value);
      cy = RENDER_SVG_CIRCLE_IN_CIRCLE.y0.value + tmp_radius_coordinate*Math.sin(RENDER_SVG_CIRCLE_IN_CIRCLE.angle_counter.value);
      var tmp_radius = RENDER_SVG_CIRCLE_IN_CIRCLE.radius.value/(counter*RENDER_SVG_CIRCLE_IN_CIRCLE.radius_coef.value);
      var svg_circle_element_top = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        svg_circle_element_top.setAttribute("fill",RENDER_SVG_CIRCLE_IN_CIRCLE.fill_style.value);
        svg_circle_element_top.setAttribute("cx", cx);
        svg_circle_element_top.setAttribute("cy", cy);
        svg_circle_element_top.setAttribute("r", tmp_radius);
      html_element_svg.appendChild(svg_circle_element_top);

      tmp_radius_coordinate = (RENDER_SVG_CIRCLE_IN_CIRCLE.radius_path.value + y_offset)*RENDER_SVG_CIRCLE_IN_CIRCLE.distance_coef.value;
      cx = RENDER_SVG_CIRCLE_IN_CIRCLE.x0.value + tmp_radius_coordinate*Math.cos(RENDER_SVG_CIRCLE_IN_CIRCLE.angle_counter.value);
      cy = RENDER_SVG_CIRCLE_IN_CIRCLE.y0.value + tmp_radius_coordinate*Math.sin(RENDER_SVG_CIRCLE_IN_CIRCLE.angle_counter.value);
      var svg_circle_element_bot = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        svg_circle_element_bot.setAttribute("fill",RENDER_SVG_CIRCLE_IN_CIRCLE.fill_style.value);
        svg_circle_element_bot.setAttribute("cx", cx);
        svg_circle_element_bot.setAttribute("cy", cy);
        svg_circle_element_bot.setAttribute("r", tmp_radius);
      html_element_svg.appendChild(svg_circle_element_bot);

      counter = counter + 1;
    }
    RENDER_SVG_CIRCLE_IN_CIRCLE.angle_counter.value += RENDER_SVG_CIRCLE_IN_CIRCLE.angle_step.value;
  }

  function render_by_time_domain_one_path (value,html_element_id) {
    html_element_svg = document.getElementById(html_element_id);

    var svg_line_element = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      svg_line_element.setAttribute("style","stroke:"+RENDER_BY_TIME_DOMAIN_ONE_PATH.stroke_style.value+";stroke-width:"+RENDER_BY_TIME_DOMAIN_ONE_PATH.line_width.value+";");
      svg_line_element.setAttribute("x1", RENDER_BY_TIME_DOMAIN_ONE_PATH.previous_x.value);
      svg_line_element.setAttribute("y1", RENDER_BY_TIME_DOMAIN_ONE_PATH.previous_y.value);
      svg_line_element.setAttribute("x2", RENDER_BY_TIME_DOMAIN_ONE_PATH.previous_x.value+RENDER_BY_TIME_DOMAIN_ONE_PATH.space_between_point.value);
      svg_line_element.setAttribute("y2",value);

    html_element_svg.appendChild(svg_line_element);

    RENDER_BY_TIME_DOMAIN_ONE_PATH.previous_x.value = RENDER_BY_TIME_DOMAIN_ONE_PATH.previous_x.value+RENDER_BY_TIME_DOMAIN_ONE_PATH.space_between_point.value;
    RENDER_BY_TIME_DOMAIN_ONE_PATH.previous_y.value = value;
  }
  function render_by_time_domain_one_path_in_circle(value,html_element_id) {
    html_element_svg = document.getElementById(html_element_id);

    var tmp_radius_coordinate =value*RENDER_BY_TIME_DOMAIN_ONE_PATH_IN_CIRCLE.distance_coef.value;
    var x = RENDER_BY_TIME_DOMAIN_ONE_PATH_IN_CIRCLE.x0.value +tmp_radius_coordinate*Math.cos(RENDER_BY_TIME_DOMAIN_ONE_PATH_IN_CIRCLE.angle_counter.value);
    var y = RENDER_BY_TIME_DOMAIN_ONE_PATH_IN_CIRCLE.y0.value +tmp_radius_coordinate*Math.sin(RENDER_BY_TIME_DOMAIN_ONE_PATH_IN_CIRCLE.angle_counter.value);

    if (  RENDER_BY_TIME_DOMAIN_ONE_PATH_IN_CIRCLE.previous_x.value != -1 ){
      var svg_line_element = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        svg_line_element.setAttribute("style","stroke:"+RENDER_BY_TIME_DOMAIN_ONE_PATH_IN_CIRCLE.stroke_style.value+";stroke-width:"+RENDER_BY_TIME_DOMAIN_ONE_PATH_IN_CIRCLE.line_width.value+";");
        svg_line_element.setAttribute("x1", RENDER_BY_TIME_DOMAIN_ONE_PATH_IN_CIRCLE.previous_x.value);
        svg_line_element.setAttribute("y1", RENDER_BY_TIME_DOMAIN_ONE_PATH_IN_CIRCLE.previous_y.value);
        svg_line_element.setAttribute("x2", x);
        svg_line_element.setAttribute("y2", y);

      html_element_svg.appendChild(svg_line_element);
      RENDER_BY_TIME_DOMAIN_ONE_PATH_IN_CIRCLE.angle_counter.value += RENDER_BY_TIME_DOMAIN_ONE_PATH_IN_CIRCLE.angle_step.value;
    }

    RENDER_BY_TIME_DOMAIN_ONE_PATH_IN_CIRCLE.previous_x.value = x;
    RENDER_BY_TIME_DOMAIN_ONE_PATH_IN_CIRCLE.previous_y.value = y;

  }

}
