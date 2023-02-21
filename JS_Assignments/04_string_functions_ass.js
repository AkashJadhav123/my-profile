var string="   Hey you are doing good, keep it up   ";
function stringHandsOn()
{
    console.log("**********************Task-1**********************");
    console.log("String = ",string);
    console.log("Length of the strinig is =",string.length);
    
    console.log("**********************Task-2**********************");
    var stringAfterTrim=string.trim();
    var len=stringAfterTrim.length;
    console.log("length of string after triming is :",stringAfterTrim.length);

    console.log("**********************Task-3**********************");
    var removedSpaces= string.length - stringAfterTrim.length;
    console.log("count of extra spaces removed after trim() is :",removedSpaces);

    console.log("**********************Task-4**********************");
    var firstChar=stringAfterTrim.charAt(0);
    var lastChar=stringAfterTrim.charAt(len-1);
    console.log("First character of given string is :",firstChar,"& Last character of string is :",lastChar);
    
    console.log("**********************Task-5**********************");
    var countOfWords=stringAfterTrim.split(" ");
    console.log("those words are=",countOfWords," Count of words after split =",countOfWords.length);
    console.log("Index no of 'good' word=",stringAfterTrim.indexOf("good"));

    console.log("**********************Task-6**********************");
    var subString = stringAfterTrim.substring(22);
    console.log("Substring using substring() method :",subString);
    var subSlice=stringAfterTrim.slice(22);
    console.log("substrig using slice() method :",subSlice);

    console.log("**********************Task-7**********************");
    console.log("Check whether string ends with word 'up' ",stringAfterTrim.endsWith("up"));
    console.log("Check whether string starts with word 'Hey' ",stringAfterTrim.startsWith("Hey"));
}stringHandsOn()