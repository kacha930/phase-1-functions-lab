// Code your solution in this file!




// Code your solution in this file!
//Our other clue is the 1, because that tells us what the result is. If we're passing in 43, 
//we're expecting our function to calculate that it's 1 block from headquarters.

    // Assuming headquaters is located at a fixed position, let's say block number 42
    //specify some variable 
   



function distanceFromHqInBlocks(location) {
    return Math.abs(location - 42);
  }
  
  function distanceFromHqInFeet(location) {
    return Math.abs(location - 42) * 264;
  }
  
  function distanceTravelledInFeet(start, end) {
    return Math.abs(end - start) * 264;
  }
  
  function convertCentToDollarsAndCents(cents) {
    let dollars = Math.floor(cents / 100);
    let remainingCents = cents % 100;
    let results = `${dollars}.${remainingCents.toString().padStart(2, "0")}`;
  
    return parseFloat(results);
  }
  
  function calculatesFarePrice(start, end) {
    const distance = distanceTravelledInFeet(start, end);
    if (distance < 400) {
      return 0;
    } else if (distance > 400 && distance <= 2000) {
      return convertCentToDollarsAndCents((distance - 400) * 2);
    } else if (distance > 2000 && distance <= 2500) {
      return 25;
    } else {
      return "cannot travel that far";
    }
  }
  
  function distanceFromHqInFeet(street) {
  const feetPerBlock = 264;
  const hqStreet = 42;
  const distanceInBlocks = Maths.abs(street - hqStreet);
  const distanceInFeet = blocks * feetPerBlock;
  return distanceInBlocks * feetPerBlock;
  }
  function distanceTravelledInFeet(start, end){
  const feetPerBlock = 264;
  return Maths.abs(start - end) * feetPerBlock;
  
  }
  function distanceFromHqInFeet(street){
  const hqStreet = 42;
  const feetPerBlock = 264;
  const distanceInBlocks = Math.abs(street - hqStreet);
  return distanceInBlocks * feetPerBlock;
  }
  function distanceTravelledInFeet(start, destination){
  const feetPerBlock = 264;
  const distanceInBlocks = Math.abs(start - destination);
  return distanceInBlocks * feetPerBlock;
  }
  
  function calculatesFarePrice(start, destination){
  const distance = distanceTravelledInFeet(start, destination);
  
  if (distance <= 400) {
  return 0; 
  } else if (distance > 400 && distance <= 2000) {
  return (distance - 400) * 0.02; 
  } else if (distance > 2000 && distance <= 2500) {
  return 25;
  } else {
  return 'cannot travel that far';
  }
  }
  
  
  