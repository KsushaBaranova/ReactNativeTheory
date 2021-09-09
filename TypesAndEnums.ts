/*

████████╗██╗░░░██╗██████╗░███████╗░██████╗  ░█████╗░███╗░░██╗██████╗░  ███████╗███╗░░██╗██╗░░░██╗███╗░░░███╗░██████╗
╚══██╔══╝╚██╗░██╔╝██╔══██╗██╔════╝██╔════╝  ██╔══██╗████╗░██║██╔══██╗  ██╔════╝████╗░██║██║░░░██║████╗░████║██╔════╝
░░░██║░░░░╚████╔╝░██████╔╝█████╗░░╚█████╗░  ███████║██╔██╗██║██║░░██║  █████╗░░██╔██╗██║██║░░░██║██╔████╔██║╚█████╗░
░░░██║░░░░░╚██╔╝░░██╔═══╝░██╔══╝░░░╚═══██╗  ██╔══██║██║╚████║██║░░██║  ██╔══╝░░██║╚████║██║░░░██║██║╚██╔╝██║░╚═══██╗
░░░██║░░░░░░██║░░░██║░░░░░███████╗██████╔╝  ██║░░██║██║░╚███║██████╔╝  ███████╗██║░╚███║╚██████╔╝██║░╚═╝░██║██████╔╝
░░░╚═╝░░░░░░╚═╝░░░╚═╝░░░░░╚══════╝╚═════╝░  ╚═╝░░╚═╝╚═╝░░╚══╝╚═════╝░  ╚══════╝╚═╝░░╚══╝░╚═════╝░╚═╝░░░░░╚═╝╚═════╝░

    В этом разделе ты узнаешь:
- что такое константы и переменные
- почему TypeScript является строго типизированным языком
- какие типы данных имеются в TypeScript и как с ними работать
- как проверить тип переменной
- что такое Enums и Tuple

    Внимательно изучи соответствующий материал официальной документации и переходи к парктическим заданиям:    
--> https://www.typescriptlang.org/docs/handbook/basic-types.html <--
--> https://www.typescriptlang.org/docs/handbook/advanced-types.html#type-aliases <--
*/

/*  
        Задание 1 
    ~ Объявить переменные ВСЕХ возможных типов и присвоить им значения.
    ~ Присвоить ранее объявленной переменной значение другого типа (Что будет в этом случае? Будет ли ошибка компиляции?)
    ~ Вывести в консоль значение каждой переменной с указанием ее имени (формат сообщения '<name> = <value>')
*/

let booleanType: boolean = true;
let numberType: number = 56;
let stringType: string = "hi";
let arrayNumber: number[] = [5, 8, 12, 45];
let tuple: [string, number] = ["ksusha", 22];
enum Color {
  Black,
  Red,
  Yellow,
  Green,
}
let unknownType: unknown = "hello";
let anyType: any = 55;
let voidType: void = null;
let undefinedType: undefined = undefined;
let nullType: null = null;
let person = {
  name: "Oleg",
  age: 25,
};

function printEnum(en): string {
  let str: string = "";
  for (let key in en) {
    str += en[key] + " ";
  }
  return str;
}

function printObject(obj): string {
  let str: string = "";
  for (let key in obj) {
    str += key + ":" + obj[key] + "\n";
  }
  return str;
}

console.log(`booleanType = ${booleanType}
            numberType = ${numberType}
            stringType = ${stringType}
            arrayNumber = ${arrayNumber}
            tuple = ${tuple}
            unknownType = ${unknownType}
            anyType = ${anyType}
            voidType = ${voidType}
            undefinedType = ${undefinedType}
            nullType = ${nullType}
            Color = ${printEnum(Color)}
            person = ${printObject(person)}
`);

/*  
        Задание 2 
    ~ Написать функцию принимающую в качестве аргументов два числа, которая возвращает их сумму
    ~ Объявить три константы a = 5, b = 7, eight = '8'  
    ~ Написать проверку типов аргументов функции и в случае передачи константы eight выводить ошибку "Incorrect input!"
*/

const a: number = 5;
const b: number = 7;
const eight: string = "8";

