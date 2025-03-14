// Round Trip ✈️
// Codédex

const departTripTicket = {
  name: "Brandon",
  from: "Pittsburgh, PA",
  to: "Augsburg, Germany",
  businessClass: false,
  upgrade() {
    if (this.businessClass) {
      console.log("Your ticket is already business class!");
    } else {
      this.businessClass = true;
      console.log("Ticket upgraded to business class!");
    }
  },
  leaveTime: 12,
  arriveTime: 23,
  flightTime() {
    let flightTime = this.arriveTime - this.leaveTime;
    if (flightTime < 0) {
      flightTime += 24;
    }
    console.log(flightTime + " hours");
  }
};

const returnTripTicket = {
  name: "Brandon",
  from: "Augsburg, Germany",
  to: "Pittsburgh, PA",
  businessClass: true,
  upgrade() {
    if (this.businessClass) {
      console.log("Your ticket is already business class!");
    } else {
      this.businessClass = true;
      console.log("Ticket upgraded to business class!");
    }
  },
  leaveTime: 24,
  arriveTime: 4,
  flightTime() {
    let flightTime = this.arriveTime - this.leaveTime;
    if (flightTime < 0) {
      flightTime += 24;
    }
    console.log(flightTime + " hours");
  }
};

// Upgrade and check flight times
departTripTicket.upgrade();
returnTripTicket.upgrade();

departTripTicket.flightTime();
returnTripTicket.flightTime();
