**SOLID Principles**

**1.** *Single Responsibility Principle:* a function should only do one thing. Some functions can be made into even smaller functions. 
This means that every function will have a separate purpose. 
The example below is just getting the results of an operation and printing them.

    GetResults() {
        return this.op(this.a, this.b);
    }

**2.** *Open-Closed Principle:* your code should be open to allow extensions to it, but should be closed to modification. 
You don't need to modify the code that already exists, you can just extend it. 
This example allows you to get the color of the object without having to modify existing code. 

    getColor() {
        return "the color is " + this.color;
    }
 

**3.** *Liskov Substitution Principle:* functions that use pointers or references to base classes must be able to use objects of derived classes without knowing it.
Not all devices run on cell batteries, like phones. Remotes run on batteries, which is why it falls under the subclass BatteryOperatedDevices().

    public class Devices {}   
    public class BatteryOperatedDevices {
        public void batteries() {
        }
    }
    
    public class Remote extends BatteryOperatedDevices {}
    public class Phone extends Devices {}
    

**4.** *Interface Segregation Principle:* you do not need to implement interfaces that you don't need or use in your code. 
It's better if you have multiple smaller interfaces instead of one big interface.

**5.** *Dependency Inversion Principle:* hands control over from the function to the caller of the function. 
It defines who can control the type of parameters the function receives.


**4 Principles of Object-Oriented Programming**

**1.** *Encapsulation:* each object must keep its state private in a class. 
With this, other objects are only able to call methods, which are public functions.

**2.** *Abstraction:* each object should only reveal operations that are relevant to the other objects.

**3.** *Inheritance:* allows you to create a child class from a parent class. 
You can reuse the common logic and separate the unique logic into a different class.

**4.** *Polymorphism:* allows you to use a class that is exactly like its parent. 
Each child class is able to leave its methods as they are. 
