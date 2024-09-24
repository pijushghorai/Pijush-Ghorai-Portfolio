let optionse = {
  startAngle: -1.55,
  size: 150,
  value: 0.95,
  fill: { gradient: ["#526D82", "rgb(2, 6, 48)"] },
};
$(".circled .bar")
  .circleProgress(optionse)
  .on("circle-animation-progress", function (event, progress, stepValue) {
    $(this)
      .parent()
      .find("span")
      .text(String(stepValue.toFixed(2).substr(2)) + "%");
  });
$(".js .bar").circleProgress({
  value: 0.86,
});
$(".react .bar").circleProgress({
  value: 0.75,
});
$(".java .bar").circleProgress({
  value: 0.92,
});
$(".as .bar").circleProgress({
  value: 0.88,
});
$(".firebase .bar").circleProgress({
  value: 0.82,
});
$(".cc .bar").circleProgress({
  value: 0.98,
});
$(".python .bar").circleProgress({
  value: 0.84,
});
$(".node .bar").circleProgress({
  value: 0.22,
});
$(".sql .bar").circleProgress({
  value: 0.84,
});
$(".php .bar").circleProgress({
  value: 0.78,
});
$(".git .bar").circleProgress({
  value: 0.93,
});
$(".canva .bar").circleProgress({
  value: 0.89,
});
$(".figma .bar").circleProgress({
  value: 0.84,
});

$(".step").click(function () {
  $(this).addClass("active").prevAll().addClass("active");
  $(this).nextAll().removeClass("active");
});

$(".step01").click(function () {
  $("#line-progress").css("width", "3%");
  $(".discovery").addClass("active").siblings().removeClass("active");
});

$(".step02").click(function () {
  $("#line-progress").css("width", "25%");
  $(".strategy").addClass("active").siblings().removeClass("active");
});

$(".step03").click(function () {
  $("#line-progress").css("width", "50%");
  $(".creative").addClass("active").siblings().removeClass("active");
});

$(".step04").click(function () {
  $("#line-progress").css("width", "75%");
  $(".production").addClass("active").siblings().removeClass("active");
});

$(".step05").click(function () {
  $("#line-progress").css("width", "100%");
  $(".analysis").addClass("active").siblings().removeClass("active");
});
