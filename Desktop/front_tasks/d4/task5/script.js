
var rectangle = {
   width: 10, 
   height: 5,

   area:function(){
      return this.width*this.height;
   },

   perimeter:function(){
      return 2*(this.width+this.height);
   },

   display:function(){
      console.log("the width:"+ this.width,"the height:"+this.height );
      console.log("the area:"+ this.area(),"the perimeter:"+this.perimeter());
   }
   
   
}
rectangle.display();
console.log(rectangle.area());
console.log(rectangle.perimeter());

       