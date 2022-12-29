class First {
    hello() {
        console.log('First: Привет я метод родителя!');
    }
}

class Second extends First {
    hello() {
        super.hello();
        console.log('Second: А я наследуемый метод!');
    }
}

const second = new Second();
second.hello();

