// Heart -- draw open or filled hearts
/*
algorithm:
  start with a square at 45 degrees
  add two half circles on the two upper segments
  clean up the lines

to make invarient:
  move down 1/(square root 2) or (square root 2)/2
  draw it
  move up by same amount

to make solid:
  fill the two half circles.
  fill the square by drawing it on one shot
*/

function oheart(size)
{
  రంగు_మార్చు( ఎరుపు )
  వెడల్పు(4)
  కలమును_పైకి_ఎత్తు()
  వెనుకకు_జరుగు(.707*size)
  కలమును_కింద_పెట్టు()
  ఎడమ_వైపు_తిరుగు(45)
  ముందుకు_జరుగు(size)
  కుడి_వైపు_తిరుగు(90)
  కలమును_పైకి_ఎత్తు()
  ముందుకు_జరుగు(size/2)
  కలమును_కింద_పెట్టు()
  వృత్తము(size/2,180,false)
  కలమును_పైకి_ఎత్తు()
  ముందుకు_జరుగు(size/2)
  కుడి_వైపు_తిరుగు(90)
  ముందుకు_జరుగు(size/2)
  కలమును_కింద_పెట్టు()
  వృత్తము(size/2,180,false)
  కలమును_పైకి_ఎత్తు()
  ముందుకు_జరుగు(size/2)
  కలమును_కింద_పెట్టు()
  కుడి_వైపు_తిరుగు(90)
  ముందుకు_జరుగు(size)
  కుడి_వైపు_తిరుగు(135)
  కలమును_పైకి_ఎత్తు()
  ముందుకు_జరుగు(.707*size)
  కలమును_కింద_పెట్టు()
}

function fheart(size, fcolor)
{
  రంగు_మార్చు(fcolor)
  వెనుకకు_జరుగు(.707*size)
  ఎడమ_వైపు_తిరుగు(45)
  ముందుకు_జరుగు(size)
  కుడి_వైపు_తిరుగు(90)
  ముందుకు_జరుగు(size/2)
  ఆకారాము_ప్రారంభించు()
  వృత్తము(size/2,180,false)
  ఆకారాము_ముగించు(fcolor)
  ముందుకు_జరుగు(size/2)
  కుడి_వైపు_తిరుగు(90)
  ముందుకు_జరుగు(size/2)
  ఆకారాము_ప్రారంభించు()
  వృత్తము(size/2,180,false)
  ఆకారాము_ముగించు(fcolor)
  ముందుకు_జరుగు(size/2)
  కుడి_వైపు_తిరుగు(90)
  ముందుకు_జరుగు(size)
  ఆకారాము_ప్రారంభించు()
  for (i=0;i<4;i++)
  {
    కుడి_వైపు_తిరుగు(90)
    ముందుకు_జరుగు(size)
  }
  ఆకారాము_ముగించు(fcolor)
  కుడి_వైపు_తిరుగు(135)
  ముందుకు_జరుగు(.707*size)
}

function heart(size)
{
  రంగు_మార్చు( ఎరుపు )
  వెడల్పు(4)
  కలమును_పైకి_ఎత్తు()
  వెనుకకు_జరుగు(.707*size)
  కలమును_కింద_పెట్టు()
  ఎడమ_వైపు_తిరుగు(45)
  ముందుకు_జరుగు(size)
  కుడి_వైపు_తిరుగు(90)
  కలమును_పైకి_ఎత్తు()
  ముందుకు_జరుగు(size/2)
  కలమును_కింద_పెట్టు()
  ఆకారాము_ప్రారంభించు()
  వృత్తము(size/2,180,false)
  ఆకారాము_ముగించు("red")
  కలమును_పైకి_ఎత్తు()
  ముందుకు_జరుగు(size/2)
  కుడి_వైపు_తిరుగు(90)
  ముందుకు_జరుగు(size/2)
  కలమును_కింద_పెట్టు()
  ఆకారాము_ప్రారంభించు()
  వృత్తము(size/2,180,false)
  ఆకారాము_ముగించు("red")
  కలమును_పైకి_ఎత్తు()
  ముందుకు_జరుగు(size/2)
  కలమును_కింద_పెట్టు()
  కుడి_వైపు_తిరుగు(90)
  ముందుకు_జరుగు(size)
  ఆకారాము_ప్రారంభించు()
  for (i=0;i<4;i++)
  {
    కుడి_వైపు_తిరుగు(90)
    ముందుకు_జరుగు(size)
  }
  ఆకారాము_ముగించు()
  కుడి_వైపు_తిరుగు(135)
  కలమును_పైకి_ఎత్తు()
  ముందుకు_జరుగు(.707*size)
  కలమును_కింద_పెట్టు()
}

function ప్రదర్శన()
{
  ఆది_స్థితి()

  size = 50
  oheart(5 * size)
  fheart(4 * size,"red")
  fheart(3 * size,"white")
  oheart(2 * size)
  fheart(1 * size, "red")
}
