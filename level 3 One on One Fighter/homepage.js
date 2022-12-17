function Modify(stat,pos)
{
    var rdm = 0;
    if(pos == true)
    {
        if(stat == "strength")
        {
            rdm = parseInt(Math.random() * 2);
            return rdm;
        }
        if(stat == "cunning")
        {
            rdm = parseInt(Math.random() * 2);
            return rdm;
        }
        if(stat == "speed")
        {
            rdm = parseInt(Math.random() * 2);
            return rdm;
        }
        if(stat == "fatigue")
        {
            rdm = parseInt(Math.random() * 7);
            return rdm;
        }
    }
    else{
        if(stat == "strength")
        {
            rdm = -parseInt(Math.random() * 2);
            return rdm;
        }
        if(stat == "cunning")
        {
            rdm = -parseInt(Math.random() * 2);
            return rdm;
        }
        if(stat == "speed")
        {
            rdm = -parseInt(Math.random() * 2);
            return rdm;
        }
        if(stat == "fatigue")
        {
            rdm = -parseInt(Math.random() * 7);
            return rdm;
        }
    }
}
function WhichStat()
{
    var rdm = 0;
    rdm = parseInt(Math.random() * 4) + 1;
    if (rdm == 1)
    {
        return "strength";
    }
    if (rdm == 2)
    {
        return "cunning";
    }
    if (rdm == 3)
    {
        return "speed";
    }
    if (rdm == 4)
    {
        return "fatigue";
    }
}

