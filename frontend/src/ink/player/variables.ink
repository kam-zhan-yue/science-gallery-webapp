VAR name = "Hero"
VAR health = 0
LIST class = (none), Artist, Doctor, Mechanic
VAR finesse = 0
VAR persuasion = 0
VAR intuition = 0

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
    
=== name_input ===
~ game_state = name_select
*[done]
    ~game_state = exploring
    ->->
    
=== function set_name(x) ===
~ name = x

=== function set_class(x) ===
~ class = x

{ class == Artist:
    ~ health = 100
    ~ finesse = 2
    ~ persuasion = 1
    ~ intuition = 2
    ~ get(artist_item)
}

{ class == Doctor:
    ~ health = 100
    ~ finesse = 2
    ~ persuasion = 0
    ~ intuition = 1
    ~ get(doctor_item)
}

{ class == Mechanic:
    ~ health = 100
    ~ finesse = 1
    ~ persuasion = 0
    ~ intuition = 2
    ~ get(mechanic_item)
}

=== function add_health(x) ===
~ health = health + x