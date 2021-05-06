//design of object
class Pig extends Base{
  constructor(x, y) {
   
    super(x, y, 50, 50);  //transfers all the properties from the baseclass to the sub class
    this.image = loadImage("images/pig.png");
    
  }
  
};

  /*
  INHERITANCE 

  Parent - BASE CLASS 
  Children - SUB CLASSES 
            - inherit all the properties & functions from the base class
            - And they can also have their own properties & functions
  */
  