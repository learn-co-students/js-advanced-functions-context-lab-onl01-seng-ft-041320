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

let createEmployeeRecord = function(arr) {
    return {
        "firstName": arr[0],
        "familyName": arr[1],
        "title": arr[2],
        "payPerHour": arr[3],
        "timeInEvents": [],
        "timeOutEvents": []
    }
}

let createEmployeeRecords = function(arr) {
    return arr.map(function(e) {
        return createEmployeeRecord(e)
    })
}

let createTimeInEvent = function(time) {
    let timeStamp = {
        "type": "TimeIn",
        "hour": parseInt(time.split(" ")[1]),
        "date": time.split(" ")[0]
    }
    this.timeInEvents.push(timeStamp)
    return this
}

let createTimeOutEvent = function(time) {
    let timeStamp = {
        "type": "TimeOut",
        "hour": parseInt(time.split(" ")[1]),
        "date": time.split(" ")[0]
    }
    this.timeOutEvents.push(timeStamp)
    return this
}

let hoursWorkedOnDate = function(day) {
    let timeIn = this.timeInEvents.find(function(e){
        return e.date === day
    }).hour
    let timeOut = this.timeOutEvents.find(function(e){
        return e.date === day
    }).hour
    return (timeOut - timeIn)/100
}

let wagesEarnedOnDate = function(day) {
    return hoursWorkedOnDate.call(this, day) * this.payPerHour
}

let findEmployeeByFirstName = function(arr, name) {
    return arr.find(function(obj) {
        return obj.firstName === name
    })
}

let calculatePayroll = function(arr) {
    let allWages = arr.map(function(employee) {
        return allWagesFor.call(employee)
    })
    return allWages.reduce(function(total, e) {
        return total + e
    })
}