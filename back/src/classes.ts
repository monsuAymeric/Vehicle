// //--- Classes ---

// //Users class
// class Users {
//   Id: number;
//   Firstname: string;
//   Lastname: string;
//   Email: string;
//   Password: string;

//   constructor() {
//     this.Id = 0;
//     this.Firstname = "";
//     this.Lastname = "";
//     this.Email = "";
//     this.Password = "";
//   }
// }

// //Command class
// class Command {
//   Id: number;
//   IsValid: Boolean;
//   PlaceDelivery: string;
//   Status: string;

//   constructor() {
//     this.Id = 0;
//     this.IsValid = true;
//     this.PlaceDelivery = "";
//     this.Status = "";
//   }
// }

// //--- Factory ---

// //Factory class
// abstract class Factory {
//   public abstract factoryMethod(): Car;

//   Id: number;
//   Name: string;
//   Engine: number;
//   Color: string;

//   constructor() {
//     this.Id = 0;
//     this.Name = "";
//     this.Engine = 0;
//     this.Color = "";
//   }
// }

// //--- Creators classes ---

// //CybertruckCreator class
// class CybertruckCreator extends Factory {
//   public factoryMethod(): Car {
//     return new CybertruckConcrete();
//   }
// }

// //ModelSCreator class
// class ModelSCreator extends Factory {
//   public factoryMethod(): Car {
//     return new ModelSConcrete();
//   }
// }

// //ModelXCreator class
// class ModelXCreator extends Factory {
//   public factoryMethod(): Car {
//     return new ModelXConcrete();
//   }
// }

// //--- Interface ---

// //Car class
// interface Car {
//   Id: number;
//   Color: string;
//   Name: string;
//   Adress: string;
//   Engine: number;
//   Price: number;
// }

// //--- Concrete Products ---

// //Concrete product Cybertruck
// class CybertruckConcrete implements Car {
//   Id: number;
//   Color: string;
//   Name: string;
//   Adress: string;
//   Engine: number;
//   Price: number;

//   constructor() {
//     this.Id = 0;
//     this.Name = "";
//     this.Engine = 0;
//     this.Color = "";
//     this.Price = 0;
//   }
// }

// //Concrete product ModelS

// class ModelSConcrete implements Car {
//   Id: number;
//   Color: string;
//   Name: string;
//   Adress: string;
//   Engine: number;
//   Price: number;

//   constructor() {
//     this.Id = 0;
//     this.Name = "";
//     this.Engine = 0;
//     this.Color = "";
//     this.Price = 0;
//   }
// }

// //Concrete product ModelX
// class ModelXConcrete implements Car {
//   Id: number;
//   Color: string;
//   Name: string;
//   Adress: string;
//   Engine: number;
//   Price: number;

//   constructor() {
//     this.Id = 0;
//     this.Name = "";
//     this.Engine = 0;
//     this.Color = "";
//     this.Price = 0;
//   }
// }

// //--- Decorator---

// //Notifier class
// class Notifier {
//   Notification: string = "";
// }
