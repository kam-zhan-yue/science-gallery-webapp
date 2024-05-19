VAR health = 100
LIST class = (Hero), Doctor, Mechanic, Agent
VAR finesse = 0
VAR persuasion = 0
VAR intuition = 0


=== function set_class(x) ===
~ class = x
{ class == Doctor:
    You have chosen the Doctor. Which lives will you save. And equally.. which lives will you choose to forfeit?
    ~ finesse = 2
    ~ persuasion = 0
    ~ intuition = 1
}

{ class == Mechanic:
    You have chosen the Mechanic. With just a wrench, you can fix anything in your sight. Or, choose to destroy entire worlds.
    ~ finesse = 1
    ~ persuasion = 0
    ~ intuition = 2
}

{ class == Agent:
    You have chosen the Agent. There is nothing you can hide from, no information you don't know. What will you do when the world turns against you?
    ~ finesse = 0
    ~ persuasion = 2
    ~ intuition = 1
}

=== function add_health(x) ===
~ health = health + x