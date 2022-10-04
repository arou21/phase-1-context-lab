/* Your Code Here */
function createEmployeeRecord(employeeArray) {
    return {
      firstName: employeeArray[0],
      familyName: employeeArray[1],
      title: employeeArray[2],
      payPerHour: employeeArray[3], 
      timeInEvents: [],
      timeOutEvents: []
    }
  }
  function createEmployeeRecords(records) {
    const recordObjects = records.map(createEmployeeRecord)
    return recordObjects
  }
  
  function createTimeInEvent(date) {
    console.log(date)
      const timeRecord =  {
        type: 'TimeIn',
        hour: parseInt(date.slice(11,15)),
        date: date.slice(0,10)
      }
    this.timeInEvents.push(timeRecord)
    return this
  
  }

  function createTimeOutEvent(date) {
    console.log(date)
      const timeRecord =  {
        type: 'TimeOut',
        hour: parseInt(date.slice(11,15)),
        date: date.slice(0,10)
      }
    this.timeOutEvents.push(timeRecord)
    return this
  
  }

  function hoursWorkedOnDate(date){
    const startHour = this.timeInEvents.find(value => {
      return value.date === date
    }).hour
  const endHour = this.timeOutEvents.find(value => {
    return value.date === date
  }).hour
  return Math.ceil(endHour - startHour)/100
  }

  function wagesEarnedOnDate(date) {
    const hoursWorked = hoursWorkedOnDate.call(this, date)
    const {payPerHour} = this
    return payPerHour*hoursWorked
  }

  function allWagesFor() {
    let wagesEarned = 0
  for(let i = 0; i < this.timeInEvents.length; i++){
    wagesEarned += wagesEarnedOnDate.call(this, this.timeInEvents[i].date)
  }
  return wagesEarned
  }

  function findEmployeeByFirstName(srcArray, firstName){
    return srcArray.find(record => {
      return record.firstName === firstName
    })
  }

  function calculatePayroll(array) {
    // console.log(333,array)
    let totalWages = 0 
    array.forEach(record => {
      totalWages += allWagesFor.call(record)
    });
    return totalWages
  }