var obj = {
  name: "hamada",
  age: 20,
  print: function () {
    setTimeout(function () {
       console.log(this.name, this.age);
       console.log(this);
       
     }, 2000);
  },
};

obj.print();