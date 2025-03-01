let numeroUn = 1;
let stringUn = "1";
let numeroTreinta = 30;
let stringTreinta = "30";
let numeroDiez = 10;
let stringDiez = "10";

numeroUn == stringUn
  ? console.log(
      "numeroUn y stringUn son iguales pero de diferente tipo de elemento"
    )
  : console.log("Las variables numeroUn y stringUn no tienen el mismo valor");

numeroTreinta === stringTreinta
  ? console.log(
      "numeroTreinta y stringTreinta son iguales en valor y tipo de elemento"
    )
  : console.log(
      "Las variables numeroTreinta y stringTreinta no tienen el mismo tipo"
    );

numeroDiez == stringDiez
  ? console.log(
      "numeroDiez y stringDiez son iguales pero de diferente tipo de elemento"
    )
  : console.log(
      "Las variables numeroDiez y stringDiez no tienen el mismo valor"
    );
