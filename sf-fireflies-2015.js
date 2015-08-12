(function() {

var fill = d3.scale.category20();

function fontSizeFactor(){
    return window.innerWidth / 40.0;
}

var layout = d3.layout.cloud()
    .size([window.innerWidth, window.innerWidth])
    .words(
        [
            {text: 'Musical', size: 1},
            {text: 'Self-Cared', size: 3},
            {text: 'Balance', size: 5},
            {text: 'High-Expectations', size: 3},
            {text: 'Trusting', size: 1},
            {text: 'Understanding', size: 2},
            {text: 'Fun', size: 9},
            {text: 'Attentive', size: 1},
            {text: 'Flexible', size: 1},
            {text: 'Assuming-the-Best', size: 6},
            {text: 'Honest', size: 3},
            {text: 'Unassuming', size: 3},
            {text: 'Teachable', size: 3},
            {text: 'Positively-Influencing-Others', size: 2},
            {text: 'Sincere', size: 1},
            {text: 'True-to-Self', size: 2},
            {text: 'Inclusive', size: 2},
            {text: 'Supportive', size: 8},
            {text: 'Collaborative', size: 9},
            {text: 'Comforting', size: 3},
            {text: 'No-One-Left-Behind', size: 2},
            {text: 'Huffle-Puff', size: 2},
        ]
    )
    .padding(1)
    .font("Impact")
    .rotate(function() { return (Math.random() * 90) - 45; })
    .font("Impact")
    .fontSize(function(d) { return Math.sqrt(d.size) * fontSizeFactor(); })
    .on("end", draw);

layout.start();

function draw(words) {
  d3.select("body").append("svg")
      .attr("width", layout.size()[0])
      .attr("height", layout.size()[1])
    .append("g")
      .attr("transform", "translate(" + layout.size()[0] / 2 + "," + layout.size()[1] / 2 + ")")
    .selectAll("text")
      .data(words)
    .enter().append("text")
      .style("font-size", function(d) { return d.size + "px"; })
      .style("font-family", "Impact")
      .style("fill", function(d, i) { return fill(i); })
      .attr("text-anchor", "middle")
      .attr("transform", function(d) {
        return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
      })
      .text(function(d) { return d.text; });
}

})();
