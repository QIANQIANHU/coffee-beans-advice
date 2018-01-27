//business logic
function Portfolio(indexFragrance, indexAroma, indexSweetness, indexAcidity, indexBody, indexAfterTaste){
  this.fragrance = indexFragrance;
  this.aroma = indexAroma;
  this.sweetness = indexSweetness;
  this.acidity = indexAcidity;
  this.body = indexBody;
  this.afterTaste = indexAfterTaste;
}

Portfolio.prototype.getAdj = function(){
  if ((this.sweetness < 10) && (this.acidity< 10)) {
    return "restrain";
  } else if ((this.sweetness > 20) && (this.acidity > 20)) {
    return "gushy";
  } else {
    return "curious";
  }
}
Portfolio.prototype.getNoun = function(){
  if ((this.body < 10) && (this.afterTaste< 10)) {
    return "movie";
  } else if ((this.body > 20) && (this.afterTaste > 20)) {
    return "TV show";
  } else {
    return "concert";
  }
}
Portfolio.prototype.getTasteAdj = function(){
  if ((this.sweetness < 10) && (this.acidity< 10)) {
    return "green-apple-like";
  } else if ((this.sweetness > 20) && (this.acidity > 20)) {
    return "pine-apple-like";
  } else {
    return "winey";
  }
}
Portfolio.prototype.getPhrase = function(){
  if ((this.fragrance < 10) && (this.aroma< 10)) {
    return "wash dishes";
  } else if ((this.fragrance > 20) && (this.aroma > 20)) {
    return "clean tables";
  } else {
    return "mop floor";
  }
}

function resetResultsFields() {
  $("#adj").text("");
  $("#noun").text("");
  $("#tasteAdj").text("");
  $("#phrase").text("");
};

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
     resetResultsFields();
      var fragranceList = [];
      var aromaList = [];
      var sweetnessList = [];
      var acidityList = [];
      var bodyList = [];
      var afterTasteList = [];

     $("input:checkbox[name=totalForm]:checked").each(function(){
      var tasteResult = $(this).val().split(",");

      var fragrance = tasteResult[0];
      var aroma = tasteResult[1];
      var sweetness = tasteResult[2];
      var acidity = tasteResult[3];
      var body = tasteResult[4];
      var afterTaste = tasteResult[5];

      fragranceList.push(parseInt(fragrance));
      aromaList.push(parseInt(aroma));
      sweetnessList.push(parseInt(sweetness));
      acidityList.push(parseInt(acidity));
      bodyList.push(parseInt(body));
      afterTasteList.push(parseInt(afterTaste));

    });

    var totalFragrance = 0;
    fragranceList.forEach(function(score) {
      totalFragrance += score;
    });
    var totalAroma = 0;
    aromaList.forEach(function(score) {
      totalAroma += score;
    });
    var totalSweetness = 0;
    sweetnessList.forEach(function(score) {
      totalSweetness += score;
    });
    var totalAcidity = 0;
    acidityList.forEach(function(score) {
      totalAcidity += score;
    });
    var totalBody = 0;
    bodyList.forEach(function(score) {
      totalBody += score;
    });
    var totalAfterTaste = 0;
    afterTasteList.forEach(function(score) {
      totalAfterTaste += score;
    });

    var newPortfolio = new Portfolio(totalFragrance, totalAroma, totalSweetness, totalAcidity, totalBody, totalAfterTaste);

    $(".story").show();
    $("#adj").append(newPortfolio.getAdj());
    $("#noun").text(newPortfolio.getNoun());
    $("#tasteAdj").text(newPortfolio.getTasteAdj());
    $("#phrase").text(newPortfolio.getPhrase());


  });
});
