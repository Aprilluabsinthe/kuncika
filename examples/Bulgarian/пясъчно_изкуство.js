
показване = () => {
  начално_състояние();
    четката_скрий();
  повтаряй(6, () => {
    цвят_промени( 0 );
    надясно(180);
    _тук_ страна = 100;
    _тук_ номер_на_цвета = 0;
    целия_цикъл( () => страна > 0, ()=> {
  
      надясно_кликни(страна, 30 );
  
      надясно(30);
      страна = страна - 10;
      номер_на_цвета = ( номер_на_цвета  + 15 ) % 16;
      цвят_промени( номер_на_цвета );
    } );
  });

  надясно(310);
  четката_нагоре();
  напред(60 );
  четката_надолу()
  цвят_промени( 13 );
  пълен_кръг(5 );
  кръг(10);
}
