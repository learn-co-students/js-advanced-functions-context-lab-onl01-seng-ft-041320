function createEmployeeRecord(arr) {
    return {
        firstName: arr[0],
        familyName: arr[1],
        title: arr[2],
        payPerHour: arr[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

function createEmployeeRecords(arr) {
    return arr.map(e => createEmployeeRecord(e));
}

let createTimeInEvent = function (date) {
    let splitDate = date.split(' ');
    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(splitDate[1]),
        date: splitDate[0]
    });
    return this
}

let createTimeOutEvent = function (date) {
    let splitDate = date.split(' ');
    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(splitDate[1]),
        date: splitDate[0]
    });
    return this
}

let hoursWorkedOnDate = function (date) {
    let start = this.timeInEvents.find(obj => obj.date === date).hour;
    let end = this.timeOutEvents.find(obj => obj.date === date).hour;
    return (end - start)/100;
}

let wagesEarnedOnDate = function (date) {
    return hoursWorkedOnDate.call(this, date) * this.payPerHour
}

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

let findEmployeeByFirstName = function (employees, name) {
    return employees.find(obj => obj.firstName === name);
}

let calculatePayroll = function (employees) {
    return employees.reduce(function(total, e) {
        return total + allWagesFor.call(e);
    }, 0);
}