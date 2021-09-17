/*


██╗███╗░░██╗████████╗███████╗██████╗░███████╗░█████╗░░█████╗░███████╗░██████╗  
██║████╗░██║╚══██╔══╝██╔════╝██╔══██╗██╔════╝██╔══██╗██╔══██╗██╔════╝██╔════╝  
██║██╔██╗██║░░░██║░░░█████╗░░██████╔╝█████╗░░███████║██║░░╚═╝█████╗░░╚█████╗░  
██║██║╚████║░░░██║░░░██╔══╝░░██╔══██╗██╔══╝░░██╔══██║██║░░██╗██╔══╝░░░╚═══██╗  
██║██║░╚███║░░░██║░░░███████╗██║░░██║██║░░░░░██║░░██║╚█████╔╝███████╗██████╔╝  
╚═╝╚═╝░░╚══╝░░░╚═╝░░░╚══════╝╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░╚══════╝╚═════╝░  

                    ░█████╗░███╗░░██╗██████╗░  
                    ██╔══██╗████╗░██║██╔══██╗  
                    ███████║██╔██╗██║██║░░██║  
                    ██╔══██║██║╚████║██║░░██║  
                    ██║░░██║██║░╚███║██████╔╝  
                    ╚═╝░░╚═╝╚═╝░░╚══╝╚═════╝░  

        ░█████╗░██╗░░░░░░█████╗░░██████╗░██████╗███████╗░██████╗
        ██╔══██╗██║░░░░░██╔══██╗██╔════╝██╔════╝██╔════╝██╔════╝
        ██║░░╚═╝██║░░░░░███████║╚█████╗░╚█████╗░█████╗░░╚█████╗░
        ██║░░██╗██║░░░░░██╔══██║░╚═══██╗░╚═══██╗██╔══╝░░░╚═══██╗
        ╚█████╔╝███████╗██║░░██║██████╔╝██████╔╝███████╗██████╔╝
        ░╚════╝░╚══════╝╚═╝░░╚═╝╚═════╝░╚═════╝░╚══════╝╚═════╝░

    В этом разделе ты узнаешь:
- что такое Interfaces
- основные принципы работы с Interfaces
- о Optional и Readonly свойствах Interface
- как расширить существующий Interfaces
- что такое Utility Types и как они упрощают базовые преобразования типов
- что такое классы
- что такое свойства и методы
- что такое наследование классов

    Внимательно изучи соответствующий материал официальной документации и переходи к парктическим заданиям:    
--> https://www.typescriptlang.org/docs/handbook/interfaces.html#introduction <--
--> https://www.typescriptlang.org/docs/handbook/utility-types.html <--
--> https://www.typescriptlang.org/docs/handbook/2/classes.html <--
*/

/*
        Задание 1
    ~ Раскомментировать строки кода ниже
    ~ Учитывая данные определить интерфейс User
    ~ Использовать интерфейс User
*/

interface User {
    name: string;
    age: number;
    occupation: string;
}

export const users: Array<User> = [
  {
    name: "Max Mustermann",
    age: 25,
    occupation: "Chimney sweep",
  },
  {
    name: "Kate Müller",
    age: 23,
    occupation: "Astronaut",
  },
];

export function logPerson(user: User): void {
  console.log(` - ${user.name}, ${user.age}`);
}

console.log("Users:");
users.forEach(logPerson);

/*
        Задание 2
    ~ Используем код Задания 1 (копируем, комментируем и вставляем ниже)
    ~ Добавить в массив User объекты { name: 'Jane Doe', age: 32, role: 'Administrator'},  { name: 'Bruce Willis', age: 64, role: 'World saver' }
    ~ Объявить интерфейс Admin, который бы соответствовал новым объектам
    ~ Внести изменения в код, что бы не было ошибок
*/

interface User {
  name: string;
  age: number;
  occupation?: string;
}

interface Admin extends User {
  role?: string;
}

export const users: Array<Admin> = [
  {
    name: "Max Mustermann",
    age: 25,
    occupation: "Chimney sweep",
  },
  {
    name: "Kate Müller",
    age: 23,
    occupation: "Astronaut",
  },
  {
    name: "Jane Doe",
    age: 32,
    role: "Administrator",
  },
  {
    name: "Bruce Willis",
    age: 64,
    role: "World saver",
  },
];

export function logPerson(user: Admin): void {
  console.log(` - ${user.name}, ${user.age}`);
}

console.log("Users:");
users.forEach(logPerson);

/*
        Задание 3
    ~ Используем код Задания 2 (копируем, комментируем и вставляем ниже)
    ~ Изменить функцию logPerson таким образом, что бы все свойства объекта были выведены в консоль  (включая role и occupation)
*/

