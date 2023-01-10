


$(document).ready(function () {
  var bodyMenuImage1Width = $("#bodyMenuImage1").width();
  console.log(bodyMenuImage1Width);

  $(document).ready(function () {
    $("#education").click(function () {
      if (bodyMenuImage1Width == 120 || bodyMenuImage1Width == null) {
        $("#bodyMenuImage1").animate({
          left: '20%',
          top: '20%',
        }, 1000, function () {
          $("#bodyMenuImage1").animate({
            left: '30%',
            right: '10%',
            height: '100%',
            width: '80%',
            top: '25%'
          }, 2000, function(){
            $("#bodyMenuImage1Content").show()
          }
          )
        }
        );
        $("#bodyMenuImage2").animate({
          height: '100px',
          width: '100px',
          left: '75%',
        }, 1000);
        $("#bodyMenuImage3").animate({
          height: '100px',
          width: '100px',
          left: '55%',
        }, 1000);
        $("#bodyMenuImage4").animate({
          height: '100px',
          width: '100px',
          left: '75%',
        }, 1000);
        $("#bodyMenuImage1").slideDown();
        $("#bodyMenuImage2").slideUp();
        $("#bodyMenuImage3").slideUp();
        $("#bodyMenuImage4").slideUp();
        $("#profilImage").slideUp();
        $("#bodyContents").slideUp();
      }
      else {
        $("#bodyMenuImage1").slideDown();
        $("#bodyMenuImage2").slideDown();
        $("#bodyMenuImage3").slideDown();
        $("#bodyMenuImage4").slideDown();
        $("#profilImage").slideDown();
        $("#bodyContents").slideDown();
        $("#bodyMenuImage1").animate({
          height: '100px',
          width: '100px',
          left: '55%',
        }, 1000);
        $("#bodyMenuImage2").animate({
          height: '100px',
          width: '100px',
          left: '75%',
        }, 1000);
        $("#bodyMenuImage3").animate({
          height: '100px',
          width: '100px',
          left: '55%',
        }, 1000);
        $("#bodyMenuImage4").animate({
          height: '100px',
          width: '100px',
          left: '75%',
        }, 1000);
      }
    });
  });
});

$(document).ready(function () {
  var bodyMenuImage2Width = $("#bodyMenuImage2").width();

  $(document).ready(function () {
    $("#ability").click(function () {
      if (bodyMenuImage2Width == 120 || bodyMenuImage2Width == null) {
        $("#bodyMenuImage2").animate({
          left: '20%',
          top: '20%',
        }, 1000, function () {
          $("#bodyMenuImage2").animate({
            left: '10%',
            right: '10%',
            top: '25%',
            height: '100%',
            width: '80%',
          }, 2000, function(){
            $("#bodyMenuImage2Content").show()
          }
          )
        }
        );
        $("#bodyMenuImage1").animate({
          height: '100px',
          width: '100px',
          left: '55%',
        }, 1000);
        $("#bodyMenuImage3").animate({
          height: '100px',
          width: '100px',
          left: '55%',
        }, 1000);
        $("#bodyMenuImage4").animate({
          height: '100px',
          width: '100px',
          left: '75%',
        }, 1000);
        $("#bodyMenuImage1").slideUp();
        $("#bodyMenuImage3").slideUp();
        $("#bodyMenuImage4").slideUp();
        $("#profilImage").slideUp();
        $("#bodyContents").slideUp();
        $("#bodyMenuImage2").slideDown();
      }
      else {
        $("#bodyMenuImage1").slideDown();
        $("#bodyMenuImage2").slideDown();
        $("#bodyMenuImage3").slideDown();
        $("#bodyMenuImage4").slideDown();
        $("#profilImage").slideDown();
        $("#bodyContents").slideDown();
        $("#bodyMenuImage1").animate({
          height: '100px',
          width: '100px',
          left: '55%',
        }, 1000);
        $("#bodyMenuImage2").animate({
          height: '100px',
          width: '100px',
          left: '75%',
        }, 1000);
        $("#bodyMenuImage3").animate({
          height: '100px',
          width: '100px',
          left: '55%',
        }, 1000);
        $("#bodyMenuImage4").animate({
          height: '100px',
          width: '100px',
          left: '75%',
        }, 1000);
      }
    });
  });
});



