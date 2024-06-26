=== character_select ===
~ game_state = character_selection
*[Artist]
    ~ set_class(Artist)
    ~game_state = exploring
    ->->
*[Doctor]
    ~ set_class(Doctor)
    ~game_state = exploring
    ->->
*[Mechanic]
    ~ set_class(Mechanic)
    ~game_state = exploring
    ->->