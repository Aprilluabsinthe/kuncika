/* ఇక్కడ మీ ప్రక్రియ లు వ్రాయ గలరు. ఉదాహరణ కి:    */

సమ_చతురస్రము = ( భుజము ) => {
  ఆవర్తించు(4, () => {
    ముందుకు_జరుగు( భుజము );
    కుడి_వైపు_తిరుగు(90);
  });
}

ప్రదర్శన = () => {
  కుంచికను_దాచు();
  రంగు_మార్చు( నీలము );
  భుజము = 100;
  రంగు_సంఖ్య = 0;
  యావత్_పరిక్రమ( () => భుజము > 0, ()=> {
    సమ_చతురస్రము( భుజము );
    కుడి_వైపు_తిరుగు(36);
    భుజము = భుజము - 10;
    రంగు_సంఖ్య = ( రంగు_సంఖ్య + 1 ) % 16;
    రంగు_మార్చు( రంగు_సంఖ్య );
  } );
}