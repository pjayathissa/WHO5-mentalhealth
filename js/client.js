// convert json object to json array
var linksArray = Object.values(links);

var rangeSlider = function() {
  linksArray.map((link) => {
    link.total = 0;
  });

  // text that is displayed above the slider
  const textSelection = [
    "All of the time",
    "Most of the time",
    "More than half the time",
    "Less than half the time",
    "Some of the time",
    "At no time",
  ];

  // get all sliders
  var sliders = Array.from(document.getElementsByClassName("rangeClass"));

  //itterate through sliders and adjust value above it to meet the text
  sliders.forEach((slider) => {
    var rangeName = slider.id + "-value";
    document.getElementById(slider.id + "-value").value = textSelection[slider.value];
    // if "never" is selected it is an emergency
    if (slider.value > 4) {
      document.getElementById(slider.id + "-info").style.display = "block";
    } else {
      document.getElementById(slider.id + "-info").style.display = "none";
    }

    // Calculate the total score of each link base on the slider value
    linksArray.map((link) => {
      link.total += link[slider.id] * slider.value;
    });
  });

  let finalScore = sliders.reduce((total, b) => total + parseInt(b.value), 0);
  document.getElementById("final-score").value = finalScore;

  // Sort arrays based on their score
  linksArray.sort((a, b) => {
    return b.total - a.total;
  });

  // if people are not doing well
  if (finalScore > 13) {
    // the two lists that need to be dynamically modified
    var topTwoList = document.getElementById("top-two-list");
    var restList = document.getElementById("rest-list");
    // reset them no empty
    topTwoList.innerHTML = "";
    restList.innerHTML = "";

    counter = 0;
    linksArray.forEach((link) => {
      var div = document.createElement("div");
      var li = document.createElement("a");
      li.setAttribute("href", link.url);
      li.setAttribute("target", "_blank");
      li.setAttribute("class", "link custom-white underline dim");
      li.setAttribute("id", link.name);
      li.appendChild(document.createTextNode(link.name));
      div.appendChild(li);
      if (counter < 2) {
        topTwoList.appendChild(div);
      } else {
        restList.appendChild(div);
      }

      counter++;
    });

    document.getElementById("score-above-13").style.display = "block";
    document.getElementById("score-below-13").style.display = "none";
  } else {
    // people are doing well
    document.getElementById("score-below-13").style.display = "block";
    document.getElementById("score-above-13").style.display = "none";
  }
};
