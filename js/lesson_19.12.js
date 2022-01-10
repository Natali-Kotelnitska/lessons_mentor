// /4. Создайте объект calculator с тремя методами
//read(a, b) - принимает два аргумента и сохраняет их
//как свойства объекта
//sum() возвращает сумму сохраненных значений
//mult() перемножает сохраненные значения и возвращает результат
{
  const calculator = {
    read(a = 0, b = 0) {
      this.value1 = a;
      this.value2 = b;
    },
    sum() {
      return this.value1 + this.value2;
    },
    mult() {
      return this.value1 * this.value2;
    },
    devine() {
      if (this.value1 === 0) {
        return "Invalid values";
      }
      return this.value1 / this.value2;
    },
    pow() {
      return this.value1 ** this.value2;
    },
  };
  //   console.log(calculator.read(3, 2));
  //   console.log(calculator);
  //   console.log(calculator.mult());
  //   console.log(calculator.devine());
  //   console.log(calculator.pow());
}

//5. Напишите функцию updateObject,
// которая принимает объект и возвращает
//новый объект без указанного параметра
//Ожидаемый результат ({a: 1. b: 2}, 'b') => {a: 1}

function updateObject(obj, objValue) {
    const newObj = {};
    newObj = delete obj[objValue];
}
 console.log(updateObject({a: 1, b: 2}, 'b'))