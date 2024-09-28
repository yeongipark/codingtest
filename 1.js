class Department {
  constructor(department) {
    this.department = department;
    this.courses = [];
  }

  add_course(name, grade) {
    const course = new Course(name, grade);
    this.courses.push(course);
    return course;
  }

  toString() {
    return `학과 이름 = ${this.department}, 개설 과목 = [${this.courses.map(
      (course) => `(${course.name}, ${course.grade})`
    )}]`;
  }
}

class Course {
  constructor(name, grade) {
    this.name = name;
    this.grade = grade;
  }
}

class Student {
  constructor(name, studentNum) {
    this.name = name;
    this.studentNum = studentNum;
    this.courses = [];
  }

  enroll(course) {
    this.courses.push(course);
  }

  toString() {
    return `학생 이름 = ${this.name}, 학번 = ${
      this.studentNum
    }, 수강 과목 = [${this.courses.map(
      (course) => `(${course.name}, ${course.grade})`
    )}]`;
  }
}

const dept = new Department("컴퓨터공학과");
const c1 = dept.add_course("대학생활의설계", 1);
const c2 = dept.add_course("데이터베이스", 3);
const c3 = dept.add_course("웹프로그래밍", 3);
console.log(String(dept));
const st = new Student("홍길동", 2020001);
st.enroll(c2);
st.enroll(c3);
console.log(String(st));
