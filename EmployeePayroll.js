class EmployeePayrollData {
  id;
  salary;
  gender;
  startDate;

  constructor(...params) {
    this.id = params[0];
    this.name = params[1];
    this.salary = params[2];
    this.gender = params[3];
    this.startDate = params[4];
  }

  getName() {
    return this._name;
  }
  setName(name) {
    let nameRegex = RegExp('^[A-Z]{1}[a-z]{3,}');
    if (nameRegex.test(name)) {
      this.name = name;
    } else throw 'name is incorrect';
  }

  getId() {
    return this._id;
  }
  setId(id) {
    let idRegex = RegExp('^[^0]');
    if (idRegex.test(id)) {
      this.id = id;
    } else throw 'id should not start with 0 or negative number';
  }
  getGender() {
    return this._gender;
  }
  setGender(gender) {
    let genderRegex = RegExp('[M|F]');
    if (genderRegex.test(gender)) {
      this.gender = gender;
    } else throw 'gender should be M or F';
  }

  toString() {
    return (
      'id=' +
      this.id +
      ', name=' +
      this.name +
      ', salary=' +
      this.salary +
      ', gender=' +
      this.gender +
      ', start date:' +
      this.startDate
    );
  }
}

let employeePayrollData = new EmployeePayrollData(
  1,
  'shubham',
  20000,
  'M',
  new Date().toJSON().slice(0, 10)
);
console.log(employeePayrollData.toString());
try {
  employeePayrollData.setName('Kundan');
  employeePayrollData.setId(2);
  employeePayrollData.setGender('M');
} catch (error) {
  console.log(error);
}
console.log(employeePayrollData.toString());
