function Place (where, time, who, how, why) {
  this.whereYouWent = where;
  this.whenYouWent = time;
  this.whoYouWent = who;
  this.howYouWent = how;
  this.whyYouWent = why;
}

Place.prototype.newLocation = function() {
  return this.whereYouWent;
}

$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();

    var inputWhere = $("input#place").val();
    var inputWhen = $("input#time").val();
    var inputWho = $("input#who").val();
    var inputHow = $("input#how").val();
    var inputWhy = $("input#why").val();

    var info = new Place(inputWhere, inputWhen, inputWho, inputHow, inputWhy);

    $("ul#places").append("<li><span class='place'>" + info.newLocation() + "</span></li>");

    $("input#place").val("");
    $("input#time").val("");
    $("input#who").val("");
    $("input#how").val("");
    $("input#why").val("");

    $(".place").last().click(function() {
      $("#show-places").show();
      $("#show-places h2" ).show();
      $(".where").text(info.whereYouWent);
      $(".when").text(info.whenYouWent);
      $(".who").text(info.whoYouWent);
      $(".how").text(info.howYouWent);
      $(".why").text(info.whyYouWent);
    });
  });

});
