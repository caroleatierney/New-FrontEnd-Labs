/* 
  Copyright (c) 2023 Promineo Tech
  Author:  Promineo Tech Academic Team
  Subject:  JavaScript Mocha/Chai
  FE Lab Week 06
*/
const expect = chai.expect
const assert = chai.assert

/* ----------------------------------------------------- */
// Resources:
// expect Documentation: https://www.chaijs.com/api/bdd/
// assert Documntation: https://www.chaijs.com/api/assert/
//
// assert is very similar to how you use expect, but offers
// extra ways to test.

/* ----------------------------------------------------- */
// Please do not alter the existing code unless instructed to do so.
// Read the comments and add your code where it is specified for each question.
/* ----------------------------------------------------- */

/**
 *          YOU MUST 'npm install' IN YOUR TERMINAL TO INSTALL MOCHA/CHAI 
 *          FROM THE DEPENDENCIES IN YOUR PACKAGE.JSON
 * 
 *  Step 1: Create a describe code block that describes what you expect the code to do.
 *  Step 2: Copy/Paste your debugged code from week6Lab.js into the describe block (exclude the final console.log())
 *  Step 3: Create tests using expect/assert to test for expected outputs. Use multiple cases.
 *          If you're testing against an array/object - read the documentation on .deep/.deepEquals
 *
 *  Note:   Mocha/Chai is currently set up to only run in your given index.html. 
 *          expect/assert are given to you at the top of the code. 
 * 
 *          By default, the tests will pass unless you give it code to test against.
 * 
/*--------------------------------------------------------------------*/

