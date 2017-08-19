var _; //globals

describe("About Applying What We Have Learnt", function() {

  var products;

  beforeEach(function () {
    products = [
       { name: "Sonoma", ingredients: ["artichoke", "sundried tomatoes", "mushrooms"], containsNuts: false },
       { name: "Pizza Primavera", ingredients: ["roma", "sundried tomatoes", "goats cheese", "rosemary"], containsNuts: false },
       { name: "South Of The Border", ingredients: ["black beans", "jalapenos", "mushrooms"], containsNuts: false },
       { name: "Blue Moon", ingredients: ["blue cheese", "garlic", "walnuts"], containsNuts: true },
       { name: "Taste Of Athens", ingredients: ["spinach", "kalamata olives", "sesame seeds"], containsNuts: true }
    ];
  });

  /*********************************************************************************/

  it("given I'm allergic to nuts and hate mushrooms, it should find a pizza I can eat (imperative)", function () {

    var i,j,hasMushrooms, productsICanEat = [];

    for (i = 0; i < products.length; i+=1) {
        if (products[i].containsNuts === false) {
            hasMushrooms = false;
            for (j = 0; j < products[i].ingredients.length; j+=1) {
               if (products[i].ingredients[j] === "mushrooms") {
                  hasMushrooms = true;
               }
            }
            if (!hasMushrooms) productsICanEat.push(products[i]);
            console.log(products[i]);
        }
    }

    expect(productsICanEat.length).toBe(1);
  });

  it("given I'm allergic to nuts and hate mushrooms, it should find a pizza I can eat (functional)", function () {

      var productsICanEat = [];

     productsICanEat = _.filter(products, function (a) {
          
          if(_.every(a.ingredients, function (b) {
              return b !== 'mushrooms'
          })  && a.containsNuts !== true 
              ){
              return a;
          }
  })
 console.log(productsICanEat)
      /* solve using filter() & all() / any() */

      expect(productsICanEat.length).toBe(1);
  });

  /*********************************************************************************/

  it("should add all the natural numbers below 1000 that are multiples of 3 or 5 (imperative)", function () {

    var sum = 0;
    for(var i=1; i<1000; i+=1) {
      if (i % 3 === 0 || i % 5 === 0) {
        sum += i;
      }
    }

    expect(sum).toBe(233168);
  });

  it("should add all the natural numbers below 1000 that are multiples of 3 or 5 (functional)", function () {

      var sum, sum_a, sum_b; 
          
      sum_a = _.range(0, 1000, 3);
      sum_b = _.range(0, 1000, 5);

      sum = _.zip(sum_a, sum_b);
      sum = _.flatten(sum);
      sum = _.compact(sum);
      sum = _.uniq(sum);
      sum = _.reduce(sum, function (memo, num) { return memo + num; }, 0);
      
      /* try chaining range() and reduce() */

    expect(233168).toBe(sum);
  });

  /*********************************************************************************/
   it("should count the ingredient occurrence (imperative)", function () {
    var ingredientCount = { "{ingredient name}": 0 };

    for (i = 0; i < products.length; i+=1) {
        for (j = 0; j < products[i].ingredients.length; j+=1) {
            ingredientCount[products[i].ingredients[j]] = (ingredientCount[products[i].ingredients[j]] || 0) + 1;
        }
    }

    expect(ingredientCount['mushrooms']).toBe(2);
  });

    it("should count the ingredient occurrence (functional)", function () {
        var ingredientCount = { "{ingredient name}": 0 };

  
        var test = _.map(products, function (name) { return name.ingredients; })
    
        test = _.flatten(test);
    
    ingredientCount = _.reduce(test, function (counts, word) { // ta funkcja liczy s�owa/elementy i ich cz�sto�� wyst�powania w danej tablicy (w tym przyk�adzie tablica jest ju� zmapowana i sp�aszczona
        counts[word] = (counts[word] || 0) + 1;  // tutaj dodajemy +1,  gdy� pierwsze slowo z tablicy b�dzie undefined i �eby przypisa� mu jak�� warto�� to w�a�nie tak musimy zapisa�
        return counts;
    }, {}); // tutaj mamy pust a tablic�, zeby zadzia�a�o na ko�cu


      /* chain() together map(), flatten() and reduce() */

    

 

    expect(ingredientCount['mushrooms']).toBe(2);
  });

  /*********************************************************************************/
  /* UNCOMMENT FOR EXTRA CREDIT */
  /*
  it("should find the largest prime factor of a composite number", function () {

  });

  it("should find the largest palindrome made from the product of two 3 digit numbers", function () {

  });

  it("should find the smallest number divisible by each of the numbers 1 to 20", function () {


  });

  it("should find the difference between the sum of the squares and the square of the sums", function () {

  });

  it("should find the 10001st prime", function () {

  });
  */
});
