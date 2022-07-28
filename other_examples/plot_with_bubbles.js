// Coordinates -- Draw the axes of the coordinate system on the canvas

అండాకారము = (x, y, పరిమాణము, వాలు, అండము_రంగు, వాక్యము ) => {
    రంగు_మార్చు(అండము_రంగు)
    కుంచికను_పైకి_ఎత్తు()
    స్థానము_మార్చు(x,y)
    కుంచికను_కింద_పెట్టు()
    దిశ_మార్చు(270+వాలు)
    కుడివైపు_చాపాము(పరిమాణము,180)
    కుడివైపు_చాపాము(2*పరిమాణము,45)
    కుడివైపు_చాపాము(0.586*పరిమాణము,90)
    కుడివైపు_చాపాము(2*పరిమాణము,45)
  
    స్థానము_మార్చు( x, y + పరిమాణము)
    కోణము ( 90 + వాలు )
    // రంగు_మార్చు(10)
    వ్రాయి( వాక్యము )
  }
  
  _విధానము_     lines ( గీత_రంగు, అక్షర_రంగు) {
    చెరిపి_వేయి()  
    రంగు_మార్చు(గీత_రంగు)
    కుంచికను_కింద_పెట్టు()
  
    స్థానము_మార్చు(0,కనిష్ఠY())
    కోణము(0)
    ముందుకు_జరుగు(2*గరిష్ఠY())
  
    స్థానము_మార్చు(కనిష్ఠX(),0)
    కోణము(90)
    ముందుకు_జరుగు(2*గరిష్ఠX())
  
    //lable the axes
    అక్షరరూపము_స్థాపించు("bold 14px sans-serif");
    స్థానము_మార్చు(0+10,గరిష్ఠY()-25)
    కోణము (90) 
    రంగు_మార్చు(అక్షర_రంగు)
    వ్రాయి( "+ Language" )
    రంగు_మార్చు(గీత_రంగు)
  
  
    స్థానము_మార్చు(గరిష్ఠX()-5,+10)
    కోణము (0)
    రంగు_మార్చు(10)
    వ్రాయి( "+ Programming" )
    రంగు_మార్చు(గీత_రంగు)
  
    స్థానము_మార్చు(10,కనిష్ఠY()+5)
    కోణము (90)
    రంగు_మార్చు(అక్షర_రంగు)
    వ్రాయి( "- Language" )
    రంగు_మార్చు(గీత_రంగు)
  
    స్థానము_మార్చు(కనిష్ఠX()+25,0+10)
    కోణము (0)
    రంగు_మార్చు(10)
    వ్రాయి( "- Programming" )
    రంగు_మార్చు(గీత_రంగు)
  }
  
  
  _విధానము_     ticks (dir, limit, step) {
    _సర్వత్ర_   tickLen = 5
    కోణము(dir)
    స్థానము_మార్చు(0,0)
    కుంచికను_పైకి_ఎత్తు()
    for (i=1; i*step<limit; i=i+1) {
  
      ముందుకు_జరుగు(step)
      ఎడమ_వైపు_తిరుగు(90)
      if (i%5 == 0) {
        ముందుకు_జరుగు(tickLen)
        కుంచికను_కింద_పెట్టు()
        వెనుకకు_జరుగు(tickLen*2)
        కుంచికను_పైకి_ఎత్తు()
        ముందుకు_జరుగు(tickLen)
        కుడి_వైపు_తిరుగు(90)
      } else {
        ముందుకు_జరుగు(tickLen/2)
        కుంచికను_కింద_పెట్టు()
        వెనుకకు_జరుగు(tickLen)
        కుంచికను_పైకి_ఎత్తు()
        ముందుకు_జరుగు(tickLen/2)
        కుడి_వైపు_తిరుగు(90)
      }
    }
  }
  
  _విధానము_     ప్రదర్శన() {
    lines( 1, 4)
    అండాకారము( 300, 300, 60, 45, 10, " C, Py, Java " )
    అండాకారము( 0, 100, 30, 45, 1, "Kuncika" )
    అండాకారము( -400, -300, 80, -45, 4 , " Learn both")
    అండాకారము( -250, 200, 40, 0, 8, " Learn coding" )
    ticks (0, గరిష్ఠY(), 10)
    ticks (90, గరిష్ఠX(), 10)
    ticks (180, -కనిష్ఠY(), 10)
    ticks (270, -కనిష్ఠX(), 10)
  }
  

  