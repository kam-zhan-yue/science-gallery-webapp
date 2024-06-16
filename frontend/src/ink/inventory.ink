// If you wanna add an item, add it to the list and in take()
LIST inventory = (empty_shard), teddy_bear, excalibur, seed_of_life, holy_water, red_shard, blue_shard

// this is a really bad implementation, i'm really sorry, but go with the flow. also please don't change take
=== function take(x)
{ x:
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
