~temp look_book_1 = false

=== words ===
You breathe a sigh of relief as you approach this planet, everything seems normal, and not too dangerous. -> ai_words_and_worlds_introduction
===ai_words_and_worlds_introduction===
~background = ship_navigation
AI: Here we are! People call this place Words and Worlds. It holds collected knowledge, as much as it can find. A real 'Library of Alexandria' type.
*[What's the Library of Alexandria?] -> library_of_alexandria
===library_of_alexandria===
AI: Oh, it was one of the wonders of a long-forgotten society. It was a library containing half a million histories, inventions, and stories.
You hear sadness in the AI's mechanical tone.
AI: All that, and destroyed by something as ruinously common as fire. Hundreds of thousands of texts, lost. Never to be recovered. The place you're about to visit is an homage to, and direct descendant of, that library.
The ship's lights brighten.
AI: But anyway, you don't want to hear all that, you want to get your feet on solid ground!
AI: Remember, you're looking to get the shard that's on this planet. It's a maze out there, but hopefully your navigational skills will prevent you from getting too lost.
AI: However, if you do find yourself wandering, I believe there is a protector of this place you may be willing to help you.
AI: Good luck!
->words_and_worlds_intro
===words_and_worlds_intro===
As you step out of your ship you are greeted by seemingly endless shelves of books. The stacks reach as far up and back as you can see, and contain books of every size, shape, and colour you can imagine.

You breathe in the smell of old and new books. Do you pick one up?
+[Pick up a book]
    ->words_book
+[You don't like reading. Leave the book]
    ->words_librarian

=== words_book ===
~look_book_1 = true
You run your fingers along the spines of the books, and pick up one that calls to you. It’s old and dusty, as though no one has opened it in years. The title reads ‘I, Robot’.

You open the book, and briefly skim a tale about humans and robots co-existing. You wonder how long ago this was written, and whether it depicts an accurate history of this planet, Earth.

- Although the library feels cosy, you don’t want to stand around reading. Would you like to take the book?
    +[Yes, take the book]
        ~get(book_1)
        You slip the book into your bag. Suddenly a voice pierces the silence.
        Librarian: Well hello dearie!! I’d be happy to help you check out that book! #Librarian:happy
    +[No, you're not a book thief.]
        You’ve had enough of books for now. It’s time to go further into the library. You need to find something, but you’re not quite sure what you’re looking for.
    - ->words_librarian


=== words_librarian ===
Suddenly, you come face to face with something, no, someone, who you can only assume to be the librarian. You don’t know how long she’s been there, or how she managed to appear so quietly. #Librarian
You try not to stare, instead fixing your gaze past the librarian. #Librarian

As you do so, you notice a warm glow emanating from one of the aisles behind her.  #Librarian

It feels like it’s calling to you. Like the shard back on Shangri-La did. #Librarian

Librarian: Dearie? Are you quite alright? #Librarian:happy

- You snap your focus back to the librarian. #Librarian
    +[speech: Yes of course!]
        Librarian: Well, that's good
    +[speech: No, I don't know who I am]
        Librarian: Well, you’re in the right place. You can learn about a great number of people here. Maybe you’ll find one you want to be. #Librarian:happy
    - Librarian: Now, what can I do for you?
    +[speech: I'd like to borrow this, please]
        ->words_borrow
    +[speech: What's that thing back there?]
        ->words_enquire
    
=== words_borrow ===
{
- look_book_1 == true:
    ->words_library_card
- else :
    ->words_random_book
}

=== words_library_card ===
Librarian: No trouble, here’s your library card. Make sure you bring it back before the date written there.” She hands you a smooth shiny card. #Librarian:happy
~get(library_card)
You look at the library card and realise it somehow correctly displays your name, photo, and birthday. On the back, “I Robot - Due 27 March 8042” #Librarian
->words_occupation

=== words_random_book ===
You grasp for a random book on the shelf to go along with your claim, and hand it to the librarian. #Librarian

She looks down at the book in her hands and reads “Atopic dermatitis, the good, the bad, and the itchy: a thesis”. She looks back at you, her gaze suddenly piercing. #Librarian:sad

Librarian: This book isn’t what you’re interested in here. #Librarian:sad
{ class == Doctor:
    ->words_doctor
-else: 
    ->words_not_doctor
}


=== words_doctor ===
+[speech: Actually, I studied eczema. I would love to learn more!]
    ->words_persuasion_success
+[speech: Alright you got me, what's that glowing thing?]
    ->words_enquire
    
=== words_not_doctor ===
+[speech: It is! I... love dermatitist!]
    ->words_persuasion_check_1
+[speech: Alright you got me, what's that glowing thing?]
    ->words_enquire


=== words_persuasion_check_1 ===
{ - persuasion > 5:
    ->words_persuasion_success
- else:
    Librarian: No. I don't think so.
    Her gaze sharpens. #Librarian:sad
    +[Double down. Start yapping about eczema.]
        ->words_persuasion_check_2
    +[Alright, you got me, what's that glowing thing?]
        ->words_enquire
}

=== words_persuasion_check_2 ===
{ - persuasion > 2:
    ->words_persuasion_success
- else:
    Suddenly she screams. #Librarian:angry
    Librarian: THIEF! You don’t care about books, you’re trying to distract me so you can steal our memory shard. #Librarian:angry
    You realise there’s no more talking. You only have one option. #Librarian:angry
    +[Fight her.]
    ->words_fight
}

=== words_persuasion_success ===
Her agitation softens as she senses your genuine interest in the book. #Librarian:happy
Librarian: Well, then of course you should borrow this book!
She blows off a layer of dust that had accumulated on the cover, and presents you with the book and a smooth shiny card. #Librarian
~get(book_2)
Librarian: Make sure you return it by the date on your library card.
~get(library_card)
You look at the library card she’s given you and realise it somehow correctly displays your name, photo, and birthday. On the back, “Atopic dermatitis, the good, the bad, and the itchy: a thesis” - Due 27 March 8042” #Librarian
->words_occupation

=== words_occupation ===
That’s strange. It also lists your occupation, and has a sentence that fills you with a wash of baffled achievement. ->read_library_card
===read_library_card===
*[Read the library card] -> library_card_names
===library_card_names===
{ class == Doctor: 
-> doctor_name
}
===doctor_name===
Doctor, and says
{ class == Mechanic:
-> mechanic_name
}
===mechanic_name===
Mechanic, and says
{ class == Artist:
-> artist_name
}
===artist_name===
Artist, and says
 #Librarian
{ class == Doctor:
-> library_card_doctor
}
{ class == Mechanic:
-> library_card_mechanic
}
{class == Artist:
-> library_card_artist
}
===library_card_doctor===
'Just as this library outlived its predecessor, your patients will remember and cherish your work as long as they live.' -> words_after_library_card
===library_card_mechanic===
'Just as this library outlived its predecessor, your mechanisms will keep your memory alive.' ->words_after_library_card
===library_card_artist===
'Just as this library outlived its predecessor, your creativity will be remembered throughout the ages.' -> words_after_library_card
===words_after_library_card===
You shake off the strange feeling of not being able to remember exactly who you are, and place the card and book in your bag. #Librarian
You are once again drawn to the glowing shard in the distance. This time the librarian notices your interest. #Librarian
->words_enquire


=== words_enquire ===
Librarian: Ah, I see you’re interested in our memory shard. Excellent isn’t it? Our house of knowledge is such a fitting home for it.
You can’t quite explain why, but you need that shard. You weigh up your options and decide how to get it from her. #Librarian
+[important: Talk her into giving it to you]
    ->words_convince
+[attack: Fight her for the shard]
    ->words_fight

=== words_convince ===
You: It is certainly a wonder. Is there any way I might be able to take it with me? #Librarian
{class == Doctor:
    ->words_convince_doctor
- else: 
    ->words_convince_normal
}

=== words_convince_doctor ===
You: I have extensive knowledge of medical practices and procedures.” You see her eyes light with joy at the mention of knowledge #Librarian
You: I could spend some time talking with you, and add the knowledge I have to this library? #Librarian
She looks thoughtfully at the shard. #Librarian
Librarian: Yes, I think that sounds about right. Come over here." #Librarian:happy
->words_persuasion_success_ending

=== words_convince_normal ===
Her eyes widen. #Librarian:sad
Librarian: Take it with you? Well, I don’t know about that. #Librarian:sad

You: I know it is a big ask. I just feel like I need it. #Librarian:sad
+[speech: I will take good care of it.]
    ->words_persuasion_check_3
+[inventory: I could trade you something for it?]
    ->words_use_item

=== words_persuasion_check_3 ===
{-persuasion > 3:
    ->words_persuasion_check_3_success
- else: 
    ->words_persuasion_check_3_failure
}

=== words_persuasion_check_3_success ===
She looks at you, and it feels like she is staring into your soul. #Librarian:neutral
It seems she likes what she sees. #Librarian:happy
Librarian: Well, child, I cannot let you take something from the library  without giving me something in return. #Librarian:neutral
If you would be willing to share what knowledge you have with me, I would be willing to part with the shard. #Librarian:happy
    +[speech: Thank you, I would be happy to share.]
    ->words_persuasion_success_ending
    +[On second thoughts, you don't want to talk, you want to fight]
    ->words_fight

=== words_persuasion_check_3_failure ===
Librarian: The library also has needs, child.
She looks at you, and it feels like she is staring into your soul. #Librarian:sad
It seems she does not like what she sees. One of her tentacles extends outwards, in a different direction to the shard. #Librarian:neutral
->words_persuasion_failure_ending


=== words_use_item ===
Give the librarian an item from your inventory. #Librarian:neutral
~game_state = take_item
*[{book_1}]
    ~game_state = exploring
    ->words_persuasion_success_ending
*[other]
    ~game_state = exploring
    ->words_persuasion_failure_ending

=== words_persuasion_failure_ending ===
You brace yourself. Is she going to hurt you? #Librarian:neutral
The tentacle returns as quickly as it left, clutching… a shard? #Librarian:neutral
Librarian: This is what you deserve.
She hands you the shard. #Librarian:neutral
~get_bad_shard()
It feels … wrong. It’s so cold it stings your skin. You tuck it into your bag as you sense it’s time for you to leave.
You walk down the halls, trying to find your ship, and stumble upon a long timeline. You wonder if you can learn something from this, maybe where to go next.
You pause, looking at the Science Fiction Timeline, until you glean enough information to know where to go next.
You return to your ship, hopeful that your next journey will be better.
AI: Welcome back! Did you get what you came for?
*[I did. Kind of. But I don't feel good about it.] ->ai_what_did_you_do
===ai_what_did_you_do===
AI: Why? What did you do?
*[I just tried to persuade the librarian to give me the shard! It seems I wasn't- She didn't- It didn't work.] ->corrupted_shard
===corrupted_shard===
You take out the corrupted shard. 
*[I may have tried to distract her with books that I wasn't entirely interested in.] ->ai_words_end
===ai_words_end===
AI: Well. You tried to talk it through, and for that I commend you. The way you went about it may not have been the smartest, but she's right. You didn't leave with nothing, and you got what you deserve. We'll continue on to another place, hopefully you'll be more successful there.
->words_end

=== words_persuasion_success_ending ===
She leads you down one of the aisles to the cosiest space you’ve ever seen. #Librarian:neutral
You settle into a plush reading chair, and spend a few hours sharing your knowledge with the librarian. #Librarian:neutral
After you’re done. She thanks you, and one of her tentacles reaches out the door. #Librarian:happy
Shortly after she draws it back inside, holding the shard. She hands it over to you. #Librarian:happy
~get_good_shard()
Despite its glass-like appearance it feels warm. #Librarian:neutral
Librarian: Well, feel free to stay as long as you like. Once you’re done in this room I’d encourage you to go next door and look at our timeline.
You take advantage of the respite of this cosy room. Your eyes close, and when they open again you feel rested and refreshed.
The librarian seems to know things, so you should take her up on the suggestion and look at the Sci-Fi timeline next door.
Perhaps it contains a clue for where you should go next. 
Once you have had your fill of the library, and have a sense of where to go next, you return to your ship.
AI: Welcome back! Did you get what you came for?
*[I did. The librarian showed me true comfort among the books, and I traded her: my knowledge for her shard] -> words_ai_pleased
===words_ai_pleased===
AI: Oh well done you! It sounds like that went, well- the best it could possibly have gone! Are you ready to continue on?
*[Yes, let's go.]
->words_end
    
=== words_fight ===
You need this shard, and the librarian is in your way. You brace yourself. #Librarian:angry
+[attack: Fight with your fists.]
    ->words_fight_fists
+[inventory: Use an item from your inventory]
    ->words_fight_item

=== words_fight_fists ===
You unleash the force of your fists upon the librarian. #Librarian:angry
{class == Mechanic:
    Your sentient toolbox also gets in a hit or two. #Librarian:angry
}
{class == Doctor:
This feels wrong, against everything you trained for. #Librarian:angry
}
{class == Artist:
The sharpness of your needle is a surprisingly effective weapon, though it saddens you to see it stained with blood. #Librarian:angry
}
{-finesse>3:
    ->words_fight_success
-else:
    ->words_fight_failure
}

=== words_fight_item ===
Use an item to fight the Librarian. #Librarian:angry
~game_state = take_item
//TODO fill this in
*[{book_1}]
    ->words_fight_success
*[other]
    ->words_fight_failure

=== words_fight_success ===
At last, she is defeated. You grab one of the ladders that should be for getting books, and climb up towards the shard.
As you climb, you see the warmth drain from the shard, and the colour change to a muddy red.
Undeterred, you snatch it up.
~get_bad_shard()
It feels … wrong. It’s so cold it stings your skin. You tuck it into your bag as you sense it’s time for you to leave.
- You start walking away, when suddenly a fire breaks out. You don’t know when it started, but it is consuming the library.
    +[Try to fight the fire]
        You try to extinguish the fire, but your efforts are ineffectual. The blaze is out of control.
        ++[Run to the safety of your ship]
    +[Run to the safety of your ship]
    - AI: The library! What happened, why is it burning?!
    *[I- fought the librarian. I took the shard and ran, and the place just- set itself alight.]
    - AI: We have to go, now. We'll discuss this when you and your poor decision-making skills are safely away from the fire, against my better judgement. I think, after destroying the knowledge of a thousand worlds, the universe might be safer if I left you here to burn.
    *[Stay silent.] -> wait_for_fire
    *[It wasn't my fault!  How was I supposed to know the librarian was- inextricably tied to this place?] ->ai_angry_worlds
    ===ai_angry_worlds===
    - AI: I told you that she was a protector of this place! She harboured the knowledge of a thousand civilisations: if she dies, they die with her!
    *[I- I didn't know.]
    - The AI is silent. The first time it seems to be unable to say anything to you.->wait_for_fire
    ===wait_for_fire===
    - You wait out the fire from space. You don't know where else to go.
    +[Wait]
        After some time, the blaze has died down. All that is left is a burned out metal book.
        You look at Untitled (Heat Book) until you know where to go next. You return to the ship. The AI is still silent.
        ->words_end

=== words_fight_failure ===
It’s no use. Every time you try to strike, you are blocked by a tentacle. #Librarian:angry
Eventually it is clear that it is not worth fighting anymore. You have been defeated. #Librarian:angry
The librarian looks down at you. It seems like she pities you. #Librarian:sad
Librarian: My dear. Sharing is the foundation of a library. #Librarian:sad
Librarian: Take this, and think about what you have done here. #Librarian:sad
She reaches out a tentacle and grabs the shard, passing it gently to you. #Librarian:neutral
Librarian: Goodbye.
~get_good_shard()
Despite its glass-like appearance, it feels warm. You put it in your bag and walk away.
As you go looking for your ship, you bump into a large metal book. It feels like the library showed you this for a reason.
Maybe it will have a clue for where you could go next.
You stay looking at Untitled (Heat Book) until you know where to go next.
~get(book_2)
~background = ship_navigation
You return to your ship, feeling a mix of emotions. Stepping inside, you hear the AI's voice reverberate around the ship.
AI: Welcome back! Did you get what you came for?
*[I- fought the librarian. I lost, badly. But she gave me the shard anyway?] -> ai_laugh
===ai_laugh===
The AI makes a sound that rings like laughter.
AI: Well what did you expect? She has protected the information from hundreds of civilisations for aeons, and you thought you could best her? You really do make poor decisions sometimes, you know that?
*[Why did she give me the shard? And- it's still pure?] ->second_chance
===second_chance===
AI: It looks like the librarian took pity on you. Gave you a second chance. I'd take it without further questioning, if I were you.
You feel strange. Guilty, at having tried to fight your way through the sanctity of the library. Embarrassed at how badly you did. Ashamed at how you feel, how the librarian really was the bigger person in your encounter. 
Inamongst all this, you look at the shard in your hands, pure and clean. A wash of gratefulness pierces through the embarrassment and guilt. You've been given a second chance. Use it wisely.
->words_end

=== words_end ===
->navigation