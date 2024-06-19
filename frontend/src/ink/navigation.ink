=== start ===
~ progress = 0
~ planet = shangrila
->shangri_la

=== navigation ===
~ background = empty
~ progress = progress + 1
Your progress is now {progress}.
Choose a planet.

~ game_state = planet_selection
{
- progress == 1:
    ->first_stage
- progress == 2 && class == Doctor:
    ->second_stage_doctor
- progress == 2 && class == Mechanic:
    ->second_stage_mechanic
- progress == 2 && class == Artist:
    ->second_stage_artist
- progress == 3:
    ->third_stage
}
->DONE

=== first_stage ===
*[paradox_of_paradise:5]
    ->go_to_planet(paradox_of_paradise)
    
=== second_stage_doctor ===
*[words_and_worlds:5]
    ->go_to_planet(words_and_worlds)
*[new_nature:5]
    ->go_to_planet(new_nature)
    
=== second_stage_mechanic ===
*[ways_of_folding_space:5]
    ->go_to_planet(ways_of_folding_space)
*[crafting_new_worlds:5]
    ->go_to_planet(crafting_new_worlds)
    
=== second_stage_artist ===
*[the_monstrous_feminine:5]
    ->go_to_planet(the_monstrous_feminine)
*[new_myths:5]
    ->go_to_planet(new_myths)

=== third_stage ===
*[in_a_new_light:5]
    ->go_to_planet(in_a_new_light)

=== go_to_planet(next) ===
~ planet = next
~ game_state = exploring
{
- planet == paradox_of_paradise:
    ->paradox
- planet == words_and_worlds:
    ->words
- planet == new_nature:
    ->nature
- planet == ways_of_folding_space:
    ->folding_space
- planet == crafting_new_worlds:
    ->crafting
- planet == the_monstrous_feminine:
    ->monstrous
- planet == new_myths:
    ->newmyths
- planet == in_a_new_light:
    ->new_light
}








