=== crafting ===

// Planet sprite background
As you approach this planet, you worry you’ve made a mistake. It doesn’t look habitable at all.

The charred surface of the planet seems to be pulling itself apart, as molten lava flows beneath.

You: AI, can you find a safe place to land?

AI: I have located a suitable area. Planet’s atmosphere is non-hostile. Touching down in 5.

~background = crafting_main
~ achievement = achievementCrafting
~ music = bgm_band_2
// Path background

You step out of your ship, and despite the AI’s assurances are surprised when the air is breathable.

Not only breathable, it’s surprisingly sweet.

You look ahead and see a path through a beautiful yet strange garden. 

Trees tower above, beautiful and unfamiliar. Flowers bloom underfoot.

It’s dark, but you’re able to see because of the glowing river running alongside you.

-> crafting_choices

=== crafting_choices ===

*[Look at the river]
    -> crafting_river
*[Look at the flora]
    -> crafting_flora
+[Continue down the path]
    -> crafting_grove

=== crafting_river ===

You step closer to the river and feel the heat increase. 

It’s not just glowing … it’s molten. Somehow this planet has evolved to utilise the lava as water.

This is a strange place, but it does not feel dangerous.

-> crafting_choices

=== crafting_flora ===

As you look closer at the trees and the flowers you realise parts of them are familiar.

It seems like different species have come together and shared adaptations to this world.

It’s beautiful.

-> crafting_choices


=== crafting_grove ===

// Change to grove background

You follow the winding path, admiring the resilience and beauty of this planet

You reach a grove, where a circle of trees has created a gathering place. There are small houses and beautiful decorations, including a glowing shard.

Amongst the trees you see figures walking around, tending to the garden.

They seem human, mostly. But, like the trees and flowers, they are changed somehow.

They have integrated different cultures, animals and plants into their bodies.
{ class == Mechanic:
    ->grove_mechanic
-else: 
    ->grove_not_mechanic
}

=== grove_mechanic ===

As you watch them move through the forest, you notice sparks out of the corner of your eye.

One of the sprinklers installed to protect the garden seems to be malfunctioning.

-> grove_not_mechanic

=== grove_not_mechanic ===

Once again, you feel compelled to get the shard. The women haven’t seen you yet. What do you do?

+[important:They won't just give me something that is valuable to them. I need to sneak in and take it]
    -> grove_sneak
+[speech:I should introduce myself]
    -> grove_talk

=== grove_talk ===

You walk up to the grove, and raise your arm to give a friendly wave.

One of the women breaks away from the group and walks over to you.

Ellwyn: Hello stranger, welcome to our grove. What do you need?

-> talk_choices

=== talk_choices ===

*[speech:I want to know more about this place]
    -> grove_learn
+ {grove_mechanic} [speech:You have a broken sprinkler there, if you would like, I can help you fix it?]
    -> grove_sprinkler
+[speech:I don't know why, but I think I need that shard]
    -> grove_talk_shard

=== grove_learn ===

This is a place where all are welcome and encouraged to share. We adapt to our circumstances. It is called Cloudscape.
-> talk_choices

=== grove_sprinkler ===

Ellwyn: Oh how wonderful! Yes, it broke last night. It is not just a sprinkler, but part of the system that keeps the lava flowing through our rivers and pipes

+[speech: Let me take a look]

- You spend some time tinkering with the pipes. As you do, you speak to more of the women, and learn some of their stories.

This is a place where difference and diversity is embraced wholly. In return, you share what knowledge you have of yourself.

After much time, tinkering, and talking, you test the sprinkler and confirm it is working.

You: There. All patched up

Ellwyn: Thank you friend! How can we repay you?

+[speech:I don't know why, but I think I need that shard]

Ellwyn: Please, take it, it feels right that you should have it

-> grove_get_shard

=== grove_get_shard ===

She passes you the warm glowing shard.

+[speech:Thank her]

~get_good_shard()

You: Thank you, I will take good care of it. 

Ellwyn: Please feel free to spend as much time in Cloudscape as you like.

You stay, enjoying the atmosphere and sharing more stories until you feel like you know where to go next.

{ 
    - class == Mechanic:
    As you turn to leave, you notice several of the women sporting toolboxes similar to your own, tinkering with different parts of the garden.
    - class == Doctor:
    As you turn to leave, you notice several of the women have adopted a lab coat similar to yours, and are applying bandages to trees and animals.
    - else:
    As you turn to leave, you notice several of the women weaving together threads to create beautiful tapestries. 
}

-> navigation

=== grove_talk_shard ===

Ellwyn: Well if you truly need it, we can spare it.

+[important:Share something in return]
    -> grove_speech
+[She's giving it for nothing? What a fool! Take the shard]
    -> grove_free_shard

=== grove_speech ===

You don’t want to only take, so you offer her:

+[speech:A story]
    -> grove_story
+[inventory:An item]
    -> grove_item
    
=== grove_story ===

Ellwyn: You’d like to share your story? Thank you! Let me gather the others.

The women gather in a polite circle in front of you, and you tell them all of what you know about yourself.
Thank you for your openness. Here.

-> grove_get_shard

=== grove_item ===

Give her an item
~game_state = take_item
*[other]
    ~game_state = exploring
    Ellwyn: Thank you friend! Here.
    -> grove_get_shard

=== grove_free_shard ===

You: I do need it. Hand it over.

She passes you the shard, but your joy at success fades as the colour and warmth drain from the shard.

~get_bad_shard()

It becomes a muddy red, and so cold to the touch it hurts your fingers. You look up and the women are gone.

You shove it in your bag, and look around Cloudscape until you know where to go next.

You return to your ship with the shard, but not sure if you really succeeded.

-> navigation

=== grove_sneak ===

You assess the area and prepare to sneak in and take the shard. 

{ - finesse > 1:
    You slip through the shadows like a ghost, and snatch the shard from beneath their noses. 
    -> grove_finesse
- else:
    You enter the grove, and get all the way to the shard before you step on a twig, alerting everyone to your presence.
    Ellwyn: Hello stranger. Do you have need of our shard? Take it. But next time consider just asking
    She gives you the shard.
    -> grove_finesse
}

=== grove_finesse ===

Your joy at success fades as the colour and warmth drain from the shard.

~get_bad_shard()

It becomes a muddy red, and so cold to the touch it hurts your fingers.

You shove it in your bag, and sneak around Cloudscape until you know where to go next.
You return to your ship with the shard, but not sure if you really succeeded.

-> navigation





