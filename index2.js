function checkingSpeed(speed) {
    const speedLimit = 70;
    let dermitPoints = 0;
//Calculating speed boundaries.
    if (speed < speedLimit) {
        console.log("Ok")
    } else {
      const excessSpeed = speed - speedLimit

      dermitPoints = Math.floor(excessSpeed / 5);

      console.log(`Points: ${dermitPoints}`)

      if (dermitPoints > 12)
        console.log("License suspended");
    }
}
checkingSpeed();