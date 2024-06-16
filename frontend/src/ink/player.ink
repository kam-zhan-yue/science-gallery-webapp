VAR health = 0
LIST class = (none), Artist, Doctor, Mechanic, Academic, Journalist
VAR finesse = 0
VAR persuasion = 0
VAR intuition = 0

*[An artist.]->artist
*[A doctor.]->doctor
*[A mechanic.]->mechanic
*[An academic.]->academic
*[A journalist.]->journalist
=== function set_class(x) ===
~ class = x

{ class == Artist:
    ~ health = 100
    ~ finesse = 2
    ~ persuasion = 1
    ~ intuition = 2
}

{ class == Doctor:
    ~ health = 100
    ~ finesse = 2
    ~ persuasion = 0
    ~ intuition = 1
}

{ class == Mechanic:
    ~ health = 100
    ~ finesse = 1
    ~ persuasion = 0
    ~ intuition = 2
}

{ class == Academic:
    ~ health = 100
    ~ finesse = 0
    ~ persuasion = 2
    ~ intuition = 1
}

{ class == Journalist:
    ~ health = 100
    ~ finesse = 0
    ~ persuasion = -1
    ~ intuition = 2
}

=== function add_health(x) ===
~ health = health + x