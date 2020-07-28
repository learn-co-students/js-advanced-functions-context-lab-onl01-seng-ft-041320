/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */
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

function createEmployeeRecords(arrays) {
    let employeeRecord = arrays.map(createEmployeeRecord)
    return employeeRecord
 }

 function createTimeInEvent(dateStamp){
    let dateTimeSplit = dateStamp.split(' ')
  
    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(dateTimeSplit[1]),
        date: dateTimeSplit[0]
    })
    return this
  }

  function createTimeOutEvent(dateStamp){
    let dateTimeSplit = dateStamp.split(' ')
  
    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(dateTimeSplit[1]),
        date: dateTimeSplit[0]
    })
    return this
  }


function hoursWorkedOnDate(date) {
    let i1 = this.timeInEvents.findIndex(inDate => inDate.date === date)
    let i2 = this.timeOutEvents.findIndex(outDate => outDate.date === date)
    let inTime = this.timeInEvents[i1]["hour"]
    let outTime = this.timeOutEvents[i2]["hour"]
    
    let hoursWorked = (outTime - inTime)
    return hoursWorked/100
}

function wagesEarnedOnDate(date) {
    let pay = this.payPerHour
    let wage = pay * hoursWorkedOnDate.call(this, date)
    return wage
}

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

function findEmployeeByFirstName(srcArray, firstName) {
    let findFirstName = srcArray.find(employeeRecord => {
        return employeeRecord.firstName === firstName
    })
    return findFirstName
}

function calculatePayroll(array) {
    let eachEmployeeWages = array.map(employeeRecord => allWagesFor.call(employeeRecord, 0))
    let total = eachEmployeeWages.reduce(function(accumulator, currentValue) {
        return accumulator + currentValue
    }, + 0)
    return total
}

 