$(document).ready(function () {
  var bodyMenuImage3Width = $("#bodyMenuImage3").width();
  $(document).ready(function () {
    $("#project").click(function () {
      if (bodyMenuImage3Width == 120 || bodyMenuImage3Width == null) {
        $("#bodyMenuImage3").animate({
          left: '20%',
          top: '20%',
        }, 1000, function () {
          $("#bodyMenuImage3").animate({
            left: '30%',
            right: '10%',
            top: '25%',
            height: '100%',
            width: '80%',
          }, 2000, function(){
            $("#bodyMenuImage3Content").show()
          }
          )
        }
        );
        $("#bodyMenuImage1").animate({
          height: '100px',
          width: '100px',
          left: '55%',
        }, 1000);
        $("#bodyMenuImage2").animate({
          height: '100px',
          width: '100px',
          left: '75%',
        }, 1000);
        $("#bodyMenuImage4").animate({
          height: '100px',
          width: '100px',
          left: '75%',
        }, 1000);
        $("#bodyMenuImage1").slideUp();
        $("#bodyMenuImage2").slideUp();
        $("#bodyMenuImage4").slideUp();
        $("#profilImage").slideUp();
        $("#bodyContents").slideUp();
        $("#bodyMenuImage3").slideDown();
      }
      else {
        $("#bodyMenuImage1").slideDown();
        $("#bodyMenuImage3").slideDown();
        $("#bodyMenuImage3").slideDown();
        $("#bodyMenuImage4").slideDown();
        $("#profilImage").slideDown();
        $("#bodyContents").slideDown();
        $("#bodyMenuImage1").animate({
          height: '100px',
          width: '100px',
          left: '55%',
        }, 1000);
        $("#bodyMenuImage2").animate({
          height: '100px',
          width: '100px',
          left: '75%',
        }, 1000);
        $("#bodyMenuImage3").animate({
          height: '100px',
          width: '100px',
          left: '55%',
        }, 1000);
        $("#bodyMenuImage4").animate({
          height: '100px',
          width: '100px',
          left: '75%',
        }, 1000);
      }
    });
  });
});

$(document).ready(function () {
  var bodyMenuImage4Width = $("#bodyMenuImage4").width();
  $(document).ready(function () {
    $("#contact").click(function () {
      if (bodyMenuImage4Width == 120 || bodyMenuImage4Width == null) {
        $("#bodyMenuImage4").animate({
          left: '20%',
          top: '20%',
        }, 1000, function () {
          $("#bodyMenuImage4").animate({
            left: '10%',
            right: '10%',
            top: '25%',
            height: '100%',
            width: '80%',
          }, 2000, function(){
            $("#bodyMenuImage4Content").show()
          }
          )
        }
        );
        $("#bodyMenuImage1").animate({
          height: '100px',
          width: '100px',
          left: '55%',
        }, 1000);
        $("#bodyMenuImage3").animate({
          height: '100px',
          width: '100px',
          left: '55%',
        }, 1000);
        $("#bodyMenuImage2").animate({
          height: '100px',
          width: '100px',
          left: '75%',
        }, 1000);
        $("#bodyMenuImage1").slideUp();
        $("#bodyMenuImage3").slideUp();
        $("#bodyMenuImage2").slideUp();
        $("#profilImage").slideUp();
        $("#bodyContents").slideUp();
        $("#bodyMenuImage4").slideDown();
      }
      else {
        $("#bodyMenuImage1").slideDown();
        $("#bodyMenuImage2").slideDown();
        $("#bodyMenuImage3").slideDown();
        $("#bodyMenuImage4").slideDown();
        $("#profilImage").slideDown();
        $("#bodyContents").slideDown();
        $("#bodyMenuImage1").animate({
          height: '100px',
          width: '100px',
          left: '55%',
        }, 1000);
        $("#bodyMenuImage2").animate({
          height: '100px',
          width: '100px',
          left: '75%',
        }, 1000);
        $("#bodyMenuImage3").animate({
          height: '100px',
          width: '100px',
          left: '55%',
        }, 1000);
        $("#bodyMenuImage4").animate({
          height: '100px',
          width: '100px',
          left: '75%',
        }, 1000);
      }
    });
  });
});


//   $(document).ready(function(){
//     $("#navLogo").click(function(){
//           $("#bodyMenuImage1").animate({
//             height: '100px',
//             width: '100px',
//             left: '55%',
//           }, 1000,);
//           $("#bodyMenuImage2").animate({
//             height: '100px',
//             width: '100px',
//             left: '75%',
//           }, 1000,);
//           $("#bodyMenuImage3").animate({
//             height: '100px',
//             width: '100px',
//             left: '55%',
//           }, 1000,);
//           $("#bodyMenuImage4").animate({
//             height: '100px',
//             width: '100px',
//             left: '75%',
//           }, 1000,);
//           $("#bodyMenuImage1").slideDown();
//           $("#bodyMenuImage2").slideDown();
//           $("#bodyMenuImage3").slideDown();
//           $("#bodyMenuImage4").slideDown();
//           $("#profilImage").slideDown();
//           $("#bodyContents").slideDown();
//     });
// });

