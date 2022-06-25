// Squiggle -- draw a random squiggle

_విధానము_     squiggle(steps,కోణము) {
  widthInc = 5 / steps;
  distInc = 10 / steps;
  w = 0.1;
  ఆవర్తించు(steps, _విధానము_     () {
    వెడల్పు(w);
    ముందుకు_జరుగు(యాదృచ్ఛిక_సంఖ్య(1,10));
    కుడి_వైపు_తిరుగు(కోణము);
    కోణము = కోణము - 1;
    w = w + widthInc;
  })
}

_విధానము_     drawRandomSquiggle() {
  రంగు_మార్చు(యాదృచ్ఛిక_సంఖ్య(16));
  స్థానము_మార్చు(యాదృచ్ఛిక_సంఖ్య(కనిష్ఠX(), గరిష్ఠX()), యాదృచ్ఛిక_సంఖ్య(కనిష్ఠY(), గరిష్ఠY()));
  కోణము(యాదృచ్ఛిక_సంఖ్య(0,360));
  squiggle(యాదృచ్ఛిక_సంఖ్య(100,1000), యాదృచ్ఛిక_సంఖ్య(5,90));
}

_విధానము_     ప్రదర్శన() {
  ఆది_స్థితి()
  కుంచికను_దాచు();
  drawRandomSquiggle();
}