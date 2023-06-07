function weekDAy(day) 
{
    switch (day) {
        case 1:
            console.log(`day of the week ${day} is: Monday`);
            break;
        case 2:
            console.log(`day of the week ${day} is: Tueseday`);
            break;
        case 3:
            console.log(`day of the week ${day} is: Wednesday`);
            break;
        case 4:
            console.log(`day of the week ${day} is: Thursday`);
            break;
        case 5:
            console.log(`day of the week ${day} is: Friday`);
            break;
        case 6:
            console.log(`day of the week ${day} is: Saturday`);
            break;
        case 7:
            console.log(`day of the week ${day} is: Sunday`);
            break;
        default:
            console.log(`Invalid day :${day}`);
            break;
    }
}
weekDAy(5)
weekDAy(7)
weekDAy(null)
weekDAy(1)
weekDAy(-3)   
