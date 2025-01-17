// Naifeh Mizen Simple -- inspired by the are of Steven Naifeh of the same name
// for more information see https://stevennaifeh.com


_విధానము_     v (side, fColor) {
  // assume pointing up at upper left corner
  // invariant
  if (fColor != "") {
    ఆకారము_ప్రారంభించు()
  }
  ఎడమ_వైపు_తిరుగు( 30)
  ముందుకు_జరుగు( 3*side)
  కుడి_వైపు_తిరుగు( 120)
  ముందుకు_జరుగు( side)
  కుడి_వైపు_తిరుగు(60)
  ముందుకు_జరుగు(side)
  ఎడమ_వైపు_తిరుగు( 120)
  ముందుకు_జరుగు( side)
  కుడి_వైపు_తిరుగు(60)
  ముందుకు_జరుగు( side)
  కుడి_వైపు_తిరుగు( 120)
  ముందుకు_జరుగు( 3*side)
  కుడి_వైపు_తిరుగు(150)
  if (fColor != "") {
    ఆకారము_ముగించు(fColor)
  }
}


_విధానము_     mizen( side, lColor, fColor) {
  రంగు_మార్చు(lColor)
  కుడి_వైపు_తిరుగు(120)
  for (_సర్వత్ర_   i=0; i<6; i++) {
    v( side, fColor)
    కుంచికను_పైకి_ఎత్తు()
    కుడి_వైపు_తిరుగు(30)
    ముందుకు_జరుగు( side)
    ఎడమ_వైపు_తిరుగు( 60)
    ముందుకు_జరుగు( 2*side)
    ఎడమ_వైపు_తిరుగు(30)
    కుంచికను_కింద_పెట్టు()
    v( side, fColor)

    కుంచికను_పైకి_ఎత్తు()
    కుడి_వైపు_తిరుగు(30)
    ముందుకు_జరుగు( 2*side)
    కుడి_వైపు_తిరుగు( 150)
    కుంచికను_కింద_పెట్టు()
    v( side, fColor)

    కుంచికను_పైకి_ఎత్తు()
    కుడి_వైపు_తిరుగు(30)
    ముందుకు_జరుగు( side)
    కుడి_వైపు_తిరుగు(120)
    ముందుకు_జరుగు( 4*side)
    కుడి_వైపు_తిరుగు(150)
    కుంచికను_కింద_పెట్టు()
  }
}


_విధానము_     mizenSimple() {
  bColor = "red"
  lColor = "white"
  background ("tan")

  //center canvas more or less
  స్థానము_మార్చు(-5*side, 3.5*side)
  వెడల్పు(1)
  కోణము(0)
  mizen( side, "నలుపు", "red")

  // do again to make lines stand out
  స్థానము_మార్చు(-5*side, 3.5*side)
  వెడల్పు(3)
  కోణము(0)
  mizen( side, "white", "")
}

_విధానము_     ప్రదర్శన() {
  ఆది_స్థితి()
   చుట్టొద్దు()
  side = 40 // 1/2 basic face of hexagon, width...
  side = .15 * Math.min( గరిష్ఠX(), గరిష్ఠY())
  mizenSimple()
  కుంచికను_దాచు()
}
