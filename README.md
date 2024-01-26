# Vehicle

```
 /$$$$$$$  /$$$$$$$$  /$$$$$$  /$$$$$$  /$$$$$$  /$$   /$$       /$$$$$$$   /$$$$$$  /$$$$$$$$ /$$$$$$$$ /$$$$$$$$ /$$$$$$$  /$$   /$$
| $$__  $$| $$_____/ /$$__  $$|_  $$_/ /$$__  $$| $$$ | $$      | $$__  $$ /$$__  $$|__  $$__/|__  $$__/| $$_____/| $$__  $$| $$$ | $$
| $$  \ $$| $$      | $$  \__/  | $$  | $$  \__/| $$$$| $$      | $$  \ $$| $$  \ $$   | $$      | $$   | $$      | $$  \ $$| $$$$| $$
| $$  | $$| $$$$$   |  $$$$$$   | $$  | $$ /$$$$| $$ $$ $$      | $$$$$$$/| $$$$$$$$   | $$      | $$   | $$$$$   | $$$$$$$/| $$ $$ $$
| $$  | $$| $$__/    \____  $$  | $$  | $$|_  $$| $$  $$$$      | $$____/ | $$__  $$   | $$      | $$   | $$__/   | $$__  $$| $$  $$$$
| $$  | $$| $$       /$$  \ $$  | $$  | $$  \ $$| $$\  $$$      | $$      | $$  | $$   | $$      | $$   | $$      | $$  \ $$| $$\  $$$
| $$$$$$$/| $$$$$$$$|  $$$$$$/ /$$$$$$|  $$$$$$/| $$ \  $$      | $$      | $$  | $$   | $$      | $$   | $$$$$$$$| $$  | $$| $$ \  $$
|_______/ |________/ \______/ |______/ \______/ |__/  \__/      |__/      |__/  |__/   |__/      |__/   |________/|__/  |__/|__/  \__/
```

## Menu

<ul>
    <li>
        <a href="#use-case">Use Case</a>
    </li>
    <li>
        <a href="#factory-design-pattern">Factory Design Pattern</a>
    </li>
    <li>
        <a href="#decorator-design-pattern">Decorator Design Pattern</a>
    </li>
    <li>
        <a href="#decorator-design-pattern">Decorator Design Pattern</a>
    </li>
    <li>
        <a href="#sequence-diagram">Sequence Diagram</a>
    </li>
    <li>
        <a href="#merise">Merise</a>
    </li>
    <li>
        <a href="#wireframes">Wireframes</a>
    </li>
</ul>


## Project Context

This project aims to develop a website for selling vehicles, allowing users to order a customized vehicle and track the progress of their order. The development will be guided by the use of UML diagrams and the implementation of Design Patterns to ensure a robust and extensible design.

## Use Case

We created a use case diagram to help us first compose the exchanges and needs of the application.

<a href="https://github.com/monsuAymeric/Vehicle/blob/develop/Diagrams/UseCase.drawio.png" target="_blank" rel="noopener noreferrer">Use Case link</a>

## Chosen Design Patterns

<a href="https://github.com/monsuAymeric/Vehicle/blob/develop/Diagrams/ClassDiagram.drawio.png" target="_blank" rel="noopener noreferrer">Class Diagram link</a>

### Factory Design Pattern

The choice of the Factory Design Pattern is motivated by the need to create complex objects, such as customized cars, in a centralized manner.

By using this pattern, we can encapsulate the object creation logic in a dedicated class (the factory), making it easier to manage different variants of cars and their components.

### Decorator Design Pattern

We chose the Decorator Design Pattern to notify the user of changes to their order.

By using this pattern, we can dynamically add features notifications to the command class.

## Sequence Diagram

We created a sequence diagram to gain a deeper understanding of the steps and exchanges involved in designing the application.

<a href="https://github.com/monsuAymeric/Vehicle/tree/develop/Wireframe" target="_blank" rel="noopener noreferrer">Sequence Diagram link</a>

## Merise

We carried out the Merise methodology to help us design the data tables and their relationships in order to prepare the database.

<a href="https://github.com/monsuAymeric/Vehicle/tree/develop/Merise" target="_blank" rel="noopener noreferrer">Merise link</a>

## Wireframes

Wireframes assisted us in envisioning and designing the application's user experience.

<a href="https://github.com/monsuAymeric/Vehicle/tree/develop/Wireframe" target="_blank" rel="noopener noreferrer">Wireframes link</a>
