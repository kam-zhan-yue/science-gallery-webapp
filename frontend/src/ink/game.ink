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
INCLUDE test/earth.ink
INCLUDE test/jupiter.ink
INCLUDE test/debug.ink
INCLUDE player/battle.ink
INCLUDE globals.ink
INCLUDE navigation.ink
INCLUDE test/shop.ink



*[Debug]
    ->debug_story(Doctor)
*[From Beginning]
    ->prologue


=== debug_story(class_type) ===
~ set_class(class_type)
-> navigation


=== universe_story ===
~ background = empty
Where shall we go today?
~ game_state = planet_selection
    // the planet name must correspond to the planet id
    * [new_myths:1234]
        ~ game_state = exploring
        ~ planet = new_myths
        ->newmyths
    * [debug:1111]
        ~ game_state = exploring
        ~ planet = debug
        -> earth_story
    * [DONE]
        Okay, let's call it a day!
        -> END
        
-> END