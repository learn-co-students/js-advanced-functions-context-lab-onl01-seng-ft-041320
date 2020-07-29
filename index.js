/* Your Code Here */

let createEmployeeRecord = function (employee) {
    return {
        firstName: employee[0],
        familyName: employee[1],
        title: employee[2],
        payPerHour: employee[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

let createEmployeeRecords = function (employees) {
    return employees.map(function (employee) {
        return createEmployeeRecord(employee)
    })
}

let createTimeInEvent = function (date) {
    let dateTimeSplitter = date.split(' ')
    this.timeInEvents.push({
        type: 'TimeIn',
        hour: parseInt(dateTimeSplitter[1]),
        date: dateTimeSplitter[0]
    })
    return this
}

let createTimeOutEvent = function (date) {
    let dateTimeSplitter = date.split(' ')
    this.timeOutEvents.push({
        type: 'TimeOut',
        hour: parseInt(dateTimeSplitter[1]),
        date: dateTimeSplitter[0]
    })
    return this
}

let hoursWorkedOnDate = function (date) {
    let inD = this.timeInEvents.find(function (e) {
        return e.date === date
    })
    let outD = this.timeOutEvents.find(function (e) {
        return e.date === date
    })
    return (outD.hour - inD.hour) / 100
}

// skipping the rest for now


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