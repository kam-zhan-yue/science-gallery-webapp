LIST inventory = (empty_shard), teddy_bear, excalibur, seed_of_life, holy_water

=== shop_test ===
MERCHANT: Welcome to the shop! what can I get for you today?
->shop_loop

=== shop_loop ===
MERCHANT: Anything else?
    *[Teddy Bear]
        You have obtained a teddy bear.
        ~ get(teddy_bear)
        ->shop_loop
    *[Literally Excalibur]
        You have obtained excalibur
        ~ get(excalibur)
        ->shop_loop
    *[Seed of Life]
        You have obtained the seed of life
        ~ get(seed_of_life)
        ->shop_loop
    *[Holy Water]
        You have obtained holy water
        ~ get(holy_water)
        ->shop_loop
    +[Just looking.]
        MERCHANT: Thanks!
        ->->
    
=== use_test ===
You are brought to the Mistress of the Lake.
MISTRESS: Give me which that I seek and I will reward you accordingly.
{inventory ? excalibur:
    <>MISTRESS: I sense a powerful force in your hands.
}
    *[{excalibur}]
        A fine specimen. You are now King of Camelot.
        ->->
    *[{seed_of_life},{holy_water}]
        Hmmm. I will find some use of this.
        ->->
    *[other]
        You imbecile.
        ->->

=== function get(x)
    ~ inventory += x