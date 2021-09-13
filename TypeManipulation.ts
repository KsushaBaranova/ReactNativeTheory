/*
████████╗██╗░░░██╗██████╗░███████╗
╚══██╔══╝╚██╗░██╔╝██╔══██╗██╔════╝
░░░██║░░░░╚████╔╝░██████╔╝█████╗░░
░░░██║░░░░░╚██╔╝░░██╔═══╝░██╔══╝░░
░░░██║░░░░░░██║░░░██║░░░░░███████╗
░░░╚═╝░░░░░░╚═╝░░░╚═╝░░░░░╚══════╝

███╗░░░███╗░█████╗░███╗░░██╗██╗██████╗░██╗░░░██╗██╗░░░░░░█████╗░████████╗██╗░█████╗░███╗░░██╗
████╗░████║██╔══██╗████╗░██║██║██╔══██╗██║░░░██║██║░░░░░██╔══██╗╚══██╔══╝██║██╔══██╗████╗░██║
██╔████╔██║███████║██╔██╗██║██║██████╔╝██║░░░██║██║░░░░░███████║░░░██║░░░██║██║░░██║██╔██╗██║
██║╚██╔╝██║██╔══██║██║╚████║██║██╔═══╝░██║░░░██║██║░░░░░██╔══██║░░░██║░░░██║██║░░██║██║╚████║
██║░╚═╝░██║██║░░██║██║░╚███║██║██║░░░░░╚██████╔╝███████╗██║░░██║░░░██║░░░██║╚█████╔╝██║░╚███║
╚═╝░░░░░╚═╝╚═╝░░╚═╝╚═╝░░╚══╝╚═╝╚═╝░░░░░░╚═════╝░╚══════╝╚═╝░░╚═╝░░░╚═╝░░░╚═╝░╚════╝░╚═╝░░╚══╝

    В этом разделе ты узнаешь:
- что такое Generics и как с ними работать
- что такое манипуляторы типов и их виды
- keyof и typeof операторы
- как расширять существующие типы

Внимательно изучи соответствующий материал официальной документации и переходи к парктическим заданиям:    
--> https://www.typescriptlang.org/docs/handbook/2/types-from-types.html <--
*/

/*  
        Задание 1 
    ~ Объявить несколько массивов разного типа
    ~ Написать функцию, которая будет возвращать рандомный элемент этого массива используя generic type
*/

let arrayNumber: Array<number> = [1, 5, 25, 87, 3];
let arrayString: Array<string> = ["Ksusha", "Dasha", "Denis", "Oleg", "Misha"];
let arrayBoolean: Array<boolean> = [true, false, false, true, true];
let arrayObject: Array<object> = [
  { name: "Ksusha", age: 23 },
  { name: "Dasha", age: 22 },
  { name: "Misha", age: 25 },
];

function getRandomElement<Type>(array: Array<Type>): Type {
  return array[Math.floor(Math.random() * array.length)];
}

console.log(getRandomElement(arrayNumber));
console.log(getRandomElement(arrayString));
console.log(getRandomElement(arrayBoolean));
console.log(getRandomElement(arrayObject));

/*  
        Задание 2 
    ~ Функция myFilter повторяет функционал стандартной функции filter.
    ~ Раскомментировать код.
    ~ Добавить в функцию аннотацию типов с использованием generic type
    ~ Вывести результат работы функции в консоль
*/

function myFilter<Type>(
  arr: Array<Type>,
  predicate: (value: Type) => boolean
): Array<Type> {
  const result = [];
  for (const elm of arr) {
    if (predicate(elm)) {
      result.push(elm);
    }
  }
  return result;
}

// Пример использования
const res = myFilter([1, 2, 3, 4, 5], (num) => num % 2 === 0);
const res2 = myFilter(["foo", "hoge", "bar"], (str) => str.length >= 4);

console.log(res);
console.log(res2);

/*  
        Задание 3 
    ~ Раскомментировать код.
    ~ Определить тип Price
    ~ Написать пример и вывести в консоль результат использования функции
*/

type Price = { speed: "low" | "medium" | "high" };

function getPrice(price: Price): number {
  switch (price.speed) {
    case "low":
      return 50;
    case "medium":
      return 100;
    case "high":
      return 150;
  }
}

console.log(getPrice({ speed: "high" }));
console.log(getPrice({ speed: "medium" }));
console.log(getPrice({ speed: "low" }));

/*  
        Задание 4
    ~ Раскомментировать код.
    ~ Определить и указать тип функции addAge, которая добавляет к объекту новое свойство age.
    ~ Вывести в консоль результат использования функции
*/

function addAge(obj: object): object {
  const age = 25;
  return {
    ...obj,
    age,
  };
}

let person = {
  name: "Ksusha",
  sex: "female",
  student: true,
};

console.log(addAge(person));

/*  
        Задание 5
    ~ Раскомментировать код.
    ~ Определить и указать тип аргументов функции reducer.
    ~ action.type может быть только трех видов (increment, decrement, reset)
*/

type Action = {
  type: "increment" | "decrement" | "reset";
  amount: number;
  value?: number;
};

const reducer = (state: number, action: Action): number => {
  switch (action.type) {
    case "increment":
      return state + action.amount;
    case "decrement":
      return state - action.amount;
    case "reset":
      return action.value;
  }
};

// Пример использования

reducer(100, {
  type: "increment",
  amount: 10,
}) === 110; //true

/*  
        Задание 6
    ~ Дано два типа Keys и Accessors
    ~ Получить из существующих типов тип Methods ("getName" | "getAddress" | "setName" | "setAddress") применяя Manipulation Types
*/

type Keys = "name" | "address";
type Accessors = "get" | "set";

type Methods = `${Accessors}${Capitalize<Keys>}`;

/*  
        Задание 7
    ~ Дан тип с опциональными свойствами
    ~ На основании типа User создать тип без опциональных свойств
    ~ Использовать модификаторы типа 
*/

type User = {
  id: string;
  name: string;
  age?: number;
  sex?: string;
};

type Concrete<Type> = {
  [Property in keyof Type]-?: Type[Property];
};

type UserWithoutOptional = Concrete<User>;
