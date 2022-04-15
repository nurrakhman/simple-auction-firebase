// // npx sequelize-cli model:create --name User --attributes fullname:string,totalMoney:integer,totalSpended:integer,role:string
// // npx sequelize-cli model:create --name Collection --attributes name:string,startDate:date,endDate:date
// // npx sequelize-cli model:create --name Lot --attributes name:string,collectionId:integer,sellerId:integer,startingBid:integer
// // npx sequelize-cli model:create --name Transaction --attributes userId:integer,status:string,price:integer

// USER 1 (500K = SQL Trans)

// Kasus 1 (1 lot doang)
// USER 1 BID LOT 1 (200K)
// USER 2 BID LOT 1 (300K)

// Current avalible ? 500K

// USER 1 BID LOT monalisa (200K)
// USER 1 BID LOT screaming man (100K)
// // USER 1 BID LOT lukisan (300k)

// Current avalible ? 200K

// TRANSACTION = TOTAL MONEY (SQL)
// BID = TMP SPENDED MONEY (FIREBASE)

// QUERY FIREBASE DIMANA GET ALL BID DENGAN (IDuser, status = highest)

// if price SQL TOTAP PASTI (500K)
// if BID(IDuser, ishighst: true) => array map => price (<= 500k)

// hargabid < (totalpasti - totalbid(mapping bid (price) )

// lastbid get highestbid(idCollection)
// ubah lasbid.ishighst = false
// dapet user id dari latbid user.totalspend - bid.price
// create bid (informasi bid, ishighest : true)

// setiap lot cuman ada satu yg highest()

// user.totalMoney = topup (hitung total transaction) 500k
// user.totalSpended = 300k <-

// DEMO APLIKASI -> SECURITY PENTING ?

// 2 kemungkinan

// function isValidIP(str) {
//   const segment = str.split(".");
//   if (segment.length < 4) {
//     return false;
//   }
//   let check = true;
//   segment.forEach((e) => {
//     console.log(e[0]);
//     if (e[0] == "0") {
//       check = false;
//       return;
//     }
//     let num = parseInt(e);
//     console.log(num);
//     if (num < 0 || num > 255) {
//       check = false;
//       return;
//     }
//   });

//   return check;
// }
//
// function isValidIP(str) {
//   const segments = str.split(".");
//   if (str === "0.0.0.0") {
//     return true;
//   }
//   if (segments.length !== 4) {
//     return false;
//   }
//   let check = true;
//   segments.forEach((segment) => {
//     segment.split("").forEach((digit, i) => {
//       if (!(digit >= "0" && digit <= "9")) {
//         check = false;
//         return;
//       }
//       if (digit == " ") {
//         check = false;
//         return;
//       }
//     });

//     if (segment[0] === "0" && segment[1] !== "0") {
//       check = false;
//       return;
//     }

//     if (parseInt(segment) < 1 || parseInt(segment) > 255) {
//       check = false;
//       return;
//     }
//   });

//   return check;
// }

// const removeDuplicateIds = (obj) => {
//   let arrOfArr = Object.entries(obj);
//   let output = {};

//   for (let i = 0; i < arrOfArr.length; i++) {
//     for (let j = i; j < arrOfArr.length; j++) {
//       if (i != j) {
//         arrOfArr[i][1] = arrOfArr[i][1].filter(
//           (element) => !arrOfArr[j][1].includes(element)
//         );
//       } else {
//         arrOfArr[i][1] = arrOfArr[i][1].filter((element, index) => {
//           return arrOfArr[i][1].indexOf(element) === index;
//         });
//       }
//     }
//     output[arrOfArr[i][0]] = arrOfArr[i][1];
//   }

//   return output;
// };

// // const sisa = obj[arr].filter(element => obj[arr].includes(element));

// const obj = {
//   432: ["A", "A", "B", "D"],
//   53: ["L", "G", "B", "C"],
//   236: ["L", "A", "X", "G", "H", "X"],
//   11: ["P", "R", "S", "D"]
// };
// const result = removeDuplicateIds(obj);
// console.log(result);

// "Jacob and Alex likes this";
// "Jacob and Alex like this";

// function duplicateCount(text) {
//   let tmp = text.toLowerCase().split("");
//   let counts = {};
//   tmp.forEach((x) => {
//     counts[x] = (counts[x] || 0) + 1;
//   });
//   counts = Object.entries(counts);
//   counts = counts.filter((char) => char[1] > 1);
//   return counts.length;
// }

// duplicateCount("aabbcde");

