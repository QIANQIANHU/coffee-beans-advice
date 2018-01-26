//business logic


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

  $("form#formOne").submit(function(event){
     event.preventDefault();
      var fragranceList = [];
  //     var aromaList = [];
  //     var sweetnessList = [];
  //     var acidityList = [];
  //     var bodyList = [];
  //     var afterTasteList = [];
  //
     $("input:checkbox[name=totalForm]:checked").each(function(){
      var tasteResult = $(this).val();
      var tasteResultToArray = tasteResult.split(",");
      var fragrance = tasteResultToArray[0];

      fragranceList.push(parseInt(fragrance));
  //     var aroma = tasteResult[1];
  //     var sweetness = tasteResult[2];
  //     var acidity = tasteResult[3];
  //     var body = tasteResult[4];
  //     var afterTaste = tasteResult[5];
          var totalFragrance = 0;
          fragranceList.forEach(function(score) {
            totalFragrance += score;
          });

          if (totalFragrance > 6 ) {
            alert(totalFragrance);
          }
    });
  });
});
