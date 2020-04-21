function checkForm() {
  if (document.getElementById("A").checked) {
    document.getElementById("out").innerHTML = "Value is A";
  } else {
    document.getElementById("out").innerHTML = "Value is B";
  }
}

var rangeSlider = function() {
  //var slider = document.getElementById("myRange");
  const textSelection = [
    "All of the time",
    "Most of the time",
    "More than half the time",
    "Less than half the time",
    "Some of the time",
    "At no time",
  ];
  //var output = document.getElementById("rangevalue");

  var sliders = Array.from(document.getElementsByClassName("rangeClass"));

  console.log(sliders);
  //console.log(output);

  sliders.forEach((slider) => {
    console.log(slider.value)
    var rangeName = slider.id + "-value"
    document.getElementById(slider.id + "-value").value = textSelection[slider.value];
    if (slider.value > 4) {
      document.getElementById(slider.id + "-info").style.display = "block"
    } else {
      document.getElementById(slider.id + "-info").style.display = "none"
    }


    
  });

  let finalScore = sliders.reduce((total,b) => total + parseInt(b.value), 0)
  document.getElementById("final-score").value =  finalScore

  if (finalScore > 13) {
    document.getElementById("score-above-13").style.display = "block"
    document.getElementById("score-below-13").style.display = "none"

  }
  else {
    document.getElementById("score-below-13").style.display = "block"
    document.getElementById("score-above-13").style.display = "none"
  }
};

rangeSlider();
