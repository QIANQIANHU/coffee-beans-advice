//business logic
var totalFragrance = 0
fragranceList.forEach(function(score){
  totalFragrance += score;
});

//user interface logic
$(document).ready(function() {
  $(".clickable").click(function() {
    $(".drinkForm").show();
    $(".hideAfterClick").hide();
  });
  $("#clickToStarter").click(function() {
    $(".drinkForm").hide();
    $(".starterForm").show();
  });
  $("#clickToMainCourse").click(function() {
    $(".starterForm").hide();
    $(".mainCourseForm").show();
  });
  $("#clickBackToDrink").click(function() {
    $(".starterForm").hide();
    $(".drinkForm").show();
  });
  $("#clickBackToStarter").click(function() {
    $(".mainCourseForm").hide();
    $(".starterForm").show();
  });
  $("#clickToDessert").click(function() {
    $(".mainCourseForm").hide();
    $(".dessertForm").show();
    $(".submitAllForms").show();
  });
  $("#clickBackToMainCourse").click(function() {
    $(".submitAllForms").hide();
    $(".dessertForm").hide();
    $(".mainCourseForm").show();
  });
  // var movieResults = movieInfo.split("|");
  // var movieName = movieResults[0];
  // $("form#formOne").submit(function(event){
  //    event.preventDefault();
  //     var fragranceList = [];
  //     var aromaList = [];
  //     var sweetnessList = [];
  //     var acidityList = [];
  //     var bodyList = [];
  //     var afterTasteList = [];
  //
  //    $("input:checkbox[name=drink]:checked").each(function(){
  //     var tasteResult = $(this).val().split(",");
  //
  //     var fragrance = tasteResult[0];
  //     fragranceList.push(parseInt(fragrance));
  //     var aroma = tasteResult[1];
  //     var sweetness = tasteResult[2];
  //     var acidity = tasteResult[3];
  //     var body = tasteResult[4];
  //     var afterTaste = tasteResult[5];
  //
  //     if (totalFragrance >0) {
  //       $(".story").show();
  //     }
  //   });
  //
  // });

});
