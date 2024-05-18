VAR name = "Hero"
VAR health = 100
Hello, {name}! Welcome to the adventure.
-> loop

-> END

=== loop ===
{health > 0:
    Your health is {health} What will you do?!
    + [Take 50 damage]
        ~ health = addHealth(-50)
        -> loop
    + [Heal 10 points]
        ~ health = addHealth(10)
        -> loop
  - else:
    You are dead
    -> DONE
}

=== function addHealth(x) ===
~ return health + x