# Rules

- [Video](https://www.youtube.com/watch?v=57lWqobFGUw)
- [Guide](https://steamcommunity.com/sharedfiles/filedetails/?id=3218902482)
- Shooting self with blank grants extra turn
- Use any amount of items per turn
- 8 maximum items
- 3 rounds
- When the shotgun needs to be reloaded
  - Redistribute items
  - Load shells

# Rounds

- Round 1
  - 2 lives
  - 6 shells, 3 live
- Round 2
  - 4 lives
  - 2 items
- Round 3
  - 5 lives
  - 4 items

# Sudden Death

- On round 3, when reaching 1 or 2 health left, the player enters sudden death
- Any damage on sudden death is game over, healing does nothing

# Shells

- 2 to 8 shells possible
- If an even number of total shells are revealed, there will always be an equivalent number of live rounds and blanks
- If an odd number of total shells are revealed, then there will always be exactly one more live round than there are blanks

# Items

- Magnifying glass
  - Reveals the currently loaded shell
- Cigarette pack
  - Restores one charge
  - Cannot go above maximum charge
  - Disabled during round 3 sudden death
- Can of beer
  - Skips the current shell
- Handsaw
  - Doubles damage of next shell
- Handcuffs
  - Skips opponent's next turn

# Extended Items

- Burner phone
  - Find out the position and status of a random shell (excluding current)
- Inverter
  - Switches status of current shell
- Adrenaline
  - Steal and immediately use an opponent's item
- Expired medicine
  - 50/50 chance to heal 2 or take 1 damage

# Add logic for

- Adrenaline

# Item Conditions

- Cannot use handcuffs if opponent is handcuffed
- Cannot get handcuffs from adrenaline if opponent is handcuffed
- Cannot get adrenaline from adrenaline
- After using adrenaline, if no valid targets exist, don't prompt to pick an item

# Official Descriptions

- Magnifying glass: Check the current round in the chamber.
- Cigarette pack: Take the edge off. Regain 1 Charge.
- Can of beer: Racks the shotgun. Ejects current shell.
- Handsaw: Shotgun deals 2 damage.
- Handcuffs: Skips the opponent's next turn. Cannot be used in succession.
- Burner phone: A mysterious voice gives you insight from the future.
- Inverter: Swap the polarity of the current shell in the chamber.
- Adrenaline: Steal an item and use it immediately. Cannot steal adrenaline.
- Expired medicine: 50% chance to regain 2 Charges; 50% to lose 1 Charge.

# Rounds

- 4 total rounds
- 0th round is the tutorial with no items
  - Winning this round gets you an extra item on the first draw of round 1
- Rest of the rounds are a best of 3
- items: [2, 4, 4]
- lives: [4, 5, 5]
