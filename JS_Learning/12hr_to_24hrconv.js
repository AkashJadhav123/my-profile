var str=''
function time(t)
{
   for(let i=0;i<=t.length-1;i++)
   {
    
    if(t.charAt(i)!=='A'  )
    {
      if(t.charAt(i)!=='P')
      {
         str=t.splice()
       console.log(t.charAt(i));
      }
    }
    else
    {
        console.log('dfg',t.charAt(i));
    }
   }
}
time('10.30PM')