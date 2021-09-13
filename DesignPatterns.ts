/*
    ████████╗░██████╗  ██████╗░███████╗░██████╗██╗░██████╗░███╗░░██╗
    ╚══██╔══╝██╔════╝  ██╔══██╗██╔════╝██╔════╝██║██╔════╝░████╗░██║
    ░░░██║░░░╚█████╗░  ██║░░██║█████╗░░╚█████╗░██║██║░░██╗░██╔██╗██║
    ░░░██║░░░░╚═══██╗  ██║░░██║██╔══╝░░░╚═══██╗██║██║░░╚██╗██║╚████║
    ░░░██║░░░██████╔╝  ██████╔╝███████╗██████╔╝██║╚██████╔╝██║░╚███║
    ░░░╚═╝░░░╚═════╝░  ╚═════╝░╚══════╝╚═════╝░╚═╝░╚═════╝░╚═╝░░╚══╝

    ██████╗░░█████╗░████████╗████████╗███████╗██████╗░███╗░░██╗░██████╗
    ██╔══██╗██╔══██╗╚══██╔══╝╚══██╔══╝██╔════╝██╔══██╗████╗░██║██╔════╝
    ██████╔╝███████║░░░██║░░░░░░██║░░░█████╗░░██████╔╝██╔██╗██║╚█████╗░
    ██╔═══╝░██╔══██║░░░██║░░░░░░██║░░░██╔══╝░░██╔══██╗██║╚████║░╚═══██╗
    ██║░░░░░██║░░██║░░░██║░░░░░░██║░░░███████╗██║░░██║██║░╚███║██████╔╝
    ╚═╝░░░░░╚═╝░░╚═╝░░░╚═╝░░░░░░╚═╝░░░╚══════╝╚═╝░░╚═╝╚═╝░░╚══╝╚═════╝░

        В этом разделе ты узнаешь:
- что такое паттерны проектирования и когда их использовать
- суть паттерна Декоратор

    Внимательно изучи соответствующий материал официальной документации и переходи к парктическим заданиям:    
--> https://refactoring.guru/ru/design-patterns <--
    К Заданию 1
--> https://refactoring.guru/ru/design-patterns/adapter <--
    К Заданию 2
--> https://refactoring.guru/ru/design-patterns/observer <--
    К Заданию 3 
--> https://refactoring.guru/ru/design-patterns/abstract-factory <--
====================================================================
    ПРОДВИНУТЫЙ УРОВЕНЬ
    К Заданию 4
--> https://refactoring.guru/ru/design-patterns/decorator <--
    К Заданию 5
--> https://refactoring.guru/ru/design-patterns/facade <--
    К Заданию 6
--> https://refactoring.guru/ru/design-patterns/state <--

*/

// БАЗОВЫЙ УРОВЕНЬ
/*
        Задание 1
    Реализуй паттерн Adapter в следующем контексте: 
    Есть два класса: автомобиль и эвакуатор. Каждый из них, независимо друг от друга может ездить. 
    У автомобиля обнаружили несправность. Хозяин вызвал эвакуатор и автомобиль начали буксировать. 
    Опишите эту ситуацию реализуя паттерн проектирования с выводами текстовых сообщений в консоль.
*/

class Car {
  isWorking: boolean;

  constructor(isWorking: boolean) {
    this.isWorking = isWorking;
  }

  move(): void {
    console.log("move car");
  }

  faultDetection() {
    this.isWorking = false;
    console.log("detecting a malfunction in the car");
  }
}

class TowTruck {
  move(): void {
    console.log("move tow truck");
  }
}

class Adapter extends TowTruck {
  car: Car;

  constructor(car: Car) {
    super();
    this.car = car;
  }

  public move(): void {
    if (this.car.isWorking === false) {
      console.log("car towing");
    }
  }
}

let car = new Car(true);
let towTruck = new TowTruck();

car.move();
towTruck.move();
car.faultDetection();

let adapter = new Adapter(car);
adapter.move();

/*
        Задание 2
    Реализуй паттерн Observer в следующем контексте: 
    В доме срабатывает сигнализация. Она оповещает о тревоге охранную 
    фирму и хозяина дома, после отключения сигнализации, все так же получают соответствующее уведомление.
*/

interface Subject {
  isAlarmOn: boolean;

  subscribe(observer: Observer): void;
  unsubscribe(observer: Observer): void;
  inform(): void;
}

interface Observer {
  update(subject: Subject): void;
}

class Alarm implements Subject {
  isAlarmOn: boolean;
  observers: Array<Observer> = [];

  public subscribe(observer: Observer): void {
    if (this.observers.indexOf(observer) > -1) {
      return console.log("Observer already signed");
    }
    this.observers.push(observer);
    console.log("Observer added");
  }

  public unsubscribe(observer: Observer): void {
    if (this.observers.indexOf(observer) === -1) {
      return console.log("Observer not found");
    }
    this.observers.splice(this.observers.indexOf(observer), 1);
    console.log("Observer removed");
  }

