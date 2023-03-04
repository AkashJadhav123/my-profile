function factorialOfWordsCount(str)
{
    let factorial=1;
    if(str==null || str==undefined || str=="")
    {
        return `You entered '${str}'.Provide a valid string to check factorial of total words count`
    }
    
    else
    {
    let totalWords=str.split(" ")
    //console.log(totalWords.length);
    for(let i=1;i<=totalWords.length;i++)
    {
        factorial=factorial*i;
    }
    console.log("Total no of words count in string ","'",str,"'","is :",totalWords.length);
    return `Factorial of ${totalWords.length} is : ${factorial}`
    }
}
console.log(factorialOfWordsCount("Revision is the mother of success"));
console.log("---------------------------------------------------");
console.log(factorialOfWordsCount("We never fail,we always learn"));
console.log("---------------------------------------------------");
console.error(factorialOfWordsCount(null));
console.log("---------------------------------------------------");
console.error(factorialOfWordsCount(""));
console.log("---------------------------------------------------");
console.error(factorialOfWordsCount("Akash Jalindar Jadhav"));

