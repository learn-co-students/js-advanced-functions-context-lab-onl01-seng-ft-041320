/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

function createEmployeeRecord(employeeInfo) {
  return {
    firstName: employeeInfo[0],
    familyName: employeeInfo[1],
    title: employeeInfo[2],
    payPerHour: employeeInfo[3],
    timeInEvents: [],
    timeOutEvents: []
  }
}

function createEmployeeRecords(employeesProfiles) {
  return employeesProfiles.map(createEmployeeRecord)
}

function createTimeInEvent(timeIn) {
  const date = timeIn.split(" ")[0]
  const hour = parseInt(timeIn.split(" ")[1])
  const event = {type: "TimeIn", date: date, hour: hour}
  this.timeInEvents.push(event)
  return this
}

function createTimeOutEvent(timeOut) {
  const date = timeOut.split(" ")[0]
  const hour = parseInt(timeOut.split(" ")[1])
  const event = {type: "TimeOut", date: date, hour: hour}
  this.timeOutEvents.push(event)
  return this
}

function hoursWorkedOnDate(workDay) {
  let startShift = this.timeInEvents.find(e => e.date === workDay)
  let endShift = this.timeOutEvents.find(e => e.date === workDay)
  return (endShift.hour - startShift.hour)/100
}

function wagesEarnedOnDate(workDay) {
  return hoursWorkedOnDate.call(this, workDay) * this.payPerHour
}

function findEmployeeByFirstName(srcArray, firstName) {
  return srcArray.find(e => e.firstName === firstName)
}

function calculatePayroll(srcArray,) {
  return srcArray.reduce(function(memo, employee) {
        return memo + allWagesFor.call(employee)
    }, 0)
  }
