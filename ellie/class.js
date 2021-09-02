'use strict';

class Person {
	//constructor
	constructor(name, age){
		//fields
		this.name = name;
		this.age = age;
	}
	//methods
	speak(){
		console.log(`${this.name}: hello!`); //생성된 객체를 가리키는게 this
	}
}

const ellie = new Person('ellie', 20); //새로운 객체를 생성할때 new

// 2. Getter and Setter
class User {
	constructor(firstName, lastName, age){
		this.firstName = firstName;
		this.lastName = lastName;
		this.age = age;
	}
	get age() {
		return this._age;
	}
	set age(value) {
		this._age = value < 0 ? 0 : value;
	}
}

const user1 = new User('Steve', 'Job', -1);

// 3. Fields (public, private)
class Experiment {
	publicField = 2;
	#privateField = 0;
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField); // undefined

// 4. static properties and methods
class Article {
	static publisher = 'Kunlee'
	constructor(articleNumber){
		this.articleNumber = articleNumber;
	}
	static printPublisher(){
		console.log(Article.publisher);
	}
}
const article1 = new Article(1);
const article2 = new Article(2);
console.log(article1.publisher); // undefined
console.log(Article.publisher); // Kunlee
Article.printPublisher();

// 5. Inheritance
class Shape {
	constructor(width, height, color){
		this.width = width;
		this.height = height;
		this.color = color;
	}
	draw(){
		console.log(`drawing ${this.color} color`);
	}
	getArea(){
		return this.width * this.height;
	}
}

class Rectangle extends Shape {}
class Triangle extends Shape {
	draw(){
		super.draw(); // Override 해도 상속받은 곳에서의 함수를 사용하고 싶을 때
		console.log('wow');
	}
	getArea(){ // Override 하면 이거로 이 클래스에서만 바꿀 수 있음
		return (this.width * this.height) / 2;
	}
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());
const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea());

// 6. Instanceof
console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Triangle);
console.log(triangle instanceof Shape);
console.log(triangle instanceof Object);