describe('Week 6 Lab Tests:', () => {
  describe('Example Question Test: Add Two Numbers', () => {
    it('#Should return the sum of two numbers', () => {
      // Copy & paste your debugged code from week6Lab.js
      function addTwoNumbers(num1, num2) {
        return num1 + num2
      }
      // Write tests to ensure it works for multiple examples
      expect(addTwoNumbers(2, 3)).to.equal(5)
      expect(addTwoNumbers(9, 17)).to.equal(26)
      expect(addTwoNumbers(750, 250)).to.equal(1000)
      expect(addTwoNumbers(132780, 443378)).to.equal(576158)
    })

    describe('Example Failed Test: Add Two Numbers', () => {
      it('#Should fail', () => {
        function sumOfTwoNumbers(num1, num2) {
          num1 + num2
        }

        expect(sumOfTwoNumbers(2, 3)).to.equal(5)
      })
    })
  })

  /*--------------------------NEW TESTS BELOW-------------------------------*/

  describe('Example Question Test: Sorted array of Numbers', () => {
    it('#Should return the Sorted array of Number`s', () => {
      // Copy & paste your debugged code from week6Lab.js

      // Write tests to ensure it works for multiple examples
      var arrayOfNumbers = [1, 5, 3, 2, 4]
      arrayOfNumbers = arrayOfNumbers.sort((a, b) => a - b)
      expect(arrayOfNumbers).to.deep.equal([1, 2, 3, 4, 5])
      console.log("first array" + arrayOfNumbers);

      // Write tests to ensure it works for multiple examples
      arrayOfNumbers = [1, 2, 3, 8, 9]
      arrayOfNumbers = arrayOfNumbers.sort((a, b) => a - b)
      expect(arrayOfNumbers).to.deep.equal([1, 2, 3, 8, 9])
      console.log(arrayOfNumbers);

    })

    describe('Example Failed Test: Sorted array of Numbers', () => {
      it('#Should fail', () => {
      const arrayOfNumbers = [1, 5, 3, 2, 4]
        arrayOfNumbers = arrayOfNumbers.sort((a, b) => a - b)
        expect(arrayOfNumbers).to.deep.equal([1, 2, 3, 4, 5])
      })
    })
  })

  // =================================================================

  describe('Example Question Test: 1b: Manage my wallet', () => {

    // Write tests to ensure it works for multiple examples
    it('#Should be able to add money to my wallet', () => {
      class Wallet {
        constructor(startingMoney) {
          this.money = startingMoney
        }

        addMoney(amount) {
          return this.money += amount
        }

        removeMoney(amount) {
          return this.money -= amount
        }
      }

      const myWallet = new Wallet(100)
      expect(myWallet.addMoney(3)).to.equal(103)
      expect(myWallet.addMoney(12)).to.equal(115)
    })

    it('#Should be able to subtract money from my wallet', () => {
      class Wallet {
        constructor(startingMoney) {
          this.money = startingMoney
        }

        addMoney(amount) {
          return this.money += amount
        }

        removeMoney(amount) {
          return this.money -= amount
        }
      }
      const myWallet = new Wallet(208)
      expect(myWallet.removeMoney(12)).to.equal(196)
    })

    // Write tests to ensure it fails for multiple examples
    it('#Should fail', () => {
      class Wallet {
        constructor(startingMoney) {
          this.money = startingMoney
        }

        addMoney(amount) {
          money += amount
        }

        removeMoney(amount) {
          money -= amount
        }
      }

      const myWallet = new Wallet(100)
      expect(myWallet.removeMoney(14.99)).to.equal(84.99)
      expect(myWallet.add(3)).to.equal(87.99)
    })
  })

  // =================================================================

  describe('Example Question Test: 1c: Day of the Week', () => {
    it('#Should return the Day of the Week', () => {
      const dayOfTheWeek = (num) => {
        switch (num) {
          case 1:
            return 'Monday'
            break;
          case 2:
            return 'Tuesday'
            break;
          case 3:
            return 'Wednesday'
            break;
          case 4:
            return 'Thursday'
            break;
          case 5:
            return 'Friday'
            break;
          case 6:
            return 'Saturday'
            break;
          case 7:
            return 'Sunday'
            break;
          default:
            console.log('Err. Something went wrong.')
        }
      }

      // Write tests to ensure it works for multiple examples
      expect(dayOfTheWeek(5)).to.equal('Friday')
      expect(dayOfTheWeek(3)).to.equal('Wednesday')
      expect(dayOfTheWeek(7)).to.equal('Sunday')

    })

    it('#Should fail', () => {
      const dayOfTheWeek = (num) => {
        switch (num) {
          case 1:
            'Monday'
            break;
          case 2:
            'Tuesday'
            break;
          case 3:
            'Wednesday'
            break;
          case 4:
            'Thursday'
            break;
          case 5:
            'Friday'
            break;
          case 6:
            'Saturday'
            break;
          case 7:
            'Sunday'
            break;
          default:
            console.log('Err. Something went wrong.')
        }
      }
      expect(dayOfTheWeek(5)).to.equal('Friday')
    })
  })

  // =================================================================

  describe('Example Question Test: 1d: Only Wizards shall pass', () => {
    it('#Should return the Wizards', () => {

    const movieCharacters = [
      {
        name: 'Howl',
        isAWizard: true,
        quote: `You're wearing that hat? After all the magic I used to make your dress pretty?`,
      },
      {
        name: 'Kalcifer',
        isAWizard: false,
        quote: `I don't cook! I'm a scary and powerful fire demon!`,
      },
      {
        name: 'Gandalf',
        isAWizard: true,
        quote: `You shall not pass!`,
      },
      {
        name: 'Luke Skywalker',
        isAWizard: false,
        quote: `May the Force be with you.`,
      },
    ]

    function onlyWizards(arrayOfCharacters) {
      return arrayOfCharacters.filter((movieCharacter) => movieCharacter.isAWizard == true)
    }

    let wizards = onlyWizards(movieCharacters)  
    for (i = 0; i < wizards.length; i++) {
      console.log("Happy Path: " + wizards[i].name)
    }

    // logged results in test.js will appear after -----------Finished------------
      console.log(onlyWizards(movieCharacters))
      expect(wizards[0]).to.deep.include({name: 'Howl'});
      expect(wizards[1]).to.deep.include({ name: 'Gandalf' });

    })
  
    it('#Should fail', () => {

      const movieCharacters = [
      {
        name: 'Howl',
        isAWizard: true,
        quote: `You're wearing that hat? After all the magic I used to make your dress pretty?`,
      },
      {
        name: 'Kalcifer',
        isAWizard: false,
        quote: `I don't cook! I'm a scary and powerful fire demon!`,
      },
      {
        name: 'Gandalf',
        isAWizard: true,
        quote: `You shall not pass!`,
      },
      {
        name: 'Luke Skywalker',
        isAWizard: false,
        quote: `May the Force be with you.`,
      },
      ]

      function onlyWizards(arrayOfCharacters) {
        return arrayOfCharacters.filter((character) => character == true)
      }

      let wizards = onlyWizards(movieCharacters)  
      expect(wizards).to.deep.include({name: 'Gandalf'});
    
      console.log(onlyWizards(movieCharacters))
      expect(wizards[0]).to.deep.include({ name: 'Howl' });
      expect(wizards[1]).to.deep.include({ name: 'Gandalf' });

    })
  })

})