interface User {
  name: string;
  age: number;
  occupation?: string;
}

interface Admin extends User {
  role?: string;
}

export const users: Array<Admin> = [
  {
    name: "Max Mustermann",
    age: 25,
    occupation: "Chimney sweep",
  },
  {
    name: "Kate Müller",
    age: 23,
    occupation: "Astronaut",
  },
  {
    name: "Jane Doe",
    age: 32,
    role: "Administrator",
  },
  {
    name: "Bruce Willis",
    age: 64,
    role: "World saver",
  },
];

export function logPerson(user: Admin): void {
  console.log(` - ${user.name}, ${user.age}, ${user.occupation || user.role}`);
}

console.log("Users:");
users.forEach(logPerson);

/*
        Задание 4
    ~ Используем код Задания 3 (копируем, комментируем и вставляем ниже)
    ~ Для определения типа аргумента person в функции logPerson используем следующие функции

        export function isAdmin(person: Person) {
            return person.type === 'admin';
        }

        export function isUser(person: Person) {
            return person.type === 'user';
        }

    ~ Как помочь TS понять какой фактический тип передается в эти функции, что бы мы могли без ошибок использовать в logPerson следующее выражение
     if (isAdmin(person)) {
        additionalInformation = person.role;
     }
*/

interface User {
  name: string;
  age: number;
  occupation?: string;
}

interface Admin extends User {
  role?: string;
}

interface Person extends Admin {
  type?: string;
}

export function isAdmin(person: Person): boolean {
  return person.type === "admin";
}

export function isUser(person: Person): boolean {
  return person.type === "user";
}

export const users: Array<Person> = [
  {
    name: "Max Mustermann",
    age: 25,
    occupation: "Chimney sweep",
  },
  {
    name: "Kate Müller",
    age: 23,
    occupation: "Astronaut",
  },
  {
    name: "Jane Doe",
    age: 32,
    role: "Administrator",
  },
  {
    name: "Bruce Willis",
    age: 64,
    role: "World saver",
  },
];

users.forEach((user) =>
  user.role === "Administrator" ? (user.type = "admin") : (user.type = "user")
);

export function logPerson(person: Person): void {
  let additionalInformation: string;

  if (isAdmin(person)) {
    additionalInformation = person.role;
  }
  if (isUser(person)) {
    additionalInformation = person.occupation;
  }

  console.log(` - ${person.name}, ${person.age}, ${additionalInformation}`);
}

console.log("Users:");
users.forEach(logPerson);

/*
        Задание 5
    ~ Используем код Задания 4 (копируем, комментируем и вставляем ниже)
    ~ Необходимо добавить свойство type в существующие интерфейсы и соответствующие объекты (типов будет три user, admin, superuser)
    ~ Определить интерфейс SuperUser, который содержит все поля от User и Admin за исключением поля type (используй Utility Types). Поле type указать явно и задать соответсвующее значение.
    ~ Написать функцию isSuperUser
    ~ Вывести в консоль отдельные списки Users, Admins, Super Users
*/

interface User {
  name: string;
  age: number;
  occupation?: string;
  type?: string;
}

interface Admin extends User {
  role?: string;
}

interface SuperUser extends Omit<Admin, "type"> {
  type?: string;
}

export function isSuperUser(person: SuperUser): boolean {
  return person.type === "superuser";
}

export function isAdmin(person: Admin): boolean {
  return person.type === "admin";
}

export function isUser(person: User): boolean {
  return person.type === "user";
}

export const users: Array<SuperUser> | Array<Admin> = [
  {
    name: "Max Mustermann",
    age: 25,
    occupation: "Chimney sweep",
    type: "superuser",
  },
  {
    name: "Kate Müller",
    age: 23,
    occupation: "Astronaut",
  },
  {
    name: "Jane Doe",
    age: 32,
    role: "Administrator",
  },
  {
    name: "Bruce Willis",
    age: 64,
    role: "World saver",
  },
];

users.forEach((user) => {
  if (user.type) return;
  if (user.role === "Administrator") {
    user.type = "admin";
  } else {
    user.type = "user";
  }
});

export function createList(persons: Array<Admin> | Array<SuperUser>): object {
  let arrayUser: Array<object> = persons.filter((person) => isUser(person));
  let arrayAdmin: Array<object> = persons.filter((person) => isAdmin(person));
  let arraySuperUser: Array<object> = persons.filter((person) =>
    isSuperUser(person)
  );

  return {
    Users: arrayUser,
    Admins: arrayAdmin,
    SuperUsers: arraySuperUser,
  };
}