function sumOfNumbers(firstNumber, secondNumber): number {
  if (typeof firstNumber !== "number" || typeof secondNumber !== "number") {
    console.log("Incorrect input!");
  } else {
    return firstNumber + secondNumber;
  }
}

console.log(sumOfNumbers(a, b));
console.log(sumOfNumbers(a, eight));

/*  
        Задание 3 
    ~ Объявить переменную A типа any и задать ей значение 'example'
    ~ Написать функцию, которая проверит, что А не является чем-то из следующего списка null, undefined, NaN, '', 0, false 
*/

let A: any = "example";

function isTrue(arg: any): boolean {
  if (!arg) {
    return false;
  } else {
    return true;
  }
}

console.log(isTrue(A));

/*  
        Задание 4 
    ~ Написать функцию combine с аргументами, которые могут быть как типа number так и string. 
    ~ Третим аргументом передаем параметр со значениями 'as-number' или 'as-string'.
    ~ При значении 'as-number' выводить сумму чисел, при 'as-string' объединение строк. 
*/

function combine(
  firstArg: string | number,
  secondArg: number | string,
  thirdArg: string
): string | number {
  if (
    thirdArg == "as-number" &&
    typeof firstArg == "number" &&
    typeof secondArg == "number"
  ) {
    return firstArg + secondArg;
  } else if (thirdArg == "as-string") {
    return firstArg + "" + secondArg;
  } else {
    return "Incorrect input!";
  }
}

console.log(combine(4, "hi", "as-string"));
console.log(combine(4, 5, "as-number"));
console.log(combine(4, 5, "as-sd"));

/*  
        Задание 5 
    ~ Объявить переменную A типа any и задать ей значение 'example'. Объявить константу типа Tuple с кодом ошибки и ее текстом
    ~ Написать функцию, которая проверит, что А не является чем-то из следующего списка null, undefined, NaN, '', 0, false
    ~ Если условие не выполняется вывести код и текст ошибки консоль
    ~ Проверить работу функции присвоив переменной А значение undefined
*/

let B: any = "example";
const error: [number, string] = [123, "Value is falsy!"];

function isFalsy(arg): void {
  if (!arg) {
    console.log(`Error: ${error[0]} - ${error[1]}`);
  } else {
    return;
  }
}

console.log(isFalsy(B));
B = "";
console.log(isFalsy(B));

/*  
        Задание 6 
    ~ Создать объект person cо свойствами: имя, возраст, пол, роль (Администратор, Автор, Модератор). Например (Jon, 19 years, men, Author).
    ~ Для свойства Роль использовать enum.
    ~ Вывести в консоль название свойства и его значение. Каждое свойство на новой строке.
*/

const enum Role {
  Admin,
  Author,
  Moderator,
}

let personInfo = {
  name: "Jon",
  age: "12 year",
  gender: "men",
  role: Role.Author,
};

function printInfo(obj: Object): void {
  for (let key in obj) {
    console.log(`${key} - ${obj[key]}`);
  }
}
printInfo(personInfo);

/*  
        Задание 7 
    ~ Перечислению (Enum) Роль с предыдущего задания присвоить текстовые значения.
    ~ Создать несколько объектов подобных объекту person с Задания 6 c разными ролями.
    ~ Написать функцию которая принимает массив объектов и выводит в консоль сообщения следующего вида "My name is {name}. I am {role}" для каждого объекта.

*/

const enum RoleString {
  Admin = "Admin",
  Author = "Author",
  Moderator = "Moderator",
}

let person1 = {
  name: "Jon",
  age: "12 year",
  gender: "men",
  role: RoleString.Author,
};

let person2 = {
  name: "Ksusha",
  age: "16 year",
  gender: "female",
  role: RoleString.Moderator,
};

let person3 = {
  name: "Nastya",
  age: "30 year",
  gender: "female",
  role: RoleString.Admin,
};

let listOfPerson = [person1, person2, person3];

function printNameAndRole(persons): void {
  for (let i = 0; i < persons.length; i++) {
    console.log(`My name is ${persons[i].name}. I am ${persons[i].role}`);
  }
}
printNameAndRole(listOfPerson);

