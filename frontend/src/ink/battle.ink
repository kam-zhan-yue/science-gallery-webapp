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
    -> END
}