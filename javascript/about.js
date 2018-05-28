$(document).ready(function () {

  // PRESIDENT //
  $.ajax({
      url : "/assets/board-member-descriptions/president.txt",
      dataType: "text",
      success : function (result) {
          $("#president-desc").html(result);
      }
  });

  $("#president").hover(function () {
    $("#president-desc").show();
  }, function () {
    $("#president-desc").hide();
  });

  // VICE PRESIDENT //
  $.ajax({
    url : "/assets/board-member-descriptions/vicepresident.txt",
    dataType: "text",
    success : function (result) {
        $("#vp-desc").html(result);
    }
  });

  $("#vicepresident").hover(function () {
    $("#vp-desc").show();
  }, function () {
    $("#vp-desc").hide();
  });

  // MENTORSHIP CHAIRS //
  $.ajax({
    url : "/assets/board-member-descriptions/mentorship1.txt",
    dataType: "text",
    success : function (result) {
        $("#m1-desc").html(result);
    }
  });

  $("#mentorship1").hover(function () {
    $("#m1-desc").show();
  }, function () {
    $("#m1-desc").hide();
  });

  $.ajax({
    url : "/assets/board-member-descriptions/mentorship2.txt",
    dataType: "text",
    success : function (result) {
        $("#m2-desc").html(result);
    }
  });

  $("#mentorship2").hover(function () {
    $("#m2-desc").show();
  }, function () {
    $("#m2-desc").hide();
  });

  // EXTERNAL //
  $.ajax({
    url : "/assets/board-member-descriptions/external1.txt",
    dataType: "text",
    success : function (result) {
        $("#e1-desc").html(result);
    }
  });

  $("#external1").hover(function () {
    $("#e1-desc").show();
  }, function () {
    $("#e1-desc").hide();
  });

  $.ajax({
    url : "/assets/board-member-descriptions/external2.txt",
    dataType: "text",
    success : function (result) {
        $("#e2-desc").html(result);
    }
  });

  $("#external2").hover(function () {
    $("#e2-desc").show();
  }, function () {
    $("#e2-desc").hide();
  });

  // FINANCE //
  $.ajax({
    url : "/assets/board-member-descriptions/finance.txt",
    dataType: "text",
    success : function (result) {
        $("#finance-desc").html(result);
    }
  });

  $("#finance").hover(function () {
    $("#finance-desc").show();
  }, function () {
    $("#finance-desc").hide();
  });

  // PUBLICITY //
  $.ajax({
    url : "/assets/board-member-descriptions/publicity.txt",
    dataType: "text",
    success : function (result) {
        $("#pub-desc").html(result);
    }
  });

  $("#publicity").hover(function () {
    $("#pub-desc").show();
  }, function () {
    $("#pub-desc").hide();
  });

  // DISTINGUISHED SPEAKER //
  $.ajax({
    url : "/assets/board-member-descriptions/dss1.txt",
    dataType: "text",
    success : function (result) {
        $("#dss1-desc").html(result);
    }
  });

  $("#dss1").hover(function () {
    $("#dss1-desc").show();
  }, function () {
    $("#dss1-desc").hide();
  });

  $.ajax({
    url : "/assets/board-member-descriptions/dss2.txt",
    dataType: "text",
    success : function (result) {
        $("#dss2-desc").html(result);
    }
  });

  $("#dss2").hover(function () {
    $("#dss2-desc").show();
  }, function () {
    $("#dss2-desc").hide();
  });

  // WESP //
  $.ajax({
    url : "/assets/board-member-descriptions/wesp.txt",
    dataType: "text",
    success : function (result) {
        $("#wesp-desc").html(result);
    }
  });

  $("#wesp").hover(function () {
    $("#wesp-desc").show();
  }, function () {
    $("#wesp-desc").hide();
  });

});
