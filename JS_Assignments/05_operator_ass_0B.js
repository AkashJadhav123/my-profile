console.log("************************Task-1************************");

function maleMarriageEligibility(gender,age,name)
{
    return gender == 'Male' && age>=21 ? `Hey "${name}" you are eligible for marriage.` : `Hey "${name}" you are not eligible for marriage.`;
}
console.log( maleMarriageEligibility("Male",25,"Billlgates"));
console.log("--------------------------------------------");
console.log( maleMarriageEligibility("Male",17,"Stew Jobs"));


console.log("************************Task-2************************");

function femaleMarriageAbility(gender,age,name)
{
    return gender== 'Female' && age >=18 ? `Hey "${name}" you are eligible for Marriage.`: `Hey "${name}" you are not eligible for Marriage.`
}
console.log( femaleMarriageAbility("Female",16,"Jenifer"));
console.log("--------------------------------------------");
console.log( femaleMarriageAbility("Female",27,"Malinda Gates"));
