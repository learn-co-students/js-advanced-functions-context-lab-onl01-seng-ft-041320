let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

function createEmployeeRecord(array) {
  return {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

function createEmployeeRecords(arrOfArrays){
  return arrOfArrays.map(empInfo => createEmployeeRecord(empInfo))
}

function createTimeInEvent(dateTime){
  let [date, hour] = dateTime.split(' ')
  this.timeInEvents.push({
    type: "TimeIn",
    hour: parseInt(hour),
    date: date
  })
  return this
}

function createTimeOutEvent(dateTime){
  let [date, hour] = dateTime.split(' ')
  this.timeOutEvents.push({
    type: "TimeOut",
    hour: parseInt(hour),
    date: date
  })
  return this
}

function hoursWorkedOnDate(date){
  let timeIn = this.timeInEvents.find(timeIn => timeIn.date === date)
  let timeOut = this.timeOutEvents.find(timeOut => timeOut.date === date)
  return (timeOut.hour - timeIn.hour)/100
}

function wagesEarnedOnDate(date){
  let hours = hoursWorkedOnDate.call(this, date)
  return hours * this.payPerHour
}
 
function findEmployeeByFirstName(srcArray, firstName){
  return srcArray.find(employee => employee.firstName === firstName)
}

function calculatePayroll(arrOfEmployees){
  return arrOfEmployees.reduce(function(payroll, employee){
    return payroll + allWagesFor.call(employee)
  }, 0)
}