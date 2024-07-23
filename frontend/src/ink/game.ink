INCLUDE planets/words_and_worlds.ink
INCLUDE planets/new_nature.ink
INCLUDE planets/paradox_of_paradise.ink
INCLUDE planets/ways_of_folding_space.ink
INCLUDE planets/crafting_new_worlds.ink
INCLUDE planets/the_monstrous_feminine.ink
INCLUDE planets/new_myths.ink
INCLUDE planets/in_a_new_light.ink
INCLUDE planets/shangrila.ink
INCLUDE player/variables.ink
INCLUDE player/inventory.ink
INCLUDE test/debug.ink
INCLUDE player/battle.ink
INCLUDE globals.ink
INCLUDE navigation.ink
INCLUDE player/shard.ink

+[debug]
    ->tester
+[game]
    ->start

=== tester ===
Welcome, Tester.
+[Debug]
    ->character_select ->
    ->name_input ->
    ~ planet = shangrila
    ~get(torch)
    ->debug_navigation
+[Skip Intro]
    ->character_select ->
    ->name_input ->
    ~planet = shangrila
    ~get(torch)
    ->navigation
+[Tutorial]
    ->character_select ->
    ~ planet = shangrila
    ~ get(torch)
    Open the tutorial.
    ->screenlayoutintroduction
+[Endings]
    ->test_endings
    
=== test_endings ===
+[Sheep Ending]
    Press one more time to end.
    ~ending = ending_sheep
    ->DONE
+[Forget Ending]
    Press one more time to end.
    ~ending = ending_forget
    ->DONE
+[Travel Ending]
    Press one more time to end.
    ~ending = ending_travel
    ->DONE
+[Wake Shangrila Ending]
    Press one more time to end.
    ~ending = ending_wake
    ->DONE
+[From Beginning]
    ->start
    