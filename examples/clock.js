// Clock, Analog -- draw and animate an analog clock

//GLOBALS
var size;

//draw the tick marks around the edge of the clock
function ticks(x, y, వ్యాసార్థము) {
   var tickLen = 7;
   var gap = వ్యాసార్థము - tickLen;
   రంగు_మార్చు( నీలము );
   వెడల్పు(1);
   for (var theta = 0; theta < 360; theta = theta + 6) {
      // Thicken hour marks
      if (theta % 30 != 0) {
         వెడల్పు(1/130* size);
      } else {
         వెడల్పు(3/130* size);
      }
      కలమును_పైకి_ఎత్తు();
      స్థానము_మార్చు(0,0);
      కోణము(theta);
      ముందుకు_జరుగు(gap);
      కలమును_కింద_పెట్టు();
      ముందుకు_జరుగు(tickLen);
   }
}


// draw the hour numbers on the clock face
function numbers(x, y, వ్యాసార్థము) {
   కలమును_పైకి_ఎత్తు();
   fontSize = 20/130 * size
   అక్షరరూపము_స్థాపించు(fontSize+"px sans-serif");
   రంగు_మార్చు("నలుపు");
   for (var hour = 1; hour <= 12; hour++) {
      స్థానము_మార్చు(x,y);
      కోణము(hour * 30);
      ముందుకు_జరుగు(వ్యాసార్థము); // to center of digit
      కోణము(180);
      ముందుకు_జరుగు(10/130 * size); // vertical correction to baseline
      కుడి_వైపు_తిరుగు(90);
      if (hour < 10) {
        ముందుకు_జరుగు(6/130 * size); // horizontal correction to lower left corner
      } else {
        ముందుకు_జరుగు(10/130 * size)
      }
      కుడి_వైపు_తిరుగు(180);
      వ్రాయి(hour);
   }
   కలమును_కింద_పెట్టు();
}

// draw one of the clock hands
function hand (theta, w, length, col) {
   var stepSize = 5;
   var widthDelta = w / (length / stepSize);
   స్థానము_మార్చు(0, 0);
   కోణము(theta);
   రంగు_మార్చు(col);
   for (var step = 0; step < length; step = step + stepSize) {
      వెడల్పు(w);
      ముందుకు_జరుగు(stepSize);
      w = w - widthDelta;
   }
}

function hands(hours, minutes, seconds) {
    // draw seconds hand
    var secDegreesPerSecond = 6;	// = 360 degrees/60 seconds /minute
    hand(seconds * secDegreesPerSecond, 4, 100/130 * size, "red");
    // draw minutes hand 
    var minDegreePerSecond = 0.1;	// = 360 degrees /3600 seconds /hour
    var minutesInSeconds = minutes * 60 + seconds;
    hand(minutesInSeconds * minDegreePerSecond, 10, 100/130 * size, "blue");
    // draw hours hand
    var hourDegreePerSecond = .1/12;	// = 360 degrees /3600 seconds per hour /12 hours per half day /half day
    var hoursInSeconds = ((hours % 12) * 3600) + minutesInSeconds;
    hand(hoursInSeconds * hourDegreePerSecond, 10, 60/130 * size, "blue");
}

// refresh the entire clock
function clock() {
   చెరిపి_వేయి();
   size = .9 *  Math.min( గరిష్ఠX(), గరిష్ఠY())
  numbers(0, 0, 110/130 * size);
   రంగు_మార్చు("lightgreen");
   స్థానము_మార్చు(0,0);
   వెడల్పు(1/130* size)
   వృత్తము(130/130 * size );
   ticks(0, 0, 130/130 * size );
   var d = new Date();
   hands(d.getHours(), d.getMinutes(), d.getSeconds());
}

function demo() {
   కుంచికను_దాచు();
   // refresh the clock every second
   ఆడించు(clock,1000);
}
