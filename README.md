**Design Patterns**

*Builder:* allows you to create complex objects step by step.
In a builder pattern, there is a base class that gets extend by adding subclasses for the parameters.
The best way to fix the problem of having too many parameters is creating separate objects.

    function Addition (a, b) {
        return a + b;
    }
    module.exports = Addition;
The Addition function allows the calculator to only add two numbers together.
If you want the calculator to subtract as well, you would need to create a separate function for that operation. 

*Decorator:* lets you attach behaviors to objects.
The objects are in special wrapper objects that already contain the behaviors.

    class Calculator {
        static Calculations = [];
    
        static Addition(a,b) {
            let calculation = Calculation.Create(a, b, Addition);
            return calculation;
        }
    }
The Calculator class has subclasses Calculations and Addition that each perform different tasks. 
The Addition class lets you add two numbers together.

*Strategy:* lets you put a family of algorithms into separate classes, and make their objects interchangeable.
The original class, context, must include references to the strategies.

    Class Difference {
        static Subtraction(a,b) {
            let calculation = Calculation.Create(a, b, Subtraction);
            return calculation;
        }
    }
    
    static Multiplication(a,b) {
        let calculation = Calculation.Create(a, b, Multiplication);
        return calculation;
    }
Here, there are two classes, Difference and Product.
Their strategies would be the lines that allow the calculation to execute.


**SOLID Principles**

**1.** *Single Responsibility Principle:* a function should only do one thing. Some functions can be made into even smaller functions. 
This means that every function will have a separate purpose. 
The example below is just getting the results of an operation and printing them.

    static Create(a, b, op) {
        return new Calculation(a, b, op);
    }

**2.** *Open-Closed Principle:* your code should be open to allow extensions to it, but should be closed to modification. 
You don't need to modify the code that already exists, you can just extend it. 
This example allows you to get the color of the object without having to modify existing code. 

    class Car {
        constructor(model, color) {
            this.model = model;
            this.color = color
        }
    
        getColor() {
            return "the color is " + this.color;
        }
    }
    module.exports = Car;
 

**3.** *Liskov Substitution Principle:* functions that use pointers or references to base classes must be able to use objects of derived classes without knowing it.
For example, not all devices run on cell batteries, like phones. Remotes run on batteries, which is why it falls under the subclass BatteryOperatedDevices.

    public class Devices {}   
    
    public class BatteryOperatedDevices {
        public void batteries() {
        }
    }
    
    public class Remote extends BatteryOperatedDevices {}
    public class Phone extends Devices {}
    

**4.** *Interface Segregation Principle:* you do not need to implement interfaces that you don't need or use in your code. 
It's better if you have multiple smaller interfaces instead of one big interface. 
The function talk is not being used in the Infants class, so this would be a bad example of this principle.

     interface Action {
        function sleep() {}
        function eat() {}
        function talk() {}
     }
     
     class Toddlers implements Action {
        sleep() {
            // toddlers sleep
        }
        
        eat() {
            // toddlers eat 
        }
        
        talk() {
            // toddlers talk
        }
     }
     
     class Infants implements Action {
             sleep() {
                 // toddlers sleep
             }
             
             eat() {
                 // toddlers eat 
             }
     }
        
**5.** *Dependency Inversion Principle:* hands control over from the function to the caller of the function. 
It defines who can control the type of parameters the function receives. 
Below, the class calculation gets called, which then creates a new calculation and returns the results of that calculation.
    
    class Calculation {
        constructor(a, b, op) {
            this.a = a;
            this.b = b;
            this.op = op;
        }
    
        static Create(a, b, op) {
            return new Calculation(a, b, op);
        }
    
        GetResults() {
            return this.op(this.a, this.b);
        }
    }


**4 Principles of Object-Oriented Programming**

**1.** *Encapsulation:* each object must keep its state private in a class. 
With this, other objects are only able to call methods, which are public functions.
An example can be found in encapsulation.js.

**2.** *Abstraction:* each object should only reveal operations that are relevant to the other objects. 
The Calculator.js file in the calculator assignment references the Multiplication.js file, making the Multiplication.js file hidden.

    function Multiplication (a,b) {
        return a * b;
    }
    
    module.exports = Multiplication;
    
    GetResults() {
            return this.op(this.a, this.b);
    }

**3.** *Inheritance:* allows you to create a child class from a parent class. 
You can reuse the common logic and separate the unique logic into a different class.
The parent class would be Clothing, and the Child class would be Style.

    class Clothing {
        constructor(brand) {
            this.clothing = brand;
        }
        present() {
            return 'I buy my clothes from ' + this.clothing;
        }
    }
    
    class Style extends Clothing {
        constructor(brand, sku) {
            super(brand);
            this.style = sku;
        }
        
        show() {
            return this.present() + ', it's great for finding ' + this.style + ' clothes';
        }
    }
    

**4.** *Polymorphism:* allows you to use a class that is exactly like its parent. 
Each child class is able to leave its methods as they are. 
The same example from the Liskov Substitution Principle can be used because in the example, you can see that BatteryOperatedDevices is a child class of Devices.
    public class Devices {}   
        
        public class BatteryOperatedDevices {
            public void batteries() {
            }
        }
        
        public class Remote extends BatteryOperatedDevices {}
        public class Phone extends Devices {}
        
        
[![Coverage Status](https://coveralls.io/repos/github/vartika99/IS219-hw2/badge.svg?branch=master)](https://coveralls.io/github/vartika99/IS219-hw2?branch=master)
[![Build Status](https://travis-ci.org/vartika99/IS219-hw2.svg?branch=master)](https://travis-ci.org/vartika99/IS219-hw2)