  public inform(): void {
    this.observers.forEach((observer) => observer.update(this));
  }

  public alarmTriggered() {
    this.isAlarmOn = true;
    console.log("Alarm triggered");
    this.inform();
  }

  public alarmDisable() {
    this.isAlarmOn = false;
    console.log("Alarm disabled");
    this.inform();
  }
}

class Security implements Observer {
  public update(subject: Subject): void {
    if (subject.isAlarmOn) {
      console.log("Alarm notification for security company");
    } else {
      console.log("Alarm deactivation notification for security company");
    }
  }
}

class Owner implements Observer {
  public update(subject: Subject): void {
    if (subject.isAlarmOn) {
      console.log("Alarm notification for homeowner");
    } else {
      console.log("Alarm deactivation notification for homeowner");
    }
  }
}

const alarm = new Alarm();
const security = new Security();
const owner = new Owner();

alarm.subscribe(owner);
alarm.subscribe(security);

alarm.alarmTriggered();
alarm.alarmDisable();

alarm.unsubscribe(security);
alarm.alarmTriggered();

/* 
        Задание 3
    Реалиуй паттерн Abstract Factory в следующем контексте:
    Есть два производителя Samsung и Apple. Каждый из этих производителей выпускает различные девайсы (телефоны, планшеты, компьютеры и т.д).
    Фабрика должна предоставлять возможность создавать девайсы любой марки и любого типа. 
*/
console.log("---ЗАДАНИЕ №3---");

interface IFactory {
  createTablet(): ITablet;
  createPC(): IPC;
  createPhone(): IPhone;
}

interface IPhone {
  createPhone(): void;
}

interface ITablet {
  createTablet(): void;
}

interface IPC {
  createPC(): void;
}

class AppleFactory implements IFactory {
  createPhone(): IPhone {
    return new ApplePhone();
  }
  createPC(): IPC {
    return new ApplePC();
  }
  createTablet(): ITablet {
    return new AppleTablet();
  }
}

class SamsungFactory implements IFactory {
  createPhone(): IPhone {
    return new SamsungPhone();
  }
  createPC(): IPC {
    return new SamsungPC();
  }
  createTablet(): ITablet {
    return new SamsungTablet();
  }
}

class SamsungPhone implements IPhone {
  createPhone(): void {
    console.log("Samsung phone releaseг");
  }
}

class ApplePhone implements IPhone {
  createPhone(): void {
    console.log("iPhone release");
  }
}

class SamsungPC implements IPC {
  createPC(): void {
    console.log("Samsung PC release");
  }
}

class ApplePC implements IPC {
  createPC(): void {
    console.log("iMac release");
  }
}

class SamsungTablet implements ITablet {
  createTablet(): void {
    console.log("Samsung tablet release");
  }
}

class AppleTablet implements ITablet {
  createTablet(): void {
    console.log("iPad release");
  }
}

class Factory {
  device: IFactory;

  constructor(brand: string) {
    this.device = createFactory(brand);
  }

  phone(): void {
    this.device.createPhone().createPhone();
  }
  tablet(): void {
    this.device.createTablet().createTablet();
  }
  pc(): void {
    this.device.createPC().createPC();
  }
}

function createFactory(brand: string): IFactory {
  if (brand === "Apple") {
    return new AppleFactory();
  } else if (brand === "Samsung") {
    return new SamsungFactory();
  } else {
    console.log("Incorrect input!");
  }
}

let factoryApple = new Factory("Apple");
factoryApple.phone();
factoryApple.pc();

let factorySamsung = new Factory("Samsung");
factorySamsung.phone();
factorySamsung.tablet();

// ПРОДВИНУТЫЙ УРОВЕНЬ
/*
        Задание 4
    Реализуй паттерн Decorator в следующем контексте: 
    Фастфуд предлагает два комбо набора Чизбургер меню и Гамбургер меню.
    Каждый из этих наборов могут дополняться различными напитками или десертами на выбор покупателя, из-за чего изменяется его цена.
    Поступил заказ на два меню (Чизбургер меню и Гамбургер меню), одно с соком, а второе с колой и пончиком. 
    Помогите фастфуду приготовить и вывести заказ в консоль, не создавая новых видов меню.
*/

interface ComboMenu {
  giveOrder(): void;
}

class CheeseburgerMenu implements ComboMenu {
  giveOrder() {
    console.log(`Cheeseburger Menu`);
  }
}

class HamburgerMenu implements ComboMenu {
  giveOrder() {
    console.log(`Hamburger Menu`);
  }
}

class Decorator implements ComboMenu {
  component: ComboMenu;

  constructor(component: ComboMenu) {
    this.component = component;
  }

  giveOrder(): void {
    return this.component.giveOrder();
  }
}

class Cola extends Decorator {
  constructor(component: ComboMenu) {
    super(component);
  }

