class fighter
{
    constructor(strength,cunning,speed,fatigue)
    {
        this.strength = strength;
        this.cunning = cunning;
        this.speed = speed;
        this.fatigue = fatigue;
    }
    GetStrength()
    {
        return this.strength;
    }
    GetCunning()
    {
        return this.cunning;
    }
    GetSpeed()
    {
        return this.speed;
    }
    GetFatigue()
    {
        return this.fatigue;
    }
    AddStrength(input)
    {
        this.strength += input;
    }
    AddCunning(input)
    {
        this.cunning += input;
    }
    AddSpeed(input)
    {
        this.speed += input;
    }
    AddFatigue(input)
    {
        this.fatigue += input;
    }
    Action(YourFatigue)
    {
        let amount = 0;
        amount = parseInt(Math.random() * 2);
        if ((YourFatigue < 0) || (YourFatigue < this.GetFatigue()))
        {
            return "finishing move";
        }
        else if(amount == 0)
        {
            return "attack";
        }
        else
        {
            return "defend";
        }
    }
    FinishingMove(EnemyFatigue)
    {
        if ((EnemyFatigue < 0) || (EnemyFatigue < this.GetFatigue()/2))
        {
            let amount = 0;
            amount = parseInt(Math.random() * 3) + 1;
            amount = parseInt((this.GetStrength() + this.GetSpeed())/amount);
            if(amount > 0)
            {
                return true;
            }
            else{
                return false;
            }
        }
    }
    Attack()
    {
        let amount = 0;
        amount = parseInt(Math.random() * 3) + 1;
        amount = parseInt((this.GetStrength() + this.GetSpeed() + this.GetCunning())/amount);
        return amount;
    }
    Defend()
    {
        let amount = 0;
        amount = (this.GetSpeed() + this.GetCunning());
        return amount;
    }
}
