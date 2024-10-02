=== start ===
~ planet = shangrila
->shangri_la

=== navigation ===
~ background = empty
~ music = silent
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
*[words_and_worlds:0110]
    ->go_to_planet(words_and_worlds)
*[new_nature:1122]
    ->go_to_planet(new_nature)
    
=== band_2 ===
*[ways_of_folding_space:1407]
    ->go_to_planet(ways_of_folding_space)
*[crafting_new_worlds:0710]
    ->go_to_planet(crafting_new_worlds)
    
=== band_3 ===
*[the_monstrous_feminine:1804]
    ->go_to_planet(the_monstrous_feminine)
*[new_myths:0608]
    ->go_to_planet(new_myths)

=== final_stage ===
*[in_a_new_light:5]
    ~progress = progress + 1
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



=== debug_navigation ===
~ game_state = exploring
~get_good_shard()
Debug Navigation Panel.
+[Band 1]
    ->debug_band_1
+[Band 2]
    ->debug_band_2
+[Band 3]
    ->debug_band_3
+[New Light]
    ->go_to_planet(in_a_new_light)


=== debug_band_1 ===
Band 1
*[Words and Worlds]
    ->go_to_planet(words_and_worlds)
*[New Nature]
    ->go_to_planet(new_nature)
    
=== debug_band_2 ===
Band 2
*[Ways of Folding Space]
    ->go_to_planet(ways_of_folding_space)
*[Crafting New Worlds]
    ->go_to_planet(crafting_new_worlds)
    
=== debug_band_3 ===
Band 3
*[The Monstrous Feminine]
    ->go_to_planet(the_monstrous_feminine)
*[New Myths]
    ->go_to_planet(new_myths)

