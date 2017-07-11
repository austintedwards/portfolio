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
  $(".pixel").click(function(){
    $('#modalPixel').modal('open');
  });
  $(".apple").click(function(){
    window.open("https://itunes.apple.com/us/app/liarsdice-g41/id1227108328?ls=1&mt=8");
  });
  $(".android").click(function(){
    window.open("https://play.google.com/store/apps/details?id=com.ionicframework.liarsdice615224");
  });
  $(".githubGratune").click(function(){
    window.open("https://github.com/Gratune/gratune-app");
  });
  $(".githubActivity").click(function(){
    window.open("https://github.com/austintedwards/ActivityNow");
  });
  $(".actNow").click(function(){
    window.open("https://activity-now.firebaseapp.com/");
  });
  $(".pixelLink").click(function(){
    window.open("https://pixelartmaker-9677d.firebaseapp.com/");
  });
  $(".githubPixel").click(function(){
      window.open("https://github.com/austintedwards/pixel-art-maker");
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
