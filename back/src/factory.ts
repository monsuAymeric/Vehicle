//--- Factory ---
abstract class Factory {
  public abstract createCar(
    color: string,
    name: string,
    address: string,
    engine: number,
    price: number
  ): Car;
  public abstract factoryMethod(): Car;
}

//--- Interface ---
interface Car {
  Id: number;
  Color: string;
  Name: string;
  Adress: string;
  Engine: number;
  Price: number;
}

//--- Concrete Products ---
class CybertruckConcrete implements Car {
  Id: number;
  Color: string;
  Name: string;
  Adress: string;
  Engine: number;
  Price: number;
}

class ModelSConcrete implements Car {
  Id: number;
  Color: string;
  Name: string;
  Adress: string;
  Engine: number;
  Price: number;
}

class ModelXConcrete implements Car {
  Id: number;
  Color: string;
  Name: string;
  Adress: string;
  Engine: number;
  Price: number;
}

//--- Creators classes ---
class CybertruckCreator extends Factory {
  public createCar(
    color: string,
    name: string,
    address: string,
    engine: number,
    price: number
  ): Car {
    throw new Error("Method not implemented.");
  }
  public factoryMethod(): Car {
    return new CybertruckConcrete();
  }
}

class ModelSCreator extends Factory {
  public createCar(
    color: string,
    name: string,
    address: string,
    engine: number,
    price: number
  ): Car {
    throw new Error("Method not implemented.");
  }
  public factoryMethod(): Car {
    return new ModelSConcrete();
  }
}

class ModelXCreator extends Factory {
  public createCar(
    color: string,
    name: string,
    address: string,
    engine: number,
    price: number
  ): Car {
    throw new Error("Method not implemented.");
  }
  public factoryMethod(): Car {
    return new ModelXConcrete();
  }
}
