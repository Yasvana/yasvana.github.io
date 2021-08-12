const matches = document.querySelectorAll("path");
const listUnits = ['cm','mm','px'];
let currentState = {
  totalLength : null,
  fileunit : null,
  units : {},
  time : null
}

var totalLength = {
  value : 0.0,
  reset : function() {
    this.value = 0.0;
  },
  addValue : function (value) {
    this.value += value;
    currentState.totalLength = this.value;
  }
}

const fileSelector = document.getElementById('file-selector');
fileSelector.addEventListener('change', (event) => {
  //get file
  const file = event.target.files[0];

  //read file content
  var reader = new FileReader();
    reader.onload = function(e) {
      var content = e.target.result;

      //parse it
      var doc = new DOMParser();
      var xml = doc.parseFromString(content, "image/svg+xml");

      //add it to the html content
      document.getElementById('svg').appendChild(xml.documentElement);

    };
    reader.readAsText(file);
});

function computeLengthAndAdd() {
  computeLength().then(detectUnit());
}

async function computeLength(){
  totalLength.reset();
  const domPaths = document.querySelectorAll("path");
  for(var i = 0; i < domPaths.length; i++) {
    totalLength.addValue(domPaths[i].getTotalLength());
  }
  return
}

function detectUnit() {
  const domSvg = document.querySelector("svg");
  const height = domSvg.getAttribute("height");
  var heightUnit;
  if (height) {
    heightUnit = height.substr(height.length - 2);
  }
  else {
    heightUnit = 'px';
  }
  const width = domSvg.getAttribute("width");
    var widthUnit;
    if (width) {
       widthUnit = width.substr(width.length - 2);
    }
    else {
      widthUnit = 'px';
    }
  if (!listUnits.includes(heightUnit) && !isNaN(heightUnit) ) {
    console.log("heightUnit: "+heightUnit);
    heightUnit = 'px';
  }
  if (!listUnits.includes(widthUnit) && !isNaN(widthUnit) ) {
    console.log("widthUnit before casting to px: "+widthUnit);
    widthUnit = 'px';
  }
  if ( heightUnit !== widthUnit) {
      document.getElementById('error').innerHTML = "please put same unit for height("+heightUnit+") and width("+widthUnit+")";
      return;
  }
  currentState.fileunit = widthUnit;
  //convert to other unit
  convertAll().then(
    result => {
      document.getElementById('lengths').innerHTML = JSON.stringify(currentState.units, null, '\t') ;
    }
  )
}

async function convertAll() {
  for (const unit of listUnits) {
    currentState.units[unit] = convert (unit);
  }
}

function convert (toUnit) {
  //to define to multiplicator to convert from unit to another
  const convertValues = {
    px : {
      px : 1,
      cm : 0.0264,
      mm : 0.264

    },
    cm : {
      cm : 1,
      px : 37.7953,
      mm : 10
    },
    mm : {
      px : 3.77953,
      cm : 0.1,
      mm : 1
    }
  }

  const convertValue = (currentState.totalLength*(convertValues[currentState.fileunit][toUnit])).toFixed(2);
  return convertValue;
}

function computeTimeFromSpeed() {
  const speed = document.getElementById('speed').value;
  const speedFloat = parseFloat(speed);
  const time = (currentState.units.mm / speedFloat)*60;

  //convert to hh:mm:ss format
  var measuredTime = new Date(null);
  measuredTime.setSeconds(time);
  var MHSTime = measuredTime.toISOString().substr(11, 8);

  document.getElementById('time').innerHTML = MHSTime;
  return time;
}
