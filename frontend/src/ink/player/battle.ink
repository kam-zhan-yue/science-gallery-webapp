VAR enemy_name = ""
VAR enemy_health = 0
VAR post_battle_success = -> generic
VAR post_battle_failure = -> generic

=== battle(id) ===
~ game_state = battling
{ id == "SNAKE":
    ~ enemy_name = "Great Serpent"
    ~ enemy_health = 50  // Set enemy health
}
{ id == "SLIME":
    ~ enemy_name = "Puny Slime"
    ~ enemy_health = 10
}
-> battle_loop


=== battle_loop ===
The {enemy_name} stares down at you. 
-> player_turn


=== player_turn ===
{enemy_name}'s health is {enemy_health} Your health is {health}. What will you do?
{health > 0:
    + [Deal Damage]
        -> damage
    + [Try to Escape]
        -> escape
- else:
    You are dead
    -> END
}


=== enemy_turn ===
{enemy_health > 0:
    ~ temp enemy_attack = RANDOM(1, 10)
    The {enemy_name} deals {enemy_attack} damage!
    ~ add_health(-enemy_attack)
    -> player_turn
- else:
    -> battle_success
}


=== damage ===
~ temp player_damage = RANDOM(1, 10)
~ deal_damage(player_damage)
-> enemy_turn


=== escape ===
~ temp dice_roll = RANDOM(1, 6)
You rollled a {dice_roll}
{ dice_roll > 5:
    -> escape_success
- else:
    -> escape_failure
}

=== escape_success ===
You escaped succesfully!
-> post_battle_success


=== escape_failure ===
You failed to escape!
-> enemy_turn


=== battle_success ===
You have defeated the {enemy_name}!
-> post_battle_success


=== battle_failure ===
You are dead.
-> post_battle_failure


=== generic ===
->navigation


=== function deal_damage(x) ===
You dealt {x} damage!
~ enemy_health = enemy_health - x