//const Middleware = require("./omar.js");
//hola

class Middleware {
    constructor(target) {
      this.target = target;
      this.middlewares = [];
      this.req = {};
  
  /*
      Para obtener las funciones del objeto Target e invocarlas, es necesario
      crearlas dinámicamente en el Manager importándolas.
      Para ello:
        -   Se obtiene el prototype del objeto target
        -   Se crea la función dinámicamente (que no sea el constructor)
        -   Posteriormente se mapean los valores de entrada al Manager con los parámetros necesarios en cada invocación
  */
  
      const prototype = Object.getPrototypeOf(this.target);
      Object.getOwnPropertyNames(prototype).forEach(fn => {
        if (fn !== "constructor") return this.createFn(fn);
      });
    }

    use(middleware) {
      this.middlewares.push(middleware);
    }

    executeMiddleware(i = 0) {
      if (i < this.middlewares.length) {
        this.middlewares[i].call(this, this.req, () =>
          this.executeMiddleware(i + 1)
        );
      }
    }

    createFn(fn) {
      this[fn] = args => {
        this.req = args;
        this.executeMiddleware();
        return this.target[fn].call(this, this.req);
      };
    }
  }

class Maths {
  add({a, b}) {
    return a + b;
  }
  subtract({a, b}) {
    return a - b;
  }
  multiply({a, b}) {
    return a * b;
  }
}

const calculator = new Maths();
//seteo de clase target en Middleware Manager
const app = new Middleware(calculator);


/* console.log(`Middleware instance:`);
console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(app)));
console.log(Object.getOwnPropertyNames(app));
console.log(`Middleware class`);
console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(Middleware)));
console.log(Object.getOwnPropertyNames(Middleware));
console.log(`Middlewareinstance.constructor`);
console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(app.constructor)));
console.log(Object.getOwnPropertyNames(app.constructor));
console.log(`Maths Class: `);
console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(Maths)));
console.log(Object.getOwnPropertyNames(Maths));
console.log(`Maths instance calculator`);
console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(calculator)));
console.log(Object.getOwnPropertyNames(calculator));
console.log(`app.use`);
console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(app.use)));
console.log(Object.getOwnPropertyNames(app.use));
const func = function() {};
console.log(`Empty function i just declared:`);
console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(func)));
console.log(Object.getOwnPropertyNames(func)); */

//registro de middlewares en el Manager: el primer operando será multiplicado por 2 (pasamos function de middleware)
app.use( (req, next) => {
  req.a = req.a * 2;
  next();
});

//el 2º operando será multiplicado por 3
app.use( (req, next) => {
  req.b = req.b * 3;
  next();
});

//uso de clase target (OJO que se invoca el método de la clase target llamando al Manager -que no tiene explícitamente declarado el método-)
console.log(app.add({a: 5, b: 10}));
console.log(app.subtract({a: 10, b: 6}));
console.log(app.multiply({a: 2, b: 3}));