// function streetFighterSelection(fighters, position, moves) {
//   let currPos = position;
//   let output = [];
//   moves.forEach((move) => {
//     switch (move) {
//       case "up":
//         if (currPos[0] > 0) {
//           currPos[0] = currPos[0] - 1;
//         }
//         output.push(fighters[currPos[0]][currPos[1]]);
//         break;
//       case "left":
//         if (currPos[1] === 0) {
//           currPos[1] = 5;
//         } else {
//           currPos[1] = currPos[1] - 1;
//         }
//         output.push(fighters[currPos[0]][currPos[1]]);
//         break;
//       case "right":
//         if (currPos[1] === 5) {
//           currPos[1] = 0;
//         } else {
//           currPos[1] = currPos[1] + 1;
//         }
//         output.push(fighters[currPos[0]][currPos[1]]);
//         break;
//       case "down":
//         if (currPos[0] < 1) {
//           currPos[0] = currPos[0] + 1;
//         }
//         output.push(fighters[currPos[0]][currPos[1]]);
//         break;

//       default:
//         break;
//     }
//   });
//   return output;
// }

// fighters = [
//   ["Ryu", "E.Honda", "Blanka", "Guile", "Balrog", "Vega"],
//   ["Ken", "Chun Li", "Zangief", "Dhalsim", "Sagat", "M.Bison"]
// ];

// // console.log(fighters[0][5]);

// moves = [
//   "right",
//   "right",
//   "right",
//   "right",
//   "right",
//   "right",
//   "right",
//   "right"
// ];

// console.log(streetFighterSelection(fighters, [0, 0], moves));

// function isPangram(string) {
//   let output = true;
//   let library = "abcdefghijklmnopqrstuvwxyz".split("");
//   string = string.toLowerCase();
//   library.forEach((e) => {
//     if (string.indexOf(e) < 0) {
//       output = false;
//       return;
//     }
//   });
//   return output;
// }

// console.log(isPangram("The quick brown fox jumps over the lazy dog."));

// function findOutlier(integers) {
//   let genap = integers.filter((e) => {
//     return e % 2 === 0;
//   });
//   let ganjil = integers.filter((e) => {
//     return e % 2 !== 0;
//   });

//   if (genap.length > ganjil.length) {
//     return ganjil[0];
//   } else {
//     return genap[0];
//   }
// }

// console.log(findOutlier([2, 6, 8, 10, 3]));

// function anagrams(word, words) {
//   let output = [];
//   let target = word.split("").sort();
//   console.log(target);
//   words.forEach((e) => {
//     let tmp = e.split("").sort();
//     let isSame =
//       target.length == tmp.length &&
//       target.every((e, i) => {
//         return e === tmp[i];
//       });
//     if (isSame) {
//       output.push(e);
//     }
//   });
//   console.log(output);
// }

// anagrams("abba", ["aabb", "abcd", "bbaa", "dada"]);

// function generateHashtag(str) {
//   let text = str
//     .replace(/\s+/g, " ")
//     .split(" ")
//     .filter((e) => e != "")
//     .map((e) => e.charAt(0).toUpperCase() + e.slice(1))
//     .join("");
//   if (text.length < 1 || text.length + 1 > 140) {
//     return false;
//   } else {
//     text = "#" + text;
//     return text;
//   }
// }

// console.log(generateHashtag(""));

// function zero(cb) {
//   return cb ? cb(0) : 0;
// }
// function one(cb) {
//   return cb ? cb(1) : 1;
// }
// function two(cb) {
//   return cb ? cb(2) : 2;
// }
// function three(cb) {
//   return cb ? cb(3) : 3;
// }
// function four(cb) {
//   return cb ? cb(4) : 4;
// }
// function five(cb) {
//   return cb ? cb(5) : 5;
// }
// function six(cb) {
//   return cb ? cb(6) : 6;
// }
// function seven(cb) {
//   return cb ? cb(7) : 7;
// }
// function eight(cb) {
//   return cb ? cb(8) : 8;
// }
// function nine(cb) {
//   return cb ? cb(9) : 9;
// }

// function plus(b) {
//   return function (a) {
//     return a + b;
//   };
// }
// function minus(b) {
//   return function (a) {
//     return a - b;
//   };
// }
// function times(b) {
//   return function (a) {
//     console.log(a, b);
//     return a * b;
//   };
// }
// function dividedBy(b) {
//   return function (a) {
//     return Math.floor(a / b);
//   };
// }

// console.log(seven(times(five())));

// seven;

// function chooseBestSum(t, k, ls) {

// }
// var ts = [50, 55, 56, 57, 58]
// chooseBestSum(163, 3, ts)

