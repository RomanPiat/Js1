/* function getExtremeElements(array) {
  // Change code below this line
    console.log (array);
  array.splice(1, array.length-2);
    console.log(array);

  // Change code above this line
}

getExtremeElements([1, 2, 3, 4, 5]); */

/* const fruits = ["apple", "peach", "pear", "banana"];

// Change code below this line
const lastElementIndex = fruits.length - 1;
const lastElement = fruits[lastElementIndex];

console.log (fruits) */

/* function calculateEngravingPrice(message, pricePerWord) {
   // Change code below this line
let kol;
kol = message.split(' ');
    console.log(kol);
return (kol.length * pricePerWord);
   // Change code above this line
}

console.log (calculateEngravingPrice("Web-development is creative work", 40))

 */

/* function slugify(title) { 

    return (title.toLowerCase().split(' ').join('-'));
}

console.log (slugify("Arrays for begginers")); */
/* 
const start = 3;
const end = 7;

for (let i = 2; i <= ; i += 1 ) { // Change this line
  console.log(i);
} */

/* function calculateTotal(number) {
 // Change code below this line
    console.log(number);
let resailt = 0;
  for (let index = 0; index <= number; index+=1) {
      resailt += index;

}
      console.log(resailt);
return (resault);
  // Change code above this line
}

console.log(calculateTotal(7));
 */
/* 
function findLongestWord(string) {
    let stringer;
    let resault;
    let kol;
    let dlinaSlova = 0;
    let slovo;

    stringer = string.split(' ');
    kol = stringer.length;
    console.log(stringer);
    console.log(kol);
    
    for (let i = 0; i < kol; i += 1) {
        slovo = stringer[i];
        if (slovo.length > dlinaSlova) {
            dlinaSlova = slovo.length;
            resault = slovo;
        }   
    }


    return (resault);
}

console.log(findLongestWord("May the force be with you")); */



/* function createArrayOfNumbers(min, max) {
  const numbers = [];
  // Change code below this line
  for (let i = min; i <= max; i += 1) {
    numbers.push(i);
  }
  // Change code above this line
  return numbers;
}

console.log(createArrayOfNumbers(29, 34));
 */

/* function filterArray(numbers, value) {
   // Change code below this line
  let dlina = numbers.length;
  const itog = [];
  
  for (let i = 1; i <= dlina; i += 1) {
    console.log(i);

     if (numbers[i] > value) {
      itog.push(numbers[i]);

    } 
  }
  return itog;

  // Change code above this line
}

console.log(filterArray([1, 7, 13, 4, 5], 4)); */



/* 
function getCommonElements(array1, array2) {
  // Change code below this line
  let dlina = array1.length;
  let mas = [];
  console.log(dlina);

  for (let i = 0; i <= dlina-1; i += 1) {
    console.log(i);
    if (array2.includes(array1[i]))  {
      mas.push(array1[i]);
    } 
  
    
  }

return (mas);
 // Change code above this line
}

console.log(getCommonElements([1, 2, 3, 5], [5, 2, 1, 17, 19])); */



/* 
function filterArray(numbers, value) {
  // Change code below this line
  const filteredNumbers = [];
  console.log(numbers);

  for (let number of numbers) {
     console.log(number);
    if (number > value) {
      filteredNumbers.push(number);

  }
} 


   for (let i = 0; i < numbers.length; i += 1) {
    const number = numbers[i];

    if (number > value) {
      filteredNumbers.push(number);
    }
  } 

  return filteredNumbers;

}

console.log(filterArray([12, 24, 8, 41, 76], 20));

 */


/* 
function getEvenNumbers(start, end) {
  const rez = [];
  
  for (let i = start; i <= end; i+=1)    {
    console.log(i);
    if (i % 2 === 0) {
      rez.push(i);
    }
  }
  
return(rez);

  }

console.log(getEvenNumbers(8, 12));
 */

/* 
function includes(array, value) {
  const len = array.length;
  console.log(len);
  for (let i = 0; i <= len; i += 1) {
    console.log(i);
    console.log(array[i]);
    
    if (value === array[i]) {
      
      return(true);
    }
  }
        return(false);


}

console.log(includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jueepiter"));
 */
/* const apartment = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};
const keys = [];
const values = [];
// Change code below this line
for (const key in apartment) {
  console.log(key);

  keys.push(key);
  values.push(apartment[key]);
}

  console.log(values, keys);

 */
  
/* 

  function countProps(object) {
  let propCount = 0;
  // Change code below this line
for(const key in object) {
  console.log(key)
  propCount+=1
}
  // Change code above this line
  return propCount;
}

console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 })) */





/* const keys = [];
const values = [];
const advert = {
  service: "apt",
};
const apartment = Object.create(advert);
apartment.descr = "Spacious apartment in the city center";
apartment.rating = 4;
apartment.price = 2153;

for (const key in apartment) {
  // Change code below this line
if (apartment.hasOwnProperty(key)) {
    keys.push(key);
  values.push(apartment[key]);
}


  // Change code above this line
}

 */


/* 
const apartment = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};
const values = [];
// Change code below this line
const keys = object.keys(apartment);
for (key of keys) {
  if (apartment.hasOwnProperty(key)) {
      values.push(apartment[key]);
  }
}

 */


function countProps(object) {
  // Change code below this line
  let propCount = 0;
  const keys = object.keys(object)
  
  for (const key of keys) {
    if (object.hasOwnProperty(key)) {
      propCount += 1;
    }
  }

  return propCount;
  // Change code above this line
}

console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 })) 