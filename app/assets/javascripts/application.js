// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require webcomponentsjs/webcomponents-lite
//= require jquery
//= require jquery_ujs
//= require gsdk
//= require turbolinks
//= require underscore
//= require gmaps/google
//= require_tree .

var diag = document.getElementById("diag");
var retourKtree = document.getElementById("retourKtree");
var three = document.getElementById("three");
var retourParkour = document.getElementById("retourParkour");
if (!diag)
{
console.log("doek");
}
if (retourParkour)
{
      retourParkour.addEventListener("click", function (){
        document.querySelector('parkour-selector').showParkour('parkour-selector');
    });
}
if (diag)
{
    diag.addEventListener("click", function (){
    document.querySelector('parkour-selector').showParkour('parkour-diagnostiqu');
  });
}

if (retourKtree)
{
  retourKtree.addEventListener("click", function (){
    console.log("coucou");
    document.querySelector('ktree-selector').showKtree('ktree-selector');
  });
}
if (three)
{
  three.addEventListener("click", function (){
    document.querySelector('parkour-selector').showParkour('template-trois-parkour');
  });
}
                    