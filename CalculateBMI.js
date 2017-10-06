function bmi(weight, height) {
  var BMI = weight / (height * height)
  if (BMI <= 18.5) { return "Underweight" }
  else if (BMI <= 25) { return "Normal" }
  else if (BMI <= 30) { return "Overweight" }
  else { return "Obese" }
}