// const dr = `/+1-541-754-3010 156 Alphand_St. <J Steeve>
// 133, Green, Rd. <E Kustur> NY-56423 ;+1-541-914-3010
// +1-541-984-3012 <P Reed> /PO Box 530; Pollocksville, NC-28573
// :+1-321-512-2222 <Paul Dive> Sequoia Alley PQ-67209
// +1-741-984-3090 <Peter Reedgrave> _Chicago
// :+1-921-333-2222 <Anna Stevens> Haramburu_Street AA-67209
// +1-111-544-8973 <Peter Pan> LA
// +1-921-512-2222 <Wilfrid Stevens> Wild Street AA-67209
// <Peter Gone> LA ?+1-121-544-8974
// <R Steell> Quora Street AB-47209 +1-481-512-2222
// <Arthur Clarke> San Antonio $+1-121-504-8974 TT-45120
// <Ray Chandler> Teliman Pk. !+1-681-512-2222! AB-47209,
// <Sophia Loren> +1-421-674-8974 Bern TP-46017
// <Peter O'Brien> High Street +1-908-512-2222; CC-47209
// <Anastasia> +48-421-674-8974 Via Quirinal Roma
// <P Salinger> Main Street, +1-098-512-2222, Denver
// <C Powel> *+19-421-674-8974 Chateau des Fosses Strasbourg F-68000
// <Bernard Deltheil> +1-498-512-2222; Mount Av.  Eldorado
// +1-099-500-8000 <Peter Crush> Labrador Bd.
// +1-931-512-4855 <William Saurin> Bison Street CQ-23071
// <P Salinge> Main Street, +1-098-512-2222, Denve`;

// // console.log(dr.split(/\n/g));

// function phone(strng, num) {
//   let data = strng.split(/\n/g);
//   let found = [];

//   data.forEach((e) => {
//     if (e.match(new RegExp(/.?\d?.?\d{2,3}.?\d{3}.?\d{4}/, "g"))) {
//       console.log(e);
//     }
//   });
// }

// phone(dr, "48-421-674-8974");

// function chooseBestSum(t, k, ls) {
//   let possibleCombo = [];

// }

// var ts = [50, 55, 56, 57, 58];
// chooseBestSum(163, 3, ts);

// function subset(arra, arra_size) {
//   var result_set = [],
//     result;

//   for (var x = 0; x < Math.pow(2, arra.length); x++) {
//     result = [];
//     i = arra.length - 1;
//     do {
//       if ((x & (1 << i)) !== 0) {
//         result.push(arra[i]);
//       }
//     } while (i--);

//     if (result.length >= arra_size) {
//       result_set.push(result);
//     }
//   }

//   return result_set;
// }

// function chooseBestSum(t, k, ls) {
//   let combination = subset(ls, k).filter((e) => e.length === k);
//   // let totalCombo = combination.map((e) => e.reduce((a, b) => a + b)).sort();
//   let totalCombo = [];
//   for (let i = 0; i < combination.length; i++) {
//     let tmp = 0;
//     for (let j = 0; j < combination[i].length; j++) {
//       tmp += combination[i][j];
//     }
//     totalCombo.push(tmp);
//   }
//   let closest = 0;
//   totalCombo = totalCombo.sort();
//   totalCombo.forEach((e) => {
//     if (e <= t) {
//       closest = e;
//     }
//   });
//   return closest == 0 ? null : closest;
// }

// // console.log(totalCombo);
// // console.log(combination);

// var ts = [91, 74, 73, 85, 73, 81, 87];
// console.log(chooseBestSum(230, 3, ts));
// // console.log(subset(ts, 3).filter((e) => e.length === 3));

// function getPermutations(array, size) {

//   function p(t, i) {
//       if (t.length === size) {
//           result.push(t);
//           return;
//       }
//       if (i + 1 > array.length) {
//           return;
//       }
//       p(t.concat(array[i]), i + 1);
//       p(t, i + 1);
//   }

//   var result = [];
//   p([], 0);
//   return result;
// }

// function chooseBestSum(t, k, ls) {
// let combination = getPermutations(ls, k)
// let output = 0;
// for (let i = 0; i < combination.length; i++) {
//   let total = 0;
//   for (let j = 0; j < combination[i].length; j++) {
//     total += combination[i][j];
//   }
//   if(total <= t && total > output){
//     output = total
//   }
// }

// return output == 0 ? null : output;
// }

function gcdi(a, b) {
  a = Math.abs(a);
  b = Math.abs(b);
  var temp = 0;
  while (a !== 0) {
    temp = a;
    a = b % a;
    b = temp;
  }
  return b;
}
function lcmu(a, b) {
  return (Math.abs(a) / gcdi(a, b)) * Math.abs(b);
}
function som(a, b) {
  return a + b;
}
function maxi(a, b) {
  return Math.max(a, b);
}
function mini(a, b) {
  return Math.min(a, b);
}
function operArray(fct, arr, init) {
  let output = [];
  for (let i = 1; i <= arr.length; i++) {
    let tmp = [...arr];
    let tmpArr = [];
    tmpArr.push(...tmp.splice(0, i));
    output.push(tmpArr.reduce(fct, init));
  }
  return output;
}

var a = [18, 69, -90, -78, 65, 40];

console.log(operArray(som, a, 0));
