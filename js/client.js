// convert json object to json array
var linksArray = Object.values(links)

console.log(linksArray)

var rangeSlider = function() {
  linksArray.map(link => {
    link.total = 0
  })
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

  sliders.forEach((slider) => {
    var rangeName = slider.id + "-value"
    document.getElementById(slider.id + "-value").value = textSelection[slider.value];
    if (slider.value > 4) {
      document.getElementById(slider.id + "-info").style.display = "block"
    } else {
      document.getElementById(slider.id + "-info").style.display = "none"
    }

    // Calculate the total score of each link base on the slider value
    linksArray.map((link) => {
      link.total += link[slider.id] * slider.value
    })
    //console.log(linksArray)

    
  });

  let finalScore = sliders.reduce((total,b) => total + parseInt(b.value), 0)
  document.getElementById("final-score").value =  finalScore

  // Sort arrays based on their score
  linksArray.sort((a,b) =>{
    return b.total - a.total
  })

  console.log(linksArray)
  


  if (finalScore > 13) {
    var topTwoList = document.getElementById("top-two-list");
    var restList = document.getElementById("rest-list")
    topTwoList.innerHTML = ''
    restList.innerHTML = ''

    counter = 0
    linksArray.forEach(link => {
      var div = document.createElement("div")
      var li = document.createElement("a");
      li.setAttribute('href',link.url);
      li.setAttribute('target',"_blank");
      li.setAttribute('class',"link custom-blue underline dim");
      li.setAttribute('id',link.name);
      li.appendChild(document.createTextNode(link.name));
      div.appendChild(li)
      if (counter < 2) {
        topTwoList.appendChild(div);
      }
      else {
        restList.appendChild(div);
      }
      
      counter++

    })



    document.getElementById("score-above-13").style.display = "block"
    document.getElementById("score-below-13").style.display = "none"

  }
  else {
    document.getElementById("score-below-13").style.display = "block"
    document.getElementById("score-above-13").style.display = "none"
  }
};

