VAR health = 0
LIST class = (none), Artist, Doctor, Mechanic, Academic, Journalist
VAR finesse = 0
VAR persuasion = 0
VAR intuition = 0

=== function set_class(x) ===
~ class = x

{ class == Artist:
    ~ health = 100
    ~ finesse = 2
    ~ persuasion = 1
    ~ intuition = 2
    ~ get(paint_brush)
}

{ class == Doctor:
    ~ health = 100
    ~ finesse = 2
    ~ persuasion = 0
    ~ intuition = 1
    ~ get(syringe)
}

{ class == Mechanic:
    ~ health = 100
    ~ finesse = 1
    ~ persuasion = 0
    ~ intuition = 2
    ~ get(wrench)
}

{ class == Academic:
    ~ health = 100
    ~ finesse = 0
    ~ persuasion = 2
    ~ intuition = 1
    ~ get(paint_brush)
}

{ class == Journalist:
    ~ health = 100
    ~ finesse = 0
    ~ persuasion = -1
    ~ intuition = 2
    ~ get(pen)
}

=== function add_health(x) ===
~ health = health + x