  giveOrder(): void {
    super.giveOrder();
    console.log(" + Cola");
  }
}

class Juice extends Decorator {
  constructor(component: ComboMenu) {
    super(component);
  }

  giveOrder(): void {
    super.giveOrder();
    console.log(" + Juice");
  }
}

class Donut extends Decorator {
  constructor(component: ComboMenu) {
    super(component);
  }

  giveOrder(): void {
    super.giveOrder();
    console.log(" + Donut");
  }
}

let firstOrder = new Juice(new CheeseburgerMenu());
firstOrder.giveOrder();

let secondOrder = new Donut(new Cola(new HamburgerMenu()));
secondOrder.giveOrder();

/*
        Задание 5
    Реализуй паттерн Facade в следующем контексте: 
    У вас умный дом. Он напичкан многими девайсами и автоматическими приборами. 
    Когда вы уходите или приходите домой каждый раз повторяете множество одних и тех же действий (вкл/выкл света, кондиционера, музыки и т.д).
    Создайте две запрограммированных поведения системы умного дома - "хозяин дома", "хозяин ушел".
*/

class SmartHouse {
  light: Light;
  conditioner: Conditioner;
  music: Music;

  constructor(
    light: Light = null,
    conditioner: Conditioner = null,
    music: Music = null
  ) {
    this.light = light || new Light();
    this.conditioner = conditioner || new Conditioner();
    this.music = music || new Music();
  }

  ownerCame(): void {
    console.log("Owner at home");

    this.light.TurnOnLight();
    this.conditioner.TurnOnConditioner();
    this.music.TurnOnMusic();
  }

  ownerIsGone(): void {
    console.log("Owner is gone");

    this.light.TurnOffLight();
    this.conditioner.TurnOffConditioner();
    this.music.TurnOffMusic();
  }
}

class Light {
  isOn: boolean;

  TurnOnLight(): void {
    this.isOn = true;
    console.log("Turn on light");
  }
  TurnOffLight(): void {
    this.isOn = false;
    console.log("Turn off light");
  }
}

class Conditioner {
  isOn: boolean;

  TurnOnConditioner(): void {
    this.isOn = true;
    console.log("Turn on conditioner");
  }
  TurnOffConditioner(): void {
    this.isOn = false;
    console.log("Turn off conditioner");
  }
}

class Music {
  isOn: boolean;

  TurnOnMusic(): void {
    this.isOn = true;
    console.log("Turn on music");
  }
  TurnOffMusic(): void {
    this.isOn = false;
    console.log("Turn off music");
  }
}

let facade = new SmartHouse();
facade.ownerCame();
console.log("----------");
facade.ownerIsGone();

/*
        Задание 6
    Реализуй паттерн State в следующем контексте: 
    Допустим, что мобильное приложение перед выливкой в стор, может находится в 4-x состояних: waiting for review, in review, ready for sale, published.
    В каждом состоянии мы можем вызвать методы Publish и Cancel, уоторые будет работать по-разному:
     - из waiting for review Publish отправит приложение на проверку, Cancel вызвать нельзя
     - из in review Publish отправит в ready for sale, если проверка прошла успешно, 
       либо вызовет Cancel, при обнаружении ошибок и вернет в начальное состояние.
    - из ready for sale пользователь может вызвать Cancel и отменить выливку, или Publish и перейти в состояние published.
    - из состояния published нельзя вызывать методы Publish и Cancel
*/

class Context {
  state: State;

  constructor(state: State) {
    this.transitionTo(state);
  }

  public transitionTo(state: State): void {
    console.log(`Context: Transition to ${(<any>state).constructor.name}.`);
    this.state = state;
    this.state.setContext(this);
  }

  publish(): void {
    this.state.publish();
  }

  cancel(): void {
    this.state.cancel();
  }
}

abstract class State {
  contex: Context;

  setContext(contex: Context): void {
    this.contex = contex;
  }

  publish(): void {}

  cancel(): void {}
}

class WaitingForReview extends State {
  publish(): void {
    this.contex.transitionTo(new InReview());
  }

  cancel(): never {
    throw new Error("The cancel function cannot be used in this state!");
  }
}

class InReview extends State {
  publish(): void {
    this.contex.transitionTo(new ReadyForSale());
  }

  cancel(): void {
    this.contex.transitionTo(new WaitingForReview());
  }
}

class ReadyForSale extends State {
  publish(): void {
    this.contex.transitionTo(new Published());
  }

  cancel(): void {
    this.contex.transitionTo(new WaitingForReview());
  }
}

class Published extends State {
  publish(): never {
    throw new Error("The publish function cannot be used in this state!");
  }

  cancel(): never {
    throw new Error("The cancel function cannot be used in this state!");
  }
}

let context = new Context(new WaitingForReview());
context.publish();
context.publish();
context.cancel();

context.publish();
context.publish();
context.publish();
context.cancel();
