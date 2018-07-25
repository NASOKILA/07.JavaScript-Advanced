
function solve(name, age, weight, height) {

    let heightInMeters = height / 100;
    let BMI = Math.round(weight / (heightInMeters * heightInMeters));
    let status = '';

    if (BMI < 18.5)
        status = 'underweight';
    else if (BMI >= 18.5 && BMI < 25)
        status = 'normal';
    else if (BMI >= 25 && BMI < 30)
        status = 'overweight';
    else
        status = 'obese';

    let personalInfo = {
        age: age,
        weight: weight,
        height: height
    };

    let person = {
        name: name,
        personalInfo: personalInfo,
        BMI: BMI,
        status: status
    };

    if (status === 'obese')
        person['recommendation'] = 'admission required';

    return (person);
}

solve('Peter', 29, 75, 182);
solve('Honey Boo Boo', 9, 57, 137);