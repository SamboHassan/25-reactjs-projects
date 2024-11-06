arr = [2,3,4,5,6,7]

// UNPURE FUNCTION
function doubleVals(arr){
	for(var i = 0; i < arr.length; i++){
		arr[i] = arr[i] * 2
	}
	return arr 
}


// PURE FUNCTION
//because it returns a new arr. 
//Does not modify the original
function doubleVals2(arr) {
  return arr.map(v => v * 2);
}

result = doubleVals2(arr)
console.log(result)
console.log(arr)


// Not a Pure function
var person = {id: 53, name: "Tim"};

function addJob(job){
  person.job = job;
}

addJob("Instructor");


// Pure function
var person = {id: 53, name: "Tim"};

function addJob(personObj, job){
  return Object.assign({}, perosnObj, {job});
}

addJob(person, "Instructor");

var person = {id: 53, name: "Tim"};
function addJob(personObj, job){
  return {...personObj, job}; 
}
addJob(person, "Instructor");


// What does this have to do with React?
// All changes to this.state

// should be pure