// Lucian's Luscious Lasagna

PREPARATION_MINUTES_PER_LAYER = 2; export const EXPECTED_MINUTES_IN_OVEN = 40; /** * Determines the number of minutes the lasagna still needs to remain in the * oven to be properly prepared. * * @param {number} actualMinutesInOven * @returns {number} the number of minutes remaining */ export function remainingMinutesInOven(actualMinutesInOven) { return EXPECTED_MINUTES_IN_OVEN - actualMinutesInOven; } remainingMinutesInOven(30); /** * Given a number of layers, determines the total preparation time. * * @param {number} numberOfLayers * @returns {number} the total preparation time */ export function preparationTimeInMinutes(numberOfLayers) { return numberOfLayers * 2; } preparationTimeInMinutes(2) /** * Calculates the total working time. That is, the time to prepare all the layers * of lasagna, and the time already spent in the oven. * * @param {number} numberOfLayers * @param {number} actualMinutesInOven * @returns {number} the total working time */
export function totalTimeInMinutes(numberOfLayers, actualMinutesInOven) { return numberOfLayers * 2 + actualMinutesInOven; } totalTimeInMinutes(3, 20);

// Poetry Club Door Policy

export function frontDoorResponse(line) { return line[0]; } frontDoorResponse('Stands so high') /** * Format the password for the front-door, given the response * letters. * * @param {string} word the letters you responded with before * @returns {string} the front door password */
export function frontDoorPassword(word) { return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(); } frontDoorPassword('shire'); /** * Respond with the correct character, given the line of the * poem, if this were said at the back door. * * @param {string} line * @returns {string} */ export function backDoorResponse(line) { let word = line.trim(); return word[word.length -1]; } backDoorResponse('Stands so high'); /** * Format the password for the back door, given the response * letters. * * @param {string} word the letters you responded with before * @returns {string} the back door password */ export function backDoorPassword(word) { return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase() + ', please'; } backDoorPassword('horse');

// Freelancer Rates

/** * The day rate, given a rate per hour * * @param {number} ratePerHour * @returns {number} the rate per day */ export function dayRate(ratePerHour) { return ratePerHour * 8; } dayRate(89); /** * Calculates the number of days in a budget, rounded down * * @param {number} budget: the total budget * @param {number} ratePerHour: the rate per hour * @returns {number} the number of days */
export function daysInBudget(budget, ratePerHour) { let dailyRate = ratePerHour * 8; return Math.floor(budget / dailyRate);   return Math.floor(budget / dailyRate);
}
daysInBudget();
/**
 * Calculates the discounted rate for large projects, rounded up
 *
 * @param {number} ratePerHour
 * @param {number} numDays: number of days the project spans
 * @param {number} discount: for example 20% written as 0.2
 * @returns {number} the rounded up discounted rate
 */
 // ;
 let daysInMonth = 30
 let billableDays = daysInMonth - 22;
 let remainingDays = billableDays % billableDays;

priceWithMonthlyDiscount();