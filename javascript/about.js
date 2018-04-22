$(document).ready(function () {
  $.ajax({
      url : "/assets/board-member-descriptions/mentorship1.txt",
      dataType: "text",
      success : function (result) {
          $("#mentorship1").html(result);
      }
  });

  $(".board-member-box").hover(function () {
    $("#mentorship1").show();
  }, function () {
    $("#mentorship1").hide();
  })
});
