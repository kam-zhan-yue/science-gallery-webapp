=== earth_story ===
Welcome to Earth. 
-> encounter_1


=== encounter_1 ===
A strange merchant approaches you, his eyes glinting with a mixture of curiosity and greed. He spreads his arms wide, displaying an array of glittering, mysterious items.
-> merchant_intro

=== merchant_intro ===
MERCHANT: Ah, a new face in these desolate lands! I am Zed, the humble merchant. What brings you to this forsaken part of Earth? Seeking treasures, knowledge, or perhaps... a way out?
*   [Inspect the items]
    -> inspect_items
*   [Engage in conversation]
    -> engage_conversation

=== inspect_items ===
You glance over the items, noticing a blend of ancient relics and futuristic gadgets.
*   [Ask about a particular item]
    -> ask_item

=== engage_conversation ===
YOU: Just passing through. What can you tell me about this place?
MERCHANT: Ah, a wanderer! Earth is not what it once was, as you can see. The AI Overlord keeps us all in check, turning every breath into a transaction. But here, I offer a small escape, for a price of course.
*   [Ask about the AI Overlord]
    -> ask_overlord
*   [Show interest in buying something]
    -> show_interest

=== ask_item ===
YOU: What's this one? [You point to a glowing orb]
MERCHANT: Ah, the Orb of Lucidity! It grants visions of the past. Perfect for those who wish to learn from history's mistakes... or relive better days.
*   [Attempt to negotiate a price] -> negotiate
*   [Show skepticism] -> show_skepticism

=== ask_overlord ===
YOU: The AI Overlord... what exactly does it want?
MERCHANT: Control, pure and simple. It feeds on data, thrives on our dependency. But don't worry, I have wares that can help you slip through its grasp, for the right price.
*   [Express interest in these wares] -> show_interest
*   [Express doubt about the merchant's claim] -> show_skepticism

=== show_interest ===
YOU: Alright, I'm interested. What do you have that could help me?
MERCHANT: Ah, a wise choice! I have cloaking devices, encryption keys, even old-world maps. But first, let’s see if you have the finesse to handle such delicate items.

{finesse > 1:
    -> finesse_success
 - else:
    -> finesse_failure
}

=== finesse_success ===
You manage to subtly assess the items without revealing your intentions. Zed seems impressed.
MERCHANT: I see you have a keen eye. For you, a special price. These tools will serve you well. 
YOU: Deal. [You make the transaction and feel a sense of accomplishment]
-> universe_story

=== finesse_failure ===
Your attempt to outwit the merchant fails. Zed’s grin widens as he hands you a seemingly valuable item.
MERCHANT: A pleasure doing business with you! [You later realize the item is a cheap trinket, useless against the AI Overlord’s surveillance]
YOU: [Mutter to yourself] I need to be more careful next time...
-> universe_story

=== show_skepticism ===
YOU: How do I know you're not just another scammer?
MERCHANT: A fair question, in these times. Trust is scarce, but I assure you, my wares are genuine. The choice is yours.
*   [Decide to trust him] -> show_interest
*   [Decide to walk away] -> universe_story


=== negotiate ===
YOU: That sounds interesting, but the price seems a bit steep. How about a fairer deal?
MERCHANT: Hmm, you drive a hard bargain. But, alright. For a fellow traveler, I can offer a small discount. 
*   [Accept the discounted price] -> finesse_success
*   [Try to haggle further] -> haggle_further

=== haggle_further ===
YOU: I appreciate the discount, but I still think it could be lower.
MERCHANT: You have spirit, I'll give you that. Very well, the final price is lower, but remember, you get what you pay for.
*   [Accept the final price] -> finesse_success
*   [Refuse to buy] -> universe_story
