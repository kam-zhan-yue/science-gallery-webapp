LIST inventory = (empty_shard), teddy_bear, excalibur, seed_of_life, holy_water

=== shop_test ===
MERCHANT: Welcome to the shop! what can I get for you today?
->shop_loop

=== shop_loop ===
    *[Teddy Bear]
        You have obtained a teddy bear.
        ~ get(teddy_bear)
        ->shop_next
    *[Literally Excalibur]
        You have obtained excalibur
        ~ get(excalibur)
        ->shop_next
    *[Seed of Life]
        You have obtained the seed of life
        ~ get(seed_of_life)
        ->shop_next
    *[Holy Water]
        You have obtained holy water
        ~ get(holy_water)
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
        ~take(excalibur)
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
    
=== function take(x)
    ~ inventory -= x