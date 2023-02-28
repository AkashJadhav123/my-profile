console.log("*****************************Task-1*****************************");

function voteEligibility(age)
{
if(age>=0 && age<=120 && age!==undefined && age!==null)
  {
    if(age>=18)
    {
        console.log(`The person having age ${age} is elegible for vote`);
    }
    else
    console.log(`The person having age ${age} is not elegible for vote`);
  }
  else
  {
    console.error(`age :${age} is a invalid entry. Make a sense and enter a valid entry for Age.`);
  }
}
voteEligibility(45)
voteEligibility(17)
voteEligibility(8)
voteEligibility(20)
voteEligibility(-10)
voteEligibility(200)
voteEligibility(undefined)
voteEligibility(null)

console.log("*****************************Task-2*****************************");

function gradeCalculation(marks)
{
  var type=typeof marks
  if (marks<=0 || marks>100 || type==='string' || isNaN(marks) || marks==null)
  {
    
    if(type==='string')
    {
      console.error(`Please enter the Number value Not a string`)
    }
    else
    {
    console.error(`${marks} is not considered as a valid marks Please enter valid marks`)
    }
  }
  else
  {
    if(marks>=90)
      {
        console.log(`${marks} are the fantastic marks, your grade is 'A+'`);
      }
      else if(marks>=75 && marks<90)
      {
      console.log(`${marks} are the Excellent marks, your grade is 'A'`);
      }
      else if (marks>=50 && marks<75)
      {
        console.log(`${marks} are the good marks, your grade is 'B'`);
      }
      else if(marks>=35 && marks<50)
      {
        console.log(`${marks} are not good marks, your grade is 'c'.Need some improvement`);
      }
      else if(marks>0 && marks<35)
      {
        console.error(`You are failed in this exam..Better luck next time.`);
      }
  }

}gradeCalculation(98)
gradeCalculation(80)
gradeCalculation(90)
gradeCalculation(0)
gradeCalculation(150)
gradeCalculation(-7)
gradeCalculation(35)
gradeCalculation(29)
gradeCalculation(64)
gradeCalculation(49)
gradeCalculation("91")
gradeCalculation('99')
gradeCalculation(NaN)
gradeCalculation(null)







