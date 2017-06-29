$(document).ready(function(){
  $('.modal').modal();
  $(".dice").click(function(){
    $('#modalDi').modal('open');
  });
  $(".blueFire").click(function(){
    $('#modalFire').modal('open');
  });
  $(".gratune").click(function(){
    $('#modalGrat').modal('open');
  });
  $(".button-collapse").sideNav({
    menuWidth: 300
  });

  $("#linkedin").click(function(){
    window.open("http://www.linkedin.com/in/austintedwards");
  });

  $("#gmail").click(function(){
    window.location.replace("mailto:austintedwards@gmail.com");
  });

  $("#github").click(function(){
    window.open("http://www.github.com/austintedwards");
  });
  $("#galvanize").click(function(){
    window.open("https://talent.galvanize.com/students/1210");
  });

});
