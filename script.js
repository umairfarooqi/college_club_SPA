class Student {
    #id;
    #name;
    #email;
    #course;

    static studentList = [];

    constructor(id, name, email, course) {
        this.#id = id;
        this.#name = name;
        this.#email = email;
        this.#course = course;
    }

    static addStudent(id, name, email, course) {
        let student = new Student(id, name, email, course);
        Student.studentList.push(student);
        alert("Student added succefully");
    }

    static viewAllStudent() {
        if (Student.studentList.length === 0) {
            alert("No Student Found!")
        } else {
            for (let i = 0; i < Student.studentList.length; i++) {
                let student = Student.studentList[i];
                console.log("ID: " + student.#id);
            console.log("Name: " + student.#name);
            console.log("Email: " + student.#email);
            console.log("Course: " + student.#course);
            }
        };
    }

    updateStudent(newId, newName, newEmail, newCourse){
        this.#id = newId;
        this.#name = newName;
        this.#email = newEmail;
        this.#course = newCourse;
        alert("Student updated succefully");
    }
}
Student.addStudent("01", "umair", "umair@gmail.com", "programing");
Student.viewAllStudent();
