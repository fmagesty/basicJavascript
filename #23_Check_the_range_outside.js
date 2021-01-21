// Write an if condition to check that age is NOT between 14 and 90 inclusively.

// Create two variants: the first one using NOT !, the second one – without it.

let age = 91;

if (!(age >= 14 && age <= 90)) {
    alert('Age is not between 14 or 90.')
}

if (age < 14 || age > 90) {
    alert('This is the second variant.')
}