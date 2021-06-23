// Your code goes here!
import * as Helpers from "./percentage.js";

import { fixRoundingErrors, calculateAspectRatio } from "./aspect-ratio.js";


// M O D U L O
const modulo1 = document.querySelector("#modulo_1");
const modulo2 = document.querySelector("#modulo_2");
const moduloResult = document.querySelector("#modulo_result");

modulo1.addEventListener("change", () => {
    moduloResult.value = fixRoundingErrors(Helpers.modulo(modulo1.value, modulo2.value));
});
modulo2.addEventListener("change", () => {
    moduloResult.value = fixRoundingErrors(Helpers.modulo(modulo1.value, modulo2.value));
});


// P E R C E N T A G E
const percentage1 = document.querySelector("#percentage_1");
const percentage2= document.querySelector("#percentage_2");
const percentageResult = document.querySelector("#percentage_result");

percentage1.addEventListener("change", () => {
    percentageResult.value = fixRoundingErrors(Helpers.percentage(percentage1.value, percentage2.value));
});
percentage2.addEventListener("change", () => {
    percentageResult.value = fixRoundingErrors(Helpers.percentage(percentage1.value, percentage2.value));
});


// P E R C E N T A G E --  O F
const percentageOf1 = document.querySelector("#percentageOf_1");
const percentageOf2= document.querySelector("#percentageOf_2");
const percentageOfResult = document.querySelector("#percentageOf_result");

percentageOf1.addEventListener("change", () => {
    percentageOfResult.value = fixRoundingErrors(Helpers.percentageOf(percentageOf1.value, percentageOf2.value));
});
percentageOf2.addEventListener("change", () => {
    percentageOfResult.value = fixRoundingErrors(Helpers.percentageOf(percentageOf1.value, percentageOf2.value));
});



// D I F F E R E N C E
const difference1 = document.querySelector("#difference_1");
const difference2 = document.querySelector("#difference_2");
const differenceResult = document.querySelector("#difference_result");

difference1.addEventListener("change", () => {
    differenceResult.value = fixRoundingErrors(Helpers.difference(difference1.value, difference2.value));
});
difference2.addEventListener("change", () => {
    differenceResult.value = fixRoundingErrors(Helpers.difference(difference1.value, difference2.value));
});


// A S P E C T -- R A T I O
const ratio1 = document.querySelector("#ratio_1");
const ratio2 = document.querySelector("#ratio_2");
const ratioWidthResult = document.querySelector("#ratio_result-width");
const ratioHeightResult = document.querySelector("#ratio_result-height");

ratioWidthResult.addEventListener("change", () => {
    ratioHeightResult.value = calculateAspectRatio(ratio1.value, ratio2.value, ratioWidthResult.value, "w");
});
ratioHeightResult.addEventListener("change", () => {
    ratioWidthResult.value = calculateAspectRatio(ratio1.value, ratio2.value, ratioHeightResult.value, "h");
});



///////////////// 
//Alternative aspect ratio:

// const form = document.querySelector("#aspect-form");
// form.addEventListener("change", (e) => {
// const ratio1 = document.querySelector("#ratio_1");
// const ratio2 = document.querySelector("#ratio_2");
// const ratioWidthResult = document.querySelector("#ratio_result-width");
// const ratioHeightResult = document.querySelector("#ratio_result-height");

// let result;
// switch (e.target) {
//     case ratioWidthResult:
//       result = calculateAspectRatio(ratio1, ratio2, e.target.value, "w");
//       ratioHeightResult.value = result;
//        break;
//     case ratioHeightResult:
//        result = calculateAspectRatio(ratio1, ratio2, e.target.value, "h");
//        ratioWidthResult.value = result;
//        break;
//     default:
//         ratioWidthResult.value = "";
//         ratioHeightResult.value = "";

//    }

// });
