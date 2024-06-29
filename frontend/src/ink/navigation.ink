=== start ===
~ planet = shangrila
->shangri_la

=== navigation ===
~ background = empty
~ progress = progress + 1
~ game_state = planet_selection

{
- progress == 1:
    ->band_1
- progress == 2:
    ->band_2
- progress == 3:
    ->band_3
- progress == 4:
    ->final_stage
}
->DONE

=== band_1 ===
*[words_and_worlds:5]
    ->go_to_planet(words_and_worlds)
*[new_nature:5]
    ->go_to_planet(new_nature)
    
=== band_2 ===
*[ways_of_folding_space:5]
    ->go_to_planet(ways_of_folding_space)
*[crafting_new_worlds:5]
    ->go_to_planet(crafting_new_worlds)
    
=== band_3 ===
*[the_monstrous_feminine:5]
    ->go_to_planet(the_monstrous_feminine)
*[new_myths:5]
    ->go_to_planet(new_myths)

=== final_stage ===
*[in_a_new_light:5]
    ->go_to_planet(in_a_new_light)

=== debug_navigation ===
Debug Navigation Panel.
~ game_state = exploring
~get_good_shard()
*[normal route]
    ->navigation
*[paradox_of_paradise]
    ->go_to_planet(paradox_of_paradise)
*[words_and_worlds]
    ->go_to_planet(words_and_worlds)
*[new_nature]
    ->go_to_planet(new_nature)
*[ways_of_folding_space]
    ->go_to_planet(ways_of_folding_space)
*[crafting_new_worlds]
    ->go_to_planet(crafting_new_worlds)
*[the_monstrous_feminine]
    ->go_to_planet(the_monstrous_feminine)
*[new_myths]
    ->go_to_planet(new_myths)
*[in_a_new_light]
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
    ->monstrous_feminine_start
- planet == new_myths:
    ->lastship
- planet == in_a_new_light:
    ->new_light
}








