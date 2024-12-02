// Code your solution in this file!
// Define the function to calculate distance from HQ in blocks
 function distanceFromHqInBlocks(pickup) {
    const hq = 42; // Scuber's headquarters is on 42nd street
    return Math.abs(pickup - hq); // Absolute difference between the pickup and 42nd street
 }

 // Define the function to calculate the distance from HQ in feet
  function distanceFromHqInFeet(pickup) {
    const blocks = distanceFromHqInBlocks(pickup); // Get blocks from the above function
return blocks * 264; // Convert blocks to feet (264 feet per block)
  }

  // Define the function to calculate distance travelled in feet
  function distanceTravelledInFeet(start, destination) {
    const blocks = Math.abs(destination - start);
    return blocks * 264; // Convert blocks to feet
  }
  
  // Define the function to calculate the fare price
  function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
  
    if (distance <= 400) {
      return 0; // First 400 feet are free
    } else if (distance <= 2000) {
      return (distance - 400) * 0.02; // $0.02 per foot after 400 feet
    } else if (distance <= 2500) {
      return 25; // Flat fare for distances over 2000 and under 2500 feet
    } else {
        return 'cannot travel that far'; // Exceeding limit
      }
    }
    
    // Export the functions for testing
  module.exports = {
      distanceFromHqInBlocks,
      distanceFromHqInFeet,
      distanceTravelledInFeet,
      calculatesFarePrice
    };