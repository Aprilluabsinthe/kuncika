// Squiggle -- draw a random squiggle

function squiggle(steps,కోణము) {
  widthInc = 5 / steps;
  distInc = 10 / steps;
  w = 0.1;
  ఆవర్తించు(steps, function () {
    వెడల్పు(w);
    ముందుకు_జరుగు(యాదృచఛిక_సంఖ్య(1,10));
    కుడి_వైపు_తిరుగు(కోణము);
    కోణము = కోణము - 1;
    w = w + widthInc;
  })
}

function drawRandomSquiggle() {
  రంగు_మార్చు(యాదృచఛిక_సంఖ్య(16));
  స్థానము_మార్చు(యాదృచఛిక_సంఖ్య(కనిష్ఠX(), గరిష్ఠX()), యాదృచఛిక_సంఖ్య(కనిష్ఠY(), గరిష్ఠY()));
  కోణము(యాదృచఛిక_సంఖ్య(0,360));
  squiggle(యాదృచఛిక_సంఖ్య(100,1000), యాదృచఛిక_సంఖ్య(5,90));
}

function ప్రదర్శన() {
  ఆది_స్థితి()
  కుంచికను_దాచు();
  drawRandomSquiggle();
}
