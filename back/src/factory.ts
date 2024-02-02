//--- Factory ---
abstract class Factory {
  public abstract createCar(name: string): Car;
  public abstract factoryMethod(): Car;
}

//--- Interface ---
interface Car {
  Id: number;
  Name: string;
}

//--- Concrete Products ---
class CybertruckConcrete implements Car {
  Id: number;
  Name: string;
}

class ModelSConcrete implements Car {
  Id: number;
  Name: string;
}

class ModelXConcrete implements Car {
  Id: number;
  Name: string;
}

//--- Creators classes ---
class CybertruckCreator extends Factory {
  public createCar(name: string): Car {
    const car = this.factoryMethod();
    car.Name = name;
    return car;
  }
  public factoryMethod(): Car {
    return new CybertruckConcrete();
  }
}

class ModelSCreator extends Factory {
  public createCar(name: string): Car {
    const car = this.factoryMethod();
    car.Name = name;
    return car;
  }
  public factoryMethod(): Car {
    return new ModelSConcrete();
  }
}

class ModelXCreator extends Factory {
  public createCar(name: string): Car {
    const car = this.factoryMethod();
    car.Name = name;
    return car;
  }
  public factoryMethod(): Car {
    return new ModelXConcrete();
  }
}
