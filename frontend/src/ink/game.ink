INCLUDE globals.ink
INCLUDE battle.ink
INCLUDE earth.ink
INCLUDE jupiter.ink
INCLUDE player.ink
INCLUDE inventory.ink
INCLUDE newmyths.ink
INCLUDE shangrila.ink

->prologue

=== chosen(class_type) ===
~ set_class(class_type)
-> universe_story


=== universe_story ===
Where shall we go today?
~ game_state = planet_selection
    * [NewMyths:1234]
        ~ game_state = exploring
        ~ planet = new_myths
        ->newmyths
    * [Debug:1111]
        ~ game_state = exploring
        ~ planet = debug
        -> earth_story
    * [DONE]
        Okay, let's call it a day!
        -> END
        
-> END