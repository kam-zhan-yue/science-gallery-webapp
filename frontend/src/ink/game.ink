INCLUDE globals.ink
INCLUDE battle.ink
INCLUDE earth.ink
INCLUDE jupiter.ink
INCLUDE player.ink
Hello {name}! Welcome to the adventure.
-> choose

=== choose ===
~ game_state = character_selection
Please choose a class.
    * [Doctor]
        -> chosen(Doctor)
    * [Mechanic]
        -> chosen(Mechanic)
    * [Agent]
        -> chosen(Agent)

=== chosen(class_type) ===
~ set_class(class_type)
-> universe_story


=== universe_story ===
~ game_state = planet_selection
Where shall we go today?
    * [Earth]
        ~ game_state = exploring
        -> earth_story
    * [Jupiter]
        ~ game_state = exploring
        -> jupiter_story
    * [Pluto]
        ~ game_state = exploring
        Pluto isn't a planet, dummy!
        -> universe_story
    * [DONE]
        Okay, let's call it a day!
        -> END
        
-> END