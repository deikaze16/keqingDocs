# Future Edition Schedule

![Schedule](/img/features/schedule.png)

With this command, you can track the upcomming edition release date.

## Commands
:::info Command
**Format** : __[p]schedule [filters]__

- [p] => prefix (by default it's `a`)
- [filters] => optional
  - c => character
  - s => series
  - w => wishlist amount
  - e => edition
  - --released => characters that already released
  - o:w => sort by wishlist, if you want to use it, put this before any other filters

**Example** : 
- aschedule
- aschedule c=sinon s=sword
- aschedule e=5
- aschedule o=w e=5
- aschedule e=5 w>1000  
- aschedule e=5 w>1000 --released
:::