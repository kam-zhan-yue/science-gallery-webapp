INCLUDE globals.ink
INCLUDE battle.ink
INCLUDE earth.ink
INCLUDE jupiter.ink
INCLUDE player.ink
INCLUDE inventory.ink

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
    * [Conspiracy Theorist]
        -> chosen(ConspiracyTheorist)
    * [Artist]
        -> chosen(Artist)

=== chosen(class_type) ===
~ set_class(class_type)
-> universe_story


=== universe_story ===
Where shall we go today?
~ game_state = planet_selection
    * [Earth:1111]
        ~ game_state = exploring
        ~ planet = earth
        -> earth_story
    * [Jupiter:2222]
        ~ game_state = exploring
        ~ planet = jupiter
        -> jupiter_story
    * [DONE]
        Okay, let's call it a day!
        -> END
        
-> END