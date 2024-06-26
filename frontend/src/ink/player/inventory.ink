// If you wanna add an item, add it to the list and in take()
LIST inventory = (none), artist_item, doctor_item, mechanic_item, book_1, book_2, library_card, spear, flower, scroll, pendant

// this is a really bad implementation, i'm really sorry, but go with the flow.
=== function take(x)
{ x:
-"artist_item":
    ~inventory -= artist_item
-"doctor_item":
    ~inventory -= doctor_item
-"mechanic_item":
    ~inventory -= mechanic_item
//WORDS AND WORLDS
-"book_1":
    ~inventory -= book_1
-"book_2":
    ~inventory -= book_2
-"library_card":
    ~inventory -= library_card
//NEW NATURE
-"spear":
    ~inventory -= spear
-"flower":
    ~inventory -= flower
-"pendant":
    ~inventory -= pendant
//WAYS OF FOLDING SPACE
-"scroll":
    ~inventory -= scroll
}

=== function take_ink(x) ===
~inventory -= x

=== function shards() ===
~ return good_shards + bad_shards


=== function get(x)
    ~ inventory += x
