// "use strict";
// //1-masala
// // Constraints 0<n,ar[i]<=1000  ar = [1, 2, 3, 4, 10, 11]  bolganda hammsini qoshiladi va uni javobi 31 chiqish kerak yani sonlarni qoshdigon funcsiya yozish kerak
// import { WriteStream, createWriteStream } from "fs";
// process.stdin.resume();
// process.stdin.setEncoding("utf-8");

// let inputString: string = "";
// let inputLines: string[] = [];
// let currentLine: number = 0;

// process.stdin.on("data", function (inputStdin: string): void {
//   inputString += inputStdin;
// });

// process.stdin.on("end", function (): void {
//   inputLines = inputString.split("\n");
//   inputString = "";

//   main();
// });

// function readLine(): string {
//   return inputLines[currentLine++];
// }

// function simpleArraySum(ar: number[]): number {
//   let sum = 0;
//   for (let i = 0; i < ar.length; i++) {
//     sum += ar[i];
//   }
//   return sum;
// }

// function main() {
//   const ws: WriteStream = createWriteStream(process.env["OUTPUT_PATH"]);

//   const arCount: number = parseInt(readLine().trim(), 10);

//   const ar: number[] = readLine()
//     .replace(/\s+$/g, "")
//     .split(" ")
//     .map((arTemp) => parseInt(arTemp, 10));

//   const result: number = simpleArraySum(ar);

//   ws.write(result + "\n");

//   ws.end();
// }

// //2-masala

// // Constraints  1<=n, m<=10  1<=a[i]<=100 1<=b[j]<=100  bunda inputga 2 3
// // 2 4
// // 16 32 96  manashu sonlar kiritiladi va output 3 bolishi kerak

// ("use strict");

// import { WriteStream, createWriteStream } from "fs";
// process.stdin.resume();
// process.stdin.setEncoding("utf-8");

// let inputString: string = "";
// let inputLines: string[] = [];
// let currentLine: number = 0;

// process.stdin.on("data", function (inputStdin: string): void {
//   inputString += inputStdin;
// });

// process.stdin.on("end", function (): void {
//   inputLines = inputString.split("\n");
//   inputString = "";

//   main();
// });

// function readLine(): string {
//   return inputLines[currentLine++];
// }

// function getTotalX(a: number[], b: number[]): number {
//   let count = 0;
//   const maxA = Math.max(...a);
//   const minB = Math.min(...b);

//   for (let x = maxA; x <= minB; x++) {
//     const divisibleByA = a.every((num) => x % num === 0);
//     const divisibleIntoB = b.every((num) => num % x === 0);

//     if (divisibleByA && divisibleIntoB) {
//       count++;
//     }
//   }
//   return count;
// }

// //saitni savolini tagiga shunde qilib qoyyabdi

// function main() {
//   const ws: WriteStream = createWriteStream(process.env["OUTPUT_PATH"]);

//   const firstMultipleInput: string[] = readLine()
//     .replace(/\s+$/g, "")
//     .split(" ");

//   const n: number = parseInt(firstMultipleInput[0], 10);
//   const m: number = parseInt(firstMultipleInput[1], 10);

//   const arr: number[] = readLine()
//     .replace(/\s+$/g, "")
//     .split(" ")
//     .map((arrTemp) => parseInt(arrTemp, 10));

//   const brr: number[] = readLine()
//     .replace(/\s+$/g, "")
//     .split(" ")
//     .map((brrTemp) => parseInt(brrTemp, 10));

//   const total: number = getTotalX(arr, brr);

//   ws.write(total + "\n");

//   ws.end();
// }

// //3-masala
// //Constraints 1<=n<=1000 0<=scores[i]<=10sakkizinchi darajasi inputga
// //10 5 20 20 4 5 2 25 1 kiritiladi va outputga 2 4 chishi lozim

// "use strict";

// import { WriteStream, createWriteStream } from "fs";
// process.stdin.resume();
// process.stdin.setEncoding("utf-8");

// let inputString: string = "";
// let inputLines: string[] = [];
// let currentLine: number = 0;

// process.stdin.on("data", function (inputStdin: string): void {
//   inputString += inputStdin;
// });

// process.stdin.on("end", function (): void {
//   inputLines = inputString.split("\n");
//   inputString = "";

//   main();
// });

// function readLine(): string {
//   return inputLines[currentLine++];
// }

// function breakingRecords(scores: number[]): number[] {
//   let highest = scores[0];
//   let lowest = scores[0];
//   let highBreaks = 0;
//   let lowBreaks = 0;

//   for (let i = 1; i < scores.length; i++) {
//     if (scores[i] > highest) {
//       highest = scores[i];
//       highBreaks++;
//     } else if (scores[i] < lowest) {
//       lowest = scores[i];
//       lowBreaks++;
//     }
//   }

//   return [highBreaks, lowBreaks];
// }

// function main() {
//   const ws: WriteStream = createWriteStream(process.env["OUTPUT_PATH"]);

//   const n: number = parseInt(readLine().trim(), 10);

//   const scores: number[] = readLine()
//     .replace(/\s+$/g, "")
//     .split(" ")
//     .map((scoresTemp) => parseInt(scoresTemp, 10));

//   const result: number[] = breakingRecords(scores);

//   ws.write(result.join(" ") + "\n");

//   ws.end();
// }

//4-masala

// //Constraints 0<n<=100 input ga 6 yozilsa     #
// // ##
// // ###
// // ####
// // #####
// // ###### ushbu tartibda output chiqishi kerak

// "use strict";

// process.stdin.resume();
// process.stdin.setEncoding("utf-8");

// let inputString: string = "";
// let inputLines: string[] = [];
// let currentLine: number = 0;

// process.stdin.on("data", function (inputStdin: string): void {
//   inputString += inputStdin;
// });

// process.stdin.on("end", function (): void {
//   inputLines = inputString.split("\n");
//   inputString = "";

//   main();
// });

// function readLine(): string {
//   return inputLines[currentLine++];
// }

// /*
//  * Complete the 'staircase' function below.
//  *
//  * The function accepts INTEGER n as parameter.
//  */

// function staircase(n: number): void {
//   for (let i = 1; i <= n; i++) {
//     const a = " ".repeat(n - i);
//     const b = "#".repeat(i);
//     console.log(a + b);
//   }
// }

// function main() {
//   const n: number = parseInt(readLine().trim(), 10);

//   staircase(n);
// }

// //5-masala
// //Constraints 1<=arr[i]<=10 toqqzinchi darajasi agar inputga  1 2 3 4 5 kiritilsa output 10 va 14 chiqsin

// 'use strict';

// process.stdin.resume();
// process.stdin.setEncoding('utf-8');

// let inputString: string = '';
// let inputLines: string[] = [];
// let currentLine: number = 0;

// process.stdin.on('data', function(inputStdin: string): void {
//     inputString += inputStdin;
// });

// process.stdin.on('end', function(): void {
//     inputLines = inputString.split('\n');
//     inputString = '';

//     main();
// });

// function readLine(): string {
//     return inputLines[currentLine++];
// }

// /*
//  * Complete the 'miniMaxSum' function below.
//  *
//  * The function accepts INTEGER_ARRAY arr as parameter.
//  */

// function miniMaxSum(arr: number[]): void {
//     const totalSum = arr.reduce((acc, val) => acc + val, 0);
//     const minVal = Math.min(...arr);
//     const maxVal = Math.max(...arr);
//     const minSum = totalSum - maxVal;
//     const maxSum = totalSum - minVal;
//     console.log(minSum, maxSum);
// }

// function main() {

//     const arr: number[] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

//     miniMaxSum(arr);
// }
