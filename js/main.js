var $header = $('header');
var $h1 = $('h1');
var $main = $('main');
var $p = $('main p:first-child');
var $h2 = $('h2');
var $ul = $('main ul');
var $img = $('img');
var $liFirst = $('ul li:first-child');
var $liLast = $('ul li:last-child');
var $dl = $('dl');
var $dt = $('dt');

$header.addClass('masthead');

$hi.removeClass('big-heading');
$hi.addClass('logo');

$main.addClass('wrapper');

$p.addClass('intro');

$h2.addClass('slug-head');

$ul.addClass('slug-list');

$img.addClass('slug-img');

$liFirst.addClass('slug-list-first');

$liLast.addClass('slug-list-first');
$liLast.show();

$dl.addClass('classification');

$dt.removeClass('big-label');
