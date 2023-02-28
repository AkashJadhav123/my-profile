function tcsEligibility(gradScore,hscScore,sscScore,candidatename)
{
   if( gradScore >= 70 || hscScore >=80 || sscScore > 90 )
    {
    console.log( `Congracts "${candidatename}" you are eligible for "TCS" interview`)
    } 
    else
    { 
        console.error(`Unfortunately you are not eligible for interview`);
    }
}
tcsEligibility(80,86,90,"AJ")
console.log("--------------------------------------------");
tcsEligibility(70,65,55,"Mayur")
console.log("--------------------------------------------");
tcsEligibility(60,79,88,"Nitin")