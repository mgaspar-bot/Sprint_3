const Middleware = require('./middleware');

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

app.add({a: 5, b: 6});