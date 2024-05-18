interface StudentProps {
  firstName: string;
  lastName: string;
  age: number;
  livesInIrvine?: boolean;
  previousOccupation?: string;
}
const student: StudentProps = {
  firstName: 'Enrique',
  lastName: 'Canel',
  age: 25,
};

const fullName: string = student.firstName + ' ' + student.lastName;
console.log(fullName);
student.livesInIrvine = false;
student.previousOccupation = 'Manufacturing engineer';
console.log('Lives in irvine ', student.livesInIrvine);
console.log('Previous occupation ', student.previousOccupation);
console.log('The student is ', student);
console.log('typeof student', typeof student);

interface Vehicle {
  make: string;
  model: string;
  year: number;
  color?: string;
  isConvertible?: boolean;
}

const vehicle: Vehicle = {
  make: 'Toyota',
  model: 'Supra',
  year: 2023,
};
vehicle['color'] = 'white';
vehicle['isConvertible'] = false;
console.log('The vehicle is', vehicle['color']);
console.log('isConvertible: ', vehicle['isConvertible']);
console.log('value of vehicle ', vehicle);
console.log('typeof vehicle', typeof vehicle);

interface Pet {
  name?: string;
  kind?: string;
}
const pet: Pet = {
  name: 'Opey',
  kind: 'pitbull',
};
delete pet.name;
delete pet['kind'];
console.log('the pet is ', pet);
console.log('typeof pet ', typeof pet);
