(function(){
  function b(){}
  {
    function b() {console.log(232)};
    {
      function b(){console.log('23424')}
      console.log(b)
    }
  }
  console.log(b)
})();
(function(){
  var b = ""
  {
    function b(){}
    console.log(b)
  }
  console.log(b)
})();
(function(){
  let a;
  for( var i = 0;i<10;i++){
      setTimeout(() => console.log(i))
  }
})();
(function(){
  let a;
  {
    function a(){}
  }
  console.log(a)
})();
(function(){
  var a;
  {
    function a(){}
  }
  console.log(a)
})()