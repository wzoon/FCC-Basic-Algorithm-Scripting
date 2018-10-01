/*function largestOfFour(arr) {
    // You can do this!
    let a = [];
    for(let i = 0;i<arr.length;i++){
            a.push(Math.max(...arr[i]));
    }
    return a;
  }

  //console.log(largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]));

  function confirmEnding(str, target) {
    // "Never give up and good luck will find you."
    // -- Falcor
    let a = str.length;
    let b = target.length;
    let s = str.slice(a-b,a);

    return s == target ? true : false;
  }
  
  console.log(confirmEnding("Open sesame", "pen"));
  
   function repeatStringNumTimes(str, num) {
    // repeat after me
    let s='';
    for(let i = 0;i<num;i++){
        s = s + str;
    }
    return num >= 0 ? s : '';
  }
  
  console.log(repeatStringNumTimes("abc", -1));
  
 function truncateString(str, num) {
    // Clear out that junk in your trunk
    return num < str.length ? str.slice(0,num) + '...' : str;
  }
  
  console.log(truncateString("Absolutely Longer", 2));


function findElement(arr, func) {
    let num = 0;
    return num = arr.find(func);
  }
  
  console.log(findElement([1, 3, 5, 8, 9, 10], num => num % 2 === 0));


function booWho(bool) {
    // What is the new fad diet for ghost developers? The Boolean.
    return typeof(bool) === "boolean" ? true : false;
  }
  
 console.log(booWho(false));



function titleCase(str) {
    let s = str.toLowerCase().split(' ');
    for(let i = 0;i<s.length;i++){
       s[i] = s[i].charAt(0).toUpperCase() + s[i].substring(1);
    }
    str = s.join(' ');
    return str;
  }
  
  console.log(titleCase("I'm a little tea pot"));

  
  function frankenSplice(arr1, arr2, n) {
    // It's alive. It's alive!
    let narr = [...arr2];
    narr.splice(n,0,...arr1);
    return narr;
  }
  
  console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));

function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  let narr = [];
  for(let i=0;i<arr.length;i++){
    if(arr[i]){
      narr.push(arr[i]);
    }
  }
  return narr;
}

console.log(bouncer([1, null, NaN, 2, undefined]));
 */
function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  arr.sort();
  let index = 0;
  for(let i=0;i<=arr.length;i++){
    if(num > arr[i]){
      index++;
    }
  }
  return index;
}

console.log(getIndexToIns([3, 10, 5], 3));