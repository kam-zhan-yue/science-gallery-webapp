=== jupiter_story ===
~ game_state = exploring
Welcome to Jupiter.
Suddently, you find yourself in the den of a large snake deity.
~ post_battle_success = -> snake_battle_success
~ post_battle_failure = -> snake_battle_failure
-> battle("SNAKE")


=== snake_battle_success ===
You run out of the snake's encloure. You have gained a Serpent's tooth.
-> universe_story

=== snake_battle_failure ===
The cold scales of the snake coil around your lifeless body.
->END