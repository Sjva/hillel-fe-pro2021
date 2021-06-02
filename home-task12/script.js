
function getAvgMark() {
    return this.marks.reduce((a, b) => a + b) / this.marks.length;
}
function getMaxMark() {
    return Math.max.apply(null, this.marks);
}
function getMinMark() {
    return Math.min.apply(null, this.marks)
}
function getTotal() {
    return this.marks.reduce((a, b) => a + b)
}
function getInfo() {
    return `Student name ${this.name} study in ${this.faculty} and have ${this.getTotal()} points`
}

function Student(name, faculty, marks) {
   this.name = name;
   this.faculty = faculty;
   this.marks = marks;
   this.getInfo = getInfo;
   this.getTotal = getTotal;
   this.getMinMark = getMinMark;
   this.getMaxMark = getMaxMark;
   this.getAvgMark = getAvgMark;
}
const student = new Student("Viacheslav", "Сonstruction and architecture", [5,4,3,2,4,5] );

// Методы
console.log(student.getAvgMark()); // средняя оценка студента
console.log(student.getMaxMark()); // максимальная оценка
console.log(student.getMinMark()); // минимальная оценка
console.log(student.getTotal()); // сумма оценок
console.log(student.getInfo()); // информация о студенте в виде name + faculty + total
