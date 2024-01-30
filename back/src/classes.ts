//--- Classes ---

//Users class
class Users {
  Id: number;
  Firstname: string;
  Lastname: string;
  Email: string;
  Password: string;
  Login() {

  };
  CreateCommand() {

  };

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
  GetCommand() {

  }
  GetPlaceDelivery() {

  }
  UpdateStatus(Notifications) {

  }

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

  Id: number;
  Name: string;
  Engine: number;
  Color: string;
  CreateCar() {

  }
  GetColor(Command) {

  }
  GetMotor(Command){

  }

  constructor() {
    this.Id = 0;
    this.Name = "";
    this.Engine = 0;
    this.Color = "";
  }
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
  Color: string;
  Name: string;
  Adress: string;
  Engine: number;
  Price: DoubleRange;
  getDetails(carId);
}

//--- Concrete Products ---

//Concrete product Cybertruck
class CybertruckConcrete implements Car {
  Id: number;
  Color: string;
  Name: string;
  Adress: string;
  Engine: number;
  Price: DoubleRange;
  getDetails(Car) {
    // Implement getDetails logic for Cybertruck
    return (
      `Cybertruck details:  id: ${this.Id} name: ${this.Name} engine: ${this.Engine} color: ${this.Color}`
    );
  }

  constructor() {
    this.Id = 0;
    this.Name = "";
    this.Engine = 0;
    this.Color = "";
  }
}

//Concrete product ModelS

class ModelSConcrete implements Car {
  Id: number;
  Color: string;
  Name: string;
  Adress: string;
  Engine: number;
  Price: DoubleRange;
  getDetails(Car): string {
    // Implement getDetails logic for Cybertruck
    return (
      `Cybertruck details:  id: ${this.Id} name: ${this.Name} engine: ${this.Engine} color: ${this.Color}`
    );
  }
}

//Concrete product ModelX
class ModelXConcrete implements Car {
  Id: number;
  Color: string;
  Name: string;
  Adress: string;
  Engine: number;
  Price: DoubleRange;
  getDetails(Car): string {
    // Implement getDetails logic for Cybertruck
    return (
      `Cybertruck details:  id: ${this.Id} name: ${this.Name} engine: ${this.Engine} color: ${this.Color}`
    );
  }
}

//--- Decorator---

//Notifier class
class Notifier {
  Notification: string = "";
  Send(Notification): void {

  };
}

// Object Cybertruck created example
const cybertruckCreator = new CybertruckCreator();
const myCybertruck = cybertruckCreator.factoryMethod();
myCybertruck.Id = 1;
myCybertruck.Name = "Cybertruck";
myCybertruck.Engine = 200;
myCybertruck.Color = "Grey";

console.log(myCybertruck.getDetails(this.Car));
