const leapYears = function(yearNumber) {
    if(yearNumber%4==0)
    {
        if(yearNumber%100==0 && yearNumber%400==0)
        {
            return true;
        }
        else if (yearNumber%100==0 && yearNumber%400!=0)
        {
            return false;
        }
        else
        {return true;}
    }
    else
    {
        return false;
    }

};


// Do not edit below this line
module.exports = leapYears;
