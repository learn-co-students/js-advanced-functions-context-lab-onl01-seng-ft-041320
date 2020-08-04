/* Your Code Here */
const createEmployeeRecord = (employeeValues) => {
    return {
      firstName: employeeValues[0],
      familyName: employeeValues[1],
      title: employeeValues[2],
      payPerHour: parseInt(employeeValues[3]),
      timeInEvents: [],
      timeOutEvents: []
    }
  }
  
  const createEmployeeRecords = (employeesValues) => {
    return employeesValues.map(employee => createEmployeeRecord(employee))
  }
  
  const createTimeInEvent = function(time) {
    const [date, hour] = time.split(' ')
    this.timeInEvents.push({
      type: 'TimeIn',
      date: date,
      hour: parseInt(hour)
    })
    return this
  }
  
  const createTimeOutEvent = function(time) {
    const [date, hour] = time.split(' ')
    this.timeOutEvents.push({
      type: 'TimeOut',
      date: date,
      hour: parseInt(hour)
    })
    return this
  }
  
  const hoursWorkedOnDate = function(date) {
    const timeIn = this.timeInEvents.find((event => event.date === date)).hour
    const timeOut = this.timeOutEvents.find((event => event.date === date)).hour
  
    return (timeOut - timeIn) / 100
  }
  
  const wagesEarnedOnDate = function(date) {
    const hours = hoursWorkedOnDate.call(this, date)
    return hours * this.payPerHour
  }
  
  const findEmployeeByFirstName = function(employees, name) {
    return employees.find(employee => employee.firstName === name)
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
  
  const calculatePayroll = function(employees) {
    return employees.reduce((memo, employee) => {
      return memo + allWagesFor.call(employee)
    }, 0)
  }