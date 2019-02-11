arc_test ='\
// Arc and Curve Test -- test of arcs and curves\n\
// this draws five figures\n\
\n\
function radialArc (x, y, startRadius, armAngle, tangentAngle, arcRadius, extent, dir) {\n\
  goto(x,y);\n\
  penup();\n\
  angle(armAngle);\n\
  forward(startRadius);\n\
  right(tangentAngle);\n\
  pendown();\n\
  circle(arcRadius,extent, dir);\n\
}\n\
\n\
\n\
function turbine(x,y, radius, pedals, dir) {\n\
  for (i=0; i<pedals; i++) {\n\
    if (dir) {\n\
      radialArc (x,y, radius, 360*i/pedals, -135, 10, 90, dir);\n\
    } else {\n\
      radialArc (x,y, radius, 360*i/pedals, 45, 10, 90, !dir);\n\
    }\n\
  }\n\
}\n\
\n\
function roundedOctogon (side, radius) {\n\
  repeat((8), function () {\n\
    forward (side);\n\
    curveright(radius,45);\n\
  })\n\
}\n\
\n\
\n\
function roundedOctogonL (side, radius) {\n\
  repeat((8), function () {\n\
    forward (side);\n\
    curveleft(radius,45);\n\
  })\n\
}\n\
\n\
\n\
function circleEyeR (x, y, n, outerRadius) {\n\
  goto (x, y);\n\
  circle (outerRadius); //outer circle\n\
\n\
  for (var i=0; i<n; i++) {\n\
    goto (x, y);\n\
    angle (i/n * 360);\n\
    penup();\n\
    forward (outerRadius);\n\
    right(90)\n\
    pendown();\n\
    write(i)\n\
    curveRight(outerRadius/2) // one inscribed circle\n\
  }\n\
}\n\
\n\
function circleEyeL (x, y, n, outerRadius) {\n\
  goto (x, y);\n\
  circle (outerRadius); //outer circle\n\
\n\
  for (var i=0; i<n; i++) {\n\
    goto (x, y);\n\
    angle (i/n * 360);\n\
    penup();\n\
    forward (outerRadius);\n\
    pendown();\n\
    left(90)\n\
    write(i)\n\
    curveLeft(outerRadius/2); // one inscribed circle\n\
  }\n\
}\n\
\n\
\n\
function demo () {\n\
  var CW = true;\n\
  var CCW = false;\n\
  var size = 2 * Math.min(maxX(), maxY())\n\
  var cellSize = size/3\n\
\n\
  //divide area into 6 cells: 2 vertical, 3 horizontal\n\
  // centers are:\n\
  v1 = +1/4 * size\n\
  v2 = -1/4 * size\n\
  h1 = -2/6 * size\n\
  h2 = 0\n\
  h3 = +2/6 * size\n\
\n\
  reset();\n\
  hideturtle();\n\
\n\
  tSize = cellSize/2 * .90\n\
// turbine(x,y, radius, pedals, dir) {\n\
  turbine (h1, v1, 10/55*tSize, 8, CW);\n\
  turbine (h1, v1, 25/55*tSize, 16, CCW);\n\
  turbine (h1, v1, 40/55*tSize, 32, CW);\n\
  turbine (h1, v1, 55/55*tSize, 64, CCW);\n\
\n\
\n\
  var pedals = 8;\n\
  tSize = cellSize/2 * .90\n\
  for (i=0; i<pedals; i++) {\n\
//radialArc (x, y, startRadius, armAngle, tangentAngle, arcRadius, extent, dir)\n\
    radialArc (h2, v1, 10/60*tSize, 360*i/pedals, -45, 10/60*tSize, 180, CW); // inner shell\n\
    radialArc (h2, v1, 40/60*tSize, 360*i/pedals, -125, 15/60*tSize, 110, CCW); //inside arc\n\
    radialArc (h2, v1, 40/60*tSize, 360*i/pedals, -85, 18/60*tSize, 170, CW); //outside arcs\n\
    radialArc (h2, v1, 41/60*tSize, 360*i/pedals, 0, 10/60*tSize, 360, CW); // radial circles\n\
  }\n\
  \n\
\n\
  goto(h2, v1);\n\
  circle(60/60 * tSize);\n\
\n\
  goto( h1, v2)\n\
  angle(0)\n\
  oRadius = cellSize/2 * .9\n\
  cRadius = .3 * oRadius\n\
  curveLoss = cRadius * Math.tan( degToRad( 22.5))\n\
  side = 2 * oRadius * Math.sin( degToRad(22.5)) -  2* curveLoss\n\
  height = oRadius * Math.cos( degToRad( 22.5))\n\
  penup()\n\
  forward (height)\n\
  pendown()\n\
  right(90)\n\
  backward(side/2)\n\
  roundedOctogon( side, cRadius)\n\
\n\
  goto( h1, v2)\n\
  angle(0)\n\
  oRadius = cellSize/2 * .8\n\
  cRadius = .3 * oRadius\n\
  curveLoss = cRadius * Math.tan( degToRad( 22.5))\n\
  side = 2 * oRadius * Math.sin( degToRad(22.5)) -  2* curveLoss\n\
  height = oRadius * Math.cos( degToRad( 22.5))\n\
  penup()\n\
  forward (height)\n\
  pendown()\n\
  right(90)\n\
  backward(side/2)\n\
  roundedOctogon( side, cRadius)\n\
\n\
  goto( h1, v2)\n\
  angle(22.5)\n\
  oRadius = cellSize/2 * .7\n\
  cRadius = .3 * oRadius\n\
  curveLoss = cRadius * Math.tan( degToRad( 22.5))\n\
  side = 2 * oRadius * Math.sin( degToRad(22.5)) -  2* curveLoss\n\
  height = oRadius * Math.cos( degToRad( 22.5))\n\
  penup()\n\
  forward (height)\n\
  pendown()\n\
  right(90)\n\
  backward(side/2)\n\
  roundedOctogon( side, cRadius)\n\
\n\
  goto( h1, v2)\n\
  angle(22.5)\n\
  oRadius = cellSize/2 * .6\n\
  cRadius = .3 * oRadius\n\
  curveLoss = cRadius * Math.tan( degToRad( 22.5))\n\
  side = 2 * oRadius * Math.sin( degToRad(22.5)) -  2* curveLoss\n\
  height = oRadius * Math.cos( degToRad( 22.5))\n\
  penup()\n\
  forward (height)\n\
  pendown()\n\
  right(90)\n\
  backward(side/2)\n\
  roundedOctogon( side, cRadius)\n\
\n\
  circleEyeR( h2, v2, 16, cellSize/2 * .8);\n\
  circleEyeL( h3, v2, 16, cellSize/2 * .8);\n\
}\n\
'
basket_weave_tessellation ='\
// Basket Weave Tessellation -- tile a space using basket weave pattern\n\
\n\
// this assumes that the smaller square is 1/2 of the larger square.\n\
// that need not be the case\n\
\n\
small = 20\n\
sSide = 2.5 * small\n\
lSide = sSide + 2 * small\n\
\n\
function vRect( sSide, lSide, fColor) {\n\
  beginShape()\n\
  for (var i=0; i<2; i++) {\n\
    forward( sSide)\n\
    right(90)\n\
    forward( lSide)\n\
    right(90)\n\
  }\n\
  fillShape( fColor)\n\
  forward( sSide)\n\
}\n\
\n\
function hRect( sSide, lSide, fColor) {\n\
  beginShape()\n\
  for (var i=0; i<2; i++) {\n\
    forward( lSide)\n\
    right(90)\n\
    forward( sSide)\n\
    right(90)\n\
  }\n\
  fillShape( fColor)\n\
  forward( lSide)\n\
}\n\
\n\
function square ( side, fColor) {\n\
  beginShape()\n\
  for (var i=0; i<4; i++) {\n\
    forward( side)\n\
    right(90)\n\
  }\n\
  fillShape( fColor)\n\
  forward( side)\n\
}\n\
\n\
\n\
function demo() {\n\
  reset()\n\
  count = 0\n\
  yB = maxY() + small\n\
  xB = minX()\n\
  wrap(false)\n\
  right( 90)\n\
\n\
  s = 50\n\
  while( turtle.pos.y > minY()) {\n\
    goto (xB, yB)\n\
    while( turtle.pos.x < maxX()) {\n\
      pendown()\n\
      square(small, "yellow")\n\
      penup()\n\
      forward( sSide)\n\
      pendown()\n\
      square(small, "yellow")\n\
      vRect(sSide, lSide, "lightblue")\n\
    }\n\
    yB = yB - small\n\
\n\
    goto (xB, yB)\n\
    while( turtle.pos.x < maxX()) {\n\
      pendown()\n\
      hRect(sSide, lSide, "red")\n\
      penup()\n\
      forward( sSide)\n\
    }\n\
    yB = yB - sSide\n\
\n\
    goto (xB, yB)\n\
    while( turtle.pos.x < maxX()) {\n\
      pendown()\n\
      square(small, "yellow")\n\
      vRect(sSide, lSide, "lightblue")\n\
      square(small, "yellow")\n\
      penup()\n\
      forward( sSide)\n\
      pendown()\n\
    }\n\
    yB = yB - small\n\
\n\
    goto (xB- lSide +small, yB)\n\
    while( turtle.pos.x < maxX()) {\n\
      pendown()\n\
      hRect(sSide, lSide, "red")\n\
      penup()\n\
      forward(sSide)\n\
    }\n\
    yB = yB - sSide\n\
  }\n\
}\n\
'
bounce ='\
// Bouncing Rectangles -- rectangles which bounce off the side of the canvas\n\
\n\
  var maxX =  imageContext.canvas.width/2;\n\
  var maxY =  imageContext.canvas.height/2;\n\
  var minX =  -maxX;\n\
  var minY =  -maxY;\n\
  var maxVelocity = 12;\n\
\n\
function init_drops(n) {\n\
   var drops = new Array(n);\n\
   for (var i = 0; i < n; i++) {\n\
      drops[i] = { // each drop is an object with a set of properties\n\
         x: random(minX, maxX),\n\
         y: random(minY, maxY),\n\
         velocityX: random(-maxVelocity, maxVelocity),\n\
         velocityY: random(-maxVelocity, maxVelocity),\n\
         size: random(20,300),\n\
         red:random(0,255),\n\
         green:random(0,255),\n\
         blue: random(0,255),\n\
         alpha: Math.random(),\n\
         width: random(1,15)\n\
      };\n\
   }\n\
   return drops;\n\
}\n\
\n\
function rain (drops, n) {\n\
   clear();\n\
   for (var i = 0; i < n; i++) {\n\
      // access each drop object\n\
      var d = drops[i]; // access each drop object and react with it\n\
      // if the drop hits a wall, reverse its motion direction (velocity)\n\
      if (d.y < minY) {\n\
         d.velocityY = -d.velocityY;\n\
      }\n\
      else if (d.y + d.size > maxY && d.velocityY > 0) {\n\
         d.velocityY = -d.velocityY;\n\
      }\n\
      if (d.x - d.width/2 < minX) {\n\
         d.velocityX = -d.velocityX;\n\
      }\n\
      else if (d.x + d.width/2 > maxX) {\n\
         d.velocityX = -d.velocityX;\n\
      }\n\
      // paint the drop\n\
      color ("rgba(" +d.red+ "," +d.green+ "," +d.blue+ "," +d.alpha +")");\n\
      width(d.width);\n\
      goto(d.x, d.y);\n\
      forward(d.size);\n\
      // move the drop for the next time\n\
      d.y = d.y + d.velocityY;\n\
      d.x = d.x + d.velocityX;\n\
   }\n\
}\n\
\n\
function let_them_drop (n) {\n\
   wrap(false);\n\
   hideTurtle();\n\
   drops = init_drops(n);\n\
   animate(function () { rain(drops, n)}, 100);\n\
}\n\
\n\
function demo() {\n\
  let_them_drop (Math.floor(maxX * maxY/2000));\n\
}\n\
'
brick_tessellation ='\
// Brick Tessellation -- tile a space using a basic brick laying pattern\n\
\n\
sSide = 15\n\
lSide = 2* sSide \n\
\n\
function vRect( sSide, lSide, fColor) {\n\
  beginShape()\n\
  for (var i=0; i<2; i++) {\n\
    forward( sSide)\n\
    right(90)\n\
    forward( lSide)\n\
    right(90)\n\
  }\n\
  fillShape( fColor)\n\
  forward( sSide)\n\
}\n\
\n\
function hRect( sSide, lSide, fColor) {\n\
  beginShape()\n\
  for (var i=0; i<2; i++) {\n\
    forward( lSide)\n\
    right(90)\n\
    forward( sSide)\n\
    right(90)\n\
  }\n\
  fillShape( fColor)\n\
  forward( lSide)\n\
}\n\
\n\
function demo() {\n\
  reset()\n\
  count = 0\n\
  yB = maxY()\n\
  xB = minX()\n\
  wrap(false)\n\
  right( 90)\n\
  color("white")\n\
\n\
  s = 50\n\
  while( turtle.pos.y > minY()) {\n\
    goto (xB, yB)\n\
    while( turtle.pos.x < maxX()) {\n\
      pendown()\n\
      hRect(sSide, lSide, "darkred")\n\
      penup()\n\
    }\n\
    yB = yB - sSide\n\
\n\
    goto (xB - lSide/2, yB)\n\
    while( turtle.pos.x < maxX()) {\n\
      pendown()\n\
      hRect(sSide, lSide, "darkred")\n\
      penup()\n\
    }\n\
    yB = yB - sSide\n\
  }\n\
}\n\
'
cafe_wall_illusion ='\
// Cafe Wall Illusion -- draws cafe tiles. see Wikipedia.\n\
\n\
function drawTile (h,w, tc, x, y) {\n\
  goto(x,y)\n\
  beginShape()\n\
  for( var i=0; i<2; i=i+1) {\n\
    forward(h)\n\
    right(90)\n\
    forward(w)\n\
    right(90)\n\
  }\n\
  fillShape( tc)\n\
}\n\
\n\
function cafeTiles (h, w, gw, gc, off) {\n\
  maxRow = 2*maxY()/h\n\
  maxCol = 2*maxX()/w\n\
  width(gw)\n\
  color(gc)\n\
  setHeading(0)\n\
  for (var row=0; row<maxRow; row=row+1) {\n\
    for (var col=0; col<maxCol; col=col+1) {\n\
      if (col%2) {\n\
        drawTile( h, w, "white", minX()+col*(w+gw/2)+(row%2*w*off), minY()+ row*(h+gw/2))\n\
      } else {\n\
        drawTile( h, w, "black", minX()+col*(w+gw/2)+(row%2*w*off), minY()+ row*(h+gw/2))\n\
      }\n\
    }\n\
  }\n\
}\n\
\n\
\n\
\n\
function demo () {\n\
  reset();\n\
  size = Math.min( maxX(), maxY()) * .9\n\
  hideturtle();\n\
\n\
  var tileHeight = 50\n\
  var tileWidth = 50\n\
  var mortarWidth = 1\n\
  var mortarColor = "#c0c0c0"\n\
  var mortarColor = "#808080"\n\
  var offset = .5\n\
  cafeTiles( tileHeight, tileWidth, mortarWidth, mortarColor, offset);\n\
}\n\
'
circle_eye2 ='\
// Circle Eye2 -- draws a set of n inscribed circles between two concentric circles.\n\
\n\
function circleEye (x, y, n, outerRadius, innerRadius) {\n\
  goto (x, y);\n\
  //circle (outerRadius); //outer circle\n\
  //circle (innerRadius)\n\
  radius = outerRadius-innerRadius\n\
\n\
  for (i=0; i<n; i++) {\n\
    goto (x, y);\n\
    angle (i/n * 360);\n\
    penup();\n\
    forward (innerRadius + radius/2);\n\
    pendown();\n\
    circle(radius/2); // one inscribed circle\n\
  }\n\
}\n\
\n\
\n\
\n\
function demo () {\n\
  reset();\n\
  size = Math.min( maxX(), maxY()) * .9\n\
  hideturtle();\n\
  color( random(16));\n\
  circleEye( 0, 0, 32, size, .2*size);\n\
}\n\
'
circle_eye ='\
// Circle Eye -- draws a set of n inscribed circles within circle\n\
\n\
function circleEye (x, y, n, outerRadius) {\n\
  goto (x, y);\n\
  circle (outerRadius); //outer circle\n\
\n\
  for (i=0; i<n; i++) {\n\
    goto (x, y);\n\
    angle (i/n * 360);\n\
    penup();\n\
    forward (outerRadius/2);\n\
    pendown();\n\
    circle(outerRadius/2); // one inscribed circle\n\
  }\n\
}\n\
\n\
\n\
\n\
function demo () {\n\
  reset();\n\
  size = Math.min( maxX(), maxY()) * .9\n\
  hideturtle();\n\
  color( random(16));\n\
  circleEye( 0, 0, 16, size);\n\
}\n\
'
clock_BCD ='\
// Clock, BCD -- digital clock using Binary Coded Decimal (BCD) digits\n\
\n\
//*** GLOBALS ***\n\
\n\
var hour10;\n\
var hour1;\n\
var minute10;\n\
var minute1;\n\
var second10;\n\
var second1;\n\
var hSpacing;\n\
var vSpacing;\n\
\n\
var hourColor = "red"\n\
var minuteColor = "green"\n\
var secondColor = "blue"\n\
var offColor = "lightgray"\n\
\n\
\n\
//*** FUNCTIONS ***\n\
\n\
function tensDigit (number) {\n\
  return Math.floor (number/10) % 10\n\
}\n\
\n\
\n\
function onesDigit (number) {\n\
  return Math.floor (number % 10)\n\
}\n\
\n\
\n\
function getBinaryTime() {\n\
  time = new Date\n\
  hours = time.getHours()\n\
  minutes = time.getMinutes()\n\
  seconds = time.getSeconds()\n\
\n\
  // extract the digits\n\
  //hour10 =   hour1 =  onesDigit(hours)\n\
  //min10 =  tensDigit(minutes)\n\
  //min1 =   onesDigit(minutes)\n\
  //sec10 =  tensDigit(seconds)\n\
  //sec1 =   onesDigit(seconds)\n\
\n\
  //pad digits with leading 0s\n\
  //hour10 = "0000" + hour10.toString(2)\n\
  //hour1 =  "0000" + hour1.toString(2)\n\
  //min10 =  "0000" + min10.toString(2)\n\
  //min1 =   "0000" + min1.toString(2)\n\
  //sec10 =  "0000" + sec10.toString(2)\n\
  //sec1 =   "0000" + sec1.toString(2)\n\
\n\
  //use only 4 digits\n\
  //hour10 = hour10.slice(-4)\n\
  //hour1 =  hour1.slice(-4)\n\
  //min10 =  min10.slice(-4)\n\
  //min1 =   min1.slice(-4)\n\
  //sec10 =  sec10.slice(-4)\n\
  //sec1 =   sec1.slice(-4)\n\
  hour10 = ("0000" + tensDigit(hours).toString(2)).slice(-4)\n\
  hour1 =  ("0000" + onesDigit(hours).toString(2)).slice(-4)\n\
  min10 =  ("0000" + tensDigit(minutes).toString(2)).slice(-4)\n\
  min1 =   ("0000" + onesDigit(minutes).toString(2)).slice(-4)\n\
  sec10 =  ("0000" + tensDigit(seconds).toString(2)).slice(-4)\n\
  sec1 =   ("0000" + onesDigit(seconds).toString(2)).slice(-4)\n\
}\n\
\n\
\n\
function drawDot (digit, onColor, offColor, step) {\n\
  if (digit == 1) {\n\
    color( onColor)\n\
  } else {\n\
    color( offColor)\n\
  }\n\
  dot ()\n\
  forward (step)\n\
}\n\
\n\
\n\
function drawNumberDots (digitString, onColor, offColor, spacing) {\n\
  drawDot( digitString[0], onColor, offColor, spacing)\n\
  drawDot( digitString[1], onColor, offColor, spacing)\n\
  drawDot( digitString[2], onColor, offColor, spacing)\n\
  drawDot( digitString[3], onColor, offColor, spacing)\n\
  backward (60)\n\
}\n\
\n\
\n\
function displayBinaryDots(hSpacing, vSpacing) {\n\
  bottom = vSpacing * 1.5\n\
  leftSide = -hSpacing * 2.5\n\
  penup()\n\
  goto (leftSide + hSpacing *0, bottom)\n\
  drawNumberDots (hour10, hourColor, offColor, vSpacing)\n\
\n\
  goto (leftSide + hSpacing *1, bottom)\n\
  drawNumberDots (hour1, hourColor, offColor, vSpacing)\n\
\n\
  goto (leftSide + hSpacing *2, bottom)\n\
  drawNumberDots (min10, minuteColor, offColor, vSpacing)\n\
\n\
  goto (leftSide + hSpacing *3, bottom)\n\
  drawNumberDots (min1, minuteColor, offColor, vSpacing)\n\
\n\
  goto (leftSide + hSpacing *4, bottom)\n\
  drawNumberDots (sec10, secondColor, offColor, vSpacing)\n\
\n\
  goto (leftSide + hSpacing *5, bottom)\n\
 drawNumberDots (sec1, secondColor, offColor, vSpacing)\n\
}\n\
\n\
\n\
function displayTime() {\n\
  clear()\n\
  angle(180)\n\
  spacing = Math.min(maxX(), maxY()) *1.8/6\n\
  hSpacing = spacing\n\
  vSpacing = spacing\n\
  width (spacing/10)\n\
  hideturtle()\n\
  getBinaryTime()\n\
  displayBinaryDots(hSpacing, vSpacing)\n\
}\n\
\n\
demo = displayTime\n\
animate(displayTime, 1000)\n\
'
clock_digital ='\
// Clock, Digital -- digital clock using seven-segment displays\n\
\n\
//*** GLOBALS ***\n\
\n\
var hour1digit;\n\
var hour10digit;\n\
var min1digit;\n\
var min10digit;\n\
var sec10digit;\n\
var sec1digit;\n\
\n\
var segSize;\n\
var horizontalElements\n\
var digitSpacing\n\
var interdigitSpacing\n\
var segWidth\n\
var segAngle = 10 // degrees\n\
var segOnColor = "red"\n\
var segOffColor = "black"\n\
\n\
\n\
//*** CONSTANTS ***\n\
\n\
/*\n\
The seven-segment display is layed out as follows:\n\
   --a--\n\
  |      |\n\
  f      b\n\
  |      |\n\
   --g--\n\
  |      |\n\
  e      c\n\
  |      |\n\
   --d--\n\
*/\n\
//segment strings are in the order: abcdefg\n\
//  where 1 turns segment on\n\
//    and 0 turns segment off\n\
var segments = [ "1111110", //0\n\
                 "0110000", //1\n\
                 "1101101", //2\n\
                 "1111--1", //3\n\
                 "0110011", //4\n\
                 "1011011", //5\n\
                 "1011111", //6\n\
                 "1110000", //7\n\
                 "1111111", //8\n\
                 "1110011"  //9\n\
               ]\n\
\n\
\n\
//*** FUNCTIONS ***\n\
\n\
function tensDigit (number) {\n\
  return Math.floor (number/10) % 10\n\
}\n\
\n\
\n\
function onesDigit (number) {\n\
  return Math.floor (number % 10)\n\
}\n\
\n\
\n\
function getTime() {\n\
  time = new Date\n\
  hours = time.getHours()\n\
  minutes = time.getMinutes()\n\
  seconds = time.getSeconds()\n\
\n\
  // extract the digits\n\
  hour10digit = tensDigit(hours)\n\
  hour1digit = onesDigit(hours)\n\
  min10digit = tensDigit(minutes)\n\
  min1digit = onesDigit(minutes)\n\
  sec10digit = tensDigit(seconds)\n\
  sec1digit = onesDigit(seconds)\n\
}\n\
\n\
\n\
function segColor (bit) {\n\
  if (bit == "1") {\n\
    color( segOnColor)\n\
  } else {\n\
    color( segOffColor)\n\
  }10\n\
}\n\
\n\
\n\
function display7segment(digit) {\n\
  pendown()\n\
  segColor (segments [digit].substr(0,1)) //a\n\
  forward (segSize)\n\
  right(90+segAngle)\n\
  segColor (segments [digit].substr(1,1)) //b\n\
  forward (segSize)\n\
  segColor (segments [digit].substr(2,1)) //c\n\
  forward (segSize)\n\
  right (90-segAngle)\n\
  segColor (segments [digit].substr(3,1)) //d\n\
  forward (segSize)\n\
  right (90+segAngle)\n\
  segColor (segments [digit].substr(4,1)) //e\n\
  forward (segSize)\n\
  right (90-segAngle)\n\
  segColor (segments [digit].substr(6,1)) //g\n\
  forward (segSize)\n\
  backward (segSize)\n\
  left (90-segAngle)\n\
  segColor (segments [digit].substr(5,1)) //f\n\
  forward (segSize)\n\
  right (90-segAngle)\n\
  penup()\n\
}\n\
\n\
\n\
function displaySegTime() {\n\
  // black out background\n\
  goto (minX(),0)\n\
  angle (90)\n\
  color(black)\n\
  width (2*maxY())\n\
  pendown()\n\
  forward(2*maxX())\n\
101010\n\
  // draw the 6 digits of time\n\
  goto (-horizontalElements/2*segSize, segSize)\n\
  width (segWidth)\n\
  display7segment(hour10digit)\n\
  forward (digitSpacing)\n\
  display7segment(hour1digit)\n\
\n\
  forward (interdigitSpacing)\n\
  display7segment(min10digit)\n\
  forward (digitSpacing)\n\
  display7segment(min1digit)\n\
\n\
  forward (interdigitSpacing)\n\
  display7segment(sec10digit)\n\
  forward (digitSpacing)\n\
  display7segment(sec1digit)\n\
}\n\
\n\
\n\
function displayTime() {\n\
  horizontalElements = 6 + 3*.4 + 2*1.24\n\
  segSize = Math.min (maxY(), 2* maxX()/horizontalElements) * .9\n\
  digitSpacing = 1.4 * segSize\n\
  interdigitSpacing = 2.24 * segSize\n\
  segWidth = segSize/6\n\
  hideturtle() \n\
  getTime()\n\
  displaySegTime()\n\
}\n\
\n\
//demo = displayTime\n\
animate(displayTime, 1000)\n\
'
clock ='\
// Clock, Analog -- draw and animate an analog clock\n\
\n\
//GLOBALS\n\
var size;\n\
\n\
//draw the tick marks around the edge of the clock\n\
function ticks(x, y, radius) {\n\
   var tickLen = 7;\n\
   var gap = radius - tickLen;\n\
   color("blue");\n\
   width(1);\n\
   for (var theta = 0; theta < 360; theta = theta + 6) {\n\
      // Thicken hour marks\n\
      if (theta % 30 != 0) {\n\
         width(1/130* size);\n\
      } else {\n\
         width(3/130* size);\n\
      }\n\
      penup();\n\
      goto(0,0);\n\
      angle(theta);\n\
      forward(gap);\n\
      pendown();\n\
      forward(tickLen);\n\
   }\n\
}\n\
\n\
\n\
// draw the hour numbers on the clock face\n\
function numbers(x, y, radius) {\n\
   penup();\n\
   fontSize = 20/130 * size\n\
   setFont(fontSize+"px sans-serif");\n\
   color("black");\n\
   for (var hour = 1; hour <= 12; hour++) {\n\
      goto(x,y);\n\
      angle(hour * 30);\n\
      forward(radius); // to center of digit\n\
      angle(180);\n\
      forward(10/130 * size); // vertical correction to baseline\n\
      right(90);\n\
      if (hour < 10) {\n\
        forward(6/130 * size); // horizontal correction to lower left corner\n\
      } else {\n\
        forward (10/130 * size)\n\
      }\n\
      right(180);\n\
      write(hour);\n\
   }\n\
   pendown();\n\
}\n\
\n\
// draw one of the clock hands\n\
function hand (theta, w, length, col) {\n\
   var stepSize = 5;\n\
   var widthDelta = w / (length / stepSize);\n\
   goto(0, 0);\n\
   angle(theta);\n\
   color(col);\n\
   for (var step = 0; step < length; step = step + stepSize) {\n\
      width(w);\n\
      forward(stepSize);\n\
      w = w - widthDelta;\n\
   }\n\
}\n\
\n\
function hands(hours, minutes, seconds) {\n\
    // draw seconds hand\n\
    var secDegreesPerSecond = 6;	// = 360 degrees/60 seconds /minute\n\
    hand(seconds * secDegreesPerSecond, 4, 100/130 * size, "red");\n\
    // draw minutes hand \n\
    var minDegreePerSecond = 0.1;	// = 360 degrees /3600 seconds /hour\n\
    var minutesInSeconds = minutes * 60 + seconds;\n\
    hand(minutesInSeconds * minDegreePerSecond, 10, 100/130 * size, "blue");\n\
    // draw hours hand\n\
    var hourDegreePerSecond = .1/12;	// = 360 degrees /3600 seconds per hour /12 hours per half day /half day\n\
    var hoursInSeconds = ((hours % 12) * 3600) + minutesInSeconds;\n\
    hand(hoursInSeconds * hourDegreePerSecond, 10, 60/130 * size, "blue");\n\
}\n\
\n\
// refresh the entire clock\n\
function clock() {\n\
   clear();\n\
   size = .9 *  Math.min( maxX(), maxY())\n\
  numbers(0, 0, 110/130 * size);\n\
   color("lightgreen");\n\
   goto (0,0);\n\
   width(1/130* size)\n\
   circle(130/130 * size );\n\
   ticks(0, 0, 130/130 * size );\n\
   var d = new Date();\n\
   hands(d.getHours(), d.getMinutes(), d.getSeconds());\n\
}\n\
\n\
function demo() {\n\
   hideTurtle();\n\
   // refresh the clock every second\n\
   animate(clock,1000);\n\
}\n\
'
collidescape ='\
// Collidescape (tm) -- aperiodic tiling researched by Ward Hollins.\n\
// angles for the two isosceles triangles are: \n\
// 36, 72, 72 and 36, 36, 108 ..degrees\n\
//  1,2,2 and 1,1,3 times pi/5 .. radians\n\
ang = 360/10 // the basic angle (pi/5 radians)\n\
side = 50 // length of the common side of the isosceles triangles\n\
bBase = 2* side * Math.cos( degToRad( ang)) // length of big base\n\
sBase = 2* side * Math.sin( degToRad( ang/2)) // length of small base\n\
\n\
\n\
function bb (fColor) { //big piece, big angle\n\
    beginShape()\n\
    forward( side)\n\
    right( 4 * ang)\n\
    forward( bBase)\n\
    right( 4 * ang)\n\
    forward( side)\n\
    right( 180)\n\
    fillShape( fColor)\n\
}\n\
\n\
\n\
function bs (fColor) { // big piece, small angle\n\
    beginShape()\n\
    forward( side)\n\
    right( 2 * ang)\n\
    forward( side)\n\
    right( 4 * ang)\n\
    forward( bBase)\n\
    right( 180)\n\
    fillShape( fColor)\n\
}\n\
\n\
\n\
function bs2 (fColor) { // big piece, small angle other corner\n\
    beginShape()\n\
    forward( bBase)\n\
    right( 4 * ang)\n\
    forward( side)\n\
    right( 2 * ang)\n\
    forward( side)\n\
    right( 180)\n\
    fillShape( fColor)\n\
}\n\
\n\
\n\
function ss (fColor) { // small piece, small angle\n\
    beginShape()\n\
    forward( side)\n\
    right( 3 * ang)\n\
    forward( sBase)\n\
    right( 3 * ang)\n\
    forward( side)\n\
    right( 180)\n\
    fillShape( fColor)\n\
}\n\
\n\
\n\
function sb (fColor) { // small piece, big angle\n\
    beginShape()\n\
    forward( sBase)\n\
    right( 3 * ang)\n\
    forward( side)\n\
    right( 4 * ang)\n\
    forward( side)\n\
    right( 180)\n\
    fillShape( fColor)\n\
}\n\
\n\
\n\
function sb2 (fColor) { // small piece, big angle other corner\n\
    beginShape()\n\
    forward( side)\n\
    right( 4 * ang)\n\
    forward( side)\n\
    right( 3 * ang)\n\
    forward( sBase)\n\
    right( 180)\n\
    fillShape( fColor)\n\
}\n\
\n\
\n\
function spiral( ) {\n\
// function draws a spiral using only two isosceles triangles\n\
// this is done with a series of points. Each point starts at the\n\
// center of the spiral and moves to the point where several triangles\n\
// are drawn. This technique isolates changes, but is less efficient\n\
// overall.\n\
//\n\
// Numbers for each point can be included by uncommenting the "//write"\n\
// statements.\n\
\n\
    c1 = "yellow"\n\
    c2 = "blue"\n\
    for (var i=0; i<5; i++) {\n\
//point0:\n\
        goto(0,0)\n\
        setHeading( (i * 2 + 1) * ang)\n\
        bs( c2)\n\
\n\
//point1:\n\
	penup()\n\
        goto(0,0)\n\
        setHeading( (i * 2 + 1) * ang)\n\
        forward( bBase)\n\
	pendown()\n\
\n\
        bs( c2)\n\
        bs( c2)\n\
        bs2( c1)\n\
        sb2( c1)\n\
        bs2( c1)\n\
        ss( c2)\n\
        bb( c2)\n\
        //write( "1")\n\
\n\
//point2:\n\
	penup()\n\
        goto(0,0)\n\
        setHeading( (i * 2 + 1) * ang)\n\
        bs( c2)\n\
        forward( bBase + side)\n\
        left( 3 * ang)\n\
	pendown()\n\
\n\
        ss( c2)\n\
        ss( c2)\n\
        bb( c2)\n\
        //write( "2")\n\
\n\
//point3:\n\
	penup()\n\
        goto(0,0)\n\
        setHeading( (i +1) * 2* ang)\n\
        forward( bBase + side)\n\
        left( 2 * ang)\n\
        forward( side)\n\
        left( 2 * ang)\n\
	pendown()\n\
\n\
        bs( c1)\n\
        bs2( c1)\n\
        ss( c1)\n\
        ss( c1)\n\
        bs( c1)\n\
        //write( "3")\n\
\n\
//point4:\n\
	penup()\n\
        goto(0,0)\n\
        setHeading( i * 2 * ang)\n\
        forward( bBase)\n\
        right (ang)\n\
\n\
	pendown()\n\
        bs( c1)\n\
        left ( ang)\n\
\n\
	penup()\n\
        forward( bBase)\n\
	pendown()\n\
\n\
        bs( c2)\n\
        sb( c1)\n\
        sb2( c1)\n\
        bs2( c1)\n\
        bs( c2)\n\
        bs2( c2)\n\
        ss( c2)\n\
        ss( c2)\n\
        //write( "4")\n\
\n\
//point5:\n\
	penup()\n\
        goto(0,0)\n\
        setHeading( (i +1) * 2* ang)\n\
        forward( bBase + side)\n\
        left( 2 * ang)\n\
        forward( side + side + sBase)\n\
        left( 2 * ang)\n\
	pendown()\n\
\n\
        bs2( c2)\n\
        sb2( c2)\n\
        sb( c2)\n\
        sb2( c2)\n\
        sb( c2)\n\
        //write( "5")\n\
\n\
//point6:\n\
	penup()\n\
        goto(0,0)\n\
        setHeading( i * 2* ang)\n\
        forward(  bBase + side + bBase)\n\
        left( 3 * ang)\n\
	pendown()\n\
\n\
        bs2( c1)\n\
        bb( c1)\n\
        bs( c1)\n\
        bs2( c1)\n\
        bb( c1)\n\
        //write( "6")\n\
\n\
//point7:\n\
	penup()\n\
        goto(0,0)\n\
        setHeading(( i + 1)* 2 * ang)\n\
        forward(  bBase + side)\n\
        left( 2 * ang)\n\
        forward( side + side)\n\
        right( 2* ang)\n\
        forward( side)\n\
        left ( 3 * ang)\n\
	pendown()\n\
\n\
        sb2( c2)\n\
        sb( c2)\n\
        ss( c2)\n\
        bb( c2)\n\
        //write( "7")\n\
\n\
//point8:\n\
	penup()\n\
        goto(0,0)\n\
        setHeading(( i + 1)* 2 * ang)\n\
        forward(  bBase + side)\n\
        left( 2 * ang)\n\
        forward( side + side)\n\
        right( 3 * ang)\n\
        forward( bBase + side)\n\
	pendown()\n\
\n\
        ss( c2)\n\
        sb2( c2)\n\
        sb( c2)\n\
        ss( c2)\n\
        sb2( c2)\n\
        sb( c2)\n\
        //write( "8")\n\
\n\
//point9:\n\
	penup()\n\
        goto(0,0)\n\
        setHeading( i * 2* ang)\n\
        forward(  bBase + side + bBase) //@6\n\
        left( 2 * ang)\n\
        forward( side)\n\
        right( ang)\n\
        forward( sBase + sBase)\n\
        right( 3 * ang)\n\
	pendown()\n\
\n\
        sb2( c2)\n\
        sb( c2)\n\
        bb( c1)\n\
        ss( c1)\n\
        bs( c1)\n\
        bs2( c1)\n\
        //write( "9")\n\
\n\
//point10:\n\
	penup()\n\
        goto(0,0)\n\
        setHeading( i * 2 * ang)\n\
        forward(  bBase + side + bBase) //@6\n\
        right( 2 * ang)\n\
        forward( bBase)\n\
        left( 4 * ang)\n\
	pendown()\n\
\n\
        sb2( c1)\n\
        sb( c1)\n\
        sb2( c1)\n\
        sb( c1)\n\
        //write( "10")\n\
\n\
//point11:\n\
	penup()\n\
        goto(0,0)\n\
        setHeading( i * 2 * ang)\n\
        forward(  bBase + side + bBase) //@6\n\
        right( 2 * ang)\n\
        forward( bBase + side)\n\
        right( 1 * ang)\n\
        forward( side)\n\
	pendown()\n\
\n\
        bb( c1)\n\
        bs( c1)\n\
        bs2( c1)\n\
        //write( "11")\n\
\n\
//point12:\n\
	penup()\n\
        goto(0,0)\n\
        setHeading( i * 2 * ang)\n\
        forward(  bBase + side + bBase) //@6\n\
        right( 2 * ang)\n\
        forward( bBase + side)\n\
        right( ang)\n\
        forward( side) // @11\n\
        forward(side)\n\
	pendown()\n\
\n\
        bb( c1)\n\
        bs( c1)\n\
        //write( "12")\n\
\n\
//point13:\n\
	penup()\n\
        goto(0,0)\n\
        setHeading(( i + 1)* 2 * ang)\n\
        forward(  bBase + side)\n\
        left( 2 * ang)\n\
        forward( side + side)\n\
        right( 3 * ang)\n\
        forward( bBase + side) //@8\n\
        right( ang)\n\
        forward( side)\n\
        left( 3 * ang)\n\
	pendown()\n\
\n\
        sb( c2)\n\
        bs( c2)\n\
        bs2( c2)\n\
        bb( c2)\n\
        //write( "13")\n\
\n\
//point14:\n\
	penup()\n\
        goto(0,0)\n\
        setHeading( (i +1) * 2 * ang)\n\
        forward( bBase + side)\n\
        left( 2 * ang)\n\
        forward( side + side + sBase) // @5\n\
        left(  ang)\n\
        forward( side)\n\
        right( 2* ang)\n\
        forward( side + side)\n\
	pendown()\n\
\n\
        bs( c1)\n\
        bs2( c1)\n\
        bb( c2)\n\
        bs( c2)\n\
        bs2( c2)\n\
        bb( c1)\n\
        //write( "14")\n\
\n\
//point15:\n\
	penup()\n\
        goto(0,0)\n\
        setHeading(( i + 1)* 2 * ang)\n\
        forward(  bBase + side)\n\
        left( 2 * ang)\n\
        forward( side + side)\n\
        right( 3 * ang)\n\
        forward( bBase + side) //@8\n\
        right( ang)\n\
        forward( side) //@13\n\
        forward( bBase)\n\
        left( ang)\n\
        forward( side)\n\
	pendown()\n\
\n\
        bs( c2)\n\
        bs2( c2)\n\
        bb( c1)\n\
        bs( c1)\n\
        bs2( c1)\n\
        bb( c2)\n\
        //write( "15")\n\
\n\
//point16:\n\
	penup()\n\
        goto(0,0)\n\
        setHeading( i * 2* ang)\n\
        forward(  bBase + side + bBase) //@6\n\
        left( 2 * ang)\n\
        forward( side)\n\
        right( ang)\n\
        forward( sBase + sBase) //@9\n\
        right( 2 * ang)\n\
        forward( bBase)\n\
        right( ang)\n\
        forward( side)\n\
        left( 2* ang)\n\
	pendown()\n\
\n\
        bs( c2)\n\
        bs2( c2)\n\
        bb( c1)\n\
        bs( c1)\n\
        bs2( c1)\n\
        bb( c2)\n\
        //write( "16")\n\
\n\
//point17:\n\
	penup()\n\
        goto(0,0)\n\
        setHeading( i * 2* ang)\n\
        forward(  bBase + side + bBase) //@6\n\
        left( 2 * ang)\n\
        forward( side)\n\
        right( ang)\n\
        forward( sBase + sBase) //@9\n\
        right( 2 * ang)\n\
        forward( bBase)\n\
        right( ang)\n\
        forward( side) //@16\n\
        forward( side)\n\
        left( 2 * ang)\n\
	pendown()\n\
\n\
        ss( c2)\n\
        sb2( c2)\n\
        sb( c1)\n\
        bs( c1)\n\
        //write( "17")\n\
\n\
//point18:\n\
	penup()\n\
        goto(0,0)\n\
        setHeading( (i +1) * 2 * ang)\n\
        forward( bBase + side)\n\
        left( 2 * ang)\n\
        forward( side + side + sBase) // @5\n\
        left(  ang)\n\
        forward( side)\n\
        right( 2 * ang)\n\
        forward( side + side) //@14\n\
        right( 2 * ang)\n\
        forward( side) //@ intermediate point\n\
        right( 3 * ang)\n\
	pendown()\n\
\n\
        bs( c2)\n\
        right( 4 * ang)\n\
        //write ( "14b")\n\
        bs( c1)\n\
        right( 1 * ang)\n\
\n\
	penup\n\
        forward( side)\n\
	pendown()\n\
\n\
        bb( c2)\n\
        bs( c2)\n\
        bs2( c2)\n\
        bb( c1)\n\
        bs( c1)\n\
        bs2( c1)\n\
        //write( "18")\n\
\n\
//point19:\n\
	penup()\n\
        goto(0,0)\n\
        setHeading( (i +1) * 2 * ang)\n\
        forward( bBase + side)\n\
        left( 2 * ang)\n\
        forward( side + side + sBase) // @5\n\
        left(  ang)\n\
        forward( side)\n\
        right( 2 * ang)\n\
        forward( side + side) //@14\n\
        right( 2 * ang)\n\
        forward( side + side + side)\n\
        left( 2*ang)\n\
	pendown()\n\
\n\
        ss( c1)\n\
        sb2( c1)\n\
        sb( c2)\n\
        bs( c2)\n\
        //write( "19")\n\
\n\
//point20:\n\
	penup()\n\
        goto(0,0)\n\
        setHeading( (i +1) * 2 * ang)\n\
        forward( bBase + side)\n\
        left( 2 * ang)\n\
        forward( side + side + sBase) // @5\n\
        left(  ang)\n\
        forward( side)\n\
        right( 2 * ang)\n\
        forward( side + side) //@14\n\
        right( 2 * ang)\n\
        forward( side + side + side) //@19\n\
        right( ang)\n\
        forward( sBase)\n\
        left( 3*ang)\n\
	pendown()\n\
\n\
        ss( c1)\n\
        sb2( c1)\n\
        sb( c2)\n\
        ss( c2)\n\
        //write( "20")\n\
\n\
//point21:\n\
	penup()\n\
        goto(0,0)\n\
        setHeading( (i +1) * 2 * ang)\n\
        forward( bBase + side)\n\
        left( 2 * ang)\n\
        forward( side + side + sBase) // @5\n\
        left(  ang)\n\
        forward( side)\n\
        right( 2 * ang)\n\
        forward( side + side) //@14\n\
        right( 2 * ang)\n\
        forward( side + side + side)\n\
        right( ang)\n\
        forward( sBase) //@20\n\
        forward( sBase)\n\
        left( 3*ang)\n\
	pendown()\n\
\n\
        ss( c1)\n\
        bs( c1)\n\
        bs2( c1)\n\
        bb( c2)\n\
        //write( "21")\n\
\n\
//point22:\n\
	penup()\n\
        goto(0,0)\n\
        setHeading( (i +1) * 2 * ang)\n\
        forward( bBase + side)\n\
        left( 2 * ang)\n\
        forward( side + side + sBase) // @5\n\
        left(  ang)\n\
        forward( side)\n\
        right( 2 * ang)\n\
        forward( side + side) //@14\n\
        right( 2 * ang)\n\
        forward( side + side + side)\n\
        right( ang)\n\
        forward( sBase + sBase) //@21\n\
        forward( side)\n\
        left( 2*ang)\n\
	pendown()\n\
\n\
        bs( c1)\n\
        bs2( c1)\n\
        bb( c2)\n\
        bs( c2)\n\
        //write( "22")\n\
\n\
//point23:\n\
	penup()\n\
        goto(0,0)\n\
        setHeading( i * 2* ang)\n\
        forward(  bBase + side + bBase) //@6\n\
        left( 2 * ang)\n\
        forward( side)\n\
        right( ang)\n\
        forward( sBase + sBase) //@9\n\
        right( 2 * ang)\n\
        forward( bBase)\n\
        right( ang)\n\
        forward( side + side) //@17\n\
        right( ang)\n\
        forward( sBase)\n\
        left( 3 * ang)\n\
	pendown()\n\
\n\
        ss( c2)\n\
        bs( c2)\n\
        //write( "23")\n\
   }\n\
}\n\
\n\
\n\
function demo () {\n\
    reset()\n\
    wrap(false)\n\
    pendown()\n\
    spiral( )\n\
}\n\
'
color_changing_dots ='\
// Color Changing Dots -- demonstrate the concept of changing the colors of a string of dots (lights?)\n\
\n\
/*\n\
Maybe you can adapt to make a traffic light simulator or Christmas light\n\
controller.\n\
*/\n\
\n\
function drawDot () {\n\
    color(random(16))\n\
    dot()\n\
    forward (15)\n\
}\n\
\n\
function drawRowOfDots () {\n\
  setpos(minX() + 20,0)\n\
  repeat (32, drawDot)\n\
}\n\
\n\
function colorChangingDots () {\n\
  reset()\n\
  wrap(false)\n\
  setpos(minX(),0)\n\
  angle(90)\n\
  pendown()\n\
  color ("black")\n\
  penwidth (80)\n\
  forward (maxX() + maxX()) //draw black band\n\
  penup()\n\
  width (1)\n\
  animate( drawRowOfDots, 500)\n\
}\n\
\n\
demo = colorChangingDots;\n\
'
compass_rose2 ='\
// Compass Rose 2 -- draws compass rose.\n\
\n\
function compassRose (x, y, n, outerRadius, innerRadius) {\n\
  goto (x, y);\n\
  circle (outerRadius); //outer circle\n\
  circle (innerRadius);\n\
\n\
  angleA= Math.atan((innerRadius* Math.sin(Math.PI/4))/(outerRadius-innerRadius* Math.cos(Math.PI/4))) //radians\n\
  side1= outerRadius/(1+Math.tan(angleA)/Math.tan(Math.PI/4))\n\
  side2= side1/Math.cos(angleA)\n\
  for (i=0; i<4; i++) {\n\
    goto (x, y);\n\
    angle (i/4 * 360);\n\
    penup()\n\
    forward( innerRadius)\n\
    pendown()\n\
    forward (outerRadius-innerRadius);\n\
    right( 180-radToDeg( angleA));\n\
    forward( side2);\n\
    backward( side2);\n\
    right( radToDeg( 2* angleA));\n\
    forward( side2);\n\
  }\n\
\n\
  side3= outerRadius/(1+Math.tan(angleA)/Math.tan(Math.PI/8))\n\
  r3= side3/Math.cos(angleA)\n\
  console.log( "side3:"+side3 + " r3: " + r3)\n\
  for (i=0; i<4; i++) {\n\
    goto (x, y);\n\
    angle (45 + i/4 * 360);\n\
    penup()\n\
    forward( innerRadius)\n\
    pendown()\n\
    forward (outerRadius-innerRadius);\n\
    right( 180-radToDeg( angleA));\n\
    forward( r3);\n\
    backward( r3);\n\
    right( radToDeg( 2* angleA));\n\
    forward( r3);\n\
  }\n\
\n\
  r4=outerRadius/2\n\
\n\
  side4= outerRadius/(1+Math.tan(angleA)/Math.tan(Math.PI/16))\n\
  r4= side4/Math.cos(angleA)\n\
  console.log( "side4:"+side4 + " r4: " + r4)\n\
  for (i=0; i<8; i++) {\n\
    goto (x, y);\n\
    angle (22.5 + i/8 * 360);\n\
    penup()\n\
    forward (outerRadius);\n\
    pendown()\n\
    right( 180-radToDeg( angleA));\n\
    forward( r4);\n\
    backward( r4);\n\
    right( radToDeg( 2* angleA));\n\
    forward( r4);\n\
  }\n\
\n\
  r5 = .1 * outerRadius\n\
  base = 2* r5* Math.sin(angleA)\n\
  for (i=0; i<16; i++) {\n\
    goto (x, y);\n\
    angle (11.25 + i/16 * 360);\n\
    penup()\n\
    forward (outerRadius);\n\
    pendown()\n\
    right( 180-radToDeg( angleA));\n\
    forward( r5);\n\
    right(90+radToDeg(angleA))\n\
    forward (base)\n\
    right(90+radToDeg(angleA))\n\
    forward( r5);\n\
  }\n\
}\n\
\n\
\n\
\n\
function demo () {\n\
  reset();\n\
  size = Math.min( maxX(), maxY()) * .9\n\
  hideturtle();\n\
  //color( random(16));\n\
  compassRose( 0, 0, 16, size, .2*size);\n\
}\n\
'
compass_rose ='\
// Compass Rose -- draw a compass rose with the same triangles\n\
\n\
// The triangle functions could provide shading and color\n\
\n\
function triangle (side){\n\
  forward (side)\n\
  a = 45\n\
  b = (180-a)/2\n\
  right (180 - b)\n\
  //forward (.748* side)\n\
  forward (side * 2 * Math.sin(a/2/360*6.28))\n\
  right (180 - b)\n\
  forward (side)\n\
  right (180-a)\n\
}\n\
\n\
function triangleL (side){\n\
  forward (side)\n\
  a = 45\n\
  b = (180-a)/2\n\
  left (180 - b)\n\
  forward (side * 2 * Math.sin(a/2/360*6.28))\n\
  left (180 - b)\n\
  forward (side)\n\
  left (180-a)\n\
}\n\
\n\
function halfTri(side) {\n\
  triangle (side)\n\
  forward(side)\n\
  triangle (side)\n\
  right(45+(180-45)/2)\n\
  forward(side * 2 * Math.sin( 45/2/360*6.28))\n\
  left(180-(180-45)/2)\n\
  triangle(side)\n\
  left(180-45)\n\
  forward( side)\n\
  right(180-45)\n\
}\n\
\n\
function flipIt (side) {\n\
  //not quite symmetrical...\n\
  penup()\n\
  forward( side*3)\n\
  right( 45)\n\
  forward(side*3)\n\
  right(180-45)\n\
  pendown()\n\
  thirdTri(side)\n\
  penup()\n\
  right (45)\n\
  forward(side*3)\n\
  left(45)\n\
  forward(side*3)\n\
  left(180)\n\
  pendown()\n\
}\n\
\n\
\n\
function flipHalf (side) {\n\
  //not quite symmetrical...\n\
  penup()\n\
  forward( side*3)\n\
  right( 45)\n\
  forward(side*3)\n\
  right(180-45)\n\
  pendown()\n\
  halfTri(side)\n\
  penup()\n\
  right (45)\n\
  forward(side*3)\n\
  left(45)\n\
  forward(side*3)\n\
  left(180)\n\
  pendown()\n\
}\n\
\n\
\n\
function flipPoint (side) {\n\
  //not quite symmetrical...\n\
  penup()\n\
  forward( side*3)\n\
  right( 45)\n\
  forward(side*3)\n\
  right(180-45)\n\
  pendown()\n\
  //triangle(side/2)\n\
  halfTri(side/2)\n\
  penup()\n\
  right (45)\n\
  forward(side*3)\n\
  left(45)\n\
  forward(side*3)\n\
  left(180)\n\
  pendown()\n\
}\n\
\n\
function thirdTri(side) {\n\
  triangle (side)//1\n\
  penup()\n\
  forward(side)\n\
  pendown()\n\
  triangle (side)//2\n\
  penup()\n\
  forward(side)\n\
  pendown()\n\
  triangle (side)//3\n\
  penup()\n\
  right(45+(180-45)/2)\n\
  forward(side * 2 * Math.sin( 45/2/360*6.28))\n\
  left(180-(180-45)/2)\n\
  pendown()\n\
  triangle(side)//4\n\
  penup()\n\
  backward(side)\n\
  pendown()\n\
  triangle(side)//5\n\
  penup()\n\
  right(45)\n\
  forward( side)\n\
  left(45)\n\
  pendown()\n\
  triangle(side)//6\n\
  penup()\n\
  left(180-45)\n\
  forward( side * 2)\n\
  right(180-45)\n\
  pendown()\n\
}\n\
\n\
\n\
function boxTheCompass(size) {\n\
  penup()\n\
  angle( 0)\n\
  boxedCompass=["N", "NxE", "NNE", "NExN", "NE", "NExE", "ENE", "ExN", "E", "ExS", "ESE", "SExE", "SE", "SExS", "SSE", "SxE", "S", "SxW", "SSW", "SWxS", "SW", "SWxW", "WSW", "WxS", "W", "WxN", "WNW", "NWxW", "NW", "NWxN", "NNW", "NxW"]\n\
  textRadius = size/14  * 5.6\n\
  for (i=0; i<32; i++) {\n\
  \n\
    forward (textRadius)\n\
    right(90)\n\
    //textLen = boxedCompass[i].length*10/2\n\
   // backward (textLen)\n\
    fontSize = i % 4\n\
    if (fontSize == 1 || fontSize == 3) {\n\
      pointSize = size/48\n\
      textLen = boxedCompass[i].length*pointSize/2\n\
      backward (textLen)\n\
      setfont("normal " + pointSize + "pt Helvetica")\n\
    } else if (fontSize == 2) {\n\
      pointSize = size/48\n\
      textLen = boxedCompass[i].length*pointSize/2\n\
      backward (textLen)\n\
      setfont("bold " + pointSize + "pt Helvetica")\n\
    } else {\n\
      pointSize = size/40\n\
      textLen = boxedCompass[i].length*pointSize/2\n\
      backward (textLen)\n\
      setfont("bold " + pointSize + "pt Helvetica")\n\
    }\n\
    write(boxedCompass[i])\n\
    forward (textLen)\n\
    left(90)\n\
    backward (textRadius)\n\
    right(360/32)\n\
  }\n\
}\n\
\n\
\n\
function demo () {\n\
  reset()\n\
  wrap(false)\n\
  hideTurtle() // do not want it to show, so do this early\n\
  redrawOnMove(false) // do not redraw image each move\n\
  size = 2* Math.min(maxX(), maxY())\n\
  side = size/14\n\
  left(22.5)\n\
  for (i=0; i<8; i++) {\n\
    thirdTri (side)\n\
    flipIt (side)\n\
    right(45)\n\
  }\n\
  for (i=0; i<8; i++) {\n\
    halfTri (side/2)\n\
    right(45)\n\
  }\n\
  right(22.5)\n\
  for (i=0; i<84; i++) {\n\
    flipHalf (side)\n\
    right(45)\n\
  }\n\
  right(11.25)\n\
  side = size/14\n\
  for (i=0; i<16; i++) {\n\
    flipPoint (side)\n\
    right(22.5)\n\
  }\n\
\n\
  boxTheCompass(size)\n\
  //redrawOnMove(true)\n\
  draw() // just to render the final product\n\
}\n\
\n\
demo()\n\
'
compass_rose_quilt ='\
// Compass Rose Quilt -- draw a compass rose quilt\n\
\n\
//### CONTROLING VARIABLES\n\
//number of main divisions of the directional triangles\n\
mainDivisions = 4\n\
//number of divisions in the most triangles\n\
subDivisions8 = 3\n\
//number of main divisions in 16th points\n\
mainDivisions16 = 2\n\
//number of subdivisions in 16th points\n\
subDivisions16 = 2\n\
//number of main divisions in 32nds points\n\
mainDivisions32 = 1\n\
//number of subdivisions in 32nds points\n\
subDivisions32 = 3\n\
\n\
//color of background\n\
backgroundColor = "blue"\n\
//color of compass background\n\
compassBackgroundColor = "black"\n\
//color of text\n\
compassTextColor = "white"\n\
//color of inner direction background\n\
inner8BackgroundColor = "black"\n\
//color of inward direction (array)\n\
inner8Colors = ["gold", "salmon"]\n\
\n\
//color of outer direction background\n\
outer8BackgroundColor = "black"\n\
//color of outer direction (array)\n\
outer8Colors = ["yellow", "red"]\n\
\n\
\n\
//background color of 16ths\n\
background16Color = "gold"\n\
//foreground color of 16ths\n\
foreground16Color = "salmon"\n\
//background color of 32nds\n\
background32Color = "black"\n\
//foreground color of 32nds\n\
foreground32Color = "yellow"\n\
\n\
\n\
function indexColor(index, colors) {\n\
  var len = colors.length\n\
  return colors[ index % len]\n\
}\n\
\n\
\n\
function triangle (side){\n\
  forward (side)\n\
  a = 45\n\
  b = (180-a)/2\n\
  right (180 - b)\n\
  //forward (.748* side)\n\
  forward (side * 2 * Math.sin(a/2/360*6.28))\n\
  right (180 - b)\n\
  forward (side)\n\
  right (180-a)\n\
}\n\
\n\
\n\
function splitTri(outerSide, num, foreColor, triSide) {\n\
  var i, j\n\
  \n\
  if (triSide == undefined) {\n\
    triSide = outerSide\n\
  }\n\
  innerSide = triSide / num\n\
  for (j = num; j >0; j = j - 1) {\n\
     for (i = 0; i <j; i = i + 1) {\n\
        beginShape()\n\
        triangle (innerSide)\n\
        fillShape(foreColor)\n\
        penup()\n\
        forward(innerSide)\n\
        pendown()\n\
    }\n\
    penup()\n\
    backward( j * innerSide)\n\
    right(45)\n\
    forward( innerSide)\n\
    left(45)\n\
    pendown()\n\
  }\n\
  penup()\n\
  right(45)\n\
  backward( innerSide * num)\n\
  left(45)\n\
  pendown()\n\
}\n\
\n\
\n\
function flipSplitTri( outerSide, num, foreColor, triSide) {\n\
  penup()\n\
  forward( outerSide)\n\
  right( 45)\n\
  forward( outerSide)\n\
  right( 180-45)\n\
  pendown()\n\
  splitTri( outerSide, num, foreColor, triSide)\n\
  penup()\n\
  right( 45)\n\
  forward( outerSide)\n\
  left( 45)\n\
  forward( outerSide)\n\
  left( 180)\n\
  pendown()\n\
}\n\
\n\
\n\
function labelPoints(size) {\n\
  penup()\n\
  angle( 0)\n\
  boxedCompass=["N", "NxE", "NNE", "NExN", "NE", "NExE", "ENE", "ExN", "E", "ExS", "ESE", "SExE", "SE", "SExS", "SSE", "SxE", "S", "SxW", "SSW", "SWxS", "SW", "SWxW", "WSW", "WxS", "W", "WxN", "WNW", "NWxW", "NW", "NWxN", "NNW", "NxW"]\n\
\n\
  // fill in the compass background\n\
\n\
  //textRadius = side*5.7\n\
  textRadius = size*.88\n\
  color( compassTextColor)\n\
\n\
  for (i=0; i<32; i++) {\n\
  \n\
    forward (textRadius)\n\
    right(90)\n\
    fontSize = i % 4\n\
    if (fontSize == 1 || fontSize == 3) {\n\
      pointSize = size *.04\n\
      textLen = boxedCompass[i].length * pointSize/2\n\
      backward (textLen)\n\
      setfont("normal " + pointSize + "pt Helvetica")\n\
    } else if (fontSize == 2) {\n\
      pointSize = size *.04\n\
      textLen = boxedCompass[i].length * pointSize/2\n\
      backward (textLen)\n\
      setfont("bold " + pointSize + "pt Helvetica")\n\
    } else {\n\
      pointSize = size *.06\n\
      textLen = boxedCompass[i].length * pointSize/2\n\
      backward (textLen)\n\
      setfont("bold " + pointSize + "pt Helvetica")\n\
    }\n\
    write(boxedCompass[i])\n\
    forward (textLen)\n\
    left(90)\n\
    backward (textRadius)\n\
    right(360/32)\n\
  }\n\
}\n\
\n\
\n\
function demo () {\n\
  reset()\n\
  size = .9 * Math.min( maxX(), maxY()) //120\n\
console.log("size "+ size)\n\
  wrap(false)\n\
  hideTurtle() // don"t want it to show,  do this early\n\
  redrawOnMove(false) // don"t redraw image each move\n\
\n\
  // fill in the background\n\
  background( backgroundColor)\n\
/*\n\
  goto( minX()+1, maxY()-1)\n\
  right( 90)\n\
  beginShape()\n\
  forward( 2 * maxX()-2)\n\
  right( 90)\n\
  forward( 2 * maxY()-2)\n\
  right( 90)\n\
  forward( 2 * maxX()-2)\n\
  right( 90)\n\
  forward( 2 * maxY()-2)\n\
  fillShape( backgroundColor)\n\
*/\n\
\n\
  //fill in the compass background\n\
  goto(0,0)\n\
  color( compassBackgroundColor)\n\
  beginShape()\n\
  circle (size)\n\
  fillShape( compassBackgroundColor)\n\
\n\
\n\
  //fill in the eight compass major points\n\
  goto(0,0)\n\
  angle(0)\n\
  left(22.5)\n\
  side = size * .47\n\
  for (i=0; i<8; i++) {\n\
    splitTri (side, mainDivisions, indexColor( i, inner8Colors))\n\
    flipSplitTri( side, mainDivisions, indexColor( i, outer8Colors))\n\
    right(45)\n\
  }\n\
\n\
  //ornament the center\n\
  for (i=0; i<8; i++) {\n\
    splitTri (side/mainDivisions, subDivisions8, "yellow")\n\
    right(45)\n\
  }\n\
\n\
 //place the sixteenth points\n\
  right(22.5)\n\
  for (i=0; i<8; i++) {\n\
    flipSplitTri (side, 1, background16Color,\n\
        side * mainDivisions16/mainDivisions)\n\
    flipSplitTri (side, subDivisions16, foreground16Color,\n\
        side * mainDivisions16/mainDivisions)\n\
    right(45)\n\
  }\n\
\n\
   //place the thirty-second points\n\
  right(11.25)\n\
  for (i=0; i<16; i++) {\n\
    flipSplitTri (side, 1, background32Color,\n\
        side * mainDivisions32/mainDivisions)\n\
    flipSplitTri (side, subDivisions32, foreground32Color,\n\
        side * mainDivisions32/mainDivisions)\n\
    right(22.5)\n\
  }\n\
\n\
  labelPoints( size)\n\
\n\
  //redrawOnMove(true)\n\
  draw() // just to render the final product\n\
}\n\
'
connected_points ='\
// Connected Points -- points connected by spikeys\n\
\n\
//draw the radials\n\
function drawRadials(side) {\n\
  for (var i=0; i<16; i++) {\n\
    goto(0,0)\n\
    angle(i/16 * 360)\n\
    forward( size)\n\
  }\n\
}\n\
\n\
function spikey ( points, revs, radius, x, y, head) {\n\
  penup()\n\
  goto(x, y)\n\
  setheading(head)\n\
  forward(radius)\n\
  var turnAngle = 360 * revs/points\n\
  var angleA = ( 180 - turnAngle)/2\n\
  var stroke = 2 * radius * Math.cos( degToRad( angleA))\n\
  right( 180 - angleA)\n\
  pendown()\n\
\n\
  for( var i = 0; i < points; i = i + 1) { //>\n\
    forward( stroke)\n\
    right( turnAngle)\n\
  }\n\
}\n\
\n\
\n\
\n\
function demo() {\n\
  reset()\n\
  wrap(false)\n\
  size = .9* Math.min( maxX(), maxY())\n\
  //size=200\n\
  inr = .33* size\n\
  width(.5)\n\
  spikey( 16, 2, size, 0, 0, 0)\n\
  spikey( 16, 2, size, 0, 0, 360/16)\n\
  width(.25)\n\
  spikey( 16, 4, size, 0, 0, 0)\n\
  spikey( 16, 4, size, 0, 0, 360/16)\n\
  spikey( 16, 4, size, 0, 0, 2*360/16)\n\
  spikey( 16, 4, size, 0, 0, 3*360/16)\n\
  spikey( 16, 6, size, 0, 0, 0)\n\
  spikey( 16, 6, size, 0, 0, 360/16)\n\
  width(.7)\n\
  spikey( 8, 3, inr, 0, 0, 0)\n\
  spikey( 8, 1, inr, 0, 0, 0)\n\
  width(1)\n\
  drawRadials( size)\n\
  goto(0,0)\n\
  circle( inr)\n\
  hideTurtle()\n\
}\n\
'
conway_fractal ='\
// Conway Fractal -- Conway\'s pinwheel tessellation as a fractal\n\
// the British mathematician John Conway devised a tesselation using triagles\n\
// that has no periodicity called the pinwheel tesselation.  This is a fractal\n\
// form of that tessellation.\n\
\n\
/*\n\
from a point can:\n\
 - draw a triangle X\n\
 - draw a triangle and 4 siblings as a newer larger triangle\n\
 - divide a triangle into 5 offspring triangles\n\
\n\
Recursion for:\n\
  expanding a set of triangles from a point\n\
  dividing a set of triangles from a point.\n\
\n\
need routines for\n\
  recursive expansion\n\
  - expand, move to new base, change size\n\
  move to 5 base points dividing a triangle\n\
  move to 5 base points expanding a triangle\n\
  conditionally draw triangle or subdivide\n\
\n\
  * optionally have a delay for animation\n\
\n\
  * options to grid certain triangles (all, none, prime, non-prime)\n\
\n\
  * option to change width of triangle outline (level, triangle)\n\
*/\n\
\n\
\n\
//*** GLOBALS ***\n\
\n\
var level = 0\n\
var targetLevel = 5\n\
var side = .80 * Math.min( maxY()*2, maxX()) // base of big triangle\n\
var mainColor = "tan"\n\
var subColor = "wheat"\n\
var dividerColor = "black"\n\
var stepsize = 1.5       //spacing between shading lines\n\
var specialTriangle = 0  // triangle number selected for highlighting (1-5, 0 for none)\n\
\n\
\n\
//*** CONSTANTS ***\n\
\n\
var targetLevel = 4\n\
var root5 = Math.sqrt(5)\n\
var anglea = Math.asin( 1 / root5) * 360 / 2 / Math.PI\n\
var angleb = Math.asin( 2 / root5) * 360 / 2 / Math.PI\n\
var CCW = false\n\
var CW = true\n\
\n\
\n\
//*** FUNCTIONS ***\n\
\n\
function dturn( dir, degrees) {\n\
  if (dir) {\n\
    right( degrees)\n\
  } else {\n\
    left ( degrees)\n\
  }\n\
}\n\
\n\
function drawTriangle (dir, side) {\n\
  forward (2*side)\n\
  dturn(dir, 180-anglea)\n\
  forward (root5*side)\n\
  dturn (dir, 180-angleb)\n\
  forward (side)\n\
  dturn (dir, 90)\n\
}\n\
\n\
\n\
function caption (message) {\n\
  // save your current position, heading, etc.\n\
  var savedX = turtle.pos.x\n\
  var savedY = turtle.pos.y\n\
  var savedHeading = turtle.angle / 2 / Math.PI * 360 //convert radians to degrees\n\
  var savedColor = turtle.color\n\
  var savedWidth = turtle.width\n\
\n\
  goto (minX()+10, minY()+10)\n\
  setheading( 90)\n\
\n\
  // erase what will be in the path\n\
  color ("white")\n\
  width (10)\n\
  forward (maxY() * 2 - 12)\n\
  goto (minX()+10, minY()+5)\n\
  color ("black")\n\
  write( message)\n\
\n\
  //go back from whence you came\n\
  goto( savedX, savedY)\n\
  setheading( savedHeading)\n\
  color ( savedColor)\n\
  width (savedWidth)\n\
}\n\
\n\
\n\
function shadeTriangle( dir, side, stepsize) {\n\
  console.log( "sT: " + dir + " " + side + " " + stepsize)\n\
  var x = turtle.pos.x\n\
  var y = turtle.pos.y\n\
  var steps = Math.floor( side/stepsize)\n\
\n\
  for (var i=0; i< steps; i++) {\n\
     forward( 2*side * (steps-i)/steps)\n\
     backward( 2*side * (steps-i)/steps)\n\
     penup()\n\
     dturn( dir, 90)\n\
     forward( stepsize)\n\
     dturn( !dir, 90)\n\
     pendown()\n\
  }\n\
  //return to start\n\
  penup()\n\
  dturn( !dir, 90)\n\
  forward( side)\n\
  dturn( dir, 90)\n\
  //goto(x,y) // cancel cumulative error\n\
  pendown()\n\
}\n\
\n\
function recursiveDivide( dir, side, level, triangle) {\n\
  //console.log("rD: " + level + " " + triangle)\n\
  if (level > 0) {\n\
    side = 0. + side/root5\n\
    var x = turtle.pos.x\n\
    var y = turtle.pos.y\n\
    \n\
    //draw the first line to point A\n\
    dturn( dir, angleb)\n\
    pendown()\n\
    forward (2*side)\n\
\n\
    //sub triangle 1\n\
    right (180)\n\
    recursiveDivide( !dir, side, level-1, 1)\n\
    right (180)\n\
\n\
    //draw the second line to point B\n\
    dturn( !dir, 180-angleb)\n\
    pendown()\n\
    forward (root5*side)\n\
    \n\
    //draw third line to point C\n\
    dturn( dir, 180-angleb)\n\
    forward(side)\n\
    penup()\n\
\n\
i    //sub triangle 4\n\
    dturn( dir, 90)\n\
    recursiveDivide( dir, side, level-1, 4)\n\
\n\
    //sub triangle 5\n\
    right( 180)\n\
    recursiveDivide( !dir, side, level-1, 5)\n\
    dturn( dir, 90)\n\
    \n\
    //retreat to point B\n\
    backward(side)\n\
    dturn( dir, 90)\n\
    \n\
    //draw fourth line to point D\n\
    pendown()\n\
    forward( 2*side)\n\
    penup()\n\
\n\
    //sub triangle 2\n\
    right( 180)\n\
    recursiveDivide( !dir, side, level-1, 2)\n\
\n\
    //sub triangle 3\n\
    recursiveDivide( dir, side, level-1, 3)\n\
    \n\
    //retreat to origin\n\
    dturn( !dir, 90)\n\
    penup()\n\
    forward( side)\n\
    pendown()\n\
    dturn( dir, 180-angleb)\n\
    //goto (x,y) //cancel cumulative error\n\
//  } else {\n\
    //if (triangle == 3) {\n\
//    if (triangle == specialTriangle) {\n\
//      shadeTriangle (dir, side, stepsize)\n\
//    }\n\
  }\n\
}\n\
\n\
function recursiveDivideBlocks( dir, side, level, triangle, background, highlight) {\n\
  //console.log( "rDB: " + level + " " + triangle + " " + background + " " + highlight)\n\
  if (level > 0) {\n\
    side = side/root5\n\
    var x = turtle.pos.x\n\
    var y = turtle.pos.y\n\
\n\
    //move to point A\n\
    penup()\n\
    dturn( dir, angleb)\n\
    forward (2 * side)\n\
\n\
    //sub triangle 1\n\
    right (180)\n\
    pendown()\n\
    recursiveDivideBlocks( !dir, side, level-1, 1, background, highlight)\n\
    penup()\n\
    right (180)\n\
\n\
    //move to pint B\n\
    dturn( !dir, 180-angleb)\n\
    forward (root5*side)\n\
    \n\
    //move to point C\n\
    dturn( dir, 180-angleb)\n\
    forward(side)\n\
\n\
    //sub triangle 4\n\
    dturn( dir, 90)\n\
    pendown()\n\
    recursiveDivideBlocks( dir, side, level-1, 4, background, highlight)\n\
    penup()\n\
\n\
    //sub triangle 5\n\
    right( 180)\n\
    pendown()\n\
    recursiveDivideBlocks( !dir, side, level-1, 5, background, highlight)\n\
    penup()\n\
\n\
    //retreat to point B\n\
    dturn( dir, 90)\n\
    backward(side)\n\
\n\
    //move to point B\n\
    dturn( dir, 90)\n\
    forward( 2*side)\n\
\n\
//sub triangle 2\n\
    right( 180)\n\
    pendown()\n\
    recursiveDivideBlocks( !dir, side, level-1, 2, background, highlight)\n\
\n\
    //sub triangle 3\n\
    recursiveDivideBlocks( dir, side, level-1, 3, highlight, highlight)\n\
    penup()\n\
\n\
    //move to origin\n\
    dturn( !dir, 90)\n\
    forward (side)\n\
\n\
    dturn( dir, 180-angleb)\n\
    goto (x,y) //cancel cumulative error\n\
  } else {\n\
    if (triangle == 3) {\n\
    //if (triangle == specialTriangle) {\n\
      color( highlight)\n\
      console.log("shading " + highlight)\n\
      shadeTriangle (dir, side, stepsize)\n\
    } else {\n\
      color( background)\n\
      shadeTriangle (dir, side, stepsize)\n\
    }\n\
  }\n\
}\n\
\n\
\n\
function delayedDivide() {\n\
  level = level + 1\n\
  if (level <= targetLevel) {\n\
    recursiveDivideBlocks( CCW, side, level, 0, mainColor, subColor)\n\
    color(dividerColor)\n\
    recursiveDivide( CCW, side, level, 0)\n\
    drawTriangle( CCW, side)\n\
    caption( "Fractal divide, generation " + level)\n\
    delay( delayedDivide, 3000)\n\
  }\n\
}\n\
\n\
\n\
//*** MAIN ***\n\
\n\
function demo() {\n\
  // initialize\n\
  reset()\n\
  wrap(false)\n\
  hideTurtle()\n\
  penup()\n\
  backward (side/4)\n\
  right(90)\n\
  backward (side)\n\
\n\
  // label the sides of the triangle\n\
  setfont("bold 14px sans-serif")\n\
  left( anglea)\n\
  forward( side+50)\n\
  right( anglea)\n\
  write( "√5")\n\
  left( anglea)\n\
  backward( side+50)\n\
  right( anglea)\n\
  right( 90)\n\
  forward (20)\n\
  left( 90)\n\
  forward( side)\n\
  write (2)\n\
  backward( side+20)\n\
  left( 90)\n\
  forward( side/2 + 20)\n\
  right( 90)\n\
  write( 1)\n\
  forward( 20)\n\
  right(90)\n\
  forward (side/2)\n\
  left(90)\n\
\n\
  pendown()\n\
  drawTriangle( CCW, side)\n\
\n\
  level = 0\n\
\n\
  delay( delayedDivide, 3000)\n\
}\n\
'
conway_pinwheel ='\
// Conway Pinwheel -- Conway\'s pinwheel tessellation\n\
// the British mathematician John Conway devised a tesselation using triagles\n\
// that has no periodicity called the pinwheel tesselation.\n\
\n\
/*\n\
from a point can:\n\
 - draw a triangle X\n\
 - draw a triangle and 4 siblings as a newer larger triangle\n\
 - divide a triangle into 5 offspring triangles\n\
\n\
Recursion for:\n\
  expanding a set of triangles from a point\n\
  dividing a set of triangles from a point.\n\
\n\
need routines for\n\
  recursive expansion\n\
  - expand, move to new base, change size\n\
  move to 5 base points dividing a triangle\n\
  move to 5 base points expanding a triangle\n\
  conditionally draw triangle or subdivide\n\
\n\
  * optionally have a delay for animation\n\
\n\
  * options to grid certain triangles (all, none, prime, non-prime)\n\
\n\
  * option to change width of triangle outline (level, triangle)\n\
*/\n\
\n\
\n\
//*** GLOBALS ***\n\
\n\
var levels = 4\n\
var targetSide = .80 * Math.min( maxY()*2, maxX()) // base of big encompassing triangle\n\
var delayedSide = 0		// current side being worked\n\
\n\
var mainColor = "tan"\n\
var subColor = "wheat"\n\
var dividerColor = "black"\n\
var stepsize = 1.5       //spacing between shading lines\n\
var specialTriangle = 0  // triangle number selected for highlighting (1-5, 0 for none)\n\
\n\
\n\
//*** CONSTANTS ***\n\
\n\
var root5 = Math.sqrt(5)\n\
var anglea = Math.asin( 1 / root5) * 360 / 2 / Math.PI\n\
var angleb = Math.asin( 2 / root5) * 360 / 2 / Math.PI\n\
var CCW = false\n\
var CW = true\n\
\n\
\n\
//*** FUNCTIONS ***\n\
\n\
function dturn( dir, degrees) { // allows turning based on triangle type\n\
  if (dir) {\n\
    right( degrees)\n\
  } else {\n\
    left ( degrees)\n\
  }\n\
}\n\
\n\
\n\
function drawTriangle (dir, side) {\n\
  forward (2*side)\n\
  dturn(dir, 180-anglea)\n\
  forward (root5*side)\n\
  dturn (dir, 180-angleb)\n\
  forward (side)\n\
  dturn (dir, 90)\n\
}\n\
\n\
\n\
function caption (message) {\n\
  // save your current position, heading, etc.\n\
  var savedX = turtle.pos.x\n\
  var savedY = turtle.pos.y\n\
  var savedHeading = turtle.angle / 2 / Math.PI * 360 //convert radians to degrees\n\
  var savedColor = turtle.color\n\
  var savedWidth = turtle.width\n\
\n\
  goto (minX()+10, minY()+10)\n\
  setheading( 90)\n\
\n\
  // erase wha will be in the path\n\
  color ("white")\n\
  width (10)\n\
  forward (maxY() * 2 - 12)\n\
  goto (minX()+10, minY()+5)\n\
  color ("black")\n\
  write( message)\n\
\n\
  //go back from whence you came\n\
  goto( savedX, savedY)\n\
  setheading( savedHeading)\n\
  color ( savedColor)\n\
  width (savedWidth)\n\
}\n\
\n\
\n\
\n\
function shadeTriangle( dir, side, stepsize) {\n\
  console.log( "sT: " + dir + " " + side + " " + stepsize)\n\
  var x = turtle.pos.x\n\
  var y = turtle.pos.y\n\
  var steps = Math.floor( side/stepsize)\n\
\n\
  for (var i=0; i< steps; i++) {\n\
     forward( 2*side * (steps-i)/steps)\n\
     backward( 2*side * (steps-i)/steps)\n\
     penup()\n\
     dturn( dir, 90)\n\
     forward( stepsize)\n\
     dturn( !dir, 90)\n\
     pendown()\n\
  }\n\
  //return to start\n\
  penup()\n\
  dturn( !dir, 90)\n\
  forward( side)\n\
  dturn( dir, 90)\n\
  //goto(x,y) // cancel cumulative error\n\
  pendown()\n\
}\n\
\n\
\n\
function recursiveDivide( dir, side, level, triangle) {\n\
  //console.log("rD: " + level + " " + triangle)\n\
  if (level > 0) {\n\
    side = 0. + side/root5\n\
    var x = turtle.pos.x\n\
    var y = turtle.pos.y\n\
    \n\
    //draw the first line to point A\n\
    dturn( dir, angleb)\n\
    pendown()\n\
    forward (2*side)\n\
\n\
    //sub triangle 1\n\
    right (180)\n\
    recursiveDivide( !dir, side, level-1, 1)\n\
    right (180)\n\
\n\
    //draw the second line to point B\n\
    dturn( !dir, 180-angleb)\n\
    pendown()\n\
    forward (root5*side)\n\
    \n\
    //draw third line to point C\n\
    dturn( dir, 180-angleb)\n\
    forward(side)\n\
    penup()\n\
\n\
i    //sub triangle 4\n\
    dturn( dir, 90)\n\
    recursiveDivide( dir, side, level-1, 4)\n\
\n\
    //sub triangle 5\n\
    right( 180)\n\
    recursiveDivide( !dir, side, level-1, 5)\n\
    dturn( dir, 90)\n\
    \n\
    //retreat to point B\n\
    backward(side)\n\
    dturn( dir, 90)\n\
    \n\
    //draw fourth line to point D\n\
    pendown()\n\
    forward( 2*side)\n\
    penup()\n\
\n\
    //sub triangle 2\n\
    right( 180)\n\
    recursiveDivide( !dir, side, level-1, 2)\n\
\n\
    //sub triangle 3\n\
    recursiveDivide( dir, side, level-1, 3)\n\
    \n\
    //retreat to origin\n\
    dturn( !dir, 90)\n\
    penup()\n\
    forward( side)\n\
    pendown()\n\
    dturn( dir, 180-angleb)\n\
    //goto (x,y) //cancel cumulative error\n\
//  } else {\n\
//    if (triangle == 3) {\n\
//    if (triangle == specialTriangle) {\n\
//      shadeTriangle (dir, side, stepsize)\n\
//    }\n\
  }\n\
}\n\
\n\
\n\
function moveToExpandOrigin (side) {\n\
  penup()\n\
  right( 90)\n\
  forward( side)\n\
  left( 180 - angleb)\n\
  pendown()\n\
}\n\
\n\
\n\
function startDelayedDivide() {\n\
  // move to the origin of the big triangle\n\
  reset()\n\
  color(mainColor)\n\
  penup()\n\
\n\
  side = targetSide\n\
  backward (side/2)\n\
  right(90)\n\
  backward (side)\n\
  pendown()\n\
\n\
  iterations = 4\n\
  level = 0\n\
\n\
  pendown()\n\
  color("black")\n\
  delayedDivide()\n\
}\n\
\n\
\n\
function delayedDivide() {\n\
  //console.log ("dD: "+ side + " " + level)\n\
  recursiveDivide( CCW, side, level, 0)\n\
  drawTriangle( CCW, side)\n\
  caption( "Division, generation " + level)\n\
  level = level + 1\n\
  if (level <= iterations) {\n\
    delay( delayedDivide,1000)\n\
  } else {\n\
    delay( startDelayedExpansion, 3000)\n\
  }\n\
}\n\
\n\
function startDelayedExpansion() {\n\
  //move to the origin of the big triangle\n\
  reset ()\n\
  wrap( false)\n\
  color(mainColor)\n\
  penup()\n\
\n\
  var tempSide = targetSide\n\
  backward (side/2)\n\
  right(90)\n\
  backward (side)\n\
\n\
  iterations = 4\n\
  depth = 0\n\
  dir = CCW\n\
\n\
  // move the starting point so that it ends where it starts\n\
  for (var i=0; i<iterations; i++) {\n\
    tempSide = tempSide/root5\n\
  }\n\
  delayedSide = tempSide\n\
  for (var i=0; i<iterations; i++) {\n\
    tempSide = tempSide * root5\n\
  }\n\
  for (var i=0; i<iterations; i++) {\n\
    pendown()\n\
    drawTriangle( dir, tempSide)\n\
    penup()\n\
    dturn( dir, angleb)\n\
    forward( tempSide/root5)\n\
    dturn( !dir, 90)\n\
    tempSide = tempSide / root5\n\
    drawTriangle( tempSide) // really just for reference\n\
    console.log(i)\n\
  }\n\
\n\
  pendown()\n\
  color ("blue")\n\
  shadeTriangle( CCW, tempSide, stepsize)\n\
  color("black")\n\
  delay( delayedExpansion,1000)\n\
}\n\
\n\
function delayedExpansion() {\n\
  /* on entry\n\
    delayedSide is the size of the base triangle.\n\
    depth is how many generations to do.\n\
  */\n\
\n\
  moveToExpandOrigin( delayedSide)\n\
  delayedSide = delayedSide * root5\n\
  //console.log( "dE: " + depth + " " + iterations + " " + delayedSide)\n\
  recursiveDivide( CCW, delayedSide, depth+1, 0)\n\
  drawTriangle( CCW, delayedSide)\n\
  caption( "Expansion, generation " + (depth+1))\n\
\n\
  depth = depth + 1\n\
  if (depth < iterations) {\n\
    delay( delayedExpansion,1000)\n\
  } else {\n\
    delayedSide = targetSide\n\
    delay( startDelayedDivide, 3000)\n\
  }\n\
}\n\
\n\
\n\
//***MAIN***\n\
\n\
console.log ("Starting")\n\
stepsize = 1.5\n\
iterations = 4\n\
iterations = 2\n\
level = 1\n\
depth = 0\n\
CCW = false // triangle is to the left side of the right angle ( height, hypotenuse, base)\n\
CW = true // triangle is to the right side of the right angle( height, hypotenuse, base)\n\
mainColor = "tan"\n\
subColor = "wheat"\n\
specialTriangle = 0\n\
\n\
\n\
function demo() {\n\
  /* want demo to show a mix of divide and expand with animation\n\
\n\
basically:\n\
  starts up with a delayed division set up\n\
  when that is over\n\
  continue with a delayed expansion\n\
*/\n\
  reset()\n\
  hideTurtle()\n\
  side = targetSide\n\
  wrap(false)\n\
  color(mainColor)\n\
  penup()\n\
  backward (side/2)\n\
  right(90)\n\
  backward (side)\n\
  pendown()\n\
\n\
  startDelayedExpansion()\n\
}\n\
'
coordinates ='\
// Coordinates -- Draw the axes of the coordinate system on the canvas\n\
\n\
function lines () {\n\
  clear()\n\
  pendown()\n\
\n\
  goto(0,minY())\n\
  angle(0)\n\
  forward (2*maxY())\n\
\n\
  goto(minX(),0)\n\
  angle(90)\n\
  forward (2*maxX())\n\
\n\
  //lable the axes\n\
  setFont("bold 14px sans-serif");\n\
  goto (0+10,maxY()-25)\n\
  angle (90)\n\
  write (maxY())\n\
\n\
  goto (maxX()-5,+10)\n\
  angle (0)\n\
  write (maxX())\n\
\n\
  goto (10,minY()+5)\n\
  angle (90)\n\
  write (minY())\n\
\n\
  goto (minX()+25,0+10)\n\
  angle (0)\n\
  write (minX())\n\
}\n\
\n\
\n\
function ticks (dir, limit, step) {\n\
  var tickLen = 5\n\
  angle(dir)\n\
  goto(0,0)\n\
  penup()\n\
  for (i=1; i*step<limit; i=i+1) {\n\
\n\
    forward(step)\n\
    left(90)\n\
    if (i%5 == 0) {\n\
      forward(tickLen)\n\
      pendown()\n\
      backward (tickLen*2)\n\
      penup()\n\
      forward(tickLen)\n\
      right(90)\n\
    } else {\n\
      forward(tickLen/2)\n\
      pendown()\n\
      backward (tickLen)\n\
      penup()\n\
      forward(tickLen/2)\n\
      right(90)\n\
    }\n\
  }\n\
}\n\
\n\
function demo() {\n\
  lines()\n\
  ticks (0, maxY(), 10)\n\
  ticks (90, maxX(), 10)\n\
  ticks (180, -minY(), 10)\n\
  ticks (270, -minX(), 10)\n\
}\n\
'
dividing_circle ='\
// Dividing a Circle -- divide a circle with other circles\n\
\n\
// *** GLOBALS ***\n\
var i; // loop variable\n\
\n\
\n\
// *** CONSTANTS ***\n\
rad = 50; // circle radius\n\
limit = 6; // times to loop\n\
delayTime = 1000; // milliseconds\n\
\n\
\n\
// *** FUNCTIONS ***\n\
\n\
function divideCenter(radii, radius) {\n\
  left(60);\n\
  forward(radius);\n\
  right(60);\n\
  var side = 0\n\
  while (side < 6) { // go to each side\n\
    right(60);\n\
    var step = 0\n\
    while (step < radii) { // step off side\n\
      forward(radius);\n\
      circle(radius);\n\
      step = step + 1\n\
    };\n\
    side = side + 1;\n\
  };\n\
}\n\
\n\
\n\
function tier () {\n\
  divideCenter (i, rad)\n\
  i = i + 1\n\
  if (i < limit) {\n\
    delay (tier, delayTime)\n\
  }\n\
}\n\
\n\
\n\
function demo() {\n\
  clear();\n\
  hideTurtle();\n\
  home();\n\
  penup();\n\
  wrap(false);\n\
  circle (rad);\n\
  i = 1;\n\
  delay (tier, delayTime);\n\
}\n\
'
dodecahedron_graph ='\
// Dodecahedron Graph -- draw a 2-dimentional graph of a dodecahedron\n\
// graph here describes the connections between vertices, more at\n\
// Wikipedia.com\n\
\n\
//   This would be easier to draw to points on concentric circles\n\
//   This is just lines and not shadable polygons\n\
\n\
function pent(side) {\n\
  var angle2=72-(360-108)/2\n\
  // the sides below are really trigonometric conversions\n\
  // without the trig functions\n\
  var side2 = .4*side\n\
  var angle3 = 80\n\
  var side3 = 1.05 * side\n\
  var angle4 = 40\n\
  var side4 = .5 * side\n\
  var angle5 = 129\n\
  var side5 = 2.65 * side\n\
  for (var i=0; i<5; i++) {\n\
    forward (side)\n\
      right(angle2)\n\
      forward (side2)\n\
        right(angle3)\n\
        forward(side3)\n\
          left(angle4)\n\
          forward(side4)\n\
            left(angle5)\n\
            forward(side5)\n\
            backward(side5)\n\
            right(angle5)\n\
          backward(side4)\n\
          right(angle4)\n\
        backward(side3)\n\
        left(angle3)\n\
        left(angle3)\n\
        forward(side3)\n\
        backward(side3)\n\
        right(angle3)\n\
      backward (side2)\n\
      left(angle2)\n\
    right(72)\n\
  }\n\
}\n\
\n\
function demo() {\n\
  goto (-50,-22)\n\
  right(17)\n\
  pent(50)\n\
  hideturtle()\n\
}\n\
'
dodecahedronGraph ='\
// Dodecahedron Graph -- draw a 2-dimentional graph of a dodecahedron\n\
// graph here describes the connections between vertices, more at\n\
// Wikipedia.com\n\
\n\
//   This would be easier to draw to points on concentric circles\n\
//   This is just lines and not shadable polygons\n\
\n\
function pent(side) {\n\
  var angle2=72-(360-108)/2\n\
  // the sides below are really trigonometric conversions\n\
  // without the trig functions\n\
  var side2 = .4*side\n\
  var angle3 = 80\n\
  var side3 = 1.05 * side\n\
  var angle4 = 40\n\
  var side4 = .5 * side\n\
  var angle5 = 129\n\
  var side5 = 2.65 * side\n\
  for (var i=0; i<5; i++) {\n\
    forward (side)\n\
      right(angle2)\n\
      forward (side2)\n\
        right(angle3)\n\
        forward(side3)\n\
          left(angle4)\n\
          forward(side4)\n\
            left(angle5)\n\
            forward(side5)\n\
            backward(side5)\n\
            right(angle5)\n\
          backward(side4)\n\
          right(angle4)\n\
        backward(side3)\n\
        left(angle3)\n\
        left(angle3)\n\
        forward(side3)\n\
        backward(side3)\n\
        right(angle3)\n\
      backward (side2)\n\
      left(angle2)\n\
    right(72)\n\
  }\n\
}\n\
\n\
function demo() {\n\
  reset()\n\
  goto (-50,-22)\n\
  right(17)\n\
  pent(50)\n\
  hideturtle()\n\
}\n\
'
dragon_curve ='\
//  Dragon Curve -- draw a fractal curve formed by folding a shape onto itself\n\
//  more infomration at wikipedia  https://en.wikipedia.org/wiki/Dragon_curve\n\
\n\
\n\
//*** GLOBALS ***\n\
var gen = 0\n\
var side\n\
\n\
\n\
//*** CONSTANTS ***\n\
\n\
var root2 = Math.sqrt(2)\n\
//  X ↦ X+YF+\n\
//  Y ↦ −FX−Y.\n\
// angle is 90\n\
// start is order * 45°\n\
\n\
\n\
//*** FUNCTIONS ***\n\
\n\
function caption (message) {\n\
  // save your current position, heading, etc.\n\
  var savedX = turtle.pos.x\n\
  var savedY = turtle.pos.y\n\
  var savedHeading = turtle.angle / 2 / Math.PI * 360 //convert radians to degrees\n\
  var savedColor = turtle.color\n\
  var savedWidth = turtle.width\n\
\n\
  goto (minX()+10, minY()+10)\n\
  setheading( 90)\n\
\n\
  // erase what will be in the path\n\
  color ("white")\n\
  width (10)\n\
  forward (maxY() * 2 - 12)\n\
  goto (minX()+10, minY()+5)\n\
  color ("black")\n\
\n\
  setfont( "bold 12px Helvitica,sans-serif")\n\
  write( message)\n\
\n\
  //go back from whence you came\n\
  goto( savedX, savedY)\n\
  setheading( savedHeading)\n\
  color ( savedColor)\n\
  width (savedWidth)\n\
}\n\
\n\
function X (side, gen) {\n\
  if (gen <= 0) {\n\
     forward (side)\n\
  }\n\
  else {\n\
    X(side/root2, gen-1)\n\
    left (90)\n\
    Y(side/root2, gen-1)\n\
    //forward(side/2)\n\
    left (90)\n\
  }\n\
}\n\
\n\
function Y (side, gen) {\n\
  if (gen <= 0) {\n\
    forward (side)\n\
  }\n\
  else {\n\
    right (90)\n\
    //forward (side/root2)\n\
    X (side/root2, gen-1)\n\
    right (90)\n\
    Y (side/root2, gen-1)\n\
  }\n\
}\n\
\n\
\n\
function delayedDragon () {\n\
  reset()\n\
  hideTurtle()\n\
  goto (-side * .4, +side *.2)\n\
  setheading (90+ gen * 45)\n\
  pendown()\n\
  X (side, gen)\n\
  caption( "Dragon curve, generation " + gen)\n\
\n\
  if (gen < 13) {\n\
    gen = gen + 1\n\
  } else {\n\
    gen = 0\n\
  }\n\
  delay( delayedDragon, 3000)\n\
}  \n\
    \n\
\n\
function demo() {\n\
  side = .9 * Math.min(maxX(), 2*maxY())\n\
  gen = 0\n\
  delayedDragon()\n\
}  \n\
'
example ='\
// Example -- example of code\n\
/* Define helper functions here\n\
or write your own functions\n\
including a demo() function\n\
\n\
For example:    */\n\
\n\
\n\
function square (side) {\n\
  var i=0\n\
  while (i<4) {\n\
    forward( side)\n\
    turn(90)\n\
    i=i+1\n\
  }\n\
}\n\
\n\
function demo() {\n\
   reset();\n\
   hideTurtle();\n\
   color("blue");\n\
   var side = 100;\n\
   while (side > 0) {\n\
      square(side);\n\
      right(36);\n\
      side = side - 10;\n\
   }\n\
}\n\
'
fibinoucci ='\
// Fibanochi sequence -- draw a set of squares illustrating a Figanochi sequence\n\
// a Fibanochi sequence is the series 1,1,2,3,5,8,13,21,...\n\
// This defines the Golden Ratio phi.\n\
// it appears in nature as in the nautilus shell, pineapple, sunflower,\n\
// pine cones.\n\
// Originally it was thought to be the rate of reproduction of rabbits.\n\
// More at Wikipedia.com\n\
\n\
function box (side) {\n\
  for (var i = 0; i<4; i++) {\n\
    forward( side)\n\
    right( 90)\n\
  }\n\
  forward( side)\n\
  right( 90)\n\
  forward( side)\n\
}\n\
\n\
function fib(count, side) {\n\
  var fiblist = [1,1]\n\
  var fibcount = 1\n\
  while (fibcount <= count) {\n\
    console.log("fig " + fibcount + " " + fiblist[0] + "," + fiblist[1])\n\
    if (fibcount == 1) {\n\
      box( side)\n\
      console.log("box1")\n\
    }\n\
    if (fibcount == 2) {\n\
      box( side)\n\
      console.log("box2")\n\
    }\n\
    if (fibcount >=3 ) {\n\
      foo = fiblist[0] + fiblist[1]\n\
      box( side * foo)\n\
      fiblist =[fiblist[1], foo]\n\
      console.log("box3")\n\
    }\n\
    fibcount = fibcount + 1\n\
  }\n\
}\n\
\n\
\n\
function demo() {\n\
  reset()\n\
  goto(150,60)\n\
  angle(90)\n\
  hideTurtle()\n\
  fib( 11,4)\n\
}\n\
'
gosper_curve ='\
// Gosper Curve -- draw a space filling curve named after Bill Gosper\n\
// also known as a flow snake (a Spoonerism on snow flake)\n\
// more information at Wikipedia  https://en.wikipedia.org/wiki/Gosper_curve\n\
\n\
// A ↦ A − B − − B + A + + A A + B − \n\
\n\
//*** GLOBALS ***\n\
\n\
var gen = 0\n\
var size = 0\n\
\n\
//*** FUNCTIONS ***\n\
\n\
function caption (message) {\n\
  // save your current position, heading, etc.\n\
  var savedX = turtle.pos.x\n\
  var savedY = turtle.pos.y\n\
  var savedHeading = turtle.angle / 2 / Math.PI * 360 //convert radians to degrees\n\
  var savedColor = turtle.color\n\
  var savedWidth = turtle.width\n\
\n\
  goto (minX()+10, minY()+10)\n\
  setheading( 90)\n\
\n\
  // erase what will be in the path\n\
  color ("white")\n\
  width (10)\n\
  forward (maxY() * 2 - 12)\n\
  goto (minX()+10, minY()+5)\n\
  color ("black")\n\
  setfont( "bold 12px Helvitica,sans-serif")\n\
  write( message)\n\
\n\
  //go back from whence you came\n\
  goto( savedX, savedY)\n\
  setheading( savedHeading)\n\
  color ( savedColor)\n\
  width (savedWidth)\n\
}\n\
\n\
\n\
function A (side, gen) {\n\
  if (gen ===0) {\n\
    forward (side)\n\
  }\n\
  else {\n\
    side = side / Math.sqrt(7)\n\
    A (side, gen-1)\n\
    left (60)\n\
    B (side, gen-1)\n\
    left (120)\n\
    B (side, gen-1)\n\
    right (60)\n\
    A (side, gen-1)\n\
    right (120)\n\
    A (side, gen-1)\n\
    A (side, gen-1)\n\
    right (60)\n\
    B (side, gen-1)\n\
    left (60)\n\
  }\n\
}\n\
\n\
// B ↦ + A − B B − − B − A + + A + B \n\
\n\
function B (side, gen) {\n\
  if (gen ===0) {\n\
    forward (side)\n\
  }\n\
  else {\n\
    side = side / Math.sqrt(7)\n\
    right (60)\n\
    A (side, gen-1)\n\
    left (60)\n\
    B (side, gen-1)\n\
    B (side, gen-1)\n\
    left (120)\n\
    B (side, gen-1)\n\
    left (60)\n\
    A (side, gen-1)\n\
    right (120)\n\
    A (side, gen-1)\n\
    right (60)\n\
    B (side, gen-1)\n\
  }\n\
}\n\
\n\
\n\
function delayDemo () {\n\
  reset()\n\
  hideTurtle()\n\
  size = 1.5 * Math.min(maxX(), maxY())\n\
  goto( .5* size, (.2*gen -.6) * size)\n\
  A( size,gen)\n\
  caption ("Gosper Curve generation " + gen)\n\
  if (gen < 5) {\n\
    gen = gen + 1\n\
  } else {\n\
    gen = 0\n\
  }\n\
  delay( delayDemo,3000)\n\
}\n\
\n\
function demo () {\n\
  gen = 0\n\
  delayDemo()\n\
}\n\
'
graphitti ='\
// Graphitti -- draw randomly placed coloured stripes\n\
\n\
//** Globals **\n\
\n\
var maxX =  imageContext.canvas.width/2;\n\
var maxY =  imageContext.canvas.height/2;\n\
var minX =  -maxX;\n\
var minY =  -maxY;\n\
var maxVelocity = 12;\n\
\n\
\n\
function plotOne() {\n\
  goto(random(minX, maxX), random(minY, maxY));\n\
  color(random(16));\n\
  angle(random(0, 180));\n\
  width(random(1, 20));\n\
  forward(random(10, 30));\n\
}\n\
\n\
function demo () {\n\
  reset()\n\
  animate (plotOne, 20);\n\
}\n\
'
heart ='\
// Heart -- draw open or filled hearts\n\
/*\n\
algorithm:\n\
  start with a square at 45 degrees\n\
  add two half circles on the two upper segments\n\
  clean up the lines\n\
\n\
to make invarient:\n\
  move down 1/(square root 2) or (square root 2)/2\n\
  draw it\n\
  move up by same amount\n\
\n\
to make solid:\n\
  fill the two half circles.\n\
  fill the square by drawing it on one shot\n\
*/\n\
\n\
function oheart(size)\n\
{\n\
  color("red")\n\
  width(4)\n\
  penup()\n\
  backward(.707*size)\n\
  pendown()\n\
  left (45)\n\
  forward(size)\n\
  right (90)\n\
  penup()\n\
  forward (size/2)\n\
  pendown()\n\
  circle(size/2,180,false)\n\
  penup()\n\
  forward (size/2)\n\
  right(90)\n\
  forward (size/2)\n\
  pendown()\n\
  circle(size/2,180,false)\n\
  penup()\n\
  forward (size/2)\n\
  pendown()\n\
  right(90)\n\
  forward (size)\n\
  right(135)\n\
  penup()\n\
  forward(.707*size)\n\
  pendown()\n\
}\n\
\n\
function fheart(size, fcolor)\n\
{\n\
  color(fcolor)\n\
  backward(.707*size)\n\
  left (45)\n\
  forward(size)\n\
  right (90)\n\
  forward (size/2)\n\
  beginShape()\n\
  circle(size/2,180,false)\n\
  fillShape(fcolor)\n\
  forward (size/2)\n\
  right(90)\n\
  forward (size/2)\n\
  beginShape()\n\
  circle(size/2,180,false)\n\
  fillShape(fcolor)\n\
  forward (size/2)\n\
  right(90)\n\
  forward (size)\n\
  beginShape()\n\
  for (i=0;i<4;i++)\n\
  {\n\
    right(90)\n\
    forward(size)\n\
  }\n\
  fillShape(fcolor)\n\
  right(135)\n\
  forward(.707*size)\n\
}\n\
\n\
function heart(size)\n\
{\n\
  color("red")\n\
  width(4)\n\
  penup()\n\
  backward(.707*size)\n\
  pendown()\n\
  left (45)\n\
  forward(size)\n\
  right (90)\n\
  penup()\n\
  forward (size/2)\n\
  pendown()\n\
  beginShape()\n\
  circle(size/2,180,false)\n\
  fillShape("red")\n\
  penup()\n\
  forward (size/2)\n\
  right(90)\n\
  forward (size/2)\n\
  pendown()\n\
  beginShape()\n\
  circle(size/2,180,false)\n\
  fillShape("red")\n\
  penup()\n\
  forward (size/2)\n\
  pendown()\n\
  right(90)\n\
  forward (size)\n\
  beginShape()\n\
  for (i=0;i<4;i++)\n\
  {\n\
    right(90)\n\
    forward(size)\n\
  }\n\
  fillShape()\n\
  right(135)\n\
  penup()\n\
  forward(.707*size)\n\
  pendown()\n\
}\n\
\n\
function demo()\n\
{\n\
  reset()\n\
\n\
  size = 50\n\
  oheart(5 * size)\n\
  fheart(4 * size,"red")\n\
  fheart(3 * size,"white")\n\
  oheart(2 * size)\n\
  fheart(1 * size, "red")\n\
}\n\
'
herring_bone_tessellation ='\
// Herring Bone Tessellation -- tile a space using a herring bone brick laying pattern\n\
\n\
sSide = 15\n\
lSide = 2* sSide \n\
\n\
function vRect( sSide, lSide, fColor) {\n\
  beginShape()\n\
  for (var i=0; i<2; i++) {\n\
    forward( sSide)\n\
    right(90)\n\
    forward( lSide)\n\
    right(90)\n\
  }\n\
  fillShape( fColor)\n\
  forward( sSide)\n\
}\n\
\n\
function hRect( sSide, lSide, fColor) {\n\
  beginShape()\n\
  for (var i=0; i<2; i++) {\n\
    forward( lSide)\n\
    right(90)\n\
    forward( sSide)\n\
    right(90)\n\
  }\n\
  fillShape( fColor)\n\
  forward( lSide)\n\
}\n\
\n\
function demo() {\n\
  reset()\n\
  count = 0\n\
  yB = maxY() + sSide\n\
  xB = minX()\n\
  wrap(false)\n\
  right( 90)\n\
  color("white")\n\
\n\
  s = 50\n\
  while( turtle.pos.y > minY()) {\n\
    goto (xB, yB)\n\
    while( turtle.pos.x < maxX()) {\n\
      pendown()\n\
      hRect(sSide, lSide, "darkred")\n\
      vRect(sSide, lSide, "darkred")\n\
      penup()\n\
      forward( sSide)\n\
    }\n\
    yB = yB - sSide\n\
\n\
    goto (xB - lSide/2, yB)\n\
    while( turtle.pos.x < maxX()) {\n\
      pendown()\n\
      hRect(sSide, lSide, "darkred")\n\
      vRect(sSide, lSide, "darkred")\n\
      penup()\n\
      forward( sSide)\n\
    }\n\
    yB = yB - sSide\n\
\n\
    goto (xB - lSide, yB)\n\
    while( turtle.pos.x < maxX()) {\n\
      pendown()\n\
      hRect(sSide, lSide, "darkred")\n\
      vRect(sSide, lSide, "darkred")\n\
      penup()\n\
      forward( sSide)\n\
    }\n\
    yB = yB - sSide\n\
\n\
    goto (xB - 3/2 * lSide, yB)\n\
    while( turtle.pos.x < maxX()) {\n\
      pendown()\n\
      hRect(sSide, lSide, "darkred")\n\
      vRect(sSide, lSide, "darkred")\n\
      penup()\n\
      forward( sSide)\n\
    }\n\
    yB = yB - sSide\n\
  }\n\
}\n\
'
hexapentakis_truncated_icosahedron_asymmetric_full ='\
// Hexapentakis-Truncated-Icosahedron-Asymmetric full -- full model for glue up\n\
/*\n\
this draws a model for full exapentakis truncated icosahedron.\n\
Print this on card stock. When cutting out leave glue tabs where\n\
appropriate, as they are not shown.\n\
more at Wikipedia.com\n\
*/\n\
\n\
//Global constants\n\
var  centralPentaAngle = 70.72\n\
var  basePentaAngle = 90 - centralPentaAngle/2\n\
var  centralHexaAngle = 58.58\n\
var  baseHexaAngle = 90 - centralHexaAngle/2\n\
\n\
\n\
function penta (side, faceColor) {\n\
  //assume pointing in direction of base and center is above\n\
  // move around point CW\n\
  var pentaSide = .8639 * side\n\
\n\
  for( i=0; i<5; i++) {\n\
    beginShape()\n\
    forward( side)\n\
    right( 180-basePentaAngle)\n\
    forward( pentaSide)\n\
    right( 180-centralPentaAngle)\n\
    forward( pentaSide)\n\
    right( 180-basePentaAngle)\n\
    fillShape(faceColor)\n\
    forward( side)\n\
    right( 180-(2*basePentaAngle))\n\
  }\n\
}\n\
\n\
function hexa (side, faceColor) {\n\
  //assume pointing in direction of base and center is above\n\
  // move around point CW\n\
  var hexaSide = 1.022 * side\n\
\n\
  for( var i=0; i<6; i++) {\n\
    beginShape()\n\
    forward( side)\n\
    right( 180-baseHexaAngle)\n\
    forward( hexaSide)\n\
    right( 180-centralHexaAngle)\n\
    forward( hexaSide)\n\
    right( 180-baseHexaAngle)\n\
    fillShape(faceColor)\n\
    forward( side)\n\
    right( 180-(2*baseHexaAngle))\n\
  }\n\
}\n\
\n\
px = 0\n\
py = 0\n\
pangle = 0\n\
\n\
function savePos () {\n\
  px = turtle.pos.x\n\
  py = turtle.pos.y\n\
  pangle = turtle.angle\n\
}\n\
\n\
function restorePos() {\n\
  turtle.pos.x = px\n\
  turtle.pos.y = py\n\
  turtle.angle = pangle\n\
}\n\
\n\
p2x = 0\n\
p2y = 0\n\
p2angle = 0\n\
\n\
function savePos2 () {\n\
  p2x = turtle.pos.x\n\
  p2y = turtle.pos.y\n\
  p2angle = turtle.angle\n\
}\n\
\n\
function restorePos2() {\n\
  turtle.pos.x = p2x\n\
  turtle.pos.y = p2y\n\
  turtle.angle = p2angle\n\
}\n\
\n\
p3x = 0\n\
p3y = 0\n\
p3angle = 0\n\
\n\
function savePos3 () {\n\
  p3x = turtle.pos.x\n\
  p3y = turtle.pos.y\n\
  p3angle = turtle.angle\n\
}\n\
\n\
function restorePos3() {\n\
  turtle.pos.x = p3x\n\
  turtle.pos.y = p3y\n\
  turtle.angle = p3angle\n\
}\n\
\n\
p4x = 0\n\
p4y = 0\n\
p4angle = 0\n\
\n\
function savePos4 () {\n\
  p4x = turtle.pos.x\n\
  p4y = turtle.pos.y\n\
  p4angle = turtle.angle\n\
}\n\
\n\
function restorePos4() {\n\
  turtle.pos.x = p4x\n\
  turtle.pos.y = p4y\n\
  turtle.angle = p4angle\n\
}\n\
\n\
function demo() {\n\
  reset()\n\
  side = .13* Math.min(maxX(), maxY())\n\
  goto (1.8*side,0)\n\
  right(80)\n\
  penta (side, "green")\n\
  right( (2*basePentaAngle))\n\
  for (var i=0; i<5; i++) {\n\
    savePos()\n\
    // start with the base opposite of where you are now\n\
    right(2*baseHexaAngle)\n\
    forward(side)\n\
    left(180-2*baseHexaAngle)\n\
    forward(side)\n\
    left(180-2*baseHexaAngle)\n\
    forward(side)\n\
    right(180)\n\
\n\
    // draw another hexa out from where the first will be\n\
    savePos2()\n\
    forward(side)\n\
    left(180-2*baseHexaAngle)\n\
    forward(side)\n\
    left(180-2*baseHexaAngle)\n\
    forward(side)\n\
    left(180-2*baseHexaAngle)\n\
    forward(side)\n\
    right(180)\n\
    savePos3()\n\
    hexa (side, "red")\n\
    restorePos3()\n\
\n\
    //draw a penta outside of the last hexa\n\
    forward(side)\n\
    left( 180-2*basePentaAngle)\n\
    forward(side)\n\
    left( 180-2*basePentaAngle)\n\
    forward(side)\n\
    left( 180)\n\
    savePos4()\n\
    penta( side, "green")\n\
\n\
    // draw a hexa touching last penta\n\
\n\
    restorePos3()\n\
    forward( side)\n\
    left(180-2*basePentaAngle-2*baseHexaAngle)\n\
    forward( side)\n\
    left( 180-2*baseHexaAngle)\n\
    forward( side)\n\
    left( 180-2*baseHexaAngle)\n\
    forward( side)\n\
    left( 180)\n\
    hexa( side, "yellow")\n\
\n\
    if (i == 0) {\n\
    restorePos4()\n\
    forward( side)\n\
    left( 180 - 2* baseHexaAngle)\n\
    forward( side)\n\
    left( 180 - 2*baseHexaAngle)\n\
    forward( side)\n\
    right( 180)\n\
    savePos4()\n\
    hexa( side, "lightblue")\n\
   \n\
\n\
    // draw a penta to oppose first\n\
      left(-2*baseHexaAngle)\n\
      forward( side)\n\
      left( 180-2*baseHexaAngle)\n\
      savePos4()\n\
      penta(side, "green")\n\
      restorePos4()\n\
      forward(side)\n\
      savePos4()\n\
      for (var j=1; j<5; j++) {\n\
         restorePos4()\n\
         right( 180 - 2*basePentaAngle)\n\
         forward( side)\n\
         savePos4()\n\
         left(180 - 2* baseHexaAngle)\n\
         forward( side)\n\
         left(180)\n\
         hexa( side, "lightblue")\n\
      }\n\
\n\
    }\n\
\n\
\n\
    restorePos2()\n\
\n\
    // draw a penta on the free face one away\n\
    forward( side)\n\
    right( 180-2*baseHexaAngle)\n\
    forward( side)\n\
    left( 180-2*basePentaAngle)\n\
    forward(side)\n\
    left( 180-2*basePentaAngle)\n\
    forward(side)\n\
    left( 180)\n\
    penta(side, "green")\n\
    restorePos2()\n\
\n\
    hexa (side, "blue")\n\
    restorePos()\n\
    forward( side)\n\
    left(180-(2*basePentaAngle))\n\
  }\n\
}\n\
'
hexapentakis_truncated_icosahedron_symmetric_full ='\
// Hexapentakis-Truncated-Icosahedron Symmetric full -- full model for glue up\n\
/*\n\
this draws a modle for full hexapentakis truncated icosahedron\n\
Print this on card stock. When cutting out leave glue tabs where appropriate,\n\
as they are not shown.\n\
more at Wikipedia.com\n\
*/\n\
\n\
//Global constants\n\
var centralPentaAngle = 70.72\n\
var basePentaAngle = 90 - centralPentaAngle/2\n\
var centralHexaAngle = 58.58\n\
var baseHexaAngle = 90 - centralHexaAngle/2\n\
var baseAngle = 90 - centralPentaAngle/2\n\
\n\
\n\
function penta (side, faceColor) {\n\
  //assume pointing in direction of base and center is above\n\
  // move around point CW\n\
  var pentaSide = .8639 * side\n\
\n\
  for( i=0; i<5; i++) {\n\
    beginShape()\n\
    forward( side)\n\
    right( 180-baseAngle)\n\
    forward( pentaSide)\n\
    right( 180-centralPentaAngle)\n\
    forward( pentaSide)\n\
    right( 180-basePentaAngle)\n\
    fillShape(faceColor)\n\
    forward( side)\n\
    right( 180-(2*basePentaAngle))\n\
  }\n\
}\n\
\n\
function hexa (side, faceColor) {\n\
  //assume pointing in direction of base and center is above\n\
  // move around point CW\n\
  var hexaSide = 1.022 * side\n\
\n\
  for( var i=0; i<6; i++) {\n\
    beginShape()\n\
    forward( side)\n\
    right( 180-baseHexaAngle)\n\
    forward( hexaSide)\n\
    right( 180-centralHexaAngle)\n\
    forward( hexaSide)\n\
    right( 180-baseHexaAngle)\n\
    fillShape(faceColor)\n\
    forward( side)\n\
    right( 180-(2*baseHexaAngle))\n\
  }\n\
}\n\
\n\
px = 0\n\
py = 0\n\
pangle = 0\n\
\n\
function savePos () {\n\
  px = turtle.pos.x\n\
  py = turtle.pos.y\n\
  pangle = turtle.angle\n\
}\n\
\n\
function restorePos() {\n\
  turtle.pos.x = px\n\
  turtle.pos.y = py\n\
  turtle.angle = pangle\n\
}\n\
\n\
p2x = 0\n\
p2y = 0\n\
p2angle = 0\n\
\n\
function savePos2 () {\n\
  p2x = turtle.pos.x\n\
  p2y = turtle.pos.y\n\
  p2angle = turtle.angle\n\
}\n\
\n\
function restorePos2() {\n\
  turtle.pos.x = p2x\n\
  turtle.pos.y = p2y\n\
  turtle.angle = p2angle\n\
}\n\
\n\
p3x = 0\n\
p3y = 0\n\
p3angle = 0\n\
\n\
function savePos3 () {\n\
  p3x = turtle.pos.x\n\
  p3y = turtle.pos.y\n\
  p3angle = turtle.angle\n\
}\n\
\n\
function restorePos3() {\n\
  turtle.pos.x = p3x\n\
  turtle.pos.y = p3y\n\
  turtle.angle = p3angle\n\
}\n\
\n\
p4x = 0\n\
p4y = 0\n\
p4angle = 0\n\
\n\
function savePos4 () {\n\
  p4x = turtle.pos.x\n\
  p4y = turtle.pos.y\n\
  p4angle = turtle.angle\n\
}\n\
\n\
function restorePos4() {\n\
  turtle.pos.x = p4x\n\
  turtle.pos.y = p4y\n\
  turtle.angle = p4angle\n\
}\n\
\n\
function demo() {\n\
  reset()\n\
  side = .13* Math.min(maxX(), maxY())\n\
  goto (0,0)\n\
  right(80)\n\
  penta (side, "green")\n\
  right( (2*basePentaAngle))\n\
  for (var i=0; i<5; i++) {\n\
    savePos()\n\
    // start with the base opposite of where you are now\n\
    right(2*baseHexaAngle)\n\
    forward(side)\n\
    left(180-2*baseHexaAngle)\n\
    forward(side)\n\
    left(180-2*baseHexaAngle)\n\
    forward(side)\n\
    right(180)\n\
\n\
    // draw another hexa out from where the first will be\n\
    savePos2()\n\
    forward(side)\n\
    left(180-2*baseHexaAngle)\n\
    forward(side)\n\
    left(180-2*baseHexaAngle)\n\
    forward(side)\n\
    left(180-2*baseHexaAngle)\n\
    forward(side)\n\
    right(180)\n\
    savePos3()\n\
    hexa (side, "red")\n\
    restorePos3()\n\
\n\
    //draw a penta outside of the last hexa\n\
    forward(side)\n\
    left( 180-2*basePentaAngle)\n\
    forward(side)\n\
    left( 180-2*basePentaAngle)\n\
    forward(side)\n\
    left( 180)\n\
    savePos4()\n\
    penta( side, "green")\n\
\n\
    // draw a hexa touching last penta\n\
\n\
    restorePos3()\n\
    forward( side)\n\
    left(180-2*basePentaAngle-2*baseHexaAngle)\n\
    forward( side)\n\
    left( 180-2*baseHexaAngle)\n\
    forward( side)\n\
    left( 180-2*baseHexaAngle)\n\
    forward( side)\n\
    left( 180)\n\
    hexa( side, "yellow")\n\
\n\
    restorePos4()\n\
    forward( side)\n\
    left( 180 - 2* baseHexaAngle)\n\
    forward( side)\n\
    left( 180 - 2*baseHexaAngle)\n\
    forward( side)\n\
    right( 180)\n\
    savePos4()\n\
    hexa( side, "lightblue")\n\
   \n\
\n\
    // draw a penta to oppose first\n\
    //restorePos4()\n\
    if (i == 0) {\n\
      left(-2*baseHexaAngle)\n\
      forward( side)\n\
      left( 180-2*baseHexaAngle)\n\
      //forward( side)\n\
      //right( 180-2*baseHexaAngle)\n\
      //forward(side)\n\
      penta(side, "green")\n\
    }\n\
\n\
\n\
    restorePos2()\n\
\n\
    // draw a penta on the free face one away\n\
    forward( side)\n\
    right( 180-2*baseHexaAngle)\n\
    forward( side)\n\
    left( 180-2*basePentaAngle)\n\
    forward(side)\n\
    left( 180-2*basePentaAngle)\n\
    forward(side)\n\
    left( 180)\n\
    penta(side, "green")\n\
    restorePos2()\n\
\n\
    hexa (side, "blue")\n\
    restorePos()\n\
    forward( side)\n\
    left(180-(2*basePentaAngle))\n\
  }\n\
}\n\
'
hexapentakis_truncated_icosahedron_symmetric_half ='\
// Hexapentakis Truncated Icosahedron half -- half model for glue up\n\
/*\n\
This draws a model for half a hexapentakis truncated icosahedron\n\
Print two of these on card stock. When cutting out, leave glue tabs\n\
where appropriate, as they are not shown.\n\
More at Wikipedia.com\n\
*/\n\
\n\
\n\
//Global constants\n\
var  centralPentaAngle = 70.72\n\
var  basePentaAngle = 90 - centralPentaAngle/2\n\
var  centralHexaAngle = 58.58\n\
var  baseHexaAngle = 90 - centralHexaAngle/2\n\
\n\
\n\
function penta (side, faceColor) {\n\
  //assume pointing in direction of base and center is above\n\
  // move around point CW\n\
  var pentaSide = .8639 * side\n\
\n\
  for( i=0; i<5; i++) {\n\
    beginShape()\n\
    forward( side)\n\
    right( 180-basePentaAngle)\n\
    forward( pentaSide)\n\
    right( 180-centralPentaAngle)\n\
    forward( pentaSide)\n\
    right( 180-basePentaAngle)\n\
    fillShape(faceColor)\n\
    forward( side)\n\
    right( 180-(2*basePentaAngle))\n\
  }\n\
}\n\
\n\
function hexa (side, faceColor) {\n\
  //assume pointing in direction of base and center is above\n\
  // move around point CW\n\
  var hexaSide = 1.022 * side\n\
\n\
  for( var i=0; i<6; i++) {\n\
    beginShape()\n\
    forward( side)\n\
    right( 180-baseHexaAngle)\n\
    forward( hexaSide)\n\
    right( 180-centralHexaAngle)\n\
    forward( hexaSide)\n\
    right( 180-baseHexaAngle)\n\
    fillShape(faceColor)\n\
    forward( side)\n\
    right( 180-(2*baseHexaAngle))\n\
  }\n\
}\n\
\n\
px = 0\n\
py = 0\n\
pangle = 0\n\
\n\
function savePos () {\n\
  px = turtle.pos.x\n\
  py = turtle.pos.y\n\
  pangle = turtle.angle\n\
}\n\
\n\
function restorePos() {\n\
  turtle.pos.x = px\n\
  turtle.pos.y = py\n\
  turtle.angle = pangle\n\
}\n\
\n\
p2x = 0\n\
p2y = 0\n\
p2angle = 0\n\
\n\
function savePos2 () {\n\
  p2x = turtle.pos.x\n\
  p2y = turtle.pos.y\n\
  p2angle = turtle.angle\n\
}\n\
\n\
function restorePos2() {\n\
  turtle.pos.x = p2x\n\
  turtle.pos.y = p2y\n\
  turtle.angle = p2angle\n\
}\n\
\n\
function demo() {\n\
  reset()\n\
  hideturtle()\n\
  side = .23 * Math.min(maxX(), maxY())\n\
  goto (-.6* side, -.5* side)\n\
  right(18)\n\
  penta (side, "green")\n\
  right( (2*basePentaAngle))\n\
  for (var i=0; i<5; i++) {\n\
    savePos()\n\
    // start with the base opposite of where you are now\n\
    right(2*baseHexaAngle)\n\
    forward(side)\n\
    left(180-2*baseHexaAngle)\n\
    forward(side)\n\
    left(180-2*baseHexaAngle)\n\
    forward(side)\n\
    right(180)\n\
\n\
    // draw another hexa out from where the first will be\n\
    savePos2()\n\
    forward(side)\n\
    left(180-2*baseHexaAngle)\n\
    forward(side)\n\
    left(180-2*baseHexaAngle)\n\
    forward(side)\n\
    left(180-2*baseHexaAngle)\n\
    forward(side)\n\
    right(180)\n\
    hexa (side, "red")\n\
\n\
    restorePos2()\n\
\n\
    // draw a penta on the free face one away\n\
    forward( side)\n\
    right( 180-2*baseHexaAngle)\n\
    forward( side)\n\
    left( 180-2*basePentaAngle)\n\
    forward(side)\n\
    left( 180-2*basePentaAngle)\n\
    forward(side)\n\
    left( 180)\n\
    penta(side, "green")\n\
    restorePos2()\n\
\n\
    hexa (side, "blue")\n\
    restorePos()\n\
    forward( side)\n\
    left(180-(2*basePentaAngle))\n\
  }\n\
}\n\
'
hex_tessellation ='\
// Hexagon Tessellation -- tile a surface with hexagons\n\
\n\
function hexagon (side) {\n\
  penup();\n\
  forward(side);\n\
  right(120);\n\
  pendown();\n\
  repeat (6, function () {\n\
    forward(side);\n\
    right(60);\n\
  })\n\
}\n\
\n\
function repeatToRight (side) {\n\
  while (turtle.pos.x < maxX()) {\n\
    hexagon(side);\n\
    penup();\n\
    forward(side * 2);\n\
    left(120);\n\
    pendown();\n\
  }\n\
}\n\
\n\
function repeatToLeft(side) {\n\
  while (turtle.pos.x > minX())\n\
   {\n\
    hexagon(side);\n\
    penup();\n\
    forward(side * 2);\n\
    left(120);\n\
    pendown();\n\
  }\n\
}\n\
\n\
function demo() {\n\
  \n\
  side = 50;\n\
  \n\
  \n\
  reset();\n\
  wrap(false);\n\
  width(1);\n\
  goto(minX()-1, maxY()-1);\n\
  \n\
  while (turtle.pos.y > minY()) {\n\
    repeatToRight(side); // draw a row of hexagons\n\
  \n\
    //advance to next row on right side\n\
    penup();\n\
    left(120);\n\
    forward(side);\n\
    left(60);\n\
    forward(side)\n\
    pendown();\n\
  \n\
    repeatToLeft (side);  // draw a row of hexagons\n\
  \n\
    //advance on next row on left side\n\
    penup();\n\
    left(60);\n\
    forward(side);\n\
    right(60);\n\
    forward(side);\n\
    right(180);\n\
    pendown();\n\
    draw();\n\
  }\n\
}\n\
'
hilbert_curve ='\
// Hilbert Curve -- draw a space filling fractal curve described by David Hilbert\n\
// more information at Wikipedia  https://en.wikipedia.org/wiki/Hilbert_curve\n\
\n\
// A → − B F + A F A + F B −\n\
\n\
\n\
//*** GLOBALS ***\n\
var gen = 0\n\
\n\
\n\
//*** FUNCTIONS ***\n\
\n\
function caption (message) {\n\
  // save your current position, heading, etc.\n\
  var savedX = turtle.pos.x\n\
  var savedY = turtle.pos.y\n\
  var savedHeading = turtle.angle / 2 / Math.PI * 360 //convert radians to degrees\n\
  var savedColor = turtle.color\n\
  var savedWidth = turtle.width\n\
\n\
  goto (minX()+10, minY()+10)\n\
  setheading( 90)\n\
\n\
  // erase wha will be in the path\n\
  color ("white")\n\
  width (10)\n\
  forward (maxY() * 2 - 12)\n\
  goto (minX()+10, minY()+5)\n\
  color ("black")\n\
  setfont("bold 12pt Ariel,sans-serif")\n\
  write( message)\n\
\n\
  //go back from whence you came\n\
  goto( savedX, savedY)\n\
  setheading( savedHeading)\n\
  color ( savedColor)\n\
  width (savedWidth)\n\
}\n\
\n\
\n\
function A (side,gen) {\n\
  if (gen === 0) {\n\
    left (90)\n\
    forward (side)\n\
    right (90)\n\
    forward (side)\n\
    right (90)\n\
    forward (side)\n\
    left (90)\n\
  }\n\
  else {\n\
    left (90)\n\
    B (side, gen-1)\n\
    forward (side)\n\
    right (90)\n\
    A (side, gen-1)\n\
    forward (side)\n\
    A (side, gen-1)\n\
    right (90)\n\
    forward (side)\n\
    B (side, gen-1)\n\
    left (90)\n\
  }\n\
}\n\
//  B → + A F − B F B − F A +\n\
//Here, "F" means "draw forward", "−" means "turn left 90°", "+" means "turn right 90°" (see turtle graphics), and "A" and "B" are ignored during drawing.\n\
\n\
function B (side,gen) {\n\
  if (gen === 0) {\n\
    right (90)\n\
    forward (side)\n\
    left (90)\n\
    forward (side)\n\
    left (90)\n\
    forward (side)\n\
    right (90)\n\
  }\n\
  else {\n\
    right (90)\n\
    A (side, gen-1)\n\
    forward (side)\n\
    left (90)\n\
    B (side, gen-1)\n\
    forward (side)\n\
    B (side, gen-1)\n\
    left (90)\n\
    forward (side)\n\
    A (side, gen-1)\n\
    right (90)\n\
  }\n\
}\n\
\n\
\n\
function delayedHilbert () {\n\
  reset()\n\
  wrap(false)\n\
\n\
  // targeting 80% of window\n\
  size = .80 * Math.min( maxX(),maxY())*2\n\
  var side = 10\n\
\n\
  /*overall side seems to be: gen 0: 1\n\
    gen 1: 3 (2*gen 0 + 1)\n\
    gen 2: 7 (2*gen 1 + 1)\n\
    gen 3: 15(2*gen 2 +1)\n\
   */  var overallSides = 1\n\
  for (i=1; i<=gen; i++)\n\
    overallSides = 2*overallSides + 1\n\
  side = size/overallSides\n\
  goto( overallSides/2*side,-overallSides/2*side)\n\
  A (side, gen)\n\
  caption( "Hilbert curve, generation " + gen)\n\
\n\
  if (gen < 5) {\n\
    gen = gen + 1\n\
  } else {\n\
    gen = 0\n\
  }\n\
  delay( delayedHilbert, 3000)\n\
}\n\
\n\
\n\
function demo () {\n\
  gen = 0\n\
  delayedHilbert()\n\
}\n\
'
hirschhorn_tiles ='\
// Hircshhorn Tiles -- Hirschhorn 6-fold-rotational symmetry pentagonal tiling\n\
\n\
\n\
// CONSTRAINTS\n\
// six ang0 = 360\n\
//ang0 + ang1 + ang4 = 360\n\
//ang1 + ang3 + ang3 = 360\n\
//ang2 + ang4 + ang4 = 360\n\
//ang0 + ang3 = ang1 ... about the inner circle\n\
//ang2+ ang3 + ang2 + ang3 = 360\n\
//  restated: ang2 + ang3 = 180\n\
//\n\
//ang0 = 60\n\
//ang1 = ang3 + 60\n\
//3*ang3 = 300\n\
//ang3 = 100\n\
//ang2 = 180 - ang3 = 180-100 = 80\n\
//ang1 = 360 - 2*ang3 = 360 - 200 = 160\n\
//ang4 = 360 - ang0 = ang1 = 360 - 60 - 160 = 140\n\
\n\
//sides\n\
//side0 = side4\n\
//side0 = side3\n\
//side1 = side4\n\
//side2 = side3\n\
//side1 = side3\n\
// this means that\n\
// side0 = side4 = side3 = side2 = side1... equalateral\n\
\n\
ang0 = 360/6 //point angle\n\
ang1 = 160\n\
ang2 = 80\n\
ang3 = 100\n\
ang4 = 140\n\
CCW = true\n\
CW = false\n\
\n\
angles = [ang0, ang1, ang2, ang3, ang4 ]\n\
//angles = [60, 160, 80, 100, 140 ]\n\
\n\
fColors = [\n\
           "yellow",\n\
           "orange",\n\
           "lime",\n\
           "red",\n\
           "purple",\n\
           "cyan",\n\
           "cyan",\n\
           "blue",\n\
           "blue",\n\
           "brown",\n\
           "brown",\n\
           "brown",\n\
           "tan",\n\
           "tan",\n\
           "tan",\n\
           "aqua",\n\
           "aqua",\n\
           "aqua",\n\
           "aqua",\n\
           "salmon",\n\
           "salmon",\n\
           "salmon",\n\
           "salmon",\n\
           "gray",\n\
           "gray",\n\
           "gray",\n\
           "gray",\n\
           "gray",\n\
           "black",\n\
           "black",\n\
           "black",\n\
           "black",\n\
           "black",\n\
           ]\n\
/*\n\
fColors = [\n\
           "wheat",\n\
           "tan",\n\
           "tan",\n\
           "wheat",\n\
           "tan",\n\
           "wheat",\n\
           "wheat",\n\
           "tan",\n\
           "tan",\n\
           "wheat",\n\
           "wheat",\n\
           "wheat",\n\
           "tan",\n\
           "tan",\n\
           "tan",\n\
           "wheat",\n\
           "wheat",\n\
           "wheat",\n\
           "wheat",\n\
           "tan",\n\
           "tan",\n\
           "tan",\n\
           "tan",\n\
           "gray",\n\
           "gray",\n\
           "gray",\n\
           "gray",\n\
           "gray",\n\
           "black",\n\
           "black",\n\
           "black",\n\
           "black",\n\
           "black",\n\
           ]\n\
*/\n\
colorlayer = 0\n\
\n\
function pentagon(side, fColor) {\n\
  // direction of the point\n\
  // invariant\n\
  beginShape()\n\
  left( ang0/2)\n\
  forward( side)\n\
  right( 180 - ang1)\n\
  forward( side)\n\
  right( 180 - ang2)\n\
  forward( side)\n\
  right( 180 - ang3)\n\
  forward( side)\n\
  right( 180 - ang4)\n\
  forward( side)\n\
  right( 180 - ang0/2)\n\
  fillShape( fColor)\n\
}\n\
\n\
function p(pNum, ccw, side, fColor) {\n\
  if (ccw) {\n\
    r = -1\n\
  } else {\n\
    r = 1\n\
  }\n\
  beginShape()\n\
  left( angles[pNum]/2)\n\
  for (var i=1; i<5; i++) {\n\
    forward( side)\n\
    //write( angles[(i+pNum)%5])\n\
    right( 180 - angles[(5+r*i+pNum)%5])  \n\
  }\n\
  forward( side)\n\
  right( 180 - angles[pNum]/2)\n\
  fillShape( fColor)\n\
}\n\
\n\
function hirchhorn(side) {\n\
  for (var i=0; i<6; i++) {\n\
    //pentagon( s, fColors[colorlayer])\n\
    p( 0, CW, side, fColors[colorlayer])\n\
    left( 60)\n\
  }\n\
  colorlayer++\n\
\n\
  left(30)\n\
  for (var i=0; i<6; i++) {\n\
    forward( side)\n\
    left( 10)\n\
    //pentagon( s, fColors[colorlayer])\n\
    p( 0, CW, side, fColors[colorlayer])\n\
    right( 10)\n\
    backward( side)\n\
    left( 60)\n\
  }\n\
  colorlayer++\n\
\n\
  for (var i=0; i<6; i++) {\n\
    forward( side)\n\
    right( 180 - ang1)\n\
    forward( side)\n\
    left( 180 - ang4 - ang4/2 )\n\
\n\
    p ( 4, 0, side, fColors[colorlayer])\n\
    right( 180 - ang4 - ang4/2 )\n\
    backward( side)\n\
    left( 180 - ang1)\n\
    backward(side)\n\
    left( 60)\n\
  }\n\
  colorlayer++\n\
  \n\
  forward( side)\n\
  right( 180 - ang1)\n\
  forward( side)\n\
  left( 180 - ang4)\n\
  forward( side)\n\
  left( 180 - ang3 - ang0/2)\n\
  \n\
  cl = colorlayer\n\
  for( var i=0; i<18; i++) {\n\
    colorlayer = cl\n\
    p( 0, CCW, side, fColors[colorlayer])\n\
    colorlayer++\n\
    right( ang0/2)\n\
    forward( side)\n\
    left( 180 - ang1 - ang3/2)\n\
    p( 3, CCW, side, fColors[colorlayer])\n\
    colorlayer++\n\
    right( ang3/2)\n\
\n\
    forward(side)\n\
    left( 180- ang4 - ang0/2)\n\
    p( 0, CW, side, fColors[colorlayer])\n\
    colorlayer++\n\
\n\
    left( ang0/2)\n\
    forward( side)\n\
    left( 180 - ang0)\n\
    forward( side)\n\
    right( 180 - ang0/2)\n\
    p( 0, CW, side, fColors[colorlayer])//purple\n\
    colorlayer++\n\
\n\
    left( ang0/2)\n\
    forward( side)\n\
    right( 180- ang1)\n\
    forward( side)\n\
    right( 180 - ang2 - ang2/2)\n\
    p( 2, CCW, side, fColors[colorlayer])\n\
    colorlayer++\n\
\n\
    right( ang2/2)\n\
    forward( side)\n\
    left( ang2/2)\n\
    p( 2, CCW, side, fColors[colorlayer])\n\
    colorlayer++\n\
\n\
    right( ang2/2)\n\
    forward( side)\n\
    left( 180 - ang3)\n\
    forward( side)\n\
    left( 180 - ang4 - ang0/2)\n\
    p( 0, CW, side, fColors[colorlayer])\n\
    colorlayer++\n\
\n\
    left( ang0/2)\n\
    forward( side)\n\
    left( 180 - ang0)\n\
    forward( side)\n\
    right( 180 - ang0/2)\n\
    p( 0, CW, side, fColors[colorlayer])\n\
    colorlayer++\n\
\n\
    left( ang0/2)\n\
    forward( side)\n\
    left( 180 - ang0)\n\
    forward( side)\n\
    right( 180 - ang0/2)\n\
    p( 0, CW, side, fColors[colorlayer])\n\
    colorlayer++\n\
\n\
    left( ang0/2)\n\
    forward( side)\n\
    right( 180 - ang1)\n\
    forward( side)\n\
    right( 180 - ang2 - ang2/2)\n\
    p( 2, CCW, side, fColors[colorlayer])\n\
    colorlayer++\n\
\n\
    right( ang2/2)\n\
    forward( side)\n\
    left( ang2/2)\n\
    p( 2, CCW, side, fColors[colorlayer])\n\
    colorlayer++\n\
\n\
    right( ang2/2)\n\
    forward( side)\n\
    left( ang2/2)\n\
    p( 2, CCW, side, fColors[colorlayer])\n\
    colorlayer++\n\
\n\
    right( ang2/2)\n\
    forward( side)\n\
    left( ang2)\n\
    forward( side)\n\
    left( 180 - ang4 - ang0/2)\n\
    p( 0, CW, side, fColors[colorlayer])\n\
    colorlayer++\n\
\n\
    left( ang0/2)\n\
    forward( side)\n\
    left( 180 - ang0)\n\
    forward( side)\n\
    right( 180 - ang0/2)\n\
    p( 0, CW, side, fColors[colorlayer])\n\
    colorlayer++\n\
\n\
    left( ang0/2)\n\
    forward( side)\n\
    left( 180 - ang0)\n\
    forward( side)\n\
    right( 180 - ang0/2)\n\
    p( 0, CW, side, fColors[colorlayer])\n\
    colorlayer++\n\
\n\
    left( ang0/2)\n\
    forward( side)\n\
    left( 180 - ang0)\n\
    forward( side)\n\
    right( 180 - ang0/2)\n\
    p( 0, CW, side, fColors[colorlayer])\n\
    colorlayer++\n\
\n\
    left( ang0/2)\n\
    forward( side)\n\
    right( 180 - ang1)\n\
    forward( side)\n\
    right( 180 - ang2 - ang2/2)\n\
    p( 2, CCW, side, fColors[colorlayer])\n\
    colorlayer++\n\
\n\
    right( ang2/2)\n\
    forward( side)\n\
    left( ang2/2)\n\
    p( 2, CCW, side, fColors[colorlayer])\n\
    colorlayer++\n\
\n\
    right( ang2/2)\n\
    forward( side)\n\
    left( ang2/2)\n\
    p( 2, CCW, side, fColors[colorlayer])\n\
    colorlayer++\n\
\n\
    right( ang2/2)\n\
    forward( side)\n\
    left( ang2/2)\n\
    p( 2, CCW, side, fColors[colorlayer])\n\
    colorlayer++\n\
\n\
    // and back again\n\
    right( ang2/2)\n\
    forward( side)\n\
    right( 180 - ang3)\n\
\n\
    forward( side)\n\
    right( 180 - ang4)\n\
    forward( side)\n\
\n\
    right( 180 - ang0 - ang4)\n\
    forward( side)\n\
    right( 180 - ang3 - ang3)\n\
    forward( side)\n\
    right( 180 - ang4)\n\
    forward( side)\n\
\n\
    right( 180 - ang0 - ang4)\n\
    forward( side)\n\
    right( 180 - ang3 - ang3)\n\
    forward( side)\n\
    right( 180 - ang4)\n\
    forward( side)\n\
\n\
    right( 180 - ang0 - ang4)\n\
    forward( side)\n\
\n\
    right( 180 - ang3 - ang1)\n\
    forward( side)\n\
\n\
    right( 180 - ang0)\n\
    forward( side)\n\
    right( 180 - ang4 - ang0/2)\n\
\n\
  }\n\
  \n\
}\n\
\n\
function demo() {\n\
  reset()\n\
  wrap(false)\n\
  size = .07* Math.min(maxX(), maxY())\n\
  hirchhorn(size)\n\
}\n\
'
home_plate_tessellation ='\
// Home Plate Tessellation -- tile a space using simple pentagon\n\
//\n\
// this pattern could be the same as a hexagonal pattern with the hexagons\n\
// split into two halves\n\
//\n\
// For more pentagonal tessellations see wikipedia\n\
\n\
colors = ["red", "white", "blue", "yellow", "green"]\n\
\n\
function pentUp( side, fColor) {\n\
  beginShape()\n\
  forward( side)\n\
  left( 90)\n\
  forward( side/2)\n\
  left( 45)\n\
  forward( side * .5 * Math.sqrt(2))\n\
  left( 90)\n\
  forward( side * .5 * Math.sqrt(2))\n\
  left( 45)\n\
  forward( side/2)\n\
  left(90)\n\
  fillShape( fColor)\n\
}\n\
\n\
\n\
function pentDown( side, fColor) {\n\
  beginShape()\n\
  forward( side)\n\
  right( 90)\n\
  forward( side/2)\n\
  right( 45)\n\
  forward( side * .5 * Math.sqrt(2))\n\
  right( 90)\n\
  forward( side * .5 * Math.sqrt(2))\n\
  right( 45)\n\
  forward( side/2)\n\
  right(90)\n\
  fillShape( fColor)\n\
}\n\
\n\
\n\
// nextColor could be completely random, if desired\n\
function nextColor() { \n\
  c = colors[ count % colors.length]\n\
  count = count + 1\n\
  return c\n\
}\n\
\n\
function demo() {\n\
  reset()\n\
  count = 0\n\
  s = 50\n\
  rowOffset = s/3 // offset between rows\n\
  wrap(false)\n\
  goto (minX(), maxY())\n\
  right( 90)\n\
\n\
  s = 50\n\
  while (turtle.pos.y > minY()) {\n\
  while (turtle.pos.x < maxX()) {\n\
    pentDown(s, nextColor())\n\
    forward(s)\n\
  }\n\
  right(90)\n\
  forward( 3/2*s)\n\
  right(90)\n\
  backward(s/2)\n\
  while (turtle.pos.x > minX()) {\n\
    pentDown(s, nextColor())\n\
    forward(s)\n\
  }\n\
  left(180)\n\
  }\n\
}\n\
'
icosahedron_graph ='\
// Icosahedron Graph -- draw a two-dimensional graph of an icodahedron\n\
// graph here describes the connections between vertices, more at\n\
// Wikipedia.com\n\
\n\
function pent(side) {\n\
  // the below side variable are doing trigonometry without\n\
  // the trig functions. Values found emperically.\n\
  var angle2=180-(180-72)/2\n\
  var side2 = 1.18*side\n\
  var angle3 = 60\n\
  var side3 = side2\n\
  var angle4 = 156.5\n\
  var side4 = 2.15 * side\n\
  var angle5 = 31\n\
  var side5 = 1.27 * side\n\
  for (var i=0; i<5; i++) {\n\
    color("black")\n\
    forward (side)\n\
      left(angle2)\n\
\n\
      color("red")\n\
      right(angle3)\n\
      forward(side3)\n\
      backward(side3)\n\
      left(angle3)\n\
\n\
      color ("black")\n\
      forward(side2)\n\
\n\
      color("blue")\n\
      right(180-angle3)\n\
      forward(side3)\n\
\n\
        left(angle4)\n\
\n\
        right(angle5)\n\
        forward(side5)\n\
        backward(side5)\n\
        left(angle5)\n\
\n\
        forward(side4)\n\
 \n\
        right(180-angle5)\n\
        forward(side5)\n\
        backward(side5)\n\
        left(180-angle5)\n\
\n\
\n\
        backward(side4)\n\
        right(angle4)\n\
\n\
      backward(side3)\n\
      left(180-angle3)\n\
\n\
      color ("black")\n\
      backward(side2)\n\
      right(angle2)\n\
\n\
    backward(side)\n\
    turn(72)\n\
  }\n\
  circle(2.13*side)\n\
}\n\
\n\
function demo() {\n\
  reset()\n\
  size = .4 * Math.min( maxX(), maxY())\n\
  //goto (-50,-22)\n\
  //right(17)\n\
  pent(size)\n\
  hideturtle()\n\
}\n\
'
intersection_simulator ='\
// Intersection Simulator -- simulates a traffic intersection and its lights\n\
/*\n\
current problems to be fixed\n\
 - turn green not extending\n\
*/\n\
/*\n\
Simple Traffic Light Simulator\n\
\n\
This simulates a set of traffic lights at an intersection.\n\
There are sets of lights for each direction: north, south, east, west.\n\
Each set of lights includes:\n\
  - the green, yellow, and red lights for the main traffic flow\n\
  - the green, yellow, and red left turn arrows\n\
  - a green Walk and red Don\'t Walk signs\n\
  \n\
The location of the signal display is as follows:\n\
       w |N|\n\
       m | |\n\
       l | |\n\
       W | | N lmw\n\
---------------------\n\
W                   E\n\
---------------------\n\
   wml S | | E\n\
         | | l\n\
         | | m\n\
         |S| w\n\
where N, S, E, W indicates the direction of travel\n\
      l is the left turn signal\n\
      m is the main traffic signal\n\
      w is the walk signal\n\
\n\
\n\
rules for lights\n\
  \n\
basic duration rules\n\
  flashing don\'t walk duration is fixed\n\
    let those crossing get across but no new starts\n\
  yellow has a fixed duration (for this simulation, it could vary based on insection size)\n\
  green duration can be extended based on queued traffid\n\
  number unqueued is dependent on duration of green\n\
  green has a maximum duration (see next)\n\
  periodically allow cross traffic, even if not seen\n\
  periodically allow turn traffic, even if not seen \n\
  lights flash 1/2 sec on, 1/2 sec off -- not implemented yet\n\
  don\'t want to cut off flashing -- not implemented yet\n\
  east and west greens (and walks) set together, except turns\n\
  north and south greens (and walks) set together, except turns\n\
  lights are protected from cross traffic with guard times\n\
  while a queue is implemented as in integer, it is treated as a binary for modeling purposes\n\
    to emulate a simple loop detector\n\
  \n\
 traffic arrivals\n\
   independent random intervals for E, W, N, S cars, left turns and people\n\
\n\
 events (one direction)\n\
  lights normally procede from red to green to yellow and back to red\n\
  lights may flash red -- not implemented yet\n\
  start of extendable green time\n\
  end of turn guard time\n\
  end of main guard time\n\
*/\n\
\n\
//**** GLOBALS ****\n\
// reporting and debug constants\n\
var NO_MESSAGES =      0;\n\
var QUEUE_MESSAGES =   1;\n\
var OVERALL_MESSAGES = 2;\n\
var STATE_MESSAGES =   3;\n\
var EVENT_MESSAGES =   4;\n\
var DEBUG_LEVEL = QUEUE_MESSAGES;\n\
\n\
// drawing constants\n\
var roadWidth = 80;\n\
var crossWalkWidth = 8;\n\
var stopLineSeparation = 4;\n\
var stopLineWidth = 2;\n\
\n\
// light states\n\
var red = "red";\n\
var green = "green";\n\
var yellow = "yellow";\n\
\n\
// light types\n\
var main = "main";\n\
var leftTurn = "leftTurn";\n\
var walk = "walk";\n\
\n\
// light duration constants\n\
// all of the below times are in milliseconds\n\
var minimumGreenDuration =      5 * 1000;\n\
var maximumGreenDuration =     30 * 1000;\n\
var mainPerCar =              1.5 * 1000;\n\
var yellowDuration =            5 * 1000;\n\
var mainGuardDuration =         1 * 1000;\n\
\n\
var minimumTurnDuration =       4 * 1000;\n\
var maximumTurnDuration =      20 * 1000;\n\
var turnPerCar =                2 * 1000;\n\
var turnGuardDuration =         1 * 1000;\n\
\n\
var minimumGreenWalkDuration =  4 * 1000;\n\
var ewWalkDuration =           20 * 1000;\n\
var nsWalkDuration =           25 * 1000;\n\
\n\
var extendDuration =            1 * 1000;\n\
var extendDelayDuration =       3 * 1000; // must be less than minimum green duration and minimum walk duration\n\
var extendDelayDuration = Math.min (minimumGreenWalkDuration, minimumGreenDuration) - .5 * 1000; // must be less than minimum green duration and minimum walk duration\n\
\n\
// light data structures (object)\n\
\n\
function Light(id, type, aveArrivalTime, aveDepartureTime) {\n\
    // create a Light object\n\
    this.id = id;\n\
    this.type = type;\n\
    this.state = red;\n\
    this.queue = [];\n\
    this.aveArrivalTime = aveArrivalTime;\n\
    this.aveDepartureTime = aveDepartureTime;\n\
    this.nextArrivalTime = undefined;\n\
    this.nextDepartureTime = undefined;\n\
    this.nextTime = undefined;\n\
    this.maxNextTime = undefined;\n\
    this.nextState = "turnRed";\n\
}\n\
\n\
//  milliseconds per hour / arrivals per hour = ave milliseconds /arrival\n\
//                  id       type, ave arrival time per hour, ave departure msec\n\
var ebMain = new Light("ebMain", main,     3600000 / 600, 1200);\n\
var ebTurn = new Light("ebTurn", leftTurn, 3600000 / 300, 1700);\n\
var ebWalk = new Light("ebWalk", walk,     3600000 /  25,    0);\n\
var wbMain = new Light("wbMain", main,     3600000 / 600, 1200);\n\
var wbTurn = new Light("wbTurn", leftTurn, 3600000 / 300, 1700);\n\
var wbWalk = new Light("wbWalk", walk,     3600000 /  25,    0);\n\
var nbMain = new Light("nbMain", main,     3600000 / 600, 1200);\n\
var nbTurn = new Light("nbTurn", leftTurn, 3600000 / 300, 1700);\n\
var nbWalk = new Light("nbWalk", walk,     3600000 /  25,    0);\n\
var sbMain = new Light("sbMain", main,     3600000 / 600, 1200);\n\
var sbTurn = new Light("sbTurn", leftTurn, 3600000 / 300, 1700);\n\
var sbWalk = new Light("sbWalk", walk,     3600000 /  25,    0);\n\
\n\
\n\
function testRates () {\n\
  // testRates -- test assumptions to see if they can handle the indicated traffic\n\
  var totalCycleTime = 2 * (Math.max( maximumGreenDuration + yellowDuration + mainGuardDuration,\n\
                              minimumGreenWalkDuration + ewWalkDuration + mainGuardDuration) +\n\
                            maximumTurnDuration + yellowDuration + turnGuardDuration);\n\
  \n\
  testRate (nbMain);\n\
  testRate (nbWalk);\n\
  testRate (nbTurn);\n\
  testRate (sbMain);\n\
  testRate (sbWalk);\n\
  testRate (sbTurn);\n\
  testRate (ebMain);\n\
  testRate (ebWalk);\n\
  testRate (ebTurn);\n\
  testRate (wbMain);\n\
  testRate (wbWalk);\n\
  testRate (wbTurn);\n\
\n\
  function testRate (signal) {\n\
    // testRate -- test assumptions to see if a signal can handle the indicated traffic\n\
  \n\
    var cycleArrivalRate = totalCycleTime / signal.aveArrivalTime;\n\
    if (signal.type === leftTurn) {\n\
      var cycleDepartureRate = maximumTurnDuration / signal.aveDepartureTime;\n\
    } else if (signal.type === main) {\n\
      var cycleDepartureRate = maximumGreenDuration / signal.aveDepartureTime;\n\
    } else { // assume walkers\n\
      var cycleDepartureRate = 10000; // assuming no walker delay or congestion\n\
    }\n\
    if (cycleArrivalRate > .90 * cycleDepartureRate) {\n\
      throw "Cycle arrival rate exceeded departure rate for " + signal.id;\n\
    }\n\
  }\n\
}\n\
\n\
testRates();\n\
\n\
//**** FUNCTIONS ****\n\
\n\
//** Drawing functions **\n\
function drawEWstreet() {\n\
  wrap(false);\n\
  setpos(minX(),0);\n\
  angle(90);\n\
  pendown();\n\
  color("black");\n\
  penwidth(roadWidth);\n\
  forward(maxX() + maxX());\n\
}\n\
\n\
function drawNSstreet() {\n\
  setpos(0,maxY());\n\
  angle(180);\n\
  pendown();\n\
  color("black");\n\
  penwidth(roadWidth);\n\
  forward(maxY() + maxY());\n\
}\n\
\n\
function drawEWstripe() {\n\
  setpos(minX(),0);\n\
  angle(90);\n\
  color("yellow");\n\
  penwidth(1);\n\
  forward(maxX() - roadWidth / 2 - crossWalkWidth);\n\
  penup();\n\
  forward(roadWidth + 2 * crossWalkWidth);\n\
  pendown();\n\
  forward(maxX() - roadWidth / 2 - crossWalkWidth);\n\
}\n\
\n\
function drawNSstripe() {\n\
  setpos(0,maxY());\n\
  angle(180);\n\
  color("yellow");\n\
  penwidth(1);\n\
  forward(maxY() - roadWidth / 2 - crossWalkWidth);\n\
  penup();\n\
  forward(roadWidth + 2 * crossWalkWidth);\n\
  pendown();\n\
  forward(maxY() - roadWidth / 2 - crossWalkWidth);\n\
}\n\
\n\
function drawCrossWalk(x, y, dir) {\n\
  // draw stripes for a crosswalk\n\
  // x,y is coordinates of travel side of road\n\
  // dir is direction across road\n\
    \n\
  // draw inner cross walk line\n\
  color("white");\n\
  setposition(x, y);\n\
  angle(dir);\n\
  width(1);\n\
  penDown();\n\
  forward(roadWidth);\n\
    \n\
  // draw outer cross walk line\n\
  penUp();\n\
  left(90);\n\
  forward(crossWalkWidth);\n\
  left(90);\n\
  penDown();\n\
  forward(roadWidth);\n\
    \n\
  // draw stop line\n\
  penUp();\n\
  right(90);\n\
  forward(stopLineSeparation);\n\
  right(90);\n\
  forward(2);\n\
  penWidth(stopLineWidth);\n\
  penDown();\n\
  forward(roadWidth / 2 - 4);\n\
  penWidth(1);\n\
}\n\
\n\
function drawTurnArrow(x, y, dir) {\n\
  hideturtle();\n\
  goto (x,y);\n\
  angle (dir);\n\
  pendown();\n\
  color("white");\n\
  penwidth(5);\n\
  forward (5);\n\
  curveLeft(5,90);\n\
  forward(4);\n\
  penwidth (2);\n\
  left(130);\n\
  forward (5);\n\
  right (160);\n\
  forward (9);\n\
  right(120);\n\
  forward (9);\n\
  right(160);\n\
  forward(5);\n\
}\n\
  \n\
\n\
function drawStreets() {\n\
  drawNSstreet();\n\
  drawEWstreet();\n\
\n\
  drawNSstripe();\n\
  drawEWstripe();\n\
\n\
  drawTurnArrow(-18,75,180);\n\
  drawTurnArrow(-75,-18,90);\n\
  drawTurnArrow(18,-75,0);\n\
  drawTurnArrow(75,18,270);\n\
\n\
  drawCrossWalk( roadWidth / 2,  roadWidth / 2, 180 );\n\
  drawCrossWalk( roadWidth / 2, -roadWidth / 2, 270 );\n\
  drawCrossWalk(-roadWidth / 2, -roadWidth / 2, 0 );\n\
  drawCrossWalk(-roadWidth / 2,  roadWidth / 2, 90 );\n\
}\n\
\n\
//** Light Drawing Functions **\n\
\n\
function setLightColor(lightColor, stateColor) {\n\
  var signalBackground = "lightgray"; // color of an "off" signal light\n\
  if (lightColor === stateColor) {\n\
    color(lightColor);\n\
  } else {\n\
    color(signalBackground);\n\
  }\n\
}\n\
\n\
function drawArrow() { // assume pointing up, color set and pen up\n\
  var penWidth = turtle.width;\n\
  var arrowSize = 8;\n\
  var vertOffset = 5;\n\
  backward(vertOffset);\n\
  pendown();\n\
  penwidth(3);\n\
  left(45);\n\
  forward(arrowSize);\n\
  right(90);\n\
  forward(arrowSize);\n\
  penup();\n\
  backward(arrowSize);\n\
  left(90);\n\
  backward(arrowSize);\n\
  right(45);\n\
  penwidth(penWidth);\n\
  forward(vertOffset);\n\
}\n\
\n\
function drawTurnSignal(state) {\n\
  left(90);\n\
  forward(13);\n\
  setLightColor("green", state);\n\
  drawArrow();\n\
\n\
  backward(13);\n\
  setLightColor("yellow", state);\n\
  drawArrow();\n\
\n\
  backward(13);\n\
  setLightColor("red", state);\n\
  drawArrow();\n\
\n\
  forward(13);\n\
  right(90);\n\
}\n\
\n\
function drawMainSignal(state) { // main signal is straight ahead\n\
  left(90);\n\
  forward(13);\n\
  setLightColor("green", state);\n\
  dot();\n\
\n\
  backward(13);\n\
  setLightColor("yellow", state);\n\
  dot();\n\
\n\
  backward(13);\n\
  setLightColor("red", state);\n\
  dot();\n\
\n\
  forward(13);\n\
  right(90);\n\
}\n\
\n\
function drawWalkSignal(state) {\n\
  // should do the flashing red for don\'t start\n\
  // could do the flash down counter\n\
  setLightColor("green", state);\n\
  left(90);\n\
  forward(5);\n\
  right(90);\n\
  write("WALK");\n\
\n\
  left(90);\n\
  backward(5);\n\
  right(90);\n\
  setLightColor("red", state);\n\
  if (state === "yellow") {\n\
    color("yellow")\n\
  }\n\
  right(90);\n\
  forward(8);\n\
  left(90);\n\
  write("DONT");\n\
\n\
  right(90);\n\
  forward(13);\n\
  left(90);\n\
  write("WALK");\n\
\n\
  right(90);\n\
  backward(25);\n\
  left(90);\n\
}\n\
\n\
function drawSignal(x, y, orient, mainState, turnState, walkState) {\n\
  // move turtle to position and angle depending on street direction\n\
  setpos (x, y);\n\
  angle(orient);\n\
  drawTurnSignal(turnState);\n\
\n\
  forward(10);\n\
  drawMainSignal(mainState);\n\
\n\
  forward(10);\n\
  drawWalkSignal(walkState);\n\
}\n\
\n\
function drawSignals() {\n\
  drawSignal( 50,  65,  90, nbMain.state, nbTurn.state, nbWalk.state);\n\
  drawSignal(-50, -65, 270, sbMain.state, sbTurn.state, sbWalk.state);\n\
  drawSignal( 65, -50, 180, ebMain.state, ebTurn.state, ebWalk.state);\n\
  drawSignal(-65,  50,   0, wbMain.state, wbTurn.state, wbWalk.state);\n\
}\n\
\n\
\n\
function printQueues () {\n\
  console.log (currentSecs +\n\
               " Northbound main: " + nbMain.queue.length +\n\
               ", turn: " +           nbTurn.queue.length +\n\
               ", walk: " +           nbWalk.queue.length + \n\
               " Southbound main: " + sbMain.queue.length +\n\
               ", turn: " +           sbTurn.queue.length +\n\
               ", walk: " +           sbWalk.queue.length);\n\
\n\
  console.log (currentSecs +\n\
               " Eastbound main: " +  ebMain.queue.length +\n\
               ", turn: " +           ebTurn.queue.length +\n\
               ", walk: " +           ebWalk.queue.length +\n\
               " Westbound main: " +  wbMain.queue.length +\n\
               ", turn: " +           wbTurn.queue.length +\n\
               ", walk: " +           wbWalk.queue.length);\n\
}\n\
\n\
\n\
function writeQueues () {\n\
  writeQueueSizes(55,  -maxY()+5,  0, "N",\n\
    nbTurn.queue.length, nbMain.queue.length, nbWalk.queue.length);\n\
  writeQueueSizes(-68,  maxY()-20, 0, "S",\n\
    sbTurn.queue.length, sbMain.queue.length, sbWalk.queue.length);\n\
  writeQueueSizes(-maxX()+5, -55, 90, "E",\n\
    ebTurn.queue.length, ebMain.queue.length, ebWalk.queue.length);\n\
  writeQueueSizes( maxX()-20, 68, 90, "W",\n\
    wbTurn.queue.length, wbMain.queue.length, wbWalk.queue.length);\n\
}\n\
\n\
function writeQueueSizes(x, y, orientation, dir, turn, main, walk) {\n\
//write the number waiting for each signal\n\
//  x is the x position of the text start\n\
//  y is the y position of the text start\n\
//  orientation is the direction of the text\n\
//  dir is directon of traffic\n\
//  turn is the turn light queue\n\
//  main is the main light queue\n\
//  walk is the walk light queue\n\
  setpos(x,y)\n\
  angle(orientation)\n\
/*\n\
  if (dir === "N") {\n\
    setpos(55,-maxY()+5);\n\
    angle(0);\n\
  } else if (dir === "S") {\n\
    setpos(-68,maxY()-20);\n\
    angle(0);\n\
  } else if (dir === "E") {\n\
    setpos(-maxX()+5, -55);\n\
    angle(90);\n\
  } else if (dir === "W") {\n\
    setpos(maxX()-20, 68);\n\
    angle(90);\n\
  } else {\n\
    setpos(-200,200);\n\
    angle(90);\n\
  }\n\
*/\n\
  penwidth(1);\n\
  color("black");\n\
  if (dir === "S" || dir === "W") { // South and West are in opposite order\n\
    write(walk);\n\
  } else {\n\
    write(turn);\n\
  }\n\
\n\
  right(90);\n\
  forward(12);\n\
  left(90);\n\
  write(main);\n\
\n\
  right(90);\n\
  forward(12);\n\
  left(90);\n\
  if (dir === "S" || dir === "W") {\n\
    write(turn);\n\
  } else {\n\
    write(walk);\n\
  }\n\
  write ("     " + dir); // debug statement\n\
}\n\
\n\
function drawQueues() {\n\
  //SB\n\
  drawQueue( -10,   55,   0, sbTurn.queue, 12);\n\
  drawQueue( -30,   55,   0, sbMain.queue, 12);\n\
  drawQueue( -50,  105,   0, sbWalk.queue,  6);\n\
\n\
  //WB\n\
  drawQueue(  55,   10,  90, wbTurn.queue, 12);\n\
  drawQueue(  55,   30,  90, wbMain.queue, 12);\n\
  drawQueue( 105,   50,  90, wbWalk.queue,  6);\n\
\n\
  //NB\n\
  drawQueue(  10,  -55, 180, nbTurn.queue, 12);\n\
  drawQueue(  30,  -55, 180, nbMain.queue, 12);\n\
  drawQueue(  50, -105, 180, nbWalk.queue,  6);\n\
\n\
  //EB\n\
  drawQueue( -55,  -10, 270, ebTurn.queue, 12);\n\
  drawQueue( -55,  -30, 270, ebMain.queue, 12);\n\
  drawQueue(-105,  -50, 270, ebWalk.queue,  6);\n\
}\n\
\n\
function drawQueue(x, y, dir, queue, len) {\n\
  goto(x, y);\n\
  angle(dir);\n\
  width(10);\n\
  for (var i=0; i<queue.length; i++) {\n\
    pendown();\n\
    color(queue[i].color);\n\
    forward(len); \n\
    penup();\n\
    forward(4);\n\
  }\n\
}\n\
\n\
//** Safety Functions **\n\
\n\
function safetyCheck() {\n\
/*\n\
 safetyCheck makes sure that traffic is not allowed in cross\n\
 directions (even if a programmer made an error)\n\
 \n\
 no cross traffic is allowed for any green or yellow light\n\
\n\
*/\n\
  var fault = false;\n\
  if ( (ebMain.state === green || ebMain.state === yellow ||\n\
        ebWalk.state === green || ebWalk.state === yellow) &&\n\
       !(nbMain.state === red && sbMain.state === red &&\n\
         nbTurn.state === red && sbTurn.state === red &&\n\
         wbTurn.state === red) ) {\n\
    console.log (currentSecs + " East bound main or walk conflict");\n\
    fault = true;\n\
  }\n\
  if ( (wbMain.state === green || wbMain.state === yellow ||\n\
        wbWalk.state === green || wbWalk.state === yellow) &&\n\
       !(nbMain.state === red && sbMain.state === red &&\n\
         nbTurn.state === red && sbTurn.state === red &&\n\
         ebTurn.state === red) ) {\n\
    console.log (currentSecs + " West bound main or walk conflict");\n\
    fault = true;\n\
  }\n\
  if ( (ebTurn.state === green || ebTurn.state === yellow) &&\n\
       !(nbMain.state === red && sbMain.state === red &&\n\
         nbTurn.state === red && sbTurn.state === red &&\n\
         wbMain.state === red) ) {\n\
    console.log (currentSecs + " East bound turn conflict");\n\
    fault = true;\n\
  }\n\
  if ( (wbTurn.state === green || wbTurn.state === yellow) &&\n\
       !(nbMain.state === red && sbMain.state === red &&\n\
         nbTurn.state === red && sbTurn.state === red &&\n\
         ebMain.state === red) ) {\n\
    console.log (currentSecs + " West bound turn conflict");\n\
    fault = true;\n\
  }\n\
  \n\
  if ( (nbMain.state === green || nbMain.state === yellow ||\n\
        nbWalk.state === green || nbWalk.state === yellow) &&\n\
       !(ebMain.state === red && wbMain.state === red &&\n\
         ebTurn.state === red && wbTurn.state === red &&\n\
         sbTurn.state === red) ) {\n\
    console.log (currentSecs + " North bound main or walk conflict");\n\
    fault = true;\n\
  }\n\
  if ( (sbMain.state === green || sbMain.state === yellow ||\n\
        sbWalk.state === green || sbWalk.state === yellow) &&\n\
       !(ebMain.state === red && wbMain.state === red &&\n\
         ebTurn.state === red && wbTurn.state === red &&\n\
         nbTurn.state === red) ) {\n\
    console.log (currentSecs + " South bound main or walk conflict");\n\
    fault = true;\n\
  }\n\
  if ( (nbTurn.state === green || nbTurn.state === yellow) &&\n\
       !(ebMain.state === red && wbMain.state === red &&\n\
         ebTurn.state === red && wbTurn.state === red &&\n\
         sbMain.state === red) ) {\n\
    console.log (currentSecs + " North bound turn conflict");\n\
    fault = true;\n\
  }\n\
  if ( (sbTurn.state === green || sbTurn.state === yellow) &&\n\
       !(ebMain.state === red && wbMain.state === red &&\n\
         ebTurn.state === red && wbTurn.state === red &&\n\
         nbMain.state === red) ) {\n\
    console.log (currentSecs + " South bound turn conflict");\n\
    fault = true;\n\
  }\n\
  \n\
  if (fault) {\n\
    /*\n\
state s/b flashing red all around, may restart after a time\n\
    turnFlashingRed(ebMain, -1);\n\
    turnFlashingRed(ebTurn, -1);\n\
    turnFlashingRed(ebWalk, -1);\n\
    turnFlashingRed(wbMain, -1);\n\
    turnFlashingRed(wbTurn, -1);\n\
    turnFlashingRed(wbWalk, -1);\n\
    turnFlashingRed(nbMain, -1);\n\
    turnFlashingRed(nbTurn, -1);\n\
    turnFlashingRed(nbWalk, -1);\n\
    turnFlashingRed(sbMain, -1);\n\
    turnFlashingRed(sbTurn, -1);\n\
    turnFlashingRed(sbWalk, -1);\n\
     */\n\
    throw "safety fault";\n\
  }\n\
}\n\
\n\
// ** Light State Machines and Functions ***\n\
// the light state machines advances the light from one state to the next\n\
// usually based on the expiry of a timer, but may change due to a callback\n\
\n\
var baseTime;\n\
function msToSec(msecs) {\n\
  if (baseTime === undefined) {\n\
    baseTime = msecs;\n\
  }\n\
  return (msecs - baseTime) % 1000000/1000;\n\
}\n\
\n\
function logEvent (id, eventName, duration) {\n\
  if (duration === undefined) {\n\
    duration =  "undefined"\n\
  } else {\n\
    duration = (duration/1000) + " secs"; // convert from msec to seconds\n\
  }\n\
  if (DEBUG_LEVEL >= EVENT_MESSAGES) {\n\
    console.log(currentSecs.toFixed(3) + "     " + id + " turned " + eventName + " for " + duration);\n\
  }\n\
}\n\
\n\
function turnGreen(signal, duration) {\n\
  logEvent (signal.id, "green", duration)\n\
  signal.state = green;\n\
  greenCount = greenCount + 1;\n\
  if (signal.type === main) {\n\
    signal.nextState = "extendGreen";\n\
  } else if (signal.type === turn) {\n\
    signal.nextState = "extendTurn";\n\
  } else {\n\
    signal.nextState = "turnYellow";\n\
  }\n\
  signal.nextTime = currentTime + duration;\n\
}\n\
\n\
function extendTurn (signal, duration) {\n\
  logEvent (signal.id, "extendTurn", duration);\n\
  signal.nextState = "extendTurn";\n\
  signal.nextTime = currentTime + duration;\n\
}\n\
\n\
function extendGreen(signal, duration) {\n\
  logEvent (signal.id, "extending green", duration)\n\
  // signal should already be green, assume no extension, so ignor duration\n\
  signal.nextState = "turnYellow";\n\
  if (duration === undefined || duration < 0) {\n\
    signal.nextTime = undefined;\n\
  } else {\n\
    signal.nextTime = currentTime + duration;\n\
  }\n\
}\n\
\n\
function turnYellow(signal, duration) {\n\
  logEvent (signal.id, "yellow", duration)\n\
  signal.state = yellow;\n\
  signal.nextState = "turnRed";\n\
  signal.nextTime = currentTime + duration;\n\
}\n\
\n\
function turnRed(signal, duration) {\n\
  logEvent (signal.id, "red", duration)\n\
  signal.state = red;\n\
  signal.nextState = "turnGuardRed";\n\
  if (duration === undefined || duration < 0) {\n\
    signal.nextTime = undefined;\n\
  } else {\n\
    signal.nextTime = currentTime + duration;\n\
  }\n\
}\n\
\n\
function turnGuardRed(signal, duration) {\n\
  logEvent (signal.id, "guard red", duration)\n\
  signal.state = red;\n\
  signal.nextState = "turnGreen";\n\
  if (duration === undefined || duration < 0) {\n\
    signal.nextTime = undefined;\n\
  } else {\n\
    signal.nextTime = currentTime + duration;\n\
  }\n\
}\n\
\n\
function turnFlashingRed(signal, duration) {\n\
  logEvent (signal.id, "flashing red", duration)\n\
  signal.state = red;\n\
  signal.nextState = "turnGreen";\n\
  if (duration === undefined || duration < 0) {\n\
    signal.nextTime = undefined;\n\
  } else {\n\
    signal.nextTime = currentTime + duration;\n\
  }\n\
}\n\
\n\
function enableTransition(signal, nextState) { // allow light state machine to fire on next go around\n\
  signal.nextState = nextState;\n\
  signal.nextTime = currentTime;\n\
}\n\
\n\
function turnStateMachine(signal, currentTime) {\n\
  if (signal.nextTime !== undefined && currentTime >= signal.nextTime) { // state change is due\n\
    changed = true;\n\
    if (DEBUG_LEVEL >= STATE_MESSAGES) {\n\
      console.log(currentSecs.toFixed(3) + "   time-out for " + signal.id + " turned " + signal.nextState);\n\
    }\n\
    switch (signal.nextState) {\n\
\n\
    case "turnGreen":\n\
      turnGreen(signal,minimumTurnDuration);\n\
      signal.maxNextTime = currentTime + maximumTurnDuration;\n\
      extendTurn(signal, minimumTurnDuration);\n\
    break;\n\
\n\
    case "extendTurn":\n\
      if (signal.queue.length > 0 && currentTime + extendDuration < signal.maxNextTime) {\n\
        extendTurn(signal, extendDuration);\n\
      } else {\n\
        turnYellow(signal, yellowDuration);\n\
      }\n\
    break;\n\
\n\
    case "turnYellow":\n\
      turnYellow(signal, yellowDuration);\n\
    break;\n\
\n\
    case "turnRed":\n\
      turnRed(signal, turnGuardDuration);\n\
    break;\n\
\n\
    case "turnGuardRed":\n\
      turnGuardRed(signal, undefined); // wait for overall to start the turn\n\
      redGuardComplete(signal);\n\
    break;\n\
\n\
    default:\n\
      stopAnimation();\n\
      throw "unknown next turn state for " + signal.id;\n\
    }\n\
  }\n\
}\n\
\n\
function walkStateMachine(signal, currentTime) {\n\
  if (signal.nextTime !== undefined && currentTime >= signal.nextTime) { // state change is due\n\
    changed = true;\n\
    if (DEBUG_LEVEL >= STATE_MESSAGES) {\n\
      console.log(currentSecs.toFixed(3) + "   time-out for " + signal.id + " turned " + signal.nextState);\n\
    }\n\
    switch (signal.nextState) {\n\
\n\
    case "turnGreen":\n\
      if (signal.id == "nbWalk" || signal.id == "sbWalk") {\n\
        signal.maxNextTime = currentTime + maximumGreenDuration + yellowDuration - nsWalkDuration;\n\
      } else {\n\
        signal.maxNextTime = currentTime + maximumGreenDuration + yellowDuration - ewWalkDuration;\n\
      }\n\
      turnGreen(signal, minimumGreenWalkDuration);\n\
    break;\n\
\n\
    case "turnYellow":\n\
      if (signal.id == "nbWalk" || signal.id == "sbWalk") {\n\
        turnYellow(signal, nsWalkDuration);\n\
      } else {\n\
        turnYellow(signal, ewWalkDuration);\n\
      }\n\
    break;\n\
\n\
    case "turnRed":\n\
      turnRed(signal, mainGuardDuration);\n\
    break;\n\
\n\
    case "turnGuardRed":\n\
      turnGuardRed(signal, undefined); // wait for overall to start the turn\n\
      redGuardComplete(signal);\n\
    break;\n\
\n\
    default:\n\
      stopAnimation();\n\
      throw "unknown next walk state for " + signal.id;\n\
    }\n\
  }\n\
}\n\
\n\
function mainStateMachine(signal, currentTime) {\n\
  if (signal.nextTime !== undefined && currentTime >= signal.nextTime) { // state change is due\n\
    changed = true;\n\
    if (DEBUG_LEVEL >= STATE_MESSAGES) {\n\
      console.log(currentSecs.toFixed(3) + "   time-out for " + signal.id + " turned " + signal.nextState);\n\
    }\n\
    switch (signal.nextState) {\n\
\n\
    case "turnGreen":\n\
      signal.maxNextTime = currentTime + maximumGreenDuration;\n\
      turnGreen(signal, minimumGreenDuration);\n\
    break;\n\
\n\
    case "extendGreen":\n\
      extendGreen(signal, extendDuration);\n\
    break;\n\
\n\
    case "turnYellow":\n\
      turnYellow(signal, yellowDuration);\n\
    break;\n\
\n\
    case "turnRed":\n\
      turnRed(signal, mainGuardDuration);\n\
    break;\n\
\n\
    case "turnGuardRed":\n\
      turnGuardRed(signal, undefined); // wait for sync\n\
      redGuardComplete(signal);\n\
    break;\n\
\n\
    default:\n\
      stopAnimation();\n\
      throw "unknown next main state for " + signal.id;\n\
    }\n\
  }\n\
}\n\
\n\
\n\
//** Traffic Simulation Functions **\n\
\n\
function incDecQueue(signal) {\n\
  // check for departures when light is green\n\
   // should only do this when light is green and start new departure timer when light goes green\n\
  var spread;\n\
  spread = 0.5;\n\
  var possibleDepartureTime = currentTime +\n\
            random((1 - spread) * signal.aveDepartureTime, (1 + spread) * signal.aveDepartureTime);\n\
  if (signal.state === green) {\n\
    if (signal.aveDepartureTime === 0) { // special case for walkers\n\
      signal.queue = [];\n\
      changed = true;\n\
    } else if (signal.nextDepartureTime === undefined) {\n\
      signal.nextDepartureTime = possibleDepartureTime;\n\
    } else if (currentTime > signal.nextDepartureTime) {\n\
      if (signal.queue.length > 0) { // queue has member to leave\n\
        changed = true;\n\
        signal.queue.shift();\n\
        signal.nextDepartureTime = possibleDepartureTime;\n\
      }\n\
    } else {\n\
      // no departure pending\n\
    }\n\
  } else { // light is not green, so no departures\n\
    signal.nextDepartureTime = undefined;\n\
  }\n\
  \n\
  // check for arrivals\n\
  if (signal.nextArrivalTime === undefined || currentTime > signal.nextArrivalTime) {\n\
    changed = true;\n\
    signal.queue.push ({color:random(16), arrivalTime:currentTime});\n\
    // adjust the average to give it some variation within the average\n\
    spread = 0.95;\n\
    signal.nextArrivalTime = currentTime +\n\
      random((1 - spread) * signal.aveArrivalTime, (1 + spread) * signal.aveArrivalTime);\n\
  }\n\
}\n\
\n\
\n\
function simulateTraffic() {\n\
  incDecQueue(ebTurn);\n\
  incDecQueue(ebWalk);\n\
  incDecQueue(ebMain);\n\
  incDecQueue(wbTurn);\n\
  incDecQueue(wbWalk);\n\
  incDecQueue(wbMain);\n\
  incDecQueue(nbTurn);\n\
  incDecQueue(nbWalk);\n\
  incDecQueue(nbMain);\n\
  incDecQueue(sbTurn);\n\
  incDecQueue(sbWalk);\n\
  incDecQueue(sbMain);\n\
}\n\
\n\
// ** Overall State Machine and Functions\n\
\n\
// *Globals*\n\
var overallNextState;\n\
var overallNextTime;\n\
var turnCount = 0;\n\
var greenCount = 0;\n\
\n\
function nextOverallState(nextState, time) {\n\
  overallNextState = nextState;\n\
  overallNextTime = time;\n\
}\n\
\n\
function redGuardComplete(signal) {\n\
  /* callback when red guard time complete for a particular signal */\n\
  var id = signal.id;\n\
  if (id === nbTurn || id === sbTurn || id === ebTurn || id === wbTurn) {\n\
    turnCount = turnCount - 1; //global\n\
    if (turnCount < 0) {\n\
      throw "Turn counter negative by " + id;\n\
    }\n\
  }\n\
  greenCount = greenCount - 1;\n\
  if (greenCount < 0) {\n\
    throw "Green counter made negative by " + id;\n\
  } else if (greenCount === 0) {\n\
    overallNextTime = currentTime;\n\
  }\n\
}\n\
\n\
function startNS() {\n\
  /* entry point to start overall machine into motion */\n\
  nextOverallState("startNS", currentTime);\n\
}\n\
\n\
\n\
function overallStateMachine() {\n\
/*\n\
- controls the start of travel in either direction\n\
- extends the main green\n\
- has callbacks for competion of turns to advance cross traffic\n\
- has callbacks for competion of guard red to advance cross traffic\n\
\n\
 turn lights are autonomous\n\
 increment left turn counter when changing individual turn light to green\n\
 decrement left turn counter when changing individual turn ight ends guard red\n\
\n\
when left turn counter is 0, main green may be extended after the minimum green\n\
\n\
overall starts NS and EW alternatively based on completion of guard red\n\
overall extends main green in a coordinated way\n\
  starts when both directions have completed minimum green\n\
  ends on either walking yellow or main yellow\n\
*/\n\
  if (overallNextTime !== undefined && currentTime >= overallNextTime) { // state change is due\n\
    if (DEBUG_LEVEL >= OVERALL_MESSAGES) {\n\
      console.log (currentSecs.toFixed(3) + " overall " + overallNextState);\n\
    }\n\
    switch (overallNextState) {\n\
  \n\
    case "startNS":\n\
      //nextOverallState("startEW", undefined); // wait for sync\n\
      if (DEBUG_LEVEL >= QUEUE_MESSAGES) {\n\
         printQueues();\n\
      }\n\
      if (nbTurn.queue.length > 0) {\n\
        enableTransition(nbTurn, "turnGreen");\n\
        turnCount = turnCount + 1;\n\
        if (sbTurn.queue.length === 0) {\n\
          enableTransition(nbMain, "turnGreen");\n\
        }\n\
        nextOverallState("startNSMainOnly", undefined); // wait for sync\n\
      }\n\
      if (sbTurn.queue.length > 0) {\n\
        enableTransition(sbTurn, "turnGreen");\n\
        turnCount = turnCount + 1;\n\
        if (nbTurn.queue.length === 0) {\n\
          enableTransition(sbMain, "turnGreen");\n\
        }\n\
        nextOverallState("startNSMainOnly", undefined); // wait for sync\n\
      }\n\
      if (nbTurn.queue.length === 0 && sbTurn.queue.length === 0) {\n\
        enableTransition(nbMain, "turnGreen");\n\
        enableTransition(sbMain, "turnGreen");\n\
        if (nbWalk.queue.length > 0) {\n\
          enableTransition(nbWalk, "turnGreen");\n\
        }\n\
        if (nbWalk.queue.length > 0) {\n\
          enableTransition(sbWalk, "turnGreen");\n\
        }\n\
        // extend main green invoked after minimum main green\n\
        nextOverallState("extendMainGreenNS", extendDelayDuration);\n\
      }\n\
    break;\n\
\n\
    case "startNSMainOnly":\n\
      if (nbTurn.state === red && sbTurn.state === red) {\n\
        enableTransition(nbMain, "turnGreen");\n\
        enableTransition(sbMain, "turnGreen");\n\
        if (nbWalk.queue.length > 0 || sbWalk.queue.length > 0) {\n\
          enableTransition(nbWalk, "turnGreen");\n\
          enableTransition(sbWalk, "turnGreen");\n\
        }\n\
        nextOverallState("extendMainGreenNS", extendDelayDuration);\n\
      } else {\n\
        nextOverallState("startNSMainOnly", undefined); // wait for sync\n\
      }\n\
    break;\n\
  \n\
    case "extendMainGreenNS":\n\
      // assume nbMain.state === green && sbMain.state === green\n\
      if (nbMain.queue.length > 0 || sbMain.queue.length > 0) { //time extension warrented\n\
        if (nbWalk.state === green || sbWalk.state === green) {\n\
          if ( (currentTime + extendDuration < nbMain.maxNextTime) &&\n\
               (currentTime + extendDuration < sbMain.maxNextTime) &&\n\
               (currentTime + extendDuration < nbWalk.maxNextTime) &&\n\
               (currentTime + extendDuration < sbWalk.maxNextTime) ) { //walk extension OK\n\
            extendGreen(nbWalk, undefined);\n\
            extendGreen(sbWalk, undefined);\n\
            extendGreen(nbMain, undefined);\n\
            extendGreen(sbMain, undefined);\n\
            overallNextTime = currentTime + extendDuration; // just stay in extendMainGreenNS\n\
          } else { //end walk extension\n\
            enableTransition(nbWalk, "turnYellow");\n\
            enableTransition(sbWalk, "turnYellow");\n\
            extendGreen(sbMain, nsWalkDuration - yellowDuration);\n\
            extendGreen(nbMain, nsWalkDuration - yellowDuration);\n\
            nextOverallState("startEW", undefined); // wait for sync\n\
          }\n\
        } else { // walks do not apply\n\
          if ( (currentTime + extendDuration < nbMain.maxNextTime) &&\n\
               (currentTime + extendDuration < sbMain.maxNextTime) ) { //main extension OK\n\
            extendGreen(nbMain, undefined);\n\
            extendGreen(sbMain, undefined);\n\
            overallNextTime = currentTime + extendDuration; // just stay in extendMainGreenNS\n\
          } else { // end main extension\n\
            enableTransition(nbMain, "turnYellow");\n\
            enableTransition(sbMain, "turnYellow");\n\
            nextOverallState("startEW", undefined); // wait for sync\n\
          }\n\
        }\n\
      } else { // extension not warrented\n\
        if (nbWalk.state === green || sbWalk.state === green) {\n\
          enableTransition(nbWalk, "turnYellow");\n\
          enableTransition(sbWalk, "turnYellow");\n\
          extendGreen(sbMain, nsWalkDuration - yellowDuration);\n\
          extendGreen(nbMain, nsWalkDuration - yellowDuration);\n\
          nextOverallState("startEW", undefined); // wait for sync\n\
        } else { // walks do not apply\n\
          enableTransition(nbMain, "turnYellow");\n\
          enableTransition(sbMain, "turnYellow");\n\
          nextOverallState("startEW", undefined); // wait for sync\n\
        }\n\
      }\n\
    break;\n\
\n\
    case "startEW":\n\
      nextOverallState("startEWMainOnly", undefined); // wait for sync\n\
      if (ebTurn.queue.length > 0) {\n\
        enableTransition(ebTurn, "turnGreen");\n\
        if (wbTurn.queue.length === 0) {\n\
          enableTransition(ebMain, "turnGreen");\n\
        }\n\
      }\n\
      if (wbTurn.queue.length > 0) {\n\
        enableTransition(wbTurn, "turnGreen");\n\
        if (ebTurn.queue.length === 0) {\n\
          enableTransition(wbMain, "turnGreen");\n\
        }\n\
      }\n\
      if (ebTurn.queue.length === 0 && wbTurn.queue.length === 0) {\n\
        enableTransition(ebMain, "turnGreen");\n\
        enableTransition(wbMain, "turnGreen");\n\
        if (ebWalk.queue.length > 0) {\n\
          enableTransition(ebWalk, "turnGreen");\n\
          // set up the maximum time that the walk light can be green\n\
          ebWalk.maxNextTime = currentTime + maximumGreenDuration - ewWalkDuration;\n\
        }\n\
        if (wbWalk.queue.length > 0) {\n\
          enableTransition(wbWalk, "turnGreen");\n\
          // set up the maximum time that the walk light can be green\n\
          wbWalk.maxNextTime = currentTime + maximumGreenDuration - ewWalkDuration;\n\
        }\n\
        nextOverallState("extendMainGreenEW", undefined);\n\
      }\n\
    break;\n\
  \n\
    case "startEWMainOnly":\n\
      nextOverallState("startEWMainOnly", undefined); // wait for sync\n\
      if (ebTurn.state === red && wbTurn.state === red) {\n\
          enableTransition(ebMain, "turnGreen");\n\
          enableTransition(wbMain, "turnGreen");\n\
        if (ebWalk.queue.length > 0 || wbWalk.queue.length > 0) {\n\
          enableTransition(ebWalk, "turnGreen");\n\
          enableTransition(wbWalk, "turnGreen");\n\
        }\n\
        nextOverallState("extendMainGreenEW", extendDelayDuration);\n\
      }\n\
    break;\n\
  \n\
    case "extendMainGreenEW":\n\
      // assume ebMain.state === green && sbMain.state === green\n\
      if (ebMain.queue.length > 0 || wbMain.queue.length > 0) { //time extension warrented\n\
        if (ebWalk.state === green || wbWalk.state === green) {\n\
          if ( (currentTime + extendDuration < ebMain.maxNextTime) &&\n\
               (currentTime + extendDuration < wbMain.maxNextTime) &&\n\
               (currentTime + extendDuration < ebWalk.maxNextTime) &&\n\
               (currentTime + extendDuration < wbWalk.maxNextTime) ) { //walk extension OK\n\
            extendGreen(ebWalk, undefined);\n\
            extendGreen(wbWalk, undefined);\n\
            extendGreen(ebMain, undefined);\n\
            extendGreen(wbMain, undefined);\n\
            overallNextTime = currentTime + extendDuration; // just stay in extendMainGreenEW\n\
          } else { //end walk extension\n\
            enableTransition(ebWalk, "turnYellow");\n\
            enableTransition(wbWalk, "turnYellow");\n\
            extendGreen(wbMain, ewWalkDuration - yellowDuration);\n\
            extendGreen(ebMain, ewWalkDuration - yellowDuration);\n\
            nextOverallState("startNS", undefined); // wait for sync\n\
          }\n\
        } else { // walks do not apply\n\
          if ( (currentTime + extendDuration < ebMain.maxNextTime) &&\n\
               (currentTime + extendDuration < wbMain.maxNextTime) ) { //main extension OK\n\
            extendGreen(ebMain, undefined);\n\
            extendGreen(wbMain, undefined);\n\
            overallNextTime = currentTime + extendDuration; // just stay in extendMainGreenEW\n\
          } else { // end main extension\n\
            enableTransition(ebMain, "turnYellow");\n\
            enableTransition(wbMain, "turnYellow");\n\
            nextOverallState("startNS", undefined); // wait for sync\n\
          }\n\
        }\n\
      } else { // extension not warrented\n\
        if (ebWalk.state === green || wbWalk.state === green) {\n\
          enableTransition(ebWalk, "turnYellow");\n\
          enableTransition(wbWalk, "turnYellow");\n\
          extendGreen(wbMain, ewWalkDuration - yellowDuration);\n\
          extendGreen(ebMain, ewWalkDuration - yellowDuration);\n\
          nextOverallState("startNS", undefined); // wait for sync\n\
        } else { // walks do not apply\n\
          enableTransition(ebMain, "turnYellow");\n\
          enableTransition(wbMain, "turnYellow");\n\
          nextOverallState("startNS", undefined); // wait for sync\n\
        }\n\
      }\n\
    break;\n\
    }\n\
  }\n\
}\n\
\n\
\n\
\n\
var date = new Date();\n\
var currentTime = date.getTime();\n\
var currentSecs = msToSec(currentTime);\n\
var changed = false;\n\
startNS(); // start up the overall machine \n\
\n\
function loop() {\n\
  changed = false;\n\
  date = new Date();\n\
  currentTime = date.getTime();\n\
  currentSecs = msToSec(currentTime);\n\
  \n\
  // check individual light state machines\n\
  turnStateMachine(ebTurn, currentTime);\n\
  walkStateMachine(ebWalk, currentTime);\n\
  mainStateMachine(ebMain, currentTime);\n\
  \n\
  turnStateMachine(wbTurn, currentTime);\n\
  walkStateMachine(wbWalk, currentTime);\n\
  mainStateMachine(wbMain, currentTime);\n\
  \n\
  turnStateMachine(nbTurn, currentTime);\n\
  walkStateMachine(nbWalk, currentTime);\n\
  mainStateMachine(nbMain, currentTime);\n\
  \n\
  turnStateMachine(sbTurn, currentTime);\n\
  walkStateMachine(sbWalk, currentTime);\n\
  mainStateMachine(sbMain, currentTime);\n\
\n\
  // check overall state machine and process changes caused by individual lights\n\
  overallStateMachine();\n\
\n\
  // simulate traffic\n\
  simulateTraffic();\n\
\n\
  // update drawing\n\
  if (changed) {\n\
    clear();\n\
    drawStreets();\n\
    drawSignals();\n\
    drawQueues();\n\
  }\n\
  //writeQueues (); // for debugging\n\
\n\
  // make sure all is safe\n\
  safetyCheck();\n\
}\n\
 \n\
function demo() {\n\
  animate(loop, 100);\n\
}\n\
'
jumping_jack ='\
// Jumping Jack -- stick man doing jumping jacks\n\
\n\
/*\n\
This example shows a couple of concepts.\n\
One is the use of variables. The stick man is created based on proprotions of its\n\
height. Changing the height variable changes the size of the other body parts.\n\
\n\
Drawing of the body parts is done so that the turtle is returned to its starting point.\n\
This allows the body parts to be drawn in any order or for the center of the stick man\n\
to be moved. Each body part is draw with a function (also called a sub-routine) to\n\
make the problem easier to understand.\n\
\n\
The drawLeftLeg(), drawRightLeg(), drawLeftArm(), and drawRightArm() functions use a\n\
parameter that is used to determine the angle of\n\
the particular appendage being drawn. This way the same function can be used without\n\
regard to the arm or leg position.\n\
\n\
The drawBody() function ties everything together and draws all of the body parts.\n\
It has two parameters, one for the arm angle and one for the leg angle. This assumes\n\
that the arms move together and the legs move together, but that is not a requirement.\n\
You can change this.\n\
\n\
To make this a bit more fun, this can be animated, so the figure\'s arms and legs move\n\
as if it were doing jumping jacks. To do this we want to vary the angle of the\n\
arms, from 45 degrees to almost 180 degrees, say 175. The legs should vary from a \n\
135 degree angle to almost 180, lets say 175.  The two extreme positions of the\n\
body can be drawn as:\n\
  drawBody(45, 45);\n\
and\n\
  drawBody(175, 5);\n\
\n\
(hint: You can try each one separately in the command box.)\n\
\n\
For smooth motion, there should be 4 steps. (This is really a guess, there could be\n\
more or there could be less, but for now lets assume that 4 is a good number.)\n\
A step would be the base movement plus one quarter of the total movement. The moveBody()\n\
function uses the variable\n\
n to step throught the various movements with n=0, n=1, n=2, n=3, and n=4\n\
successively.\n\
\n\
For the arms: 45 + n * (175-45)/4\n\
\n\
For the legs: 45 - n * (45-5)/4\n\
\n\
The direction of the movement changes at either end, that is when\n\
n = 0 or n = 4; So when n is zero, n should be increased by one to get to 1. When n is\n\
4, n should be decreased by one (add a negative one) to get to 3. Using a direction\n\
variable allows the moveBody() function to remember what direction it is moving.\n\
\n\
Successive calls to moveBody() are controlled by the delay() function. This function is set\n\
to repeat in 100 ms. You could change the time to make it faster or slower.\n\
\n\
*/\n\
\n\
\n\
\n\
// GLOBALS\n\
var height;\n\
var headDiameter;\n\
var torsoLength;\n\
var neckLength;\n\
var armLength;\n\
var legLength;\n\
\n\
/*\n\
  The body parts are drawn with the following asumptions\n\
  - the center of figure is the center of torso\n\
  - the turtle is returned to the center of the figure\n\
  - the turtle is pointed up \n\
  - the pen of the turtle is up\n\
*/\n\
\n\
\n\
function drawHead() {\n\
  forward (torsoLength/2 + neckLength + headDiameter/2); \n\
  pendown();\n\
  circle (headDiameter/2); //draw head\n\
  penup();\n\
  right(180);\n\
  forward (torsoLength/2 + neckLength + headDiameter/2); \n\
  right(180);\n\
}\n\
\n\
function drawNeck() {\n\
  forward (torsoLength/2 ); \n\
  pendown();\n\
  forward (neckLength); //neck\n\
  penup();\n\
  backward (torsoLength/2 + neckLength); \n\
}\n\
\n\
function drawTorso() {\n\
  backward (torsoLength/2); \n\
  pendown();\n\
  forward (torsoLength); \n\
  penup();\n\
  backward (torsoLength/2); \n\
}\n\
\n\
function drawLeftLeg(angle){\n\
  right(180);\n\
  forward (torsoLength/2);\n\
  left(angle);\n\
  pendown();\n\
  forward (legLength); //left leg\n\
  penup();\n\
  backward (legLength);\n\
  right(angle);\n\
  right(180);\n\
  forward (torsoLength/2); \n\
} \n\
\n\
function drawRightLeg(angle) {\n\
  right(180);\n\
  forward (torsoLength/2);\n\
  right(angle);\n\
  pendown();\n\
  forward (legLength); //right leg\n\
  penup();\n\
  backward (legLength);\n\
  left(angle);\n\
  right(180);\n\
  forward (torsoLength/2); \n\
}\n\
\n\
function drawLeftArm(angle){\n\
  forward (torsoLength/2);\n\
  right(angle);\n\
  pendown();\n\
  forward (armLength); //left arm\n\
  penup();\n\
  backward (armLength);\n\
  left(angle);\n\
  backward (torsoLength/2); \n\
} \n\
\n\
function drawRightArm(angle) {\n\
  forward (torsoLength/2);\n\
  left(angle);\n\
  pendown();\n\
  forward (armLength); //left arm\n\
  penup();\n\
  backward (armLength);\n\
  right(angle);\n\
  backward (torsoLength/2); \n\
}\n\
\n\
function drawBody(armAngle, legAngle) {\n\
  drawTorso();\n\
  drawHead();\n\
  drawNeck();\n\
  drawLeftArm(armAngle);\n\
  drawRightArm(armAngle);\n\
  drawLeftLeg(legAngle);\n\
  drawRightLeg(legAngle);\n\
}\n\
\n\
var n = 0;\n\
var direction = +1;\n\
\n\
\n\
function moveBody () {\n\
  clear();\n\
  height = 40;\n\
  height = 1.5 * Math.min( maxX(), maxY())\n\
  headDiameter = .25 * height;\n\
  torsoLength = .3 * height;\n\
  neckLength = .5 * torsoLength;\n\
  armLength = .4 * height;\n\
  legLength = .5 * height;\n\
  width( .05*height)\n\
\n\
  drawBody(45 + n * (175-45)/4,\n\
    45 - n * (45-5)/4);\n\
  n = n + direction;\n\
  if (n>=4 || n<=0) {\n\
    direction = -direction;\n\
  }\n\
  delay(moveBody,100);\n\
}\n\
\n\
\n\
function demo () {\n\
  reset();\n\
  hideturtle();\n\
  n = 0;\n\
  direction = +1;\n\
  moveBody();\n\
}\n\
'
koch_line ='\
// Koch Lines -- draw an animated set of Koch lines\n\
\n\
function kochLine (length, order) {\n\
  //assume drawn on the current angle\n\
  if (order == 0) {\n\
    forward (length);\n\
  } else {\n\
    //break line and bump out to the left\n\
    kochLine (length/3, order-1);\n\
    left(60); \n\
    kochLine (length/3, order-1);\n\
    right(120); \n\
    kochLine (length/3, order-1);\n\
    left(60); \n\
    kochLine (length/3, order-1);\n\
  }\n\
}\n\
\n\
\n\
function kochLineDelay() {\n\
;\n\
  clear();\n\
  var side = maxY() - minY();\n\
  if (side > maxX() - minX()) {\n\
    side = maxX() - minX()\n\
  }\n\
  angle(90)\n\
  side = .9 * side\n\
  goto (-side/2, -1/4 * side)\n\
  kochLine (side, i);\n\
  goto(minX(),minY());\n\
  angle(90);\n\
  setfont("bold 12pt Ariel,san-serif")\n\
  write ("Koch line of order " +i);\n\
  draw();\n\
  i = i + 1;\n\
  if (i < steps) {\n\
    delay (kochLineDelay, 2000);\n\
  }\n\
}\n\
\n\
function demo() {\n\
  reset();\n\
  hideturtle();\n\
  steps = 6;\n\
  span = 240;\n\
  i = 0;\n\
\n\
  kochLineDelay();\n\
}\n\
'
koch_snowflake2 ='\
// Koch Snowflake 2 -- Koch snowflake with embellishments\n\
\n\
function diamond(side) {\n\
  forward(side)\n\
  left(60)\n\
  forward(side)\n\
  left(120)\n\
  forward(side)\n\
  left(60)\n\
  forward(side)\n\
  left(120)\n\
}\n\
\n\
function dazzle( side, inset) {\n\
  inner(side,inset)\n\
  newside = (side - Math.sqrt(3)* inset) /3\n\
  penup()\n\
  left(30)\n\
  forward(inset)\n\
  right(30)\n\
  forward(newside)\n\
  left(60)\n\
  pendown()\n\
  forward(newside)\n\
  diamond(newside/3)\n\
  forward(newside)\n\
  left(120)\n\
  forward(newside)\n\
  left(120)\n\
  forward(newside)\n\
  diamond(newside/3)\n\
  forward(newside)\n\
  left(120)\n\
  forward(newside)\n\
  left(120)\n\
  forward(newside)\n\
  diamond(newside/3)\n\
  forward(newside)\n\
  left(120)\n\
  forward(newside)\n\
  penup()\n\
  right(120)\n\
  forward(newside)\n\
  left(30)\n\
  forward(inset)\n\
  left(150)\n\
  pendown()\n\
}\n\
\n\
\n\
function inner( side, inset) {\n\
  penup()\n\
  left( 30)\n\
  forward( inset)\n\
  right(30)\n\
  pendown()\n\
  forward( side - Math.sqrt(3)*inset)\n\
  left(120)\n\
  forward( side - Math.sqrt(3)*inset)\n\
  left(120)\n\
  forward( side - Math.sqrt(3)*inset)\n\
  penup()\n\
  right(30)\n\
  forward( inset)\n\
  left(150)\n\
  pendown()\n\
}\n\
\n\
function starOfDavid (side) {\n\
  penup()\n\
  backward(2*side)\n\
  right(30)\n\
  forward(side)\n\
  right(60)\n\
  pendown()\n\
  for (var i=0;i<6;i=i+1) {\n\
    inner(side, 10)\n\
    inner(side, 20)\n\
    dazzle(side, 30)\n\
    forward(side)\n\
    left(120)\n\
    forward(side)\n\
\n\
    left(60)\n\
    forward(side)\n\
    left(120)\n\
\n\
    inner(side, 10)\n\
    inner(side, 20)\n\
    dazzle(side, 30)\n\
    forward(side)\n\
    left(120)\n\
    forward(side)\n\
  }\n\
}\n\
\n\
function kochSnowFlake (side, order) {\n\
  kochLine(side, order)\n\
  right(120)\n\
  kochLine(side, order)\n\
  right(120)\n\
  kochLine(side, order)\n\
  right(120)\n\
} \n\
\n\
\n\
function kochLine (length, order) {\n\
  //assume drawn on the current angle\n\
  if (order == 0) {\n\
    forward (length);\n\
  } else {\n\
    //break line and bump out to the left\n\
    kochLine (length/3, order-1);\n\
    left(60); \n\
    kochLine (length/3, order-1);\n\
    right(120); \n\
    kochLine (length/3, order-1);\n\
    left(60); \n\
    kochLine (length/3, order-1);\n\
  }\n\
}\n\
\n\
\n\
function demo () {\n\
  reset();\n\
  size = Math.min( maxX(), maxY()) * .6\n\
  hideturtle();\n\
  starOfDavid( size)\n\
  forward(size)\n\
  left(180)\n\
  //showTurtle()\n\
  kochSnowFlake(3*size, 2)\n\
  kochSnowFlake(3*size, 3)\n\
}\n\
'
koch_snowflake ='\
// Koch Snowflakes -- draw an animated set of Koch snowflakes\n\
\n\
\n\
function kochLine (length, order) {\n\
  //assume drawn on the current angle\n\
  if (order == 0) {\n\
    forward (length);\n\
  } else {\n\
    //break line and bump out to the left\n\
    kochLine (length/3, order-1);\n\
    left(60); \n\
    kochLine (length/3, order-1);\n\
    right(120); \n\
    kochLine (length/3, order-1);\n\
    left(60); \n\
    kochLine (length/3, order-1);\n\
  }\n\
}\n\
\n\
function kochSnowflake (length, order) {\n\
  angle (30);\n\
  goto (-length/2,-.3 * length);\n\
  kochLine (length, order);\n\
  right(120);\n\
  kochLine (length, order);\n\
  right(120);\n\
  kochLine (length, order);\n\
  right(120);\n\
}\n\
  \n\
\n\
reset();\n\
\n\
var steps = 6;\n\
var span = 240;\n\
var i = 0;\n\
\n\
function kochLines () {\n\
  for (i=0; i<steps; i++) {\n\
    goto (span/2 - i*span/steps, - span/2);\n\
    kochLine (span,i);\n\
  }\n\
}\n\
\n\
function kochSnowflakeDelay() {\n\
\n\
  clear();\n\
  var side = maxY() - minY();\n\
  if (side > maxX() - minX()) {\n\
    side = maxX() - minX()\n\
  }\n\
  kochSnowflake (.8 * side,i);\n\
  goto(minX(),minY());\n\
  angle(90);\n\
  setfont("Helvetica,san-serif 12pt")\n\
  write ("Koch snowflake of order " +i);\n\
  draw();\n\
  i = i + 1;\n\
  if (i < steps) {\n\
    delay (kochSnowflakeDelay, 2000);\n\
  }\n\
}\n\
\n\
function demo() {\n\
  hideturtle();\n\
  i = 0;\n\
  kochSnowflakeDelay();\n\
}\n\
'
koch_triangles_stacked ='\
// Koch Snowflakes, Stacked -- draw an set of stacked Koch snowflakes\n\
\n\
\n\
function kochLine (length, order) {\n\
  //assume drawn on the current angle\n\
  if (order == 0) {\n\
    forward (length);\n\
  } else {\n\
    //break line and bump out to the left\n\
    kochLine (length/3, order-1);\n\
    left(60); \n\
    kochLine (length/3, order-1);\n\
    right(120); \n\
    kochLine (length/3, order-1);\n\
    left(60); \n\
    kochLine (length/3, order-1);\n\
  }\n\
}\n\
\n\
\n\
function kochSnowflake (length, order) {\n\
  angle (30);\n\
  goto (-length/2,-.3 * length);\n\
  kochLine (length, order);\n\
  right(120);\n\
  kochLine (length, order);\n\
  right(120);\n\
  kochLine (length, order);\n\
  right(120);\n\
}\n\
  \n\
\n\
function demo() {\n\
  reset()\n\
  size = .045* Math.min(maxX(), maxY())\n\
  hideturtle();\n\
  for (var i=0; i<6; i++) {\n\
    kochSnowflake( size*(i+1)*(i+1), i)\n\
  }\n\
}\n\
'
life ='\
// life -- Conway\'s game of life\n\
columns = 16\n\
rows = 16\n\
\n\
\n\
dotSize = 6\n\
dotGap = 4\n\
columnSize = 2 * dotSize + dotGap\n\
rowSize = 2 * dotSize + dotGap\n\
columnMid = columns/2 * columnSize\n\
rowMid = rows/2 * rowSize\n\
\n\
\n\
var grid = [ [0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0],\n\
             [0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0],\n\
             [0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0],\n\
             [0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0],\n\
             [0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0],\n\
             [0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0],\n\
             [0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0],\n\
             [0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0],\n\
             [0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0],\n\
             [0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0],\n\
             [0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0],\n\
             [0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0],\n\
             [0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0],\n\
             [0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0],\n\
             [0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0],\n\
             [0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0]\n\
]\n\
\n\
var grid2 = Array( rows * columns)\n\
\n\
function drawGrid( grid) {\n\
  for (r=0; r < rows; r++) {\n\
    for ( c=0; c < columns; c++) {\n\
       //write( r + " " + c)\n\
       goto ( c * columnSize - columnMid, r * rowSize - rowMid)\n\
       if (grid [r][c]) {\n\
         color( "red")\n\
       } else {\n\
         color( "lightpink")\n\
       }\n\
       dot( dotSize)\n\
    }\n\
  }\n\
}\n\
\n\
\n\
function drawGrid2( grid) {\n\
  for (r=0; r < rows; r++) {\n\
    for ( c=0; c < columns; c++) {\n\
       goto ( columnMid - c * columnSize , rowMid - r * rowSize)\n\
       if (grid [r * columns + c]) {\n\
         color( "red")\n\
       } else {\n\
         color( "lightgray")\n\
       }\n\
       dot( dotSize)\n\
    }\n\
  }\n\
}\n\
\n\
\n\
function loadPattern( pattern) {\n\
  for (r=0; r < rows; r++) {\n\
    mask = 0b1000000000000000\n\
    for ( c=0; c < columns; c++) {\n\
      grid [r][c] = pattern [r] & mask\n\
      mask = mask >> 1 \n\
    }\n\
  }\n\
}\n\
\n\
\n\
function loadPattern2( pattern) {\n\
  for (r=0; r < rows; r++) {\n\
    mask = 0b00000000000000001\n\
    for ( c=0; c < columns; c++) {\n\
      if (pattern[ r] & mask) {\n\
        grid [r * columns + c] = true\n\
      } else {\n\
        grid [r * columns + c] = false\n\
      }\n\
      mask = mask << 1 \n\
    }\n\
  }\n\
}\n\
\n\
function generation2( currentGrid) {\n\
  var nextGrid = Array(rows*columns)\n\
  for (r=0; r < rows; r++) {\n\
    for ( c=0; c < columns; c++) {\n\
      var cell = r * columns + c\n\
      count = neighborCount2( currentGrid, cell)\n\
      //console.log ("row:" + r + " col:" + c + " count:" + count)\n\
      if (currentGrid[ cell]) { //alive\n\
        if (count == 2 || count == 3) {\n\
           nextGrid[ cell] = true\n\
        } else {\n\
           nextGrid[ cell] = false\n\
        }\n\
      } else { // vacant\n\
        if ( count == 3) {\n\
           nextGrid[ cell] = true\n\
        } else {\n\
           nextGrid[ cell] = false\n\
        }\n\
      }\n\
    }\n\
  }\n\
  for (r=0; r < rows; r++) {\n\
    for ( c=0; c < columns; c++) {\n\
      cell = r * columns + c\n\
      currentGrid [ cell] = nextGrid[ cell]\n\
    }\n\
  }\n\
}\n\
\n\
\n\
\n\
function neighborCount( grid, cell) {\n\
  var r = cell / columns\n\
  var c = cell % columns\n\
  var count = 0\n\
  if (r > 0) {\n\
    if ( c>0 && grid[r-1, c-1]) {\n\
      count = count + 1\n\
    }\n\
    if ( grid[r-1, c]) {\n\
      count = count + 1\n\
    }\n\
    if ( c<columns-1 && grid[r-1, c+1]) {\n\
      count = count + 1\n\
    }\n\
  }\n\
  if ( c>0 && grid[r, c-1]) {\n\
    count = count + 1\n\
  }\n\
  if ( c<columns-1 && grid[r, c+1]) {\n\
    count = count + 1\n\
  }\n\
  if (r < rows-1) {\n\
    if ( c>0 && grid[r+1, c-1]) {\n\
      count = count + 1\n\
    }\n\
    if ( grid[r+1, c]) {\n\
      count = count + 1\n\
    }\n\
    if ( c<columns-1 && grid[r+1, c+1]) {\n\
      count = count + 1\n\
    }\n\
  }\n\
  return count\n\
}\n\
\n\
\n\
function neighborCount2( grid, cell) {\n\
  var r = Math.floor(cell / columns)\n\
  var c = cell % columns\n\
  var count = 0\n\
  if ( r>0) {\n\
    if ( c>0 && grid[(r-1)*columns + c-1]) {\n\
      count = count + 1\n\
      //console.log("NW " + r + "," + c)\n\
    }\n\
    if ( grid[(r-1)*columns + c]) {\n\
      count = count + 1\n\
      //console.log("N " + r + "," + c)\n\
    }\n\
    if ( c<columns-1 && grid[(r-1)*columns + c+1]) {\n\
      count = count + 1\n\
      //console.log("NE " + r + "," + c)\n\
    }\n\
  }\n\
  if ( c>0 && grid[r*columns + c-1]) {\n\
    count = count + 1\n\
    //console.log("W " + r + "," + c)\n\
  }\n\
  if ( c<columns-1 && grid[r*columns + c+1]) {\n\
    count = count + 1\n\
    //console.log("E " + r + "," + c)\n\
  }\n\
  if (r < rows-1) {\n\
    if ( c>0 && grid[(r+1) * columns + c-1]) {\n\
      count = count + 1\n\
      //console.log("SW " + r + "," + c)\n\
    }\n\
    if ( grid[(r+1) * columns + c]) {\n\
      count = count + 1\n\
      //console.log("S " + r + "," + c)\n\
    }\n\
    if ( c<columns-1 && grid[(r+1) * columns + c+1]) {\n\
      count = count + 1\n\
      //console.log("SE " + r + "," + c)\n\
    }\n\
  }\n\
  return count\n\
}\n\
\n\
var past = [ Array( rows*columns).fill(false),\n\
             Array( rows*columns).fill(false),\n\
             Array( rows*columns).fill(false)\n\
           ]\n\
var numPast = past.length\n\
\n\
var lastPast = 0\n\
var oscillatingCount = 0\n\
var oscillatingPast\n\
var oscillatingDuration = 3 // how many oscillations are visible before stopping\n\
\n\
function endTest (grid) {\n\
  // return true if stable or oscillating\n\
  var stable = true\n\
  var oscillating2 = true\n\
  var oscillating3 = true\n\
  var oscillating = false\n\
  for (i = grid.length - 1; i>=0; i= i-1) {\n\
    // is the pattern stable?\n\
    if (grid[i] != past[lastPast] [i]) {\n\
       stable = false\n\
    }\n\
\n\
    // is the pattern on period = 2?\n\
    if (grid[i] != past[(lastPast + numPast -1) % numPast][i]) {\n\
       oscillating2 = false\n\
    }\n\
    // is the pattern on period = 3?\n\
    if (grid[i] != past[(lastPast + numPast -2) % numPast][i]) {\n\
       oscillating3 = false\n\
    }\n\
    past[(lastPast+1) % numPast][i] = grid[i]\n\
  }\n\
  if (oscillating2 || oscillating3) {\n\
    if (oscillatingCount == 0) { // first oscillation detected\n\
      oscillatingCount = oscillatingDuration\n\
      oscillatingPast = lastPast\n\
    } else {\n\
      if (lastPast == oscillatingPast) {\n\
        oscillatingCount = oscillatingCount - 1\n\
        if (oscillatingCount == 0) {\n\
          oscillating = true\n\
        }\n\
      }\n\
    }\n\
  }\n\
  lastPast = (lastPast+1) % numPast\n\
  //console.log( "stable:" + stable + " oscil2:" + oscillating2 + " oscil3:" + oscillating3+ " lastPast:" + lastPast)\n\
  return ( stable || oscillating)\n\
}\n\
\n\
\n\
// in the following patterns, the left most bit\n\
// is taken to be the highest bit. There is one\n\
// number per row (for up to 32 bits).\n\
var trafficLight = [\n\
  //5432109876543210\n\
  0b0000000000000000, //00\n\
  0b0000000000000000, //01\n\
  0b0000000000000000, //02\n\
  0b0000000000000000, //03\n\
  0b0000000000000000, //04\n\
  0b0000001110000000, //05\n\
  0b0000000000000000, //06\n\
  0b0000100000100000, //07\n\
  0b0000100000100000, //08\n\
  0b0000100000100000, //09\n\
  0b0000000000000000, //10\n\
  0b0000001110000000, //11\n\
  0b0000000000000000, //12\n\
  0b0000000000000000, //13\n\
  0b0000000000000000, //14\n\
  0b0000000000000000  //15\n\
]\n\
\n\
var greaterThan = [\n\
  //5432109876543210\n\
  0b1000000000000000, //00\n\
  0b0100000000000000, //01\n\
  0b0010000000000000, //02\n\
  0b0001000000000000, //03\n\
  0b0000100000000000, //04\n\
  0b0000010000000000, //05\n\
  0b0000001000000000, //06\n\
  0b0000000100000000, //07\n\
  0b0000000100000000, //08\n\
  0b0000001000000000, //09\n\
  0b0000010000000000, //10\n\
  0b0000100000000000, //11\n\
  0b0001000000000000, //12\n\
  0b0010000000000000, //13\n\
  0b0100000000000000, //14\n\
  0b1000000000000000  //15\n\
]\n\
\n\
\n\
var pulsar = [\n\
  //5432109876543210\n\
  0b0000000000000000, //00\n\
  0b0000000000000000, //01\n\
  0b0000111000111000, //02\n\
  0b0000000000000000, //03\n\
  0b0010000101000010, //04\n\
  0b0010000101000010, //05\n\
  0b0010000101000010, //06\n\
  0b0000111000111000, //07\n\
  0b0000000000000000, //08\n\
  0b0000111000111000, //09\n\
  0b0010000101000010, //10\n\
  0b0010000101000010, //11\n\
  0b0010000101000010, //12\n\
  0b0000000000000000, //13\n\
  0b0000111000111000, //14\n\
  0b0000000000000000  //15\n\
]\n\
\n\
\n\
var glider = [\n\
  //5432109876543210\n\
  0b0000000000000000, //00\n\
  0b0000000000000000, //01\n\
  0b0000000000000000, //02\n\
  0b0000000000000000, //03\n\
  0b0000000000000000, //04\n\
  0b0000000000000000, //05\n\
  0b0000000000000000, //06\n\
  0b0000000000000000, //07\n\
  0b0000000000000000, //08\n\
  0b0000000000000000, //09\n\
  0b0000000000000000, //10\n\
  0b0000000000000000, //11\n\
  0b0000000000000000, //12\n\
  0b1110000000000000, //13\n\
  0b0010000000000000, //14\n\
  0b0100000000000000  //15\n\
]\n\
\n\
\n\
var glider2 = [\n\
  //5432109876543210\n\
  0b0100000000000010, //00\n\
  0b0010000000000100, //01\n\
  0b1110000000000111, //02\n\
  0b0000000000000000, //03\n\
  0b0000000000000000, //04\n\
  0b0000000000000000, //05\n\
  0b0000000000000000, //06\n\
  0b0000000000000000, //07\n\
  0b0000000000000000, //08\n\
  0b0000000000000000, //09\n\
  0b0000000000000000, //10\n\
  0b0000000000000000, //11\n\
  0b0000000000000000, //12\n\
  0b1110000000000111, //13\n\
  0b0010000000000100, //14\n\
  0b0100000000000010  //15\n\
]\n\
\n\
\n\
var lwss = [ // light weight space ship\n\
  //5432109876543210\n\
  0b0000000000000000, //00\n\
  0b0000000000000000, //01\n\
  0b0000000000000000, //02\n\
  0b0000000000000000, //03\n\
  0b0000000000000000, //04\n\
  0b0111100000000000, //05\n\
  0b1000100000000000, //06\n\
  0b0000100000000000, //07\n\
  0b1001000000000000, //08\n\
  0b0000000000000000, //09\n\
  0b0000000000000000, //10\n\
  0b0000000000000000, //11\n\
  0b0000000000000000, //12\n\
  0b0000000000000000, //13\n\
  0b0000000000000000, //14\n\
  0b0000000000000000  //15\n\
]\n\
\n\
\n\
var lwss2 = [ // light weight space ship\n\
  //5432109876543210\n\
  0b1010000000001001, //00\n\
  0b0001000000010000, //01\n\
  0b0001000000010001, //02\n\
  0b1001000000011110, //03\n\
  0b0111000000000000, //04\n\
  0b0000000000000000, //05\n\
  0b0000000000000000, //06\n\
  0b0000000000000000, //07\n\
  0b0000000000000000, //08\n\
  0b0000000000000000, //09\n\
  0b0000000000000000, //10\n\
  0b0000000000001110, //11\n\
  0b0111100000001001, //12\n\
  0b1000100000001000, //13\n\
  0b0000100000001000, //14\n\
  0b1001000000000101, //15\n\
]\n\
\n\
var beacons = [\n\
  //5432109876543210\n\
  0b0000000000000000, //00\n\
  0b0000000000000000, //00\n\
  0b0000000000000000, //00\n\
  0b0001100000110000, //01\n\
  0b0001100000110000, //02\n\
  0b0000011011000000, //03\n\
  0b0000011011000000, //04\n\
  0b0000000000000000, //05\n\
  0b0000011011000000, //06\n\
  0b0000011011000000, //07\n\
  0b0001100000110000, //08\n\
  0b0001100000110000, //09\n\
  0b0000000000000000, //12\n\
  0b0000000000000000, //13\n\
  0b0000000000000000, //14\n\
  0b0000000000000000  //15\n\
]\n\
\n\
\n\
var pentathalon = [\n\
  //5432109876543210\n\
  0b0000000010000000, //00\n\
  0b0000000010000000, //01\n\
  0b0000000111000000, //02\n\
  0b0000000000000000, //03\n\
  0b0000000000000000, //04\n\
  0b0000000111000000, //05\n\
  0b0000000010000000, //06\n\
  0b0000000010000000, //07\n\
  0b0000000010000000, //08\n\
  0b0000000010000000, //09\n\
  0b0000000111000000, //10\n\
  0b0000000000000000, //11\n\
  0b0000000000000000, //12\n\
  0b0000000111000000, //13\n\
  0b0000000010000000, //14\n\
  0b0000000010000000  //15\n\
]\n\
\n\
\n\
var mwss = [\n\
  //5432109876543210\n\
  0b0000000000000000, //00\n\
  0b0000000000000000, //01\n\
  0b0000000000000000, //02\n\
  0b0000000000000000, //03\n\
  0b0000000000000000, //04\n\
  0b0000100000000000, //05\n\
  0b0010001000000000, //06\n\
  0b0000000100000000, //07\n\
  0b0010000100000000, //08\n\
  0b0001111100000000, //09\n\
  0b0000000000000000, //10\n\
  0b0000000000000000, //11\n\
  0b0000000000000000, //12\n\
  0b0000000000000000, //13\n\
  0b0000000000000000, //14\n\
  0b0000000000000000  //15\n\
]\n\
\n\
\n\
var hwss = [\n\
  //5432109876543210\n\
  0b0000000000000000, //00\n\
  0b0000000000000000, //01\n\
  0b0000000000000000, //02\n\
  0b0000000000000000, //03\n\
  0b0000000000000000, //04\n\
  0b0000110000000000, //05\n\
  0b0010000100000000, //06\n\
  0b0000000010000000, //07\n\
  0b0010000010000000, //08\n\
  0b0001111110000000, //09\n\
  0b0000000000000000, //10\n\
  0b0000000000000000, //11\n\
  0b0000000000000000, //12\n\
  0b0000000000000000, //13\n\
  0b0000000000000000, //14\n\
  0b0000000000000000  //15\n\
]\n\
\n\
\n\
var oscillator14 = [\n\
  //5432109876543210\n\
  0b0000000000000000, //00\n\
  0b0000000000000000, //01\n\
  0b0000000011100000, //02\n\
  0b0000000111100000, //03\n\
  0b1100001100011110, //04\n\
  0b1100011001101110, //05\n\
  0b0000000111100000, //06\n\
  0b0000000000000000, //07\n\
  0b0000000000000000, //08\n\
  0b0000000000000000, //09\n\
  0b0000000111100000, //10\n\
  0b1100011001101110, //11\n\
  0b1100001100011110, //12\n\
  0b0000000111100000, //13\n\
  0b0000000011100000, //14\n\
  0b0000000000000000, //15\n\
]\n\
\n\
\n\
var tumbler = [\n\
  //5432109876543210\n\
  0b0000000000000000, //00\n\
  0b0000000000000000, //01\n\
  0b0000000000000000, //02\n\
  0b0000000000000000, //03\n\
  0b0000001000100000, //04\n\
  0b0000001101100000, //05\n\
  0b0000000101000000, //06\n\
  0b0000010101010000, //07\n\
  0b0000011000110000, //08\n\
  0b0000001000100000, //09\n\
  0b0000000000000000, //10\n\
  0b0000000000000000, //11\n\
  0b0000000000000000, //12\n\
  0b0000000000000000, //13\n\
  0b0000000000000000, //14\n\
  0b0000000000000000  //15\n\
]\n\
\n\
\n\
var unix = [ // period 6 oscillator\n\
  //5432109876543210\n\
  0b0000000000000000, //00\n\
  0b0000000000000000, //01\n\
  0b0000000000000000, //02\n\
  0b0000011000000000, //03\n\
  0b0000011000000000, //04\n\
  0b0000000000000000, //05\n\
  0b0000000000000000, //06\n\
  0b0000111000000000, //07\n\
  0b0000110100110000, //08\n\
  0b0000001100110000, //09\n\
  0b0000001100000000, //10\n\
  0b0000000000000000, //11\n\
  0b0000000000000000, //12\n\
  0b0000000000000000, //13\n\
  0b0000000000000000, //14\n\
  0b0000000000000000  //15\n\
]\n\
\n\
\n\
\n\
var greatOnOff = [\n\
  //5432109876543210\n\
  0b0000000000000000, //00\n\
  0b0000000000000000, //01\n\
  0b0000011000000000, //02\n\
  0b0000100100000000, //03\n\
  0b0000101100000000, //04\n\
  0b0001101011000000, //05\n\
  0b0000000110100000, //06\n\
  0b0000000000100000, //07\n\
  0b0000000111000000, //08\n\
  0b0000000100000000, //09\n\
  0b0000000000000000, //10\n\
  0b0000000000000000, //11\n\
  0b0000000000000000, //12\n\
  0b0000000000000000, //13\n\
  0b0000000000000000, //14\n\
  0b0000000000000000  //15\n\
]\n\
\n\
\n\
var birther = [\n\
  //5432109876543210\n\
  0b0000000000000000, //00\n\
  0b1100000000000000, //01\n\
  0b1100000000000000, //02\n\
  0b0000000000000000, //03\n\
  0b0000000000000000, //04\n\
  0b0001000000000000, //05\n\
  0b1111100000000000, //06\n\
  0b0000010000000000, //07\n\
  0b0001100000000000, //08\n\
  0b0011000000000000, //09\n\
  0b0100000000000000, //10\n\
  0b0000000000000000, //11\n\
  0b0000000000000000, //12\n\
  0b0000000000000000, //13\n\
  0b0000000000000000, //14\n\
  0b0000000000000000  //15\n\
]\n\
\n\
\n\
var blank = [\n\
  //5432109876543210\n\
  0b0000000000000000, //00\n\
  0b0000000000000000, //01\n\
  0b0000000000000000, //02\n\
  0b0000000000000000, //03\n\
  0b0000000000000000, //04\n\
  0b0000000000000000, //05\n\
  0b0000000000000000, //06\n\
  0b0000000000000000, //07\n\
  0b0000000000000000, //08\n\
  0b0000000000000000, //09\n\
  0b0000000000000000, //10\n\
  0b0000000000000000, //11\n\
  0b0000000000000000, //12\n\
  0b0000000000000000, //13\n\
  0b0000000000000000, //14\n\
  0b0000000000000000  //15\n\
]\n\
\n\
\n\
var gen\n\
var numDemos = 16\n\
var demoNumber\n\
\n\
function demo() {\n\
  reset()\n\
  hideTurtle()\n\
  demoNumber = 0\n\
  gen = 10000000\n\
  nextGen()\n\
}\n\
\n\
function nextGen() {\n\
  gen = gen + 1\n\
  if (gen < 500 && !endTest(grid)) {\n\
    generation2( grid)\n\
    drawGrid2( grid)\n\
    delay (nextGen, 100)\n\
  } else {\n\
    switch (demoNumber) {\n\
    case 0:\n\
      loadPattern2(birther)\n\
      break\n\
    case 15:\n\
      loadPattern2(greatOnOff)\n\
      break\n\
    case 14:\n\
      loadPattern2(unix)\n\
      break\n\
    case 13:\n\
      loadPattern2(tumbler)\n\
      break\n\
    case 12:\n\
      loadPattern2(oscillator14)\n\
      break\n\
    case 11:\n\
      loadPattern2(hwss)\n\
      break\n\
    case 10:\n\
      loadPattern2(mwss)\n\
      break\n\
    case 9:\n\
      loadPattern2(trafficLight)\n\
      break\n\
    case 1:\n\
      loadPattern2(beacons)\n\
      break\n\
    case 2:\n\
      loadPattern2(glider)\n\
      break\n\
    case 3:\n\
      loadPattern2(glider2)\n\
      break\n\
    case 4:\n\
      loadPattern2(lwss)\n\
      break\n\
    case 5:\n\
      loadPattern2(lwss2)\n\
      break\n\
    case 6:\n\
      loadPattern2(pulsar)\n\
      break\n\
    case 7:\n\
      loadPattern2(greaterThan)\n\
      break\n\
    case 8:\n\
      loadPattern2(pentathalon)\n\
      break\n\
    default:\n\
      loadPattern2(greaterThan)\n\
      break\n\
    }\n\
    demoNumber = (demoNumber +1) % numDemos\n\
    drawGrid2( grid)\n\
    gen = 0\n\
    delay (nextGen, 500)\n\
  }\n\
}\n\
'
miura_origami ='\
// Miura Origami -- fold pattern for the miura origami\n\
\n\
function horiz( size){\n\
  hy = maxY()\n\
  while (hy > minY()) {\n\
    goto (minX(), hy)\n\
    angle(90)\n\
    forward( 2*maxX())\n\
    hy = hy - size\n\
  } \n\
}\n\
\n\
function vert( size) {\n\
  vx = minX()\n\
  while ( vx < maxX()) {\n\
    vy = maxY()\n\
    while (vy > minY()) {\n\
      goto( vx, vy)\n\
      angle( 180 - 6)\n\
      forward( size * Math.cos( degToRad(6)))\n\
      right( 12)\n\
      forward( size * Math.cos( degToRad(6)))\n\
      vy = vy - 2 * size\n\
\n\
    }\n\
    vx = vx + size\n\
  }\n\
}\n\
\n\
\n\
function demo() {\n\
  reset()\n\
  wrap( false)\n\
  size = 100\n\
  horiz( size)\n\
  vert( size)\n\
}\n\
'
mountain_tessellation ='\
// Mountain Tessellation -- tessellation with a mountain shaped heptiamond\n\
// a heptiamond is a shape composed of 7 equalateral triangles\n\
//\n\
//\n\
//// Triangle Tessellation -- tile a space using triangles\n\
\n\
colors = ["red", "white", "blue", "yellow", "green"]\n\
\n\
function shapeUp (side, fillColor) {\n\
  // assume pointing in direction of base\n\
  beginShape()\n\
  forward(3* side)\n\
  left(120)\n\
  forward(2*side)\n\
  left( 120)\n\
  forward(side)\n\
  right( 120)\n\
  forward( side)\n\
  left( 120)\n\
  forward( 2*side)\n\
  left(120)\n\
  fillShape( fillColor)\n\
}\n\
\n\
function mountainUnit(side){\n\
  pendown()\n\
  shapeUp(side, "darkgreen")//1,1\n\
  penup()\n\
  left(60)\n\
  forward(side)\n\
  right(60)\n\
  forward(5*side)\n\
  right(180)\n\
  pendown()\n\
  shapeUp(side, "skyblue")//1,0\n\
  penup()\n\
\n\
  forward(3*side)\n\
  left(180)\n\
  pendown()\n\
  shapeUp(side, "green") //0,0\n\
\n\
  penup()\n\
  left(60)\n\
  forward(2*side)\n\
  left(120)\n\
  pendown()\n\
  shapeUp(side, "lightblue")//0,1\n\
  forward( 3*side)\n\
  left( 180)\n\
  penup()\n\
\n\
}\n\
\n\
// nextColor could be completely random, if desired\n\
function nextColor() {\n\
  c = colors[ count % color.length]\n\
  count = count + 1\n\
  return c\n\
}\n\
\n\
\n\
function newRow(lastx, lasty) {\n\
  // function to determine where the new row should start\n\
}\n\
\n\
function demo() {\n\
  reset()\n\
  wrap(false)\n\
  side = 20\n\
  rowx = minX() - side // - 5.5 * side\n\
  rowy = minY()// +2*side\n\
  right(90)\n\
  mx = rowx\n\
  my = rowy\n\
\n\
console.log("xy<: " + minX() + " " + minY())\n\
  // row until run off bottom or off right side\n\
  // column when end is off screen\n\
\n\
  // while ( x<maxX() && y>minY()) {\n\
  var done = false\n\
  var i = 0\n\
  var sqrt3 = Math.sqrt(3)\n\
  while (!done){\n\
console.log("xy: " + i + " " + mx + " " + my)\n\
    goto (mx, my)\n\
    mountainUnit( side)\n\
    //goto (mx+2.2*side, my+1*sqrt3*side)\n\
    //write(i)\n\
    \n\
    mx = mx + 4.5 * side\n\
    my = my -sqrt3/2 * side\n\
\n\
    if (mx > maxX() || my < (minY() - 1.5 * sqrt3 * side)) {\n\
      console.log( "New row")\n\
      if (my > maxY()) {\n\
        done = true\n\
      }\n\
      // move up one row\n\
      rowx = rowx + 0.5 * side\n\
      rowy = rowy + 1.5 * sqrt3 * side\n\
      if (rowy > maxY() + sqrt3 * side) {\n\
        while (rowy> maxY() + sqrt3 * side) {\n\
          // step forward one more unit\n\
           console.log( "Stepping forward one")\n\
           rowx = rowx + 4.5 * side\n\
           rowy = rowy - sqrt3/2 * side\n\
        }\n\
      } else if (rowx > minX() - 1 * side) {\n\
         console.log( "Backing up one")\n\
         // back up one more unit\n\
         rowx = rowx - 4.5 * side\n\
         rowy = rowy + sqrt3/2 * side\n\
      }\n\
      mx = rowx\n\
      my = rowy\n\
      //done = true\n\
    }\n\
    if (i> 75) {\n\
      done = true\n\
    }\n\
    if ( mx>maxX() + 500  && my>maxY()) {\n\
      done = true\n\
    }\n\
    i++\n\
  }\n\
  console.log("Count: " + --i)\n\
\n\
}\n\
'
naifeh_ajlun ='\
// Naifah Ajlun -- inspired by the art of Steven Naifeh of the same name\n\
// for more information see https://stevennaifeh.com\n\
\n\
// kite has side b and h, square has side s\n\
// b = s + h\n\
// either vary the angle or vary the sides\n\
// try calulating the angle\n\
\n\
\n\
function quadrangle( ){\n\
  // start at lower left corner of outer square\n\
  beginShape()\n\
  forward(longSide)\n\
  right( 180 - angleA)\n\
  forward (longSide)\n\
  right(90)\n\
  forward( shortSide)\n\
  right(180 - angleC)\n\
  forward(shortSide)\n\
  right(90)\n\
  penup()\n\
  forward( longSide + shortSide)\n\
  right(90)\n\
  pendown()\n\
  fillShape("lightblue")\n\
}\n\
\n\
function demo() {\n\
  reset()\n\
  wrap(false)\n\
  rows = 4\n\
  columns = 5\n\
\n\
  side = 1.7 * Math.min(maxX()/(columns*3+1), maxY()/(rows*3+1))\n\
console.log ("side:"+side)\n\
\n\
  // sides and angles of the quadrangle\n\
  shortSide = side  // matter of convenience, could be something else\n\
  longSide = side*2 // matter of convenience\n\
  angleA = 2* radToDeg(Math.atan(shortSide/longSide))\n\
  angleC = 180 - angleA\n\
  offsetAngle = radToDeg( Math.atan( side/(shortSide + longSide)))\n\
\n\
  // center this more or less\n\
  goto(-.5 * columns * (shortSide + longSide) + .4 *side, .5 * (rows-2) * (shortSide + longSide) + .4*side)\n\
  left( offsetAngle)\n\
  for (var k=0; k<rows; k++) {\n\
    for (var j=0; j<columns; j++) { // across row\n\
      for (var i=0; i<4; i++) { // around inner square\n\
        quadrangle()\n\
      }\n\
      penup()\n\
      right(90)\n\
      forward( shortSide + longSide)\n\
      right(90)\n\
      forward( side)\n\
      left(180)\n\
      pendown()\n\
    }\n\
    penup()\n\
    left( 90- offsetAngle)\n\
    forward( columns * (shortSide + longSide)/Math.sin( degToRad( 90-offsetAngle)))\n\
    left( offsetAngle)\n\
    forward( side)\n\
    left(90)\n\
    forward( shortSide + longSide)\n\
    left( 180)\n\
    pendown()\n\
    hideTurtle()\n\
  }\n\
}\n\
'
naifeh_cyrene ='\
// Naifah Cyrene -- inspired by the art of Steven Naifeh of the same name.\n\
// for more information see https://stevennaifeh.com\n\
\n\
/* need to focus on the kites to form bow ties, rather than the squares.\n\
this may be a little harder to do, but\n\
easier to rasterize\n\
row of bowties\n\
row of up and down kites\n\
etc.\n\
\n\
The quadrangle must be symmetrical, in that the short sides are equal and\n\
the long sides are equal. The ratio between the two may vary.\n\
*/\n\
\n\
function bowties (count, back){\n\
  //assume on left edge pointing up, moving to right\n\
  // routine has invariance\n\
  // back = 0 big end first, =1 small end first\n\
  right( 90)\n\
  for (var i=0; i<count; i++) {\n\
    pendown()\n\
    if (i % 2 == back) {\n\
      downKite()\n\
    } else {\n\
      upKite()\n\
    }\n\
    penup()\n\
    forward( hypoteneuse)\n\
  }\n\
  left(180)\n\
  penup()\n\
  forward( count * hypoteneuse)\n\
  pendown()\n\
  right(90)\n\
}\n\
\n\
\n\
function upKite() {\n\
  //assume direction is in the axis of the kite\n\
  beginShape()\n\
  right( shortAngle)\n\
  forward( longSide)\n\
  left( 90)\n\
  forward( shortSide)\n\
  left( 180 - 2 * longAngle)\n\
  forward( shortSide)\n\
  left( 90)\n\
  forward( longSide)\n\
  right(180+ shortAngle)\n\
  fillShape("lightblue")\n\
}\n\
\n\
function downKite() {\n\
  //assume direction is in the axis of the kite\n\
  beginShape()\n\
  right( longAngle)\n\
  forward( shortSide)\n\
  left( 90)\n\
  forward( longSide)\n\
  left(180 - 2 * shortAngle)\n\
  forward( longSide)\n\
  left( 90)\n\
  forward( shortSide)\n\
  right( 180 + longAngle)\n\
  fillShape("lightblue")\n\
}\n\
\n\
function kites( count, back) {\n\
  //assume pointing up, perpendicular to flow\n\
  // routine has invariance\n\
  left(180)\n\
  for( var i=0; i<count; i++) {\n\
    pendown()\n\
    if (i % 2 == back) {\n\
      downKite()\n\
    } else {\n\
      upKite()\n\
    }\n\
\n\
    penup()\n\
    left(90)\n\
    forward( hypoteneuse)\n\
    right(90)\n\
    pendown()\n\
  }\n\
  penup()\n\
  right(90)\n\
  forward( count * hypoteneuse)\n\
  right(90)\n\
  pendown()\n\
}\n\
\n\
\n\
function demo() {\n\
  reset()\n\
  hideturtle()\n\
  side = 2.5 * Math.min( maxX()/9, maxY()/8)\n\
\n\
  //side = 50 // size of the basic block not the inner square\n\
  ratio = 2 // ratio of long side to short side of the quadragon.\n\
  verticalCount = 7\n\
  horizontalCount = 8\n\
\n\
  longSide = side * ratio / (1 + ratio)\n\
  shortSide = side - longSide\n\
\n\
  hypoteneuse = Math.sqrt(longSide * longSide + shortSide * shortSide)\n\
\n\
  shortAngle = radToDeg(Math.atan(shortSide/longSide))\n\
  longAngle = 90 - shortAngle\n\
\n\
  // center the figure\n\
  penup()\n\
  forward (side * horizontalCount * 1.3 / 4)\n\
  left(90)\n\
  forward (side * verticalCount * 1.7 /4)\n\
  right(90)\n\
  pendown()\n\
\n\
  for (var i=0; i<verticalCount; i++) {\n\
    bowties( horizontalCount, i % 2)\n\
    kites( horizontalCount+1, 1 - (i % 2)) // change 1 to 0 and 0 to 1\n\
    penup()\n\
    right(180)\n\
    forward( hypoteneuse)\n\
    right(180)\n\
    pendown()\n\
  }\n\
  bowties( horizontalCount,i%2) // row across bottom to be neat\n\
}\n\
'
naifeh_jeresh ='\
// Naifah Jeresh -- inspired by the art of Steven Naifeh of the same name\n\
// for more information see https://stevennaifeh.com\n\
\n\
// this figure has some issues. To get the line weights to change\n\
// you must stroke the entire figure after it is filled.\n\
\n\
\n\
// GLOBALS\n\
// \n\
var sColor = "black"  // stroke color\n\
var sWidth = 3        // stroke width\n\
var fColor = "white"  // fill color\n\
var bColor = "green"  // background color\n\
\n\
// FUNCTIONS\n\
//\n\
function tri( side, pointAngle, fill) {\n\
  if (fill) {\n\
    beginShape()\n\
  }\n\
  for (var i=0; i<3; i++) {\n\
    forward( side)\n\
    left(60 - pointAngle)\n\
    forward( side)\n\
    right( 180 - pointAngle)\n\
  }\n\
  if (fill) {\n\
    fillShape(fColor)\n\
  }\n\
}\n\
\n\
\n\
function jeresh (sid, pAngle, fill) {\n\
  for (var i=0;i<6;i++) {\n\
    pendown()\n\
    tri( sid, pAngle, fill)\n\
\n\
    var tx = turtle.pos.x\n\
    var ty = turtle.pos.y\n\
    var tHeading = turtle.angle\n\
    penup()\n\
    forward( sid)\n\
    left( 60 - pAngle)\n\
    forward( sid)\n\
    right( 180 - pAngle)\n\
    forward( sid)\n\
    left( 60)\n\
\n\
    for (var j=0; j<3; j++) {\n\
      pendown()\n\
      tri(sid, pAngle, fill)\n\
      penup()\n\
      forward(sid)\n\
      left(60)\n\
    }\n\
    goto(tx,ty)\n\
\n\
    turtle.angle=tHeading\n\
    penup()\n\
    forward( sid)\n\
    left(60)\n\
  }\n\
}\n\
\n\
\n\
function demo() {\n\
  /* can vary point angle.\n\
  0 and 120 is a hex tesselation\n\
  60 and 180 are triangles\n\
  90\n\
  negative numbers have overlap, so\n\
  something is not quite right\n\
  */\n\
  reset()\n\
  penup()\n\
  var pointAngle = 30\n\
  var side = 60\n\
  side = .2* Math.min( maxX(), maxY())\n\
  //center a bit\n\
  goto (side, -.3 * side)\n\
\n\
  background(bColor)\n\
  color( sColor)\n\
  width( 1)\n\
  jeresh( side, pointAngle, true)\n\
  width( 3)\n\
  jeresh( side, pointAngle, false)\n\
\n\
  hideTurtle()\n\
}\n\
'
naifeh_mamluk ='\
// Naifeh Mamluk -- inspired by the art of Steven Naifeh of same name\n\
// for more information see https://stevennaifeh.com\n\
\n\
\n\
function decagon(s, fcolor) {\n\
  // position at base of the decagon  parallel to bottom\n\
  // invariant\n\
  // note:\n\
  //   this shape basically replaces a hexagon,\n\
  //   but only with two sides.\n\
  //   the cutouts are for an outscribed rectangle\n\
  //   2*side by sqrt(3)*side\n\
\n\
  beginShape()\n\
  forward( s)\n\
  left( 120)\n\
  forward( d1)\n\
  right( 90)\n\
  forward( d2)\n\
  left( 120)\n\
  forward( d2)\n\
  right(90)\n\
  forward(d1)\n\
  left(120)\n\
  forward( s)\n\
\n\
  left( 120)\n\
  forward( d1)\n\
  right( 90)\n\
  forward( d2)\n\
  left( 120)\n\
  forward( d2)\n\
  right(90)\n\
  forward(d1)\n\
  left(120)\n\
  fillShape( fcolor)\n\
}\n\
\n\
function demo() {\n\
  reset()\n\
  wrap( false)\n\
  right(90)\n\
  side = 40\n\
  side = .25 * Math.min( maxX(), maxY())\n\
  goto (-.5* side, side)\n\
\n\
  //derived distances\n\
  d1 = side/2\n\
  d2 = side * Math.sqrt(3)/2\n\
\n\
  for( var i=0; i<6; i++) {\n\
    decagon( side, "blue")\n\
\n\
    penup()\n\
    left(90)\n\
    forward( Math.sqrt(3) * side)\n\
    left(30)\n\
    pendown()\n\
\n\
    decagon( side, "blue")\n\
\n\
    penup()\n\
    left(150)\n\
    forward( Math.sqrt(3) * side)\n\
    left( 90)\n\
    pendown()\n\
\n\
    forward( side)\n\
    right( 60)\n\
  }\n\
  hideturtle()\n\
}\n\
'
naifeh_mizen6 ='\
// Naifeh Mizen Six -- inspired by the art of Steven Naifeh of the same name\n\
// for more information see https://stevennaifeh.com\n\
\n\
function v (side, fColor) {\n\
  // assume pointing up at upper left corner\n\
  // invariant\n\
  if (fColor != "") {\n\
    beginShape()\n\
  }\n\
  left( 30)\n\
  forward( 3*side)\n\
  right( 120)\n\
  forward( side)\n\
  right(60)\n\
  forward(side)\n\
  left( 120)\n\
  forward( side)\n\
  right(60)\n\
  forward( side)\n\
  right( 120)\n\
  forward( 3*side)\n\
  right(150)\n\
  if (fColor != "") {\n\
    fillShape(fColor)\n\
  }\n\
}\n\
\n\
\n\
function mizen( side, lColor, fColor) {\n\
  // assume pointing up at upper left corner\n\
  // ends up rotated 120 CW at same point\n\
  color(lColor)\n\
  right(120)\n\
  for (var i=0; i<6; i++) {\n\
    pendown()\n\
    v( side, fColor)\n\
    penup()\n\
    right(30)\n\
    forward( side)\n\
    left( 60)\n\
    forward( 2*side)\n\
    left(30)\n\
    pendown()\n\
    v( side, fColor)\n\
\n\
    penup()\n\
    right(30)\n\
    forward( 2*side)\n\
    right( 150)\n\
    pendown()\n\
    v( side, fColor)\n\
\n\
    penup()\n\
    right(30)\n\
    forward( side)\n\
    right(120)\n\
    forward( 4*side)\n\
    right(150)\n\
    pendown()\n\
  }\n\
}\n\
\n\
\n\
\n\
function mizen6(side) {\n\
  penup()\n\
  for (var j=0; j<6; j++) {\n\
    mx = turtle.pos.x\n\
    my = turtle.pos.y\n\
    ma = turtle.angle\n\
    width(0)\n\
    mizen( side, "white", "blue")\n\
\n\
    // do it again for the border lines\n\
    goto( mx, my)\n\
    angle( radToDeg( ma))\n\
    width(.1 * side)\n\
    mizen( side, "white", "")\n\
\n\
    penup()\n\
    left(30)\n\
    forward (13 * side)\n\
    left(120)\n\
    forward( 3*side)\n\
    right(90)\n\
    pendown()\n\
  }\n\
  hideturtle()\n\
}\n\
\n\
\n\
function demo() {\n\
  reset()\n\
  side = .08 * Math.min( maxX(), maxY())\n\
  //center canvas more or less\n\
  goto (-8*side, 9*side)\n\
  mizen6( side)\n\
}\n\
'
naifeh_mizen ='\
// Naifeh Mizen Simple -- inspired by the are of Steven Naifeh of the same name\n\
// for more information see https://stevennaifeh.com\n\
\n\
\n\
function v (side, fColor) {\n\
  // assume pointing up at upper left corner\n\
  // invariant\n\
  if (fColor != "") {\n\
    beginShape()\n\
  }\n\
  left( 30)\n\
  forward( 3*side)\n\
  right( 120)\n\
  forward( side)\n\
  right(60)\n\
  forward(side)\n\
  left( 120)\n\
  forward( side)\n\
  right(60)\n\
  forward( side)\n\
  right( 120)\n\
  forward( 3*side)\n\
  right(150)\n\
  if (fColor != "") {\n\
    fillShape(fColor)\n\
  }\n\
}\n\
\n\
\n\
function mizen( side, lColor, fColor) {\n\
  color(lColor)\n\
  right(120)\n\
  for (var i=0; i<6; i++) {\n\
    v( side, fColor)\n\
    penup()\n\
    right(30)\n\
    forward( side)\n\
    left( 60)\n\
    forward( 2*side)\n\
    left(30)\n\
    pendown()\n\
    v( side, fColor)\n\
\n\
    penup()\n\
    right(30)\n\
    forward( 2*side)\n\
    right( 150)\n\
    pendown()\n\
    v( side, fColor)\n\
\n\
    penup()\n\
    right(30)\n\
    forward( side)\n\
    right(120)\n\
    forward( 4*side)\n\
    right(150)\n\
    pendown()\n\
  }\n\
}\n\
\n\
\n\
function mizenSimple() {\n\
  bColor = "red"\n\
  lColor = "white"\n\
  background ("tan")\n\
\n\
  //center canvas more or less\n\
  goto(-5*side, 3.5*side)\n\
  width (1)\n\
  angle(0)\n\
  mizen( side, "black", "red")\n\
\n\
  // do again to make lines stand out\n\
  goto(-5*side, 3.5*side)\n\
  width (3)\n\
  angle(0)\n\
  mizen( side, "white", "")\n\
}\n\
\n\
function demo() {\n\
  reset()\n\
  wrap(false)\n\
  side = 40 // 1/2 basic face of hexagon, width...\n\
  side = .15 * Math.min( maxX(), maxY())\n\
  mizenSimple()\n\
  hideturtle()\n\
}\n\
'
naifeh_petra ='\
// Naifeh Petra -- inspired by the art of Steven Naifeh of the same name\n\
// for more information see https://stevennaifeh.com\n\
\n\
/* want to do this in a rasterized way\n\
row of backslashs\n\
row of dashs\n\
row of slashes\n\
\n\
This does not support using a wider pen width.\n\
*/\n\
\n\
function backslash (fColor) {\n\
  // assume pointing up at upper left corner\n\
  // invariant\n\
  beginShape()\n\
  right( 150)\n\
  forward( 2*size)\n\
  left( 120)\n\
  forward( size)\n\
  left( 60)\n\
  forward( 2* size)\n\
  left( 120)\n\
  forward( size)\n\
  right( 150)\n\
  fillShape(fColor)\n\
}\n\
\n\
function slash (fColor) {\n\
  // assume pointing up at upper left corner\n\
  // invariant\n\
  beginShape()\n\
  left( 150)\n\
  forward( 2*size)\n\
  left( 120)\n\
  forward( size)\n\
  left( 60)\n\
  forward( 2* size)\n\
  left( 120)\n\
  forward( size)\n\
  right( 90)\n\
  fillShape(fColor)\n\
}\n\
\n\
function dash () {\n\
  // assume pointing up at upper left corner\n\
  // invariant\n\
  beginShape()\n\
  right( 150)\n\
  forward( size)\n\
  left( 60)\n\
  forward( 2*size)\n\
  left( 120)\n\
  forward( size)\n\
  left( 60)\n\
  forward( 2*size)\n\
  right( 90)\n\
  fillShape(fColor)\n\
}\n\
\n\
function dashBackslashes(count, mode, fColor) {\n\
  // assume pointing up at upper left corner\n\
  // mode = 0 normal; mode =1 skip first\n\
  // invariant\n\
  backup = 0\n\
  for (var i=0; i<count; i++) {\n\
    pendown()\n\
    if (i % 2 == 0) {\n\
      if (mode == 0 || i != 0){\n\
        dash()\n\
      }\n\
      penup()\n\
      right(90)\n\
      forward( 2*size)\n\
      left(90)\n\
      pendown()\n\
      backup = backup + 2\n\
    } else {\n\
      backslash(fColor)\n\
      penup()\n\
      right(90)\n\
      forward( size)\n\
      left(90)\n\
      pendown()\n\
      backup = backup + 1\n\
    }\n\
  }\n\
  penup()\n\
  left(90)\n\
  forward(backup * size)\n\
  right(90)\n\
  pendown()\n\
}\n\
\n\
\n\
function slashes(count, fColor) {\n\
  // assume pointing up at upper left corner\n\
  // invariant\n\
  for (var i=0; i<count; i++) {\n\
    slash( fColor)\n\
    penup()\n\
    right(90)\n\
    forward( 3*size)\n\
    left(90)\n\
    pendown()\n\
  }\n\
  penup()\n\
  left(90)\n\
  forward(count * 3 * size)\n\
  right(90)\n\
  pendown()\n\
  penup()\n\
}\n\
\n\
\n\
function demo() {\n\
  reset()\n\
  fColor = "blue"\n\
  size = .17 * Math.min( maxX(), maxY())\n\
  color("white")\n\
  //penwidth(.1* size)\n\
\n\
  //center canvas more or less\n\
  pointUp = false\n\
  if (pointUp) {\n\
    angle(90)\n\
    goto (4*size, 3.5*size)\n\
  } else {\n\
    angle(-60)\n\
    goto (-5.5*size, -1*size)\n\
  }\n\
  hideTurtle()\n\
\n\
  dashBackslashes(4, 0, fColor)\n\
\n\
  right(150)\n\
  forward( size)\n\
  left(150)\n\
  slashes( 3, fColor)\n\
\n\
  left(150)\n\
  forward(2*size)\n\
  right(60)\n\
  forward(size)\n\
  right(90)\n\
  dashBackslashes(6, 0, fColor)\n\
\n\
  right(150)\n\
  forward(size)\n\
  left(150)\n\
  slashes(4, fColor)\n\
\n\
  left(150)\n\
  forward(2*size)\n\
  right(60)\n\
  forward(size)\n\
  right(90)\n\
  dashBackslashes(7, 1, fColor)\n\
\n\
  penup()\n\
  right(90)\n\
  forward(3*size)\n\
  right( 60)\n\
  forward( size)\n\
  left(150)\n\
  pendown()\n\
  slashes(3, fColor)\n\
  \n\
  left(150)\n\
  forward(2*size)\n\
  right(60)\n\
  forward(size)\n\
  right(90)\n\
  dashBackslashes(5, 1, fColor)\n\
}\n\
'
naifeh_saida_inverse ='\
// Naifeh Saida Inverse -- draws the inverse of the Steven Naifeh Saida sculpture\n\
// for more information see https://stevennaifeh.com\n\
\n\
\n\
function antilayer (side, innerSide, offset) {\n\
  left( offset)\n\
  for (var i=0; i<8; i++){\n\
    penup()\n\
    forward( side)\n\
    pendown()\n\
  \n\
    beginShape()\n\
    left(45 + 22.5)\n\
    forward(innerSide)\n\
    left(90)\n\
    forward(innerSide)\n\
    left(180)\n\
    forward(innerSide)\n\
    right(90)\n\
    forward(innerSide)\n\
    left(180-22.5)\n\
\n\
    forward (side)\n\
    left(135)\n\
    forward( side)\n\
    left(45)\n\
    fillShape("black")\n\
    penup()\n\
    forward( side)\n\
    pendown()\n\
    left(180)\n\
  }\n\
  right(offset)\n\
}\n\
\n\
function demo() {\n\
  reset()\n\
  wrap(false)\n\
  hideTurtle()\n\
  side = .023 * Math.min( maxX(), maxY())\n\
\n\
  factor = Math.sqrt( 2+ Math.sqrt(2))\n\
  //side = 10\n\
  outside = factor * side\n\
  antilayer( outside, side, 22.5)\n\
  side = outside\n\
  outside = factor * side\n\
  antilayer( outside, side, 0)\n\
  side = outside\n\
  outside = factor * side\n\
  antilayer( outside, side, 22.5)\n\
  side = outside\n\
  outside = factor * side\n\
  antilayer( outside, side, 0)\n\
  side = outside\n\
  outside = factor * side\n\
  antilayer( outside, side, 22.5)\n\
}\n\
'
naifeh_saida ='\
// Naifeh Saida -- inspired by the art of Steven Naifeh with the same name\n\
// for more information see https://stevennaifeh.com\n\
\n\
\n\
function square (side) {\n\
  beginShape()\n\
  for (var i=0; i<4; i++){\n\
    forward(side)\n\
    right(90)\n\
  }\n\
  fillShape("blue")\n\
}\n\
\n\
\n\
function layer (side, offsetAngle) {\n\
  left( offsetAngle)\n\
  for (var i=0; i<8; i++){\n\
    penup()\n\
    forward( side)\n\
    left(45)\n\
    pendown()\n\
    square(side)\n\
    penup()\n\
    right(45)\n\
    backward( side)\n\
    right(45)\n\
  }\n\
  right(offsetAngle)\n\
}\n\
\n\
\n\
function demo() {\n\
  reset()\n\
  wrap(false)\n\
  side = 14\n\
  side = .033 * Math.min( maxX(), maxY())\n\
  factor = Math.sqrt(2 + Math.sqrt( 2))\n\
  //    side, radius, offsetAngle\n\
  layer(      side, 0)\n\
  side = side * factor\n\
  layer( side, 22.5)\n\
  side = side * factor\n\
  layer( side, 0)\n\
  side = side * factor\n\
  layer( side,   22.5)\n\
  side = side * factor\n\
  layer( side,   0)\n\
  hideTurtle()\n\
}\n\
'
nested_hexagons ='\
// Nested Hexagons -- draw a set of nested hexagons\n\
\n\
// draw a polygon of n sides of length m\n\
function polygon(sides,side) {\n\
  repeat(sides, function () {\n\
    forward(side);\n\
    right(360/sides);\n\
  });\n\
}\n\
\n\
// draw a set of nested hexagons\n\
function demo() {\n\
   size = maxY()\n\
   if (maxX() < size) {\n\
     size = maxX()\n\
   }\n\
   steps = size/10 // 10 is the step size\n\
   reset();\n\
   hideTurtle();\n\
   for(step=1; step < steps; step=step+1) {\n\
      color (random(16));\n\
      polygon(6,step*10);\n\
      penup();\n\
      left(120)\n\
      forward (10);\n\
      right(120);\n\
      pendown();\n\
   }\n\
}\n\
'
nested_squares ='\
// Nested Squares -- draw a set of nested squares\n\
\n\
//draw a square\n\
function square(side) {\n\
   repeat(4, function () {\n\
      forward(side);\n\
      right(90);\n\
   });\n\
}\n\
\n\
\n\
// draw some nested squares\n\
function nestedSquares(count) {\n\
  clear();\n\
  goto(0,0);\n\
  hideturtle();\n\
  for (s=1; s<count*4; s=s+4) {\n\
    penup();\n\
    // move down and back 2 spaces\n\
    left(90);\n\
    forward(2);\n\
    left(90);\n\
    forward(2);\n\
    left(180);\n\
    pendown();\n\
    color (random(16));\n\
    square (s);\n\
  }\n\
}\n\
\n\
function demo1() {\n\
  reset()\n\
  size = 2* maxY()\n\
  if (2* maxX() < size) {\n\
    size = 2*maxX()\n\
  }\n\
  number = .9 * size /4  // 4 is the difference in square size\n\
  function nest25 () {\n\
    nestedSquares (size);\n\
  }\n\
  // animate a simple parameterless function\n\
  animate( nest25, 200);\n\
}\n\
\n\
function demo() {\n\
  // animate with function needing a parameter passed\n\
  reset()\n\
  size = 2* maxY()\n\
  if (2* maxX() < size) {\n\
    size = 2*maxX()\n\
  }\n\
  number = .9 * size /4  // 4 is the difference in square size\n\
  animate( function () { nestedSquares(number)} ,200);\n\
}\n\
'
pentahex ='\
// Pentahex -- game pieces consisting of five hexagons in a 10x11 field\n\
\n\
// This sets up a pseudo interpreter. Each move is a right (r) or left (l)\n\
// token. Each piece consists of a set of such moves to from the outline\n\
// of the piece.\n\
\n\
function r() {\n\
  forward( side)\n\
  right( 60)\n\
}\n\
\n\
function l() {\n\
  forward( side)\n\
  left( 60)\n\
}\n\
\n\
  I5=[l,l,r,l,r,l,r,l,r,l,l,l,l,r,l,r,l,r,l,r,l,l]\n\
  D5=[l,l,r,l,r,l,l,l,r,l,l,r,l,l,r,l]\n\
  T5=[l,l,r,r,l,r,l,l,l,l,r,r,l,l,l,r,l,r,l,l]\n\
  N5=[l,l,r,r,l,l,r,l,r,l,l,l,l,r,l,r,r,l,l,r,l,l]\n\
  P5=[l,l,r,l,r,r,l,l,l,r,l,l,l,r,l,r,l,r,l,l]\n\
  E5=[l,l,r,r,l,l,l,r,r,l,l,l,l,r,l,r,l,r,l,l]\n\
  G5=[l,l,r,r,l,l,r,l,l,r,l,l,l,l,r,r,r,l,l,r,l,l]\n\
  A5=[l,r,l,l,l,r,r,l,l,l,l,r,r,l,l,l,r,l]\n\
  J5=[l,r,l,l,r,l,r,l,r,l,l,l,l,r,l,r,l,r,r,l,l,l]\n\
  Y5=[l,l,r,l,r,r,l,l,l,l,r,r,l,l,l,l,r,r,l,r,l,l]\n\
  X5=[l,l,r,r,l,l,l,r,l,l,l,r,r,l,l,l,r,l]\n\
  y5=[l,l,r,r,l,l,l,l,r,r,r,l,l,l,l,r,l,l,r,r,l,l]\n\
  u5=[l,l,r,l,r,l,l,r,l,l,l,l,r,r,r,l,l,l,r,l]\n\
  V5=[l,l,r,l,r,l,l,l,l,r,r,r,l,l,l,l,r,l,r,l]\n\
  U5=[l,r,l,l,r,l,l,l,l,r,r,r,r,l,l,l,l,r,l,l,r,l]\n\
  C5=[l,l,l,r,r,l,r,r,l,l,l,l,r,l,l,r,l,r,l,l,r,l]\n\
  q5=[l,l,r,r,l,r,l,l,l,r,l,l,l,r,r,l,l,r,l,l]\n\
  r5=[l,l,r,l,r,r,r,l,l,l,l,r,l,l,r,l,l,r,l,r,l,l]\n\
  L5=[l,r,l,r,l,l,l,l,r,l,r,r,l,r,l,l,l,l,r,l,r,l]\n\
  W5=[l,l,r,r,l,l,r,r,l,l,l,l,r,l,l,r,r,l,l,r,l,l]\n\
  S5=[l,l,l,r,r,l,r,l,l,r,l,l,l,l,r,r,l,r,l,l,r,l]\n\
  p5=[l,l,r,l,r,l,l,r,l,l,l,r,l,l,r,r,l,l]\n\
\n\
function shape( bx, by, axis, turns, fillColor ) {\n\
  // draw a shape at board position bx, by, with the piece oriented\n\
  // on one of six axises. The shape consists of an array of turns.\n\
  penup()\n\
  goto( baseX, baseY)\n\
  angle(0)\n\
  forward( 2* by * side * Math.cos(degToRad(30)))\n\
  right(60)\n\
  forward( 2* bx * side * Math.cos(degToRad(30)))\n\
  penup()\n\
  dot()  //center of start cell\n\
  angle(60 * axis )\n\
  left( 180 - 30)\n\
  forward( side)\n\
  left (120) \n\
  pendown()\n\
  beginShape()\n\
  for (j=0; j< turns.length; j++) {\n\
    turns[j]()\n\
  }\n\
  fillShape( fillColor)\n\
  penup()\n\
\n\
  left( 60)\n\
  forward(side)\n\
  dot()\n\
  backward(side)\n\
  right( 60)\n\
\n\
// return to the start position, not really necessary\n\
  left(60)\n\
  forward( side)\n\
  left( 30)\n\
}\n\
\n\
function drawAll() {\n\
  reset()\n\
  side = 15\n\
  baseX = -200\n\
  baseY = -200\n\
\n\
  shape(0,0,0,D5)\n\
  shape(3,0,0,u5)\n\
  shape(6,0,0,V5)\n\
  shape(9,0,0,r5)\n\
  shape(12,0,0,y5)\n\
  shape(15,0,0,L5)\n\
  shape(0,4,0,U5)\n\
  shape(3,4,0,Y5)\n\
  shape(6,4,0,p5)\n\
  shape(9,4,0,C5)\n\
  shape(12,4,0,A5)\n\
  shape(15,4,0,J5)\n\
  shape(0,7,0,I5)\n\
  shape(3,8,0,T5)\n\
  shape(6,8,0,N5)\n\
  shape(9,8,0,P5)\n\
  shape(12,8,0,G5)\n\
  shape(15,8,0,E5)\n\
  shape(0,12,0,S5)\n\
  shape(3,12,0,q5)\n\
  shape(6,12,0,W5)\n\
  shape(9,12,0,X5)\n\
}\n\
\n\
function demo() {\n\
  reset()\n\
  wrap(false)\n\
  hideTurtle()\n\
\n\
  side =   Math.min( 2*maxX()/ 12/ 1.5, 2*maxY()/ 16/ Math.sqrt(3))\n\
  //side = 20\n\
\n\
  baseX = -5 * 1.5 * side\n\
  baseY = -7 * Math.sqrt(3) * side\n\
\n\
  shape(0,2,3,D5, "red")\n\
  shape(2,0,1,u5, "lightgreen")\n\
  shape(5,0,1,V5, "blue")\n\
  shape(10,0,4,r5, "yellow")\n\
  shape(3,1,5,y5, "blue")\n\
  shape(10,1,5,L5, "red")\n\
  shape(5,3,3,U5, "red")\n\
  shape(3,2,0,Y5, "yellow")\n\
  shape(1,3,0,X5, "lightgreen")\n\
  shape(0,5,0,W5, "red")\n\
  shape(9,2,4,q5, "blue")\n\
  shape(5,4,5,p5, "lightgreen")\n\
  shape(9,3,5,S5, "yellow")\n\
  shape(10,5,4,C5, "lightgreen")\n\
  shape(8,6,1,A5, "yellow")\n\
  shape(8,5,4,J5, "red")\n\
  shape(3,7,1,I5, "blue")\n\
  shape(0,7,0,T5, "yellow")\n\
  shape(1,9,1,N5, "lightgreen")\n\
  shape(3,9,1,P5, "yellow")\n\
  shape(7,8,1,G5, "red")\n\
  shape(7,9,1,E5, "blue")\n\
}\n\
'
polygon ='\
// Polygon -- draw a polygon of n sides of length m\n\
\n\
// draw a polygon with n sides of length m\n\
function polygon(sides,side) {\n\
  repeat(sides, function () {\n\
    forward(side);\n\
    right(360/sides);\n\
  });\n\
}\n\
\n\
// draw a random polygon\n\
function demo() {\n\
   reset();\n\
   side = maxY()\n\
   if (maxX() < side) {\n\
     side = maxX()\n\
   }\n\
   side = .4 *side\n\
   goto(-.4 * side, -.5 * side)\n\
   hideTurtle();\n\
   polygon( random( 3,10), side);\n\
}\n\
'
random_stars ='\
// Random Stars -- draw stars randomly on the canvas\n\
\n\
function star (side, sColor) {\n\
  penup()\n\
  forward(.54*side)\n\
  turn (180-18)\n\
  pendown()\n\
  var i=0\n\
  beginShape()\n\
  while (i<5){\n\
    forward(side)\n\
    right(180-36)\n\
    i = i + 1\n\
  }\n\
  fillShape(sColor)\n\
  turn (180+18)\n\
}\n\
\n\
\n\
function demo () {\n\
  reset()\n\
  for (i=1; i< 150; i=i+1) {\n\
    goto (random(minX(),maxX()), random( minY(),maxY()))\n\
    left(random(359))\n\
    star (random(2,15), random(15))\n\
  }\n\
  hideTurtle()\n\
}\n\
'
random_stick_men ='\
// Random Stick Men -- draw stick men randomly on the canvas\n\
\n\
// stick man\n\
function stickMan (height) {\n\
  var headDiameter = height/4;\n\
  var torsoLength = height/3;\n\
  var neckLength = torsoLength/3\n\
  var armLength = height/3;\n\
  var legLength = height/2;\n\
\n\
  //assume center of man is center of torso and up is in the pointed direction\n\
  penup();\n\
  forward (torsoLength/2 + neckLength + headDiameter/2); \n\
  pendown();\n\
  circle (headDiameter/2); //draw head\n\
  penup();\n\
  right (180); //down\n\
  forward (headDiameter/2);\n\
  pendown()\n\
  forward (neckLength); //neck\n\
  right(120);\n\
  forward (armLength); //left arm\n\
  penup();\n\
  backward (armLength);\n\
  right(120);\n\
  pendown();\n\
  forward (armLength); //right arm\n\
  penup();\n\
  backward (armLength);\n\
  right(120);\n\
  pendown();\n\
  forward(torsoLength); // torso\n\
  right(30);\n\
  forward(legLength); //left leg\n\
  penup();\n\
  backward(legLength);\n\
  left(60);\n\
  pendown();\n\
  forward(legLength); //right leg\n\
  penup();\n\
  backward(legLength);\n\
  right(30+180);\n\
  forward(torsoLength/2);\n\
}\n\
\n\
function demo () {\n\
  reset();\n\
  hideturtle();\n\
  number = 0.0005 *  maxX() * maxY() // uniform density no matter size\n\
  for (i=0; i<number; i++) {\n\
    goto (random( minX()+20, maxX()-20),random( minY()+20, maxY()-20));\n\
    color(random(16));\n\
    stickMan(random (30,60));\n\
  }\n\
}\n\
'
rhombic_star_tessellation ='\
// Rhombic Star Tessellation -- a star tessellation using rhombus\n\
\n\
colors = ["red", "white", "blue", "yellow", "green"]\n\
numColors = colors.length\n\
\n\
function rh(side, fillColor) {\n\
  beginShape()\n\
  forward( side)\n\
  left( 45)\n\
  forward( side)\n\
  left( 180-45)\n\
  forward( side)\n\
  left( 45)\n\
  forward( side)\n\
  left( 180-45)\n\
  fillShape(fillColor)\n\
}\n\
\n\
function sideBySide( count, side, fillColor) {\n\
  for( var j=0; j<count; j++) {\n\
    pendown()\n\
    rh( side, fillColor)\n\
    penup()\n\
    right( (180-45)/2)\n\
    forward( 2* side * Math.sin( degToRad( 22.5)))\n\
    left( ( 180-45)/2)\n\
  }\n\
  left( ( 180-45)/2 + 45)\n\
  forward( 2 * count * side * Math.sin( degToRad( 22.5)))\n\
  right( (180-45)/2)\n\
}\n\
\n\
function cent(side, count) {\n\
  for( var i=0; i<8; i++) { // draw the center\n\
    rh( side, colors[0%numColors])\n\
    left( 45)\n\
  }\n\
\n\
  for( var i=0; i<8; i++) { // draw the second tier\n\
    forward( side)\n\
    rh( side, colors[1%numColors])\n\
    right( 45)\n\
    rh( side, colors[1%numColors])\n\
    left(45)\n\
    backward( side)\n\
    left(45)\n\
  }\n\
\n\
  for( var j=2; j<count; j++) { // draw the other tiers\n\
    for( var i=0; i<8; i++) {\n\
      forward( j*side)\n\
      pendown()\n\
      rh( side, colors[j%numColors])\n\
      right( 45)\n\
      sideBySide(j, side, colors[j%numColors])\n\
      backward( j*side)\n\
      left(45)\n\
    }\n\
  }\n\
}\n\
\n\
// nextColor could be completely random, if desired\n\
function nextColor() { \n\
  c = colors[ count % color.length]\n\
  count = count + 1\n\
  return c\n\
}\n\
\n\
function demo() {\n\
  reset()\n\
  wrap(false)\n\
  side = .075 * Math.min(maxX(), maxY())\n\
  cent( side, 12)\n\
  hideturtle()\n\
}\n\
'
rice_penta_tessellation_1 ='\
// rice penta tessellation 1 -- pentagon tessellation discovered by Margorie Rice\n\
\n\
c1 = "yellow"\n\
c2 = "orange"\n\
c3 = "red"\n\
c4 = "blue"\n\
c5 = "blue"\n\
c6 = "red"\n\
c7 = "yellow"\n\
c8 = "orange"\n\
\n\
function pr(fill) {\n\
  beginShape()\n\
  forward(sidea)\n\
  left(180-angleB)\n\
  forward(sideb)\n\
  left(180-angleC)\n\
  forward(sidec)\n\
  left(180-angleD)\n\
  forward(sided)\n\
  left(180-angleE)\n\
  forward(sidee)\n\
  left(180-angleA)\n\
  fillShape(fill)\n\
}\n\
\n\
function pl(fill) {\n\
  beginShape()\n\
  forward(sidea)\n\
  right(180-angleB)\n\
  forward(sideb)\n\
  right(180-angleC)\n\
  forward(sidec)\n\
  right(180-angleD)\n\
  forward(sided)\n\
  right(180-angleE)\n\
  forward(sidee)\n\
  right(180-angleA)\n\
  fillShape(fill)\n\
}\n\
\n\
\n\
function pu() { // penta unit\n\
  pr(c1)\n\
  pl(c2)\n\
\n\
  forward( 2*sidea)\n\
  left(180)\n\
  pr(c3)\n\
  pl(c4)\n\
\n\
\n\
  left( angleA)\n\
  forward( sidee)\n\
  left( 180 - angleC)\n\
  forward( sideb)\n\
  left( 180- angleB)\n\
  forward( sidea)\n\
  right(180)\n\
\n\
  pl(c5)\n\
  pr(c6)\n\
\n\
  forward( 2 * sidea)\n\
  right(180)\n\
  pr(c7)\n\
  pl(c8)\n\
}\n\
\n\
function demo() {\n\
  reset()\n\
  wrap( false)\n\
  size = 10\n\
\n\
  sidea = size\n\
  sideb = 5.9 * size // fudging to make work\n\
  sidec = 2.8 * size // fudging to make work\n\
  sided = sidec\n\
  sidee = 2 * sidec\n\
  angleA = 120\n\
  angleB = 90\n\
  angleC = 120\n\
  angleD = 90\n\
  angleE = 120\n\
  goto (minX(), maxY())\n\
  goto (minX(),maxY())\n\
  bigX = minX() + 2*size\n\
  bigY = maxY()\n\
  setHeading (44)\n\
  while (turtle.pos.x < maxX()) {\n\
    goto (bigX, bigY)\n\
    while (turtle.pos.y > minY()-8*size) {\n\
      pu()\n\
      left( angleA)\n\
      forward( sidee)\n\
      right( 180 - angleE)\n\
      forward( 2* sidec)\n\
      left( 180 - angleE)\n\
      forward( sidec)\n\
      right( 180 - angleD)\n\
      forward( sided)\n\
      left( 180- angleA)\n\
      forward( 2* sidea)\n\
      right( 180)\n\
    }\n\
    bigX = bigX + 20.72 * size\n\
    bigY = bigY + .4 * size\n\
  }\n\
}\n\
'
serendipitous ='\
// Serendipitous Circles -- draw ellipses with quadratic equation\n\
// from Byte magazine Aug 1977\n\
function demo () {\n\
  reset()\n\
  x1 = random(minX(),maxX())\n\
  y1 = random(minY(),maxY())\n\
  i = 0\n\
  color ("blue")\n\
  while (i < 100) {\n\
    i++\n\
    //write (x + " " + y)\n\
    x2 = x1 - y1/2\n\
    y2 = y1 + x2/2\n\
    len = Math.sqrt( ((y2-y1)*(y2-y1)) + ((x2-x1)*(x2-x1)))\n\
    dir = Math.asin( (y2-y1) / len) + Math.PI / 2\n\
    if ( (x2-x1) < 0) {\n\
      dir = (2 * Math.PI) - dir\n\
    }\n\
    //x1 = Math.floor( x2)\n\
    //y1 = Math.floor( y2)\n\
    x1 = x2\n\
    y1 = y2\n\
    angle (360 * dir / 2 / Math.PI)\n\
    forward (len)\n\
  }\n\
}\n\
'
sierpinski_curve ='\
// Sierpinski Curve -- draw a set of Sierpinski curves\n\
\n\
/* A Sierpinski curve is a symmetric\n\
fractal that covers a plane.  \n\
Note how each level is similar to the\n\
preceding level\n\
\n\
This also demonstrates the use of the\n\
delay function and powerful concepts\n\
of function redefinition and\n\
recursion.\n\
Function redefinition is a function\n\
defined within a function so that each\n\
time the outer function is invoked a new\n\
copy of the inner function is created.\n\
In this example, a part() function is\n\
created when either the sierpinski or\n\
halfSierpinski functions are invoked.\n\
Recursion is a function that calls\n\
itself. Recursive functions must include\n\
some test to stop the recursion to\n\
prevent the dreaded infinite loop.\n\
*/\n\
function halfSierpinski(size, level) {\n\
  if (level == 0)\n\
    forward(size);\n\
  else {\n\
    function part() {\n\
      halfSierpinski(size, level - 1);\n\
      left(45);\n\
      forward(size * Math.sqrt(2));\n\
      left(45);\n\
      halfSierpinski(size, level - 1);\n\
    }\n\
    part();\n\
    right(90);\n\
    forward(size);\n\
    right(90);\n\
    part();\n\
  }\n\
}\n\
\n\
function sierpinski(size, level) {\n\
  function part () {\n\
    halfSierpinski(size, level);\n\
    right(90);\n\
    forward(size);\n\
    right(90);\n\
  }\n\
  part ();\n\
  part ();\n\
}\n\
\n\
var i = 1; // a global variable used for each iteration of delayed\n\
\n\
function delayed() {\n\
  if (i<7) {\n\
    clear();\n\
    hideTurtle();\n\
    redrawOnMove(true);\n\
    goto(0,.9*minY());\n\
\n\
    // move start point so figure stays centered\n\
    penup();\n\
    angle(0);\n\
\n\
    size = 1.8 * Math.min( maxX(), maxY())\n\
    var sides = 4 * 2**i -3 // number of sides\n\
    var side = size/sides;\n\
    left(90)\n\
    forward(side/2)\n\
    right(90)\n\
\n\
    pendown();\n\
\n\
    sierpinski(side, i);\n\
    goto (minX(),minY());\n\
    angle(90);\n\
    setfont("bold 12pt Ariel,sans-serif")\n\
    write ("Sierpinski curve of order "+ i);\n\
    draw();\n\
    i = i + 1;\n\
    delay(delayed,3000)\n\
  }\n\
}\n\
\n\
function demo () {\n\
  i = 0;\n\
  delayed ();\n\
}\n\
'
sierpinski_triangle ='\
// Sierpinski Triangle -- draw a recursive triangular fractal\n\
// a recursive function is one that calls itself\n\
function sierpinski (order, side) {\n\
    if (order == 0) {\n\
        beginShape()\n\
        forward (side)\n\
        left (120)\n\
        forward (side)\n\
        left (120)\n\
        forward (side)\n\
        left (120)\n\
        fillShape("red")\n\
    } else {\n\
        penup()\n\
        forward (side/2)\n\
        pendown()\n\
        sierpinski( order-1, side/2) // bottom right\n\
        penup()\n\
        left (120)\n\
        forward (side/2)\n\
        right(120)\n\
        pendown()\n\
        sierpinski( order-1, side/2) // top center\n\
        penup()\n\
        right (120)\n\
        forward (side/2)\n\
        left (120)\n\
        pendown()\n\
        sierpinski( order-1, side/2) // bottom left\n\
    }\n\
}\n\
\n\
\n\
function delayed() {\n\
    if (i < 7) {\n\
        sier( i)\n\
        i = i+1\n\
        delay( delayed, 2000)\n\
    }\n\
}\n\
\n\
\n\
function sier (order) {\n\
    reset()\n\
    hideturtle()\n\
    side = 2* Math.min(maxX(),maxY()) -20\n\
    penup()\n\
    goto(-side/2, -side/2+20)\n\
    right(90)\n\
    pendown()\n\
    sierpinski( order, side)\n\
\n\
    goto (0+10- side/2,minY()+10)\n\
    setfont("bold 16px helvitica,sans-serif")\n\
    write ("Sierpinski triangle of order " + order)  \n\
}\n\
\n\
var i ; //global iteration variable\n\
\n\
function demo() {\n\
    reset()\n\
    i = 0\n\
    delayed()\n\
}\n\
'
simple_story ='\
// Simple Story -- simple framework for story frames\n\
// shows how to construct a story using frames. There is a text generator,\n\
// "explain" that puts text on the screen, but a frame can be anything:\n\
// a drawing, a turtle graphics image, or a turtle graphics animation\n\
// (hopefully of a finite duration).\n\
\n\
//**** GLOBALS ****\n\
\n\
var frameNumber = 0\n\
var frameDelay = 0\n\
\n\
\n\
//**** FUNCTIONS ****\n\
\n\
function explain( text) {\n\
  // lines within the text string are separated with an at "@" character.\n\
  reset();\n\
  var cWidth = 2* maxX();\n\
  var cHeight = 2* maxY();\n\
  var lineNumber = 0;\n\
  goto(-.90 * cWidth + maxX(), .9 * cHeight - maxY());\n\
  angle(90);\n\
  setfont("bold 20px arial,sans-serif");\n\
\n\
  var lines = text.split("@");\n\
  for (var i=0; i<lines.length; i++) {\n\
    console.log( lines[i])\n\
    goto (-.90 * cWidth + maxX(), maxY() -(i+1) * .1 * cHeight)\n\
    write (lines[i]);\n\
    lineNumber = lineNumber + 1;\n\
  }\n\
  hideTurtle();\n\
}\n\
\n\
function textDemo () {\n\
  explain ("In a time@long, long ago@and a place far, far away@there was a battle@that changed the history@of the entire@universe.");\n\
}\n\
\n\
function frame() {\n\
  switch (frameNumber) {\n\
  case 0:\n\
    frameDelay = 1000;\n\
    explain ("@@@@A Simple Story")\n\
    break;\n\
  case 1:\n\
    explain ("@@@@By a Wacky Programmer")\n\
    break;\n\
  case 2:\n\
    explain ("@@@@Produced by Turtle Graphics")\n\
    break;\n\
  case 3:\n\
    explain ("@@@@Distributed by JavaScript and HTML")\n\
    frameDelay = 1500;\n\
    break;\n\
  case 4:\n\
    explain ("")\n\
    frameNumber = 9;\n\
    frameDelay = 1000;\n\
    break;\n\
  case 10:\n\
    explain ("@@@@@@@@@@In a time");\n\
    break;\n\
  case 11:\n\
    explain ("@@@@@@@@@In a time@long, long ago");\n\
    break;\n\
  case 12:\n\
    explain ("@@@@@@@@In a time@long, long ago@and a place far, far away");\n\
    break;\n\
  case 13:\n\
    explain ("@@@@@@@In a time@long, long ago@and a place far, far away@there was a software program");\n\
    break;\n\
  case 14:\n\
    explain ("@@@@@@In a time@long, long ago@and a place far, far away@there was a software program@that changed the history");\n\
    break;\n\
  case 15:\n\
    explain ("@@@@@In a time@long, long ago@and a place far, far away@there was a software program@that changed the history@of the entire");\n\
    break;\n\
  case 16:\n\
    explain ("@@@@In a time@long, long ago@and a place far, far away@there was a software program@that changed the history@of the entire@(yes, the ENTIRE).");\n\
    break;\n\
  case 17:\n\
    explain ("@@@In a time@long, long ago@and a place far, far away@there was a software program@that changed the history@of the entire@(yes, the ENTIRE)@universe.");\n\
    break;\n\
  case 18:\n\
    explain ("@@In a time@long, long ago@and a place far, far away@there was a software program@that changed the history@of the entire@(yes, the ENTIRE)@universe.");\n\
    break;\n\
  case 19:\n\
    explain ("@In a time@long, long ago@and a place far, far away@there was a software program@that changed the history@of the entire@(yes, the ENTIRE)@universe.");\n\
    break;\n\
  case 20:\n\
    explain ("In a time@long, long ago@and a place far, far away@there was a software program@that changed the history@of the entire@(yes, the ENTIRE)@universe.");\n\
    break;\n\
  case 21:\n\
    explain ("long, long ago@and a place far, far away@there was a software program@that changed the history@of the entire@(yes, the ENTIRE)@universe.");\n\
    break;\n\
  case 22:\n\
    explain ("and a place far, far away@there was a software program@that changed the history@of the entire@(yes, the ENTIRE)@universe.");\n\
    break;\n\
  case 23:\n\
    explain ("there was a software program@that changed the history@of the entire@(yes, the ENTIRE)@universe.");\n\
    break;\n\
  case 24:\n\
    explain ("that changed the history@of the entire@(yes, the ENTIRE)@universe.");\n\
    break;\n\
  case 25:\n\
    explain ("of the entire@(yes, the ENTIRE)@universe.");\n\
    break;\n\
  case 26:\n\
    explain ("(yes, the ENTIRE)@universe.");\n\
    break;\n\
  case 27:\n\
    explain ("universe.");\n\
    break;\n\
  case 28:\n\
    explain ("");\n\
    frameDelay = 2000;\n\
    break;\n\
  default:\n\
    explain("@@@@@The end.")\n\
    frameNumber = -1;\n\
    break;\n\
  }\n\
  if (frameNumber >= 0) {\n\
    frameNumber = frameNumber + 1;\n\
    delay(frame, frameDelay)\n\
  }\n\
}\n\
  \n\
function demo() {\n\
  // show three text frames\n\
  frameDelay = 1000;\n\
  frameNumber = 0;\n\
  frame();\n\
}\n\
'
sliding_block ='\
// sliding block puzzle -- animated solution to Square Root sliding block puzzle\n\
// details of the moves are on the console.log\n\
\n\
var side\n\
var baseX\n\
var baseY\n\
var count\n\
\n\
var e = "e"\n\
var w = "w"\n\
var n = "n"\n\
var s = "s"\n\
var ee = "ee"\n\
var ww = "ww"\n\
var nn = "nn"\n\
var ss = "ss"\n\
var ne = "ne"\n\
var nw = "nw"\n\
var se = "se"\n\
var sw = "sw"\n\
var en = "en"\n\
var es = "es"\n\
var wn = "wn"\n\
var ws = "ws"\n\
\n\
/* valid moves for blocks\n\
 * all tests include bounds test\n\
 * 1x1\n\
 *   if x-1 is free: w\n\
 *   if x-1 and x-2 is free: ww\n\
 *   if x-1 and y-1 is free: wn\n\
 *   if x-1 and y+1 is free: ws\n\
 *   if x+1 is free: e\n\
 *   if x+1 and x+2 is free: ee\n\
 *   if x+1 and y-1 is free: en\n\
 *   if x+1 and y+1 is free: es\n\
 *   if y-1 is free: n\n\
 *   if y-1 and y-2 is free: nn\n\
 *   if y-1 and x-1 is free: nw\n\
 *   if y-1 and x+1 is free: ne\n\
 *   if y+1 is free: s\n\
 *   if y+1 and y+2 is free: ss\n\
 *   if y+1 and x-1 is free: sw\n\
 *   if y+1 and x+1 is free: se\n\
 * 1x2\n\
 *   if x-1 and x-1,y+1 is free: w\n\
 *   if x+1 and x+1,y+1 is free: e\n\
 *   if y+2 is free: s\n\
 *   if y+2 and y+3 is free: ss\n\
 *   if y-1 is free: n\n\
 *   if y-1 and y-2 is free: nn\n\
 * 2x1\n\
 *   if x-1 is free: w\n\
 *   if x-1 and x-2 is free: ww\n\
 *   if x+2 is free: e\n\
 *   if x+2 and x+3 is free: ee\n\
 *   if y+1 and x+1,y+1 is free: s\n\
 *   if y-1 and x+1,y-1 is free: n\n\
 * 2x2\n\
 *   if x-1 and x-1,y+1 is free: w\n\
 *   if x+2 and x+2,y+1 is free: e\n\
 *   if y+2 and x+1,y+2 is free: s\n\
 *   if y-1 and x+1,y-1 is free: n\n\
*/\n\
blocks = [ {h:1, v:2, x:0, y:0},\n\
           {h:2, v:2, x:1, y:0},\n\
           {h:1, v:2, x:3, y:0},\n\
           {h:2, v:1, x:0, y:2},\n\
           {h:1, v:1, x:0, y:3},\n\
           {h:1, v:1, x:0, y:4},\n\
           {h:1, v:2, x:1, y:3},\n\
           {h:1, v:2, x:2, y:3},\n\
           {h:1, v:1, x:3, y:3},\n\
           {h:1, v:1, x:3, y:4} ]\n\
\n\
function init () {\n\
  side = .9 * 2* Math.min(maxX()/4, maxY()/5)\n\
  baseX = -2 * side\n\
  baseY = 2.5 * side\n\
  count = 0\n\
}\n\
\n\
function drawBlock( h, v, x, y, n) {\n\
  //console.log("DB" + " " + h + " " + v + " " + x + " " + y)\n\
  // draw a block\n\
  color ("black")\n\
  beginShape()\n\
  goto (baseX + x * side, baseY - y * side)\n\
  setHeading(90)\n\
  forward( h * side)\n\
  right( 90)\n\
  forward( v * side)\n\
  right( 90)\n\
  forward( h * side)\n\
  right( 90)\n\
  forward( v * side)\n\
  right( 90)\n\
  fillShape("tan")\n\
\n\
  goto (baseX + (x + .5)*side, baseY -(y+.5) *side)\n\
  write(n)\n\
}\n\
\n\
\n\
function moveBlock (blockIndex, x, y) {\n\
  blocks[ blockIndex].x = x\n\
  blocks[ blockIndex].y = y\n\
  count = count + 1\n\
}\n\
\n\
\n\
function drag( blockIndex, dir) {\n\
  //dir is a string of e, w, n, s\n\
  var x = 0\n\
  var y = 0\n\
  for (ch in dir) {\n\
    if (dir[ch] == "w") {\n\
      x = x - 1\n\
    } else if (dir[ch] == "e") {\n\
      x = x + 1\n\
    } else if (dir[ch] == "s") {\n\
      y = y + 1\n\
    } else if (dir[ch] == "n") {\n\
      y = y - 1\n\
    }\n\
\n\
    //console.log(dir[ch] + " " + x + "," + y)\n\
  }\n\
  blocks[ blockIndex].x = blocks[ blockIndex].x + x\n\
  blocks[ blockIndex].y = blocks[ blockIndex].y + y\n\
  count = count + 1\n\
}\n\
\n\
function drawBlocks () {\n\
  for (var block in blocks) {\n\
    //console.log("dBs: " + block)\n\
    drawBlock( blocks[ block].h, blocks[block].v, blocks[block].x, blocks[block].y, block)\n\
  }\n\
}\n\
\n\
\n\
\n\
var free = []\n\
\n\
function findFree() {\n\
  // find the free spaces in the puzzle\n\
  var x,y, v, h, block, overlap, freeList\n\
\n\
free = [[undefined, undefined, undefined, undefined],\n\
        [undefined, undefined, undefined, undefined],\n\
        [undefined, undefined, undefined, undefined],\n\
        [undefined, undefined, undefined, undefined],\n\
        [undefined, undefined, undefined, undefined]]\n\
\n\
  // mark the in use spaces\n\
  overlap = false\n\
  for (block in blocks) {\n\
    x = blocks[block].x\n\
    y = blocks[block].y\n\
    v = blocks[block].v\n\
    h = blocks[block].h\n\
    //console.log( "X:"+x + " Y:"+y + " free:" + free[x][y])\n\
    if (free[x][y] == undefined) {\n\
      //console.log("unfreeing 00: " + x + " " + y + " " + block)\n\
      free[x][y] = block\n\
      // check for 2x1 or 2x2\n\
      if (h == 2) {\n\
        if (free[x+1][y] == undefined) {\n\
      //console.log("unfreeing 10: " + x + " " + y + " " + block)\n\
          free[x+1][y] = block\n\
        } else {\n\
          overlap = true\n\
        }\n\
      }\n\
      // check for 1x2 or 2x2\n\
      if (v == 2) {\n\
        if (free[x][y+1] == undefined) {\n\
      //console.log("unfreeing 01: " + x + " " + y + " " + block)\n\
          free[x][y+1] = block\n\
        } else {\n\
          overlap = true\n\
        }\n\
      }\n\
      // check for 2x2 specifically\n\
      if (h == 2 && v == 2) {\n\
        if (free[x+1][y+1] == undefined) {\n\
      //console.log("unfreeing 11: " + x + " " + y + " " + block)\n\
          free[x+1][y+1] = block\n\
        } else {\n\
          overlap = true\n\
        }\n\
      }\n\
    } else {\n\
      overlap = true\n\
    }\n\
    if (overlap) {\n\
      console.log( "Block " + block + " is overlapping")\n\
    }\n\
  }\n\
\n\
  // find the free spaces\n\
  freeList = []\n\
  for( y=0; y<5; y = y+1) { \n\
    for( x=0; x<4; x = x+1) {\n\
      //console.log( "X:"+x + " Y:"+y + " Block:" + free[x][y])\n\
      if (free[x][y] == undefined) { //free\n\
        //freeList.push([x,y])\n\
        //freeList.push({"x":x,"y":y})\n\
        freeList.push(([x,y]))\n\
      }\n\
    }\n\
  }\n\
  if (freeList.length != 2) {\n\
    console.log( "FreeList has wrong number of members: " + freeList.length)\n\
  }\n\
  //console.log( "FreeList:  " + freeList)\n\
  //console.log( "FreeList0:  " + freeList[0])\n\
  var freeStr = ""\n\
  var lead = ""\n\
  var freemember\n\
  for (freemember in freeList) {\n\
    freeStr = freeStr + lead + "[" +  freeList[freemember] + "]"\n\
    lead = ","\n\
  }\n\
\n\
  // log the blocks\n\
  var logStr\n\
  for( y=0; y<5; y = y+1) { \n\
    logStr = y + ":"\n\
    for( x=0; x<4; x = x+1) {\n\
      if (free[x][y] == undefined) {\n\
        logStr = logStr + " "\n\
      } else {\n\
        logStr = logStr + free[x][y]\n\
      }\n\
    }\n\
    console.log( logStr)\n\
  }\n\
  console.log( "  FreeList: "+ freeStr)\n\
}\n\
\n\
var moveList = []\n\
\n\
function checkMove( block, direction) {\n\
  var found = false\n\
  var index\n\
  //if move is not on moveList\n\
  for (index in moveList) {\n\
    if (moveList[index][0] == block && moveList[index][1].localeCompare(direction)==0) {\n\
      found = true\n\
    }\n\
  }\n\
  if (!found) {\n\
    console.log( "   ***Move is not on moveList***")\n\
  }\n\
}\n\
 \n\
\n\
function checkLastMove( block, direction) {\n\
  // check that the moveList includes the reciprocal of the last move\n\
  var index\n\
  var directions = direction.split("")\n\
  var ripString = ""\n\
  var found = false\n\
  for (index in directions) {\n\
    if (directions[index] == "e") { ripString = "w" + ripString } \n\
    if (directions[index] == "w") { ripString = "e" + ripString } \n\
    if (directions[index] == "n") { ripString = "s" + ripString } \n\
    if (directions[index] == "s") { ripString = "n" + ripString }\n\
  }\n\
  for (index in moveList) {\n\
    if (moveList[index][0] == block && moveList[index][1] == ripString) {\n\
      found = true\n\
    }\n\
  }\n\
  if (!found) {\n\
    console.log( "   ***Reciprocal move to "+ block+direction + " is not on moveList***")\n\
  }\n\
}\n\
\n\
function findMoves() {\n\
  // find the free spaces in the puzzle\n\
  var x, y, v, h, block\n\
\n\
  moveList = []\n\
\n\
  for (block in blocks) {\n\
    x = blocks[block].x\n\
    y = blocks[block].y\n\
    v = blocks[block].v //vertical size\n\
    h = blocks[block].h //horizontal size\n\
\n\
    if (v == 1) {\n\
      if (x>=1 && free[x-1][y] == undefined) {\n\
        moveList.push([block,"w"])\n\
        if (x>=2 && free[x-2][y] == undefined) {\n\
            moveList.push([block,"ww"])\n\
        } else if (h==1) {\n\
          if ( y>=1 && free[x-1][y-1] == undefined) {\n\
            moveList.push([block,"wn"])\n\
          } else if (y<=3 && free[x-1][y+1] == undefined) {\n\
            moveList.push([block,"ws"])\n\
          }\n\
        }\n\
      }\n\
      if (x+h<=3 && free[x+h][y] == undefined) {\n\
        moveList.push([block,"e"])\n\
        if (x+h+1<=3 && free[x+h+1][y] == undefined) {\n\
            moveList.push([block,"ee"])\n\
        } else if (h == 1) {\n\
          if (y>=1 && x<=2 && free[x+1][y-1] == undefined) {\n\
            moveList.push([block,"en"])\n\
          } else if (y<=3 && x<=2 && free[x+1][y+1] == undefined) {\n\
            moveList.push([block,"es"])\n\
          }\n\
        }\n\
      }\n\
    }\n\
\n\
    if (h == 1) {\n\
      if (y>=1 && free[x][y-1] == undefined) {\n\
        moveList.push([block,"n"])\n\
        if (y>=2 && free[x][y-2] == undefined) {\n\
            moveList.push([block,"nn"])\n\
        }\n\
        if (v == 1) {\n\
          if (x>=1 && free[x-1][y-1] == undefined) {\n\
            moveList.push([block,"nw"])\n\
          } else if (x<=2 && free[x+1][y-1] == undefined) {\n\
            moveList.push([block,"ne"])\n\
          }\n\
        }\n\
      }\n\
      if (y+v<=4 && free[x][y+v] == undefined) {\n\
        moveList.push([block,"s"])\n\
        if (y+v+1<=4 && free[x][y+v+1] == undefined) {\n\
            moveList.push([block,"ss"])\n\
        }\n\
        if (v == 1) {\n\
          if (x>=1 && free[x-1][y+1] == undefined) {\n\
            moveList.push([block,"sw"])\n\
          } else if (x<=2 && free[x+1][y+1] == undefined) {\n\
            moveList.push([block,"se"])\n\
          }\n\
        }\n\
      }\n\
    }\n\
\n\
    if (v == 2) {\n\
      if (x>=1 && free[x-1][y] == undefined && free[x-1][y+1] == undefined ) {\n\
        moveList.push([block,"w"])\n\
      } else if (x<=2 && free[x+h][y] == undefined && free[x+h][y+1] == undefined) {\n\
        moveList.push([block,"e"])\n\
      }\n\
    }\n\
\n\
    if (h == 2) {\n\
      if (y>=1 && free[x][y-1] == undefined && free[x+1][y-1] == undefined) {\n\
        moveList.push([block,"n"])\n\
      } else if (y+v<=4 && free[x][y+v] == undefined && free[x+1][y+v] == undefined) {\n\
        moveList.push([block,"s"])\n\
      }\n\
    }\n\
  }\n\
\n\
  //console.log("Moves: " + moveList)\n\
  var moveStr = ""\n\
  var lead = ""\n\
  var index\n\
  var possibleMoveCount = 0\n\
  for (index in moveList) {\n\
    moveStr = moveStr + lead +  moveList[index][0] +  moveList[index][1] \n\
    if ( lastMove[0] == moveList[index][0]) { // tag reciprocal moves\n\
      moveStr = moveStr + "*"\n\
    } else {\n\
      possibleMoveCount = possibleMoveCount + 1\n\
    }\n\
    lead = ", "\n\
  }\n\
  console.log( "  Moves: "+ moveStr)\n\
  if (possibleMoveCount < 1) {\n\
    console.log ("   ***There are not enough moves***")\n\
  }\n\
}\n\
\n\
\n\
/* valid moves for blocks\n\
 * all tests include bounds test\n\
 * 1x1 -\n\
 *   if x-1 is free: w\n\
 *   if x-1 and x-2 is free: ww\n\
 *   if x-1 and y-1 is free: wn\n\
 *   if x-1 and y+1 is free: ws\n\
 *   if x+1 is free: e\n\
 *   if x+1 and x+2 is free: ee\n\
 *   if x+1 and y-1 is free: en\n\
 *   if x+1 and y+1 is free: es\n\
 *   if y-1 is free: n\n\
 *   if y-1 and y-2 is free: nn\n\
 *   if y-1 and x-1 is free: nw\n\
 *   if y-1 and x+1 is free: ne\n\
 *   if y+1 is free: s\n\
 *   if y+1 and y+2 is free: ss\n\
 *   if y+1 and x-1 is free: sw\n\
 *   if y+1 and x+1 is free: se\n\
 * 1x2 |\n\
 *   if x-1 and x-1,y+1 is free: w\n\
 *   if x+1 and x+1,y+1 is free: e\n\
 *   if y+2 is free: s\n\
 *   if y+2 and y+3 is free: ss\n\
 *   if y-1 is free: n\n\
 *   if y-1 and y-2 is free: nn\n\
 * 2x1 --\n\
 *   if x-1 is free: w\n\
 *   if x-1 and x-2 is free: ww\n\
 *   if x+2 is free: e\n\
 *   if x+2 and x+3 is free: ee\n\
 *   if y+1 and x+1,y+1 is free: s\n\
 *   if y-1 and x+1,y-1 is free: n\n\
 * 2x2 ==\n\
 *   if x-1 and x-1,y+1 is free: w\n\
 *   if x+2 and x+2,y+1 is free: e\n\
 *   if y+2 and x+1,y+2 is free: s\n\
 *   if y-1 and x+1,y-1 is free: n\n\
*/\n\
\n\
\n\
function getState() {\n\
  //returns a value that is the state of the puzzle\n\
  //each piece is located with a 2-bit x and 3-bit y\n\
  //1x2 and 1x1 pieces are deternined by left to right and top to bottom order\n\
	// this allows the same state for exchanged pieces\n\
  var blockPos = [undefined, undefined, undefined,\n\
	          undefined, undefined, undefined,\n\
	          undefined, undefined, undefined]\n\
  var blockSeen = [ false, false, false, false, false,\n\
                    false, false, false, false]\n\
  var blockMap1x2 = 2 \n\
  var blockMap1x1 = 6 \n\
  var blockNum\n\
\n\
  for( y=0; y<5; y = y+1) { \n\
    for( x=0; x<4; x = x+1) {\n\
      blockNum = free[x][y]\n\
      if (blockNum != undefined && !blockSeen[ blockNum] ) { // first sight of block\n\
        blockSeen[ blockNum] = true\n\
	if (blockNum == 1 ) { // 2x2\n\
	  blockPos[ 0 ] = [x,y]\n\
	} else if (blockNum == 3 ) { // 2x1\n\
	  blockPos[ 1 ] = [x,y]\n\
	} else if (blockNum == 0 || blockNum == 2 || blockNum == 6 || blockNum == 7) { // 1x2\n\
	  blockPos[ blockMap1x2] = [x,y]\n\
	  blockMap1x2 = blockMap1x2 + 1\n\
        } else if (blockNum == 4 || blockNum == 5 || blockNum == 8 || blockNum == 9) { // 1x1\n\
	  blockPos[ blockMap1x1] = [x,y]\n\
	  blockMap1x1 = blockMap1x1 + 1\n\
	}\n\
      }\n\
    }\n\
  }\n\
\n\
  // wanted to do bit arithmetic, but that limit is 32 bits and need 50\n\
  // uses 2 bits for x and 3 bits for y for each of 10 blocks = 50 bits\n\
  // 5 bits is 2**5 = 32\n\
  // putting the most stable blocks at high end of state number\n\
  var state = 0\n\
  for (blockNum = 0; blockNum <10; blockNum = blockNum + 1) {\n\
    console.log ("state blockNum:" + blockNum + " pos:" + blockPos[ blockNum] + " state:" + state + " " + (blockPos[blockNum][0] + (blockPos[blockNum][1]*4)) * 32**( 9 - blockNum) + " " + (blockPos[blockNum][0] + (blockPos[blockNum][1]*4)) )\n\
    state = state + ((blockPos[blockNum][0] + (blockPos[blockNum][1]*4)) * 32**( 9 - blockNum))\n\
  }\n\
  if ( blockMap1x2 != 6  | blockMap1x1 != 10) {\n\
    console.log( "   ***State Processing Error***" + blockMap1x2 + " " + blockMap1x1)\n\
  }\n\
  return state\n\
}\n\
      \n\
\n\
\n\
function demo1() {\n\
  reset()\n\
  init()\n\
  console.log("demo: " + blocks[0])\n\
  console.log("demo: " + blocks)\n\
  //drawBlocks()\n\
  moveBlock( 3, 2, 2)\n\
  moveBlock( 4, 1, 2)\n\
  moveBlock( 5, 0, 2)\n\
  moveBlock( 6, 0, 3)\n\
  moveBlock( 7, 1, 3)\n\
  moveBlock( 8, 2, 4)\n\
  moveBlock( 3, 2, 3)\n\
  moveBlock( 4, 3, 2)\n\
  moveBlock( 5, 2, 2)\n\
  moveBlock( 6, 0, 2)\n\
  moveBlock( 7, 1, 2)\n\
  moveBlock( 8, 0, 4)\n\
  moveBlock( 9, 1, 4)\n\
  moveBlock( 3, 2, 4)\n\
  moveBlock( 5, 3, 3)\n\
  moveBlock( 7, 2, 2)\n\
  moveBlock( 6, 1, 2)\n\
  moveBlock( 0, 0, 2)\n\
  moveBlock( 1, 0, 0)\n\
  moveBlock( 2, 2, 0)\n\
  moveBlock( 4, 3, 0)\n\
  moveBlock( 5, 3, 1)\n\
  moveBlock( 7, 3, 2)\n\
  moveBlock( 2, 2, 2)\n\
  moveBlock( 4, 2, 0)\n\
  moveBlock( 5, 2, 1)\n\
  moveBlock( 7, 3, 0)\n\
  moveBlock( 2, 3, 2)\n\
  moveBlock( 5, 2, 3)\n\
  moveBlock( 4, 2, 2)\n\
  moveBlock( 1, 1, 0)\n\
  moveBlock( 0, 0, 0)\n\
  moveBlock( 6, 0, 2)\n\
  moveBlock( 4, 1, 2)\n\
  moveBlock( 5, 1, 3)\n\
  moveBlock( 2, 2, 2)\n\
  moveBlock( 7, 3, 2)\n\
  moveBlock( 1, 2, 0)\n\
  moveBlock( 4, 1, 0)\n\
  moveBlock( 5, 1, 1)\n\
  moveBlock( 9, 1, 2)\n\
  moveBlock( 8, 1, 3)\n\
  moveBlock( 6, 0, 3)\n\
  moveBlock( 0, 0, 1)\n\
  moveBlock( 4, 0, 0)\n\
  moveBlock( 5, 1, 0)\n\
  moveBlock( 9, 1, 1)\n\
  moveBlock( 8, 1, 2)\n\
  moveBlock( 6, 1, 3)\n\
  moveBlock( 0, 0, 3)\n\
  moveBlock( 9, 0, 2)\n\
  moveBlock( 5, 0, 1)\n\
  moveBlock( 1, 1, 0)\n\
  moveBlock( 7, 3, 0)\n\
  moveBlock( 2, 3, 2)\n\
  moveBlock( 8, 2, 3)\n\
  moveBlock( 1, 1, 1)\n\
  moveBlock( 4, 2, 0)\n\
  moveBlock( 5, 1, 0)\n\
  moveBlock( 9, 0, 0)\n\
  moveBlock( 0, 0, 1)\n\
  moveBlock( 6, 0, 3)\n\
  moveBlock( 8, 1, 4)\n\
  moveBlock( 1, 1, 2)\n\
  moveBlock( 4, 1, 1)\n\
  moveBlock( 7, 2, 0)\n\
  moveBlock( 2, 3, 0)\n\
  moveBlock( 1, 2, 2)\n\
  moveBlock( 4, 1, 3)\n\
  moveBlock( 5, 1, 1)\n\
  moveBlock( 9, 1, 0)\n\
  moveBlock( 0, 0, 0)\n\
  moveBlock( 6, 0, 2)\n\
  moveBlock( 8, 0, 4)\n\
  moveBlock( 4, 1, 4)\n\
  moveBlock( 1, 1, 2)\n\
  moveBlock( 2, 3, 2)\n\
  moveBlock( 7, 3, 0)\n\
  moveBlock( 9, 2, 0)\n\
  moveBlock( 5, 2, 1)\n\
  moveBlock( 0, 1, 0)\n\
  moveBlock( 6, 0, 0)\n\
  moveBlock( 1, 0, 2)\n\
  moveBlock( 5, 2, 3)\n\
  moveBlock( 9, 2, 2)\n\
  moveBlock( 7, 2, 0)\n\
  moveBlock( 2, 3, 0)\n\
  moveBlock( 5, 3, 2)\n\
  moveBlock( 3, 2, 3)\n\
  moveBlock( 4, 3, 4)\n\
  moveBlock( 8, 2, 4)\n\
  moveBlock( 1, 0, 3)\n\
  moveBlock( 9, 0, 2)\n\
  moveBlock( 5, 1, 2)\n\
  moveBlock( 3, 2, 2)\n\
  moveBlock( 8, 3, 3)\n\
  moveBlock( 1, 1, 3)\n\
\n\
  drawBlocks()\n\
  console.log( "count= " + count)\n\
}\n\
\n\
\n\
function demo() {\n\
  reset()\n\
  init()\n\
\n\
  drag( 3, ee)\n\
  drag( 4, ne)\n\
  drag( 5, nn)\n\
  drag( 6, w)\n\
  drag( 7, w)\n\
  drag( 8, sw)\n\
  drag( 3, s)\n\
  drag( 4, ee)\n\
  drag( 5, ee)\n\
  drag( 6, n)\n\
  drag( 7, n)\n\
  drag( 8, ww)\n\
  drag( 9, ww)\n\
  drag( 3, s)\n\
  drag( 5, se)\n\
  drag( 7, e)\n\
  drag( 6, e)\n\
  drag( 0, ss)\n\
  drag( 1, w)\n\
  drag( 2, w)\n\
  drag( 4, nn)\n\
  drag( 5, nn)\n\
  drag( 7, e)\n\
  drag( 2, ss)\n\
  drag( 4, w)\n\
  drag( 5, w)\n\
  drag( 7, nn)\n\
  drag( 2, e)\n\
  drag( 5, ss)\n\
  drag( 4, ss)\n\
  drag( 1, e)\n\
  drag( 0, nn)\n\
  drag( 6, w)\n\
  drag( 4, w)\n\
  drag( 5, w)\n\
  drag( 2, w)\n\
  drag( 7, ss)\n\
  drag( 1, e)\n\
  drag( 4, nn)\n\
  drag( 5, nn)\n\
  drag( 9, nn)\n\
  drag( 8, en)\n\
  drag( 6, s)\n\
  drag( 0, s)\n\
  drag( 4, w)\n\
  drag( 5, n)\n\
  drag( 9, n)\n\
  drag( 8, n)\n\
  drag( 6, e)\n\
  drag( 0, ss)\n\
  drag( 9, ws)\n\
  drag( 5, sw)\n\
  drag( 1, w)\n\
  drag( 7, nn)\n\
  drag( 2, e)\n\
  drag( 8, es)\n\
  drag( 1, s)\n\
  drag( 4, ee)\n\
  drag( 5, ne)\n\
  drag( 9, nn)\n\
  drag( 0, nn)\n\
  drag( 6, w)\n\
  drag( 8, ws)\n\
  drag( 1, s)\n\
  drag( 4, sw)\n\
  drag( 7, w)\n\
  drag( 2, nn)\n\
  drag( 1, e)\n\
  drag( 4, ss)\n\
  drag( 5, s)\n\
  drag( 9, e)\n\
  drag( 0, n)\n\
  drag( 6, n)\n\
  drag( 8, w)\n\
  drag( 4, s)\n\
  drag( 1, w)\n\
  drag( 2, ss)\n\
  drag( 7, e)\n\
  drag( 9, e)\n\
  drag( 5, e)\n\
  drag( 0, e)\n\
  drag( 6, nn)\n\
  drag( 1, w)\n\
  drag( 5, ss)\n\
  drag( 9, ss)\n\
  drag( 7, w)\n\
  drag( 2, nn)\n\
  drag( 5, en)\n\
  drag( 3, n)\n\
  drag( 4, ee)\n\
  drag( 8, ee)\n\
  drag( 1, s)\n\
  drag( 9, ww)\n\
  drag( 5, ww)\n\
  drag( 3, n)\n\
  drag( 8, ne)\n\
  drag( 1, e)\n\
\n\
  drawBlocks()\n\
  console.log( "count= " + count)\n\
}\n\
\n\
\n\
var moveCount;\n\
var delayTime = 300;\n\
var moves; // List of the moves to be made\n\
var lastMove = []; // last move made\n\
moves = [ // series of moves\n\
// [ blockNumber, move directions ]\n\
  [ 3, ee],\n\
  [ 4, ne],\n\
  [ 5, nn],\n\
  [ 6, w],\n\
  [ 7, w],\n\
  [ 8, ws],\n\
  [ 3, s],\n\
  [ 4, ee],\n\
  [ 5, ee],\n\
  [ 6, n],\n\
  [ 7, n],\n\
  [ 8, ww],\n\
  [ 9, ww],\n\
  [ 3, s],\n\
  [ 5, se],\n\
  [ 7, e],\n\
  [ 6, e],\n\
  [ 0, ss],\n\
  [ 1, w],\n\
  [ 7,nn],\n\
  [ 4, w],\n\
  [ 5, w],\n\
  [ 2, ss],\n\
  [ 7, e],\n\
  [ 1, e],\n\
  [ 0, nn],\n\
  [ 6, w],\n\
  [ 4, w],\n\
  [ 5, w],\n\
  [ 2, w],\n\
  [ 7, ss],\n\
  [ 1, e],\n\
  [ 4, nn],\n\
  [ 5, nn],\n\
  [ 9, nn],\n\
  [ 8, en],\n\
  [ 6, s],\n\
  [ 0, s],\n\
  [ 4, w],\n\
  [ 5, n],\n\
  [ 9, n],\n\
  [ 8, n],\n\
  [ 6, e],\n\
  [ 0, ss],\n\
  [ 9, ws],\n\
  [ 5, sw],\n\
  [ 1, w],\n\
  [ 7, nn],\n\
  [ 2, e],\n\
  [ 8, es],\n\
  [ 1, s],\n\
  [ 4, ee],\n\
  [ 5, ne],\n\
  [ 9, nn],\n\
  [ 0, nn],\n\
  [ 6, w],\n\
  [ 8, ws],\n\
  [ 1, s],\n\
  [ 4, sw],\n\
  [ 7, w],\n\
  [ 2, nn],\n\
  [ 1, e],\n\
  [ 4, ss],\n\
  [ 5, s],\n\
  [ 9, e],\n\
  [ 0, n],\n\
  [ 6, n],\n\
  [ 8, w],\n\
  [ 4, s],\n\
  [ 1, w],\n\
  [ 2, ss],\n\
  [ 7, e],\n\
  [ 9, e],\n\
  [ 5, e],\n\
  [ 0, e],\n\
  [ 6, nn],\n\
  [ 1, w],\n\
  [ 5, ss],\n\
  [ 9, ss],\n\
  [ 7, w],\n\
  [ 2, nn],\n\
  [ 5, en],\n\
  [ 3, n],\n\
  [ 4, ee],\n\
  [ 8, ee],\n\
  [ 1, s],\n\
  [ 9, ww],\n\
  [ 5, ww],\n\
  [ 3, n],\n\
  [ 8, ne],\n\
  [ 1, e]\n\
]\n\
\n\
\n\
function moveOne() {\n\
  reset()\n\
  //console.log( "mO " + moveCount)\n\
  //console.log( "mO " + moves[moveCount])\n\
\n\
  drawBlocks();\n\
  findFree()\n\
  console.log("   State: " + getState())\n\
  findMoves()\n\
  if (moveCount > 0) {\n\
    checkLastMove( lastMove[0], lastMove[1])\n\
  }\n\
  var block = moves[ moveCount][0]\n\
  var dir =   moves[ moveCount][1]\n\
  console.log( "  Move " + moveCount + ": " + block + dir)\n\
  checkMove( block,  dir)\n\
  drag( block, dir)\n\
  moveCount = moveCount + 1;\n\
  lastMove = [block, dir]\n\
  if (moveCount < moves.length) {\n\
    delay( moveOne, delayTime)\n\
  }\n\
}\n\
\n\
function demo() {\n\
  reset()\n\
  init()\n\
  moveCount=0\n\
\n\
  delay( moveOne, delayTime)\n\
}\n\
'
snowman ='\
// Snowman -- draw a simple snowman\n\
\n\
// draw the three cirles for the body\n\
clear()\n\
width(1)\n\
goto (0,-100)\n\
circle (80)\n\
goto (0,-100+80+60)\n\
circle (60)\n\
goto (0,-100+80+60+60+40)\n\
circle (40)\n\
\n\
// add the coal for the eyes, nose and mouth\n\
goto (-15,160)\n\
dot()\n\
goto (15,160)\n\
dot()\n\
goto (0,140)\n\
dot()\n\
goto (0,120)\n\
dot()\n\
goto (15,125)\n\
dot()\n\
goto (-15,125)\n\
dot()\n\
\n\
// add coal for the buttons\n\
goto (0,60)\n\
dot()\n\
goto (0,40)\n\
dot()\n\
goto (0,20)\n\
dot()\n\
goto (0,0)\n\
dot()\n\
\n\
// add stick for a right arm\n\
goto (56,60)\n\
angle (60)\n\
width(3)\n\
forward (40)\n\
left(15)\n\
forward (25)\n\
backward (25)\n\
right(20)\n\
forward(30)\n\
backward(30)\n\
right(10)\n\
forward(20)\n\
\n\
// add stick for a left arm\n\
goto (-56,60)\n\
angle (-60)\n\
width(3)\n\
forward (40)\n\
left(15)\n\
forward (25)\n\
backward (25)\n\
right(20)\n\
forward(30)\n\
backward(30)\n\
right(10)\n\
forward(20)\n\
'
snub_icosidodecahedron ='\
// Snub Icosidodecahedron Half -- half pattern for model of snub icosidodecahedron\n\
\n\
/*\n\
Print two copies of this on card stock.\n\
Score the lines to make it easier to fold.\n\
Fold and glue the tabs together, so they\n\
are inside the model. Mind the overlaps (10) and\n\
the inner single tabs (5).\n\
\n\
Have fun.\n\
*/\n\
\n\
function leftTriangle(side) {\n\
  for (var i=0; i<3; i++) {\n\
    forward (side)\n\
    left(120)\n\
  }\n\
}\n\
\n\
function leftTab( side) {\n\
  var x = turtle.pos.x\n\
  var y = turtle.pos.y\n\
  left( 180 - 45)\n\
  forward( side * .2)\n\
  left( 45)\n\
  forward( side * .72)\n\
  left( 45)\n\
  forward( side * .2)\n\
  left( 180 - 45)\n\
  forward( side)\n\
  goto( x, y)\n\
}\n\
\n\
\n\
function rightTriangle(side, tabs) {\n\
  for (var i=0; i<3; i++) {\n\
    forward (side)\n\
    if (tabs.includes (""+i)) {\n\
      leftTab(side)\n\
    }\n\
    right(120)\n\
  }\n\
}\n\
\n\
function leftPentagon(side) {\n\
  for (var i=0; i<5; i++) {\n\
    forward (side)\n\
    left(72)\n\
    if (i  == 0) {\n\
      rightTriangle(side, "1")\n\
    }\n\
    if (i  == 1 || i == 2) {\n\
      rightTriangle(side, "1,2")\n\
    }\n\
    if (i == 3) {\n\
      rightTriangle(side, "1")\n\
      right(60)\n\
      //beginShape()\n\
      rightTriangle(side, "1,2")\n\
      //fillShape("red")\n\
      left(60)\n\
    }\n\
  }\n\
}\n\
\n\
function rightPentagon(side) {\n\
  for (var i=0; i<5; i++) {\n\
    left(120)\n\
    forward(side)\n\
    right(120)\n\
    leftPentagon(side) // outer pentagon\n\
    left(120)\n\
    backward (side)\n\
    right(120)\n\
    forward (side)\n\
    left(120)\n\
    rightTriangle(side, "")\n\
    right(120)\n\
    right(72)\n\
    leftTriangle(side)\n\
  }\n\
}\n\
\n\
\n\
function demo() {\n\
  reset()\n\
  side = .25 * Math.min( maxX(), maxY())\n\
  goto (-.666 * side, - .333 * side)\n\
  rightPentagon(side) // inner pentagon\n\
  hideturtle()\n\
}\n\
'
spinning_squares ='\
// Spinning Squares -- draw some square of increasing size and angle.\n\
\n\
function square (side) {\n\
  var i=0\n\
  while (i<4) {\n\
    forward( side)\n\
    turn(90)\n\
    i=i+1\n\
  }\n\
}\n\
\n\
function spinningSquare2() {\n\
   reset();\n\
   hideTurtle();\n\
   color("blue");\n\
   var side = 100;\n\
   while (side > 0) {\n\
      square(side);\n\
      right(36);\n\
      side = side - 10;\n\
   }\n\
}\n\
\n\
function spinningSquare() {\n\
  reset()\n\
  var steps = 100\n\
  stepSize = 2 * maxX()\n\
  if (1.5 * maxY() < stepSize) {\n\
    stepSize = 1.5 * maxY()\n\
  }\n\
  stepSize = .5 * stepSize/steps\n\
  //var stepSize = 200/steps\n\
  color("blue");\n\
  for (var i=0; i<steps; i=i+1) {\n\
    square(stepSize*i);\n\
    right(360/steps)\n\
  }\n\
}\n\
\n\
demo = spinningSquare2 // set the demo function to be spinningSquare2\n\
'
spiral ='\
// Spiral -- demonstrate some simple spirals\n\
\n\
function spiral1() {\n\
  reset()\n\
  n=0\n\
  while (n<400) {\n\
    forward(n)\n\
    right(90)\n\
    n=n+3\n\
  }\n\
}\n\
\n\
function spiral2() {\n\
  reset()\n\
  n=0\n\
  while (n<75) {\n\
    forward(n)\n\
    right(90-n)\n\
    n=n+1\n\
  }\n\
}\n\
\n\
\n\
function spiral3() {\n\
  reset()\n\
  wrap(false)\n\
  n=0\n\
  while (n<40) {\n\
    forward(n)\n\
    right(15)\n\
    n=n+.25\n\
  }\n\
}\n\
\n\
function spiral() {\n\
  reset()\n\
  wrap(false)\n\
  n=0\n\
  while (n<1000) {\n\
    forward(n)\n\
    right(15)\n\
    n=n+.25\n\
    // turtle.pos.x is the x position of the turtle\n\
    // turtle.pos.y is the y position of the turtle\n\
    x = turtle.pos.x\n\
    y = turtle.pos.y\n\
console.log("x:"+x+" y:"+y)\n\
    // "||" means "or", so the following statement checks for out of bounds\n\
    if (x>maxX() || x<minX() || y>maxY() ||y<minY()) {\n\
console.log("exiting:")\n\
      break; // exit the loop early\n\
    }\n\
  }\n\
}\n\
\n\
demo = spiral;\n\
\n\
'
square_lines ='\
// Square Lines -- draw a set of overlapping squares without turns\n\
\n\
function demo() {\n\
  reset()\n\
  wrap(false)\n\
  side = 30\n\
  side2 = side + side\n\
  offset = true\n\
  for (var i=minY(); i<maxY(); i = i + side) {\n\
    goto(minX(),i)\n\
    angle(90)\n\
    if (offset) {\n\
      penup()\n\
      forward( side)\n\
      pendown()\n\
    }\n\
    offset = !offset\n\
    for (var j=minX(); j<maxX(); j = j + 3*side) {\n\
      forward( side2)\n\
      penup()\n\
      forward( side)\n\
      pendown()\n\
    }\n\
  }\n\
\n\
  offset = true\n\
  for (var i=minX(); i<maxX(); i = i + side) {\n\
    goto(i, minY())\n\
    angle(0)\n\
    if (offset) {\n\
      forward( side)\n\
    }\n\
    offset = !offset\n\
    for (var j=maxY(); j>minY(); j = j - 3*side) {\n\
      penup()\n\
      forward( side)\n\
      pendown()\n\
      forward( side2)\n\
    }\n\
  }\n\
}\n\
'
square_series ='\
// Square Series -- draw a set of overlapping squares\n\
\n\
// lower right is not quite right, it gets left out.\n\
\n\
function paddle (side) {\n\
  side2 = side + side\n\
  forward( side2)\n\
  right( 90)\n\
  forward( side)\n\
  left( 90)\n\
  forward( side2)\n\
  left( 90)\n\
  forward( side2)\n\
  left( 90)\n\
  forward( side2)\n\
  left( 90)\n\
  forward( side)\n\
  penup()\n\
  right( 90)\n\
  forward( side2)\n\
  right( 180)\n\
  pendown()\n\
}\n\
\n\
\n\
function cwGroup( side) {\n\
  for( var i=0; i<4; i++) {\n\
    paddle( side)\n\
    penup()\n\
    forward( side)\n\
    right( 90)\n\
    pendown()\n\
  }\n\
}\n\
\n\
\n\
function ccwGroup( side) {\n\
  for( var i=0; i<4; i++) {\n\
    paddle( side)\n\
    penup()\n\
    forward( side)\n\
    left( 90)\n\
    pendown()\n\
  }\n\
}\n\
\n\
\n\
function cwRow( side) {\n\
  for (var i=minX(); i<maxX(); i = i + 6*side) {\n\
    setx(i)\n\
    cwGroup( side)\n\
  }\n\
}\n\
\n\
\n\
function ccwRow( side) {\n\
  for (var i=minX() + 4*side; i<maxX(); i = i + 6*side) {\n\
                     // offset row 3 sides + 1 for cw/ccw flip\n\
    setx(i)\n\
    ccwGroup( side)\n\
  }\n\
}\n\
\n\
\n\
function demo() {\n\
  wrap(false)\n\
  side = 30\n\
  for (var i=minY(); i<maxY(); i = i + 6*side) {\n\
    sety(i)\n\
    cwRow( side)\n\
    sety(i + 3*side)\n\
    color("red")\n\
    ccwRow( side)\n\
    color("black")\n\
  }\n\
}\n\
'
square_tessellation ='\
// Square Tessellation -- tile a space using squares\n\
\n\
colors = ["red", "white", "blue","yellow", "green"]\n\
\n\
function squ( side, fColor) {\n\
  beginShape()\n\
  for (var i=0; i<4; i++) {\n\
    forward( side)\n\
    right( 90)\n\
  }\n\
  fillShape( fColor)\n\
}\n\
\n\
function squLeft( side, fColor) {\n\
  beginShape()\n\
  for (var i=0; i<4; i++) {\n\
    forward( side)\n\
    left( 90)\n\
  }\n\
  fillShape( fColor)\n\
}\n\
\n\
// nextColor could be a random function or use less colors\n\
function nextColor() {\n\
  c = colors[ count % colors.length]\n\
  count = count + 1\n\
  return c\n\
}\n\
\n\
function demo() {\n\
  reset()\n\
  count = 0\n\
  rowOffset = s/3\n\
  wrap(false)\n\
  goto (minX(), maxY())\n\
  right( 90)\n\
\n\
  s = 50\n\
  while (turtle.pos.y > minY()) {\n\
    while (turtle.pos.x < maxX()) {\n\
      squ(s, nextColor())\n\
      forward(s)\n\
    }\n\
    right(90)\n\
    forward( s)\n\
    right(90)\n\
    backward(rowOffset)\n\
    while (turtle.pos.x > minX()) {\n\
      squLeft(s, nextColor())\n\
      forward(s)\n\
    }\n\
    left(90)\n\
    forward(s)\n\
    left(90)\n\
    forward(rowOffset)\n\
  }\n\
}\n\
'
squiggle ='\
// Squiggle -- draw a random squiggle\n\
\n\
function squiggle(steps,angle) {\n\
  widthInc = 5 / steps;\n\
  distInc = 10 / steps;\n\
  w = 0.1;\n\
  repeat (steps, function () {\n\
    width(w);\n\
    forward(random(1,10));\n\
    right(angle);\n\
    angle = angle - 1;\n\
    w = w + widthInc;\n\
  })\n\
}\n\
\n\
function drawRandomSquiggle() {\n\
  colour(random(16));\n\
  goto(random(minX(), maxX()), random(minY(), maxY()));\n\
  angle(random(0,360));\n\
  squiggle(random(100,1000), random(5,90));\n\
}\n\
\n\
function demo() {\n\
  reset()\n\
  hideTurtle();\n\
  drawRandomSquiggle();\n\
}\n\
'
stamps ='\
// Stamps -- demonstrate stamping of a star design multiple times\n\
\n\
function star (side) {\n\
  penup()\n\
  forward(.54*side)\n\
  turn (180-18)\n\
  pendown()\n\
  var i=0\n\
  while (i<5){\n\
    forward(side)\n\
    right(180-36)\n\
    i = i + 1\n\
  }\n\
  turn (180+18)\n\
}\n\
\n\
function stamps () {\n\
  reset()\n\
  wrap(false)\n\
  var x = minX()\n\
  while (x <= maxX()) {\n\
    var y = minY()\n\
    while (y <= maxY()) {\n\
      goto (x,y)\n\
      angle (0);\n\
      star (25);\n\
      y = y+30\n\
    }\n\
    x = x+30\n\
  }\n\
}\n\
\n\
  \n\
demo = stamps\n\
'
star_burst ='\
// Starburst -- simple example of while statement and colors\n\
\n\
function starburst () {\n\
  var steps = 1000\n\
  var len = maxX()\n\
  if (len < maxY()) {\n\
    len = maxY()\n\
  }\n\
  len = 1.5 * len\n\
  var i = 0\n\
  while ( i < steps) {\n\
    goto ( 0,0)\n\
    angle( 360/steps*i)\n\
    color( random (16))\n\
    //color ("hsl("+ 360 * i/steps + ", 100%, 50%)") // color wheel\n\
    //color (i%16)\n\
    //color (Math.floor(16 * i/steps)) // logo colors\n\
    forward (len)\n\
    i = i + 1\n\
  }\n\
}\n\
\n\
function demo () {\n\
  reset()\n\
  wrap( false)\n\
  starburst()\n\
} \n\
'
star ='\
// Star -- draw a simple star\n\
\n\
function star (side) {\n\
  penup()\n\
  forward(.54*side)\n\
  turn (180-18)\n\
  pendown()\n\
  var i=0\n\
  while (i<5){\n\
    forward(side)\n\
    right(180-36)\n\
    i = i + 1\n\
  } \n\
  turn (180+18)\n\
}   \n\
    \n\
    \n\
function demo () {\n\
  reset()\n\
  side =  1.8* Math.min( maxX(), maxY())\n\
  beginShape()\n\
  star ( side)\n\
  fillShape("gold")\n\
  hideTurtle()\n\
}\n\
'
stars_and_rhombuses ='\
// Stars and Rhombuses -- tesselation found on a wall paper pattern\n\
\n\
function quadRhom( side) {\n\
  for( var i=0; i<4; i++) {\n\
    for ( var j=0; j<4; j++) {\n\
      forward( side)\n\
      right( ang)\n\
      forward( side)\n\
      right( 180- ang)\n\
      forward( side)\n\
      right( ang)\n\
      forward( side)\n\
      right( 180- ang)\n\
    }\n\
    right( 90)\n\
  }\n\
}\n\
\n\
function demo() {\n\
  reset()\n\
  wrap( false)\n\
  hideTurtle()\n\
  ang = 60\n\
  side = 20\n\
  xoffset = 0\n\
  chord = 2* side * Math.cos(degToRad(ang/2))\n\
\n\
  for (var fy=maxY(); fy>minY(); fy=fy - chord) {   \n\
    for (var fx=minX(); fx<maxX(); fx=fx + 2*chord) {\n\
      goto( fx+xoffset, fy)\n\
      angle( 90 - ang/2)\n\
      quadRhom( side)\n\
    }\n\
    if (xoffset>0) {\n\
      xoffset = 0\n\
    } else {\n\
      xoffset = chord\n\
    }\n\
  }\n\
}\n\
'
tree ='\
// Tree Symmetrical -- draw a symmetrical tree\n\
\n\
//GLOBALS\n\
var scale // varible to influence overall tree size\n\
\n\
\n\
//  code inspired from a code.org lesson\n\
function drawTree(depth, branches) {\n\
  var spread = 120;	//spread is angle of left to right branches\n\
  var tilt = 0;		//tilt is angle of the cluster\n\
  var ratio = 7;	//ratio is branch depth to length ratio\n\
  if (depth>0) { \n\
   color( random( 16));\n\
   pendown();\n\
   width (depth + random(0,2));\n\
   forward(scale* ratio * depth);\n\
   left(tilt + spread/2 + spread/branches/2);\n\
   repeat(branches, function () {\n\
     right(spread/branches);\n\
     drawTree(depth-1, branches);\n\
   });\n\
   left(spread - tilt - spread/2 - spread/branches/2); // return to start angle\n\
   penup();\n\
   backward (scale * ratio * depth); // backup to start point\n\
  }\n\
}\n\
\n\
// draw a more random tree\n\
function drawRTree(depth, branches) {\n\
  var spread = random(90,180);	// spread is angle of left to right branches\n\
  var tilt = random(-15,15);	// tilt is angle of the cluster\n\
  var ratio = random (5,9);	// ratio is branch depth to length ratio\n\
  if (depth>0) { \n\
   color( random( 16));\n\
   pendown();\n\
   width (depth + random(0,2));\n\
   forward(scale * ratio * depth);\n\
   left(tilt + spread/2 + spread/branches/2);\n\
   repeat(branches, function () {\n\
     right(spread/branches);\n\
     drawTree(depth-1, branches);\n\
   });\n\
   left(spread - tilt - spread/2 - spread/branches/2); // return to start angle\n\
   penup();\n\
   backward (scale * ratio * depth); // backup to start point\n\
  }\n\
}\n\
\n\
function demo() {\n\
  reset();\n\
  hideturtle();\n\
  scale = .01 * Math.min( maxX(), maxY())\n\
  penup();\n\
  backward(scale * 70);\n\
  pendown();\n\
  drawRTree(6,4)\n\
}\n\
'
triangle_tessellation ='\
// Triangle Tesselation -- tile a space using triangles\n\
\n\
colors = ["red", "white", "blue", "yellow", "green"]\n\
\n\
function triUp( side, fColor) {\n\
  beginShape()\n\
  for (var i=0; i<3; i++) {\n\
    forward( side)\n\
    left( 120)\n\
  }\n\
  fillShape( fColor)\n\
}\n\
\n\
function triDown( side, fColor) {\n\
  beginShape()\n\
  for (var i=0; i<3; i++) {\n\
    forward( side)\n\
    right( 120)\n\
  }\n\
  fillShape( fColor)\n\
}\n\
\n\
// nextColor could be completely random, if desired\n\
function nextColor() { \n\
  c = colors[ count % colors.length]\n\
  count = count + 1\n\
  return c\n\
}\n\
\n\
function demo() {\n\
  reset()\n\
  count = 0\n\
  rowOffset = s/3 // offset between rows\n\
  wrap(false)\n\
  goto (minX(), maxY())\n\
  right( 90)\n\
\n\
  s = 50\n\
  while (turtle.pos.y > minY()) {\n\
  while (turtle.pos.x < maxX()) {\n\
    triDown(s, nextColor())\n\
    forward(s)\n\
  }\n\
  right(120)\n\
  forward( s)\n\
  right(60)\n\
  while (turtle.pos.x > minX()) {\n\
    triDown(s, nextColor())\n\
    forward(s)\n\
  }\n\
  left(180)\n\
  forward(rowOffset)\n\
  }\n\
}\n\
'
triangle_tunnel ='\
// Triangle Tunnel -- animate a set of mesmerizing nested triangle for a tunnel effect\n\
// this uses an array to hold the colors of the current triangles\n\
\n\
// GLOBALS\n\
var sides = 80;\n\
\n\
\n\
function triangle (side) {\n\
  if (side < maxSide) {\n\
    home()\n\
    penup();\n\
    forward (side/2);\n\
    right(150);\n\
    pendown();\n\
    for (var i=0; i<3; i++) {\n\
      forward(side);\n\
      right(120);\n\
    }\n\
  }\n\
}\n\
\n\
\n\
function nestTri () {\n\
  console.log("one more" + tColor + " sides:"+ sides)\n\
  tColor.push(random (15));\n\
  tColor.shift();\n\
  for (var i=0; i<sides; i++) {\n\
    color (tColor[i]);\n\
    triangle (i*15);\n\
  }\n\
}\n\
\n\
\n\
function demo () {\n\
  reset()\n\
  hideTurtle()\n\
\n\
  maxSide = 1.8* Math.min( maxX(), maxY())\n\
  tColor = []\n\
  for (var i=0; i<sides; i++) {\n\
    tColor [i] = random (15)\n\
  }\n\
  animate (nestTri,1);\n\
}\n\
\n\
'
two_square_tessellation ='\
// Two Square Tessellation -- tile a space using two sizes of squares\n\
\n\
// this assumes that the smaller square is 1/2 of the larger square.\n\
// that need not be the case\n\
\n\
colors = ["red", "blue", "yellow", "green"]\n\
offsets = [0, -1, -2, -.5, -1.5]\n\
\n\
function squ( side, fColor) {\n\
  beginShape()\n\
  for (var i=0; i<4; i++) {\n\
    forward( side)\n\
    right( 90)\n\
  }\n\
  fillShape( fColor)\n\
}\n\
\n\
function squLeft( side, fColor) {\n\
  beginShape()\n\
  for (var i=0; i<4; i++) {\n\
    forward( side)\n\
    left( 90)\n\
  }\n\
  fillShape( fColor)\n\
}\n\
\n\
function nextColor() {\n\
  c = colors[ count % colors.length]\n\
  count = count + 1\n\
  return c\n\
}\n\
\n\
function demo() {\n\
  reset()\n\
  count = 0\n\
  rowCount = 0\n\
  column = minX()\n\
  row = maxY()\n\
  wrap(false)\n\
  right( 90)\n\
\n\
  s = 50\n\
  while( turtle.pos.y > minY()) {\n\
    goto(minX()+offsets[ rowCount % offsets.length]*s, maxY()-rowCount*s/2+s/2)\n\
    while( turtle.pos.x < maxX()) {\n\
      pendown()\n\
      squ(s, nextColor())\n\
      penup()\n\
      forward(s*2)\n\
      pendown()\n\
      squ( s/2, nextColor())\n\
      forward( s/2)\n\
    }\n\
    rowCount = rowCount + 1\n\
  }\n\
}\n\
'
US_flag ='\
// US Flag -- draw an American Flag\n\
\n\
function star (size) {\n\
  penup()\n\
  forward(.54*size)\n\
  turn (180-18)\n\
  pendown()\n\
  var i=0\n\
  beginShape()\n\
  while (i<5){\n\
    forward(size)\n\
    right(180-36)\n\
    i = i + 1\n\
  }\n\
  fillShape("white")\n\
  turn (180+18)\n\
  backward(.54*size)\n\
}\n\
\n\
\n\
function starLine(count, size, sep) {\n\
  while (count > 0) {\n\
    star(size)\n\
    penup()\n\
    right(90)\n\
    forward (sep)\n\
    left(90)\n\
    pendown()\n\
    count = count -1;\n\
  }\n\
}\n\
\n\
\n\
function rectangle (width, height) {\n\
  // assume x, y at upper right hand corner in and out\n\
  // assume angle is 90 in and out\n\
  angle (90)\n\
  forward (width)\n\
  right(90)\n\
  forward (height)\n\
  right (90)\n\
  forward (width)\n\
  right (90)\n\
  forward (height)\n\
  right (90)\n\
}\n\
\n\
\n\
function stripes (width, spacing, number) {\n\
  //assume x, y is at right side of stripe\n\
  //assume angle is -90\n\
  var i = 0\n\
  while (i<number) {\n\
    pendown()\n\
    forward (width)\n\
    penup()\n\
    // make the turn\n\
    if (i%2 == 0) {\n\
      left(90)\n\
      forward(spacing)\n\
      left(90)\n\
    } else {\n\
      right(90)\n\
      forward(spacing)\n\
      right(90)\n\
    }\n\
    i = i + 1\n\
  }\n\
}\n\
\n\
\n\
function flag() {\n\
  // ***Constants\n\
  //var xBase = -200 // base is upper left corner\n\
  //var yBase = 200\n\
  //var flagHeight = 250 // everything else is proportional to flagHeight\n\
 \n\
  var flagHeight =  1.8 * Math.min(maxX()/1.9, maxY())\n\
  var flagWidth = 1.9 * flagHeight\n\
console.log("X="+2*maxX()+ " Y="+2*maxY() + " W="+flagWidth + "H="+flagHeight)\n\
  var xBase = -flagWidth/2\n\
  var yBase = flagHeight/2 \n\
\n\
  var stripeWidth = flagHeight/13\n\
  var fieldWidth = .76 * flagHeight\n\
  var fieldHeight = 7 * stripeWidth\n\
  var xSeparation = .063 * flagHeight\n\
  var ySeparation = .054 * flagHeight\n\
  starSize = .05 *flagHeight // star size\n\
  //outline flag and field\n\
  reset()\n\
  wrap(false)\n\
  hideTurtle()\n\
  goto (xBase, yBase)\n\
  angle (90)\n\
  color("black")\n\
\n\
  width(1)\n\
  rectangle (flagWidth, flagHeight)\n\
  rectangle (fieldWidth, fieldHeight)\n\
\n\
  //  draw stripes\n\
  color("red");\n\
  width(stripeWidth);\n\
  goto (xBase+flagWidth, yBase-stripeWidth/2)\n\
  angle (-90)\n\
  stripes (flagWidth-fieldWidth, 2*stripeWidth, 4)\n\
  stripes (flagWidth, 2*stripeWidth, 3)\n\
\n\
  //draw field\n\
  color("blue")\n\
  goto (xBase+fieldWidth, yBase-stripeWidth/2)\n\
  angle (-90)\n\
  stripes (fieldWidth, stripeWidth, 7)\n\
\n\
  //draw field of stars\n\
  angle(0)\n\
  width (2)\n\
  color("white")\n\
  pendown()\n\
\n\
  var row = 0\n\
  while (row<9) {\n\
   if (row % 2 == 0) {\n\
      goto (xBase + xSeparation, yBase - (row +1) * ySeparation)\n\
      starLine(6, starSize, xSeparation*2)\n\
    } else {\n\
      goto (xBase + 2* xSeparation, yBase - (row +1) * ySeparation)\n\
      starLine(5, starSize, xSeparation * 2)\n\
    }\n\
    row = row + 1;\n\
  }\n\
}\n\
  \n\
demo = flag\n\
'
waves ='\
// waves -- wave interference patterns\n\
\n\
//draw the radials\n\
function drawRadials(side) {\n\
	for (var i=0; i<16; i++) {\n\
		goto(0,0)\n\
		angle(i/16 * 360)\n\
		forward( size)\n\
	}\n\
}\n\
\n\
/*\n\
need to calculate the angles for starting and stopping the arcs.\n\
distances are known\n\
\n\
*/\n\
\n\
\n\
//\n\
function demo() {\n\
	reset()\n\
	wrap(false)\n\
	size=200\n\
	step = 4\n\
	n = 2* size/step\n\
	goto(0,0)\n\
	circle( size)\n\
	goto(size,0)\n\
	for( var i=0; i< n; i=i+step){\n\
		arc(i * step, 180, false)\n\
	}\n\
	goto(-size,0)\n\
	for( var i=0; i< n; i=i+step){\n\
		arc(i * step, 180, true)\n\
	}\n\
}\n\
'
