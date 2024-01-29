//--- Classes ---

//Users class
class Users {
  Id: number;
  Firstname: string;
  Lastname: string;
  Email: string;
  Password: string;

  constructor() {
    this.Id = 0;
    this.Firstname = "";
    this.Lastname = "";
    this.Email = "";
    this.Password = "";
  }
}

//Command class
class Command {
  Id: number;
  IsValid: Boolean;
  PlaceDelivery: string;
  Status: string;

  constructor() {
    this.Id = 0;
    this.IsValid = true;
    this.PlaceDelivery = "";
    this.Status = "";
  }
}

//--- Factory ---

//Factory class
abstract class Factory {
  public abstract factoryMethod(): Car;

  Id: number = 0;
  Name: string = "";
  Engine: number = 0;
  Color: string = "";
}

//--- Creators classes ---

//CybertruckCreator class
class CybertruckCreator extends Factory {
  public factoryMethod(): Car {
    return new CybertruckConcrete();
  }
}

//ModelSCreator class
class ModelSCreator extends Factory {
  public factoryMethod(): Car {
    return new ModelSConcrete();
  }
}

//ModelXCreator class
class ModelXCreator extends Factory {
  public factoryMethod(): Car {
    return new ModelXConcrete();
  }
}

//--- Interface ---

//Car class
interface Car {
  Id: number;
  Name: string;
  Engine: number;
  Color: string;
  getDetails(): string;
}

//--- Concrete Products ---

//Concrete product Cybertruck
class CybertruckConcrete implements Car {
  Id: number;
  Name: string;
  Engine: number = 0;
  Color: string;
  getDetails() {
    // Implement getDetails logic for Cybertruck
    return (
      "Cybertruck details: " +
      " id: " +
      this.Id +
      " name: " +
      this.Name +
      " engine: " +
      this.Engine +
      " color: " +
      this.Color
    );
  }
}

//Concrete product MedelS
class ModelSConcrete implements Car {
  Id: number;
  Name: string;
  Engine: number = 0;
  Color: string;
  getDetails() {
    // Implement getDetails logic for Cybertruck
    return (
      "Cybertruck details: " +
      " id: " +
      this.Id +
      " name: " +
      this.Name +
      " engine: " +
      this.Engine +
      " color: " +
      this.Color
    );
  }
}

//Concrete product ModelX
class ModelXConcrete implements Car {
  Id: number;
  Name: string;
  Engine: number = 0;
  Color: string;
  getDetails() {
    // Implement getDetails logic for Cybertruck
    return (
      "Cybertruck details: " +
      " id: " +
      this.Id +
      " name: " +
      this.Name +
      " engine: " +
      this.Engine +
      " color: " +
      this.Color
    );
  }
}

//--- Decorator---

//Notifier class
class Notifier {
  Notification: string = "";
}

// Object Cybertruck created example
const cybertruckCreator = new CybertruckCreator();
const myCybertruck = cybertruckCreator.factoryMethod();
myCybertruck.Id = 1;
myCybertruck.Name = "Cybertruck";
myCybertruck.Engine = 200;
myCybertruck.Color = "Grey";

console.log(myCybertruck.getDetails());
