

function getGrade() {
//Collecting marks input.
    const marks = prompt("Enter Marks")
    if (marks <= 100 && marks > 0) {
        let grade

        if (marks > 79) {
            grade = 'A'
        } else if (marks > 59) {
            grade = 'B-'
        } else if (marks > 48) {
            grade = 'C-'
        } else if (marks > 39) {
            grade = 'D' 
        } else if(marks < 40) {
            grade = 'E'
        }
        return alert(grade);
 }

}
getGrade();