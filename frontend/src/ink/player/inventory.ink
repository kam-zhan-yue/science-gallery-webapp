// If you wanna add an item, add it to the list and in take()
LIST inventory = (none), paint_brush, syringe, wrench, calculator, pen, teddy_bear, excalibur, seed_of_life, holy_water, red_shard, blue_shard

// this is a really bad implementation, i'm really sorry, but go with the flow. also please don't change take
=== function take(x)
{ x:
-"paint_brush":
    ~inventory -= paint_brush
-"syringe":
    ~inventory -= syringe
-"wrench":
    ~inventory -= wrench
-"calculator":
    ~inventory -= calculator
-"pen":
    ~inventory -= pen
-"excalibur": 
    ~inventory -= excalibur
-"teddy_bear":
    ~inventory -= teddy_bear
-"seed_of_life":
    ~inventory -= seed_of_life
-"holy_water":
    ~inventory -= holy_water
-"red_shard":
    ~inventory -= red_shard
-"blue_shard":
    ~inventory -= blue_shard
}

=== function shards() ===
~ return good_shards + bad_shards


=== function get(x)
    ~ inventory += x