function printList(obj: object): void {
  for (let key in obj) {
    console.log(`${key}:`);
    obj[key].forEach((person) =>
      console.log(
        `${person.name}, ${person.age}, ${person.occupation || person.role}`
      )
    );
  }
}

let listPersons = createList(users);
printList(listPersons);

/*
        Задание 6
    ~ Объяви класс Weather, который будет иметь два свойства windSpeed и chanceOfRain числового типа.
    ~ У класса должен быть обязательный инициализатор, который принимает значения скорости ветра (windSpeed) и шанс дождя (chanceOfRain)
    ~ Добавь в класс функцию isDayForWalk. Если скорость ветра (windSpeed) меньше 5 метров и шанс дождя (chanceOfRain) меньше 30 процентов, то функция должна вернуть true,  иначе  - false.
    ~ Создай экземпляр класса и выведи в консоль удачный ли сегодня день для прогулок;)
*/

class Weather {
  windSpeed: number;
  chanceOfRain: number;

  constructor(windSpeed = 0, chanceOfRain = 0) {
    this.windSpeed = windSpeed;
    this.chanceOfRain = chanceOfRain;
  }

  isDayForWalk(): boolean {
    if (this.windSpeed < 5 && this.chanceOfRain < 30) {
      return true;
    }
    return false;
  }
}

const weather = new Weather(4, 25);
console.log(weather.isDayForWalk());

const weather2 = new Weather(3, 45);
console.log(weather2.isDayForWalk());

/*
        Задание 7
    ~ Объяви класс Point2D, который будет иметь два свойства x и y числового типа. Свойства должны быть инициализированными 0 по умолчанию.
    ~ Добавь в класс Point2D, метод  reset, который будет устанавливать координаты x и y в 0.
    ~ Добавь инициализатор в класс Point2D, который в качестве параметров будет принимать значения для координат x и y.
    ~ Объяви класс Point3D, который будет дочерним классом по отношению к классу Point2D. Добавь в него свойство z, которое будет проинициализировано по умолчанию нулем
    ~ Добавь инициализатор, который будет в качестве параметров принимать значения для координат x, y и z
    ~ Cоздай экземпляр класса Point3D с именем point3D
    ~ Сделай так, чтобы при вызове метода reset, также сбрасывалась в ноль и координата z
    ~ Используй механизм переопределения методов!
*/

class Point2D {
  x = 0;
  y = 0;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  reset(): void {
    this.x = 0;
    this.y = 0;
  }
}

class Point3D extends Point2D {
  z = 0;

  constructor(x: number, y: number, z: number) {
    super(x, y);
    this.z = z;
  }

  reset(): void {
    super.reset();
    this.z = 0;
  }
}

let point3D = new Point3D(5, 7, 9);
console.log(point3D);
point3D.reset();
console.log(point3D);

/*
        Задание 8
    ~ Реализуй иерархию классов, представленной на Рисунке 1
*/

class Telephone {
  nameUser: string;

  constructor(nameUser: string){
    this.nameUser = nameUser;
  }

  makeCall():void{
    console.log(`${this.nameUser} is make call`);
  };

  hangUp():void{
    console.log(`${this.nameUser} is hang up`);
  };
}

class Landline extends Telephone {}

class Rotary extends Landline {
    constructor(nameUser:string) {
      super(nameUser);
    }

    rotaryInput():void{
      console.log('rotary input');
    }
}

class PushButton extends Landline{
  constructor(nameUser:string) {
    super(nameUser);
  }

    buttonInput():void{
      console.log('button input');
    }
}

class Cellular extends Telephone {
  constructor(nameUser:string) {
    super(nameUser);
  }

    sendSMS():void{
      console.log(`${this.nameUser} is send SMS`);
    }
}

class Smart extends Cellular {
  constructor(nameUser:string) {
    super(nameUser);
  }

    touchInput():void{
      console.log('touch input');
    }
    accessInternet():void{
      console.log('access internet');
    }
}

class NonSmart extends Cellular {
  constructor(nameUser:string) {
    super(nameUser);
  }

    buttonInput():void{
      console.log('button input');
    }
}

class Android extends Smart {
  constructor(nameUser:string) {
    super(nameUser);
  }

    androidOS():void{
      console.log('androidOS');
    }
}

class IPhone extends Smart {
  constructor(nameUser:string) {
    super(nameUser);
  }

    iOS():void{
      console.log('iOS');
    }
}

class Windows extends Smart {
  constructor(nameUser:string) {
    super(nameUser);
  }
  
    windowsOS():void{
      console.log('windowsOS');
    }
}

let newUser = new IPhone('Ksusha');
newUser.makeCall();
newUser.iOS();
newUser.sendSMS();

let newUser1 = new NonSmart('Dasha');
newUser1.buttonInput();