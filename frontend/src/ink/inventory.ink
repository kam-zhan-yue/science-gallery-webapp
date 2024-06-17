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

=== shop_test ===
MERCHANT: Welcome to the shop! what can I get for you today?
->shop_loop

=== shop_loop ===
    *[Teddy Bear]
        ~ get(teddy_bear)
        You have obtained a teddy bear.
        ->shop_next
    *[Literally Excalibur]
        ~ get(excalibur)
        You have obtained excalibur
        ->shop_next
    *[Seed of Life]
        ~ get(seed_of_life)
        You have obtained the seed of life
        ->shop_next
    *[Holy Water]
        ~ get(holy_water)
        You have obtained holy water
        ->shop_next
    +[Just looking.]
        MERCHANT: Thanks!
        ->->

=== shop_next ===
Anything else?
->shop_loop
    
=== use_test ===
You are brought to the Mistress of the Lake.
MISTRESS: Give me which that I seek and I will reward you accordingly.

{inventory ? excalibur:
    // Glues this line to the previous
    <>.. I sense a powerful force in your hands.
}

{inventory ? excalibur:
    ->mistress_excalibur
- else:
    ->mistress_take_item
}

=== mistress_excalibur === 
    *[Don't give anything (a normal dialogue button)]
        How dare you.
        ->->
    *[Give Excalibur (make this button special)]
        ~take("excalibur")
        A fine specimen. You are now King of Camelot.
        ->->
    *[Choose an item from your inventory (make this button special?)]
        ->mistress_take_item

=== mistress_take_item ===
MISTRESS: Show me what you got.
~ game_state = take_item
    *[{excalibur}]
        ~take("excalibur")
        A fine specimen. You are now King of Camelot.
        ->->
    *[{seed_of_life},{holy_water}]
        // take is called outside of the story
        Hmmm. I will find some use of this.
        ->->
    *[other]
        // take is called outside of the story
        You imbecile.
        ->->

=== function get(x)
    ~ inventory += x
