let course1 = document.getElementById("course1");
let course2 = document.getElementById("course2");
let course3 = document.getElementById("course3");
let course4 = document.getElementById("course4");
let course5 = document.getElementById("course5");
let course6 = document.getElementById("course6");
let course7 = document.getElementById("course7");
let course8 = document.getElementById("course8");
let course9 = document.getElementById("course9");
let course10 = document.getElementById("course10");

let cu1 = document.getElementById("cu1");
let cu2 = document.getElementById("cu2");
let cu3 = document.getElementById("cu3");
let cu4 = document.getElementById("cu4");
let cu5 = document.getElementById("cu5");
let cu6 = document.getElementById("cu6");
let cu7 = document.getElementById("cu7");
let cu8 = document.getElementById("cu8");
let cu9 = document.getElementById("cu9");
let cu10 = document.getElementById("cu10");

let grade1 = document.getElementById("grade1");
let grade2 = document.getElementById("grade2");
let grade3 = document.getElementById("grade3");
let grade4 = document.getElementById("grade4");
let grade5 = document.getElementById("grade5");
let grade6 = document.getElementById("grade6");
let grade7 = document.getElementById("grade7");
let grade8 = document.getElementById("grade8");
let grade9 = document.getElementById("grade9");
let grade10 = document.getElementById("grade10");

//BUTTONS
let restartCalcBtn = document.getElementById("restartbtn");
let addCourseBtn = document.getElementById("addcoursebtn");
let calculateCGPA = document.getElementById("calculatebtn");

// ADD COURSE ON ROWS
addCourseBtn.addEventListener("click", showRow1);
addCourseBtn.addEventListener("click", showtable);
function showRow1()
{	
	
	//DATA FROM INPUT
	let courseCode = document.getElementById("course-code");
	let creditUnit = document.getElementById("credit-unit");
	let gradeEarned = document.getElementById("grade-earned");
	
	let courseInputed = courseCode.innerHTML;
	let cuInputed = creditUnit.innerText;
	let gradeEarnedInputed = gradeEarned.innerText;
 	
	course1.textContent = courseInputed;
	cu1.textContent = cuInputed;
	grade1.textContent = gradeEarnedInputed;
	
	alert(course1.textContent);
	alert(cu1.textContent);
	alert(grade1.textContent);
	
}
function showtable()
{
	let table = document.getElementById("course-computation");
	table.style.display = "block";
}