/*  
        Задание 8
    ~ Используйте функцию с Задания 2 для сложения двух чисел. 
    ~ Написать функцию addAndHandle, которая будет возвращать результат вычисления в качестве Callback.
    ~ Явно указать тип возвращаемого значения для функций
    ~ Итоговый вызов функции должен иметь следующий вид:
        addAndHandle(10, 20, (result) => {
            console.log(result)
        })

*/

function addAndHandle(
  firstNumber: number,
  secondNumber: number,
  callback: Function
) {
  return callback(sumOfNumbers(firstNumber, secondNumber));
}

addAndHandle(10, 20, (result) => {
  console.log(result);
});

/*  
        Задание 9
    ~ Написать функцию, с возвращаемым значением типа never
*/

function infRec(): never {
  return infRec();
}

/*  
        Задание 10
    ~ Создать вычисляемое перечисление с городами (Харьков, Киев, Львов, Одесса) и их почтовыми индексами.
    ~ Написать функцию. которая возвращает индекс города.
    ~ Вывести в консоль города с индексами. 
*/

enum Cities {
  Kharkiv = "61000-62480",
  Kiev = "01001-06999",
  Lviv = "79000",
  Odessa = "65000-65480",
}

function getIndexCities(city: string): string {
  return Cities[city];
}

for (let name in Cities) {
  console.log(`${name} - ${getIndexCities(name)}`);
}

/*
        Задание 11
    ~ Создай 5 строк с названием стран
    ~ Если в названии страны встречается буква А, выведи ее нзавание в консоль
*/

let ukr: string = "Ukraine";
let pak: string = "Pakistan";
let deu: string = "America";
let egy: string = "Egypt";
let alb: string = "Albania";

let list: string[] = [ukr, pak, deu, egy, alb];

for (let i = 0; i < list.length; i++) {
  if (list[i].indexOf("A") > -1) {
    console.log(list[i]);
  }
}

/*  
        Задание 12
    ~ Объявить несколько массивов типа number и заполнить их разным количеством элементов.
    ~ Объявить Tuple в который можно передать любой из объявленных массивов и текстовое значение.
    ~ Создать функцию в качестве аргумента которой созданный Tuple. Вывести в консоль текстовое значение из Tuple и количество элементов массива цифр
*/

let firstArray: number[] = [5, 4, 8, 9, 6];
let secondArray: number[] = [10, 5, 9];
let thirdArray: number[] = [9, 75, 21, 1, 1, 54, 5];

function printMessage(tuple): void {
  console.log(`${tuple[1]} - ${tuple[0].length}`);
}

let tuple1: [number[], string] = [thirdArray, "Array №3"];
printMessage(tuple1);
let tuple2: [number[], string] = [firstArray, "Массив №1"];
printMessage(tuple2);

/*  
        Задание 13
    ~ Написать метод without, который будет принимать объект со свойствами разных типов и тип.
    ~ Метод without должен вернуть копию объекта, но уже без свойств переданного типа .
*/

let personInfoObj = {
  name: "Den",
  age: 23,
  married: false,
};

function without(obj: object, type: string): object {
  let objCopy = {};
  for (let key in obj) {
    if (typeof obj[key] == type) continue;
    objCopy[key] = obj[key];
  }
  return objCopy;
}

let copyPerson = without(personInfoObj, "number");

/*  
        Задание 14
    ~ Написать функцию isEmpty, которая проверяет пустой ли объект, независимо от его вложенности. Должен венуть true для объектов { a: { b: undefined }, { a: { b: [] } }, {}, { a: { b: [ { c: [] } ] } }
*/

let firstObject = { a: { b: undefined } };
let secondObject = { a: { b: [] } };
let thirdObject = {};
let fourthObject = { a: { b: [{ c: [] }] } };

function isEmpty(obj: object): boolean {
  for (let key in obj) {
    if (typeof obj[key] === "undefined") {
      return true;
    }
    if (typeof obj[key] === "object") {
      return isEmpty(obj[key]);
    }
    return false;
  }
  return true;
}

console.log(isEmpty(firstObject));
