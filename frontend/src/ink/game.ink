INCLUDE globals.ink
INCLUDE battle.ink
Hello {name}! Welcome to the adventure.
-> choose

=== choose ===
Please choose a class.
    * [Wizard]
        ~ class = "Wizard"
        -> chosen("Wizard")
    * [Hero]
        ~ class = "Hero"
        -> chosen("Hero")
    * [Warrior]
        ~ class = "Warrior"
        -> chosen("Warrior")

=== chosen(classType) ===
~ class = classType
You have chosen the {class}.
-> loop
