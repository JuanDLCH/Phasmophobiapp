const ghosts = [{
		"name": "Spirit",
		"primaryEvidences": [
			"EMF Level 5",
			"Ghost Writing",
			"Spirit Box"
		],
		"secondaryEvidences": [
			"Smudge sticks stop attacks for 3 min instead of 1.5"
		],
		"desc": "Spirits are very common ghosts. They are very powerful but passive, only attacking when they need to. They defend their place of death to the utmost degree, killing anyone that is caught overstaying their welcome.",
		"strenghts": ["None"],
		"weaknesses": ["A Spirit can be temporarily stopped by burning Smudge Sticks near them."]
	},
	{
		"name": "Wraith",
		"primaryEvidences": [
			"EMF Level 5",
			"Spirit Box",
			"D.O.T.S. Projector"
		],
		"secondaryEvidences": [
			"Stepping in salt leaves no UV footprints",
			"Can become more active after stepping in salt",
			"Can teleport to a random player (while not hunting) which will do EMF lvl 2 or 5 and do interactions"
		]
	},
	{
		"name": "Phantom",
		"primaryEvidences": [
			"Spirit Box",
			"Fingerprints",
			"D.O.T.S. Projector"
		],
		"secondaryEvidences": [
			"Looking at the ghost drops sanity by 0.4% each second instead of 0.2%",
			"Taking a photo makes the ghost temporarily disappear (while not hunting)",
			"Blinks slower during hunts (1s to 2s instead of 0.3s to 1s)",
			"Can walk to a random player anywhere on the map (while not hunting) and do interactions"
		]
	},
	{
		"name": "Poltergeist",
		"primaryEvidences": [
			"Spirit Box",
			"Ghost Writing",
			"Fingerprints"
		],
		"secondaryEvidences": [
			"Only ghost that can throw multiple objects at once",
			"Every thrown object makes players loose 2% sanity instead of 1%",
			"Very inactive in rooms without items"
		]
	},
	{
		"name": "Banshee",
		"primaryEvidences": [
			"Ghost Orbs",
			"Fingerprints",
			"D.O.T.S. Projector"
		],
		"secondaryEvidences": [
			"Targets and hunts one player until killed (If the player is not in the building, it does a regular hunt)",
			"Only checks their targets sanity % for initiating a hunt in multiplayer",
			"Will often wander toward their target when roaming",
			"Singing ghost events will now drain an extra 5% sanity on the Banshee's target",
			"Preferes singing ghost events over other events",
			"Can sometimes be heard wailing with a parabolic microphone"
		]
	},
	{
		"name": "Jinn",
		"primaryEvidences": [
			"Freezing Temperature",
			"EMF Level 5",
			"Fingerprints"
		],
		"secondaryEvidences": [
			"Cannot use any abilities when the breaker is turned off",
			"During a hunt it travels faster (2.1m/s) when chasing a target until a distance of 10m",
			"Can lower the sanity of all players within a 3m radius by 25%",
			"Cannot turn off the breaker directly. (Unless by turning on too many lights)"
		]
	},
	{
		"name": "Mare",
		"primaryEvidences": [
			"Ghost Orbs",
			"Spirit Box",
			"Ghost Writing"
		],
		"secondaryEvidences": [
			"Can hunt at 60 % avg sanity when lights in the room are turned off",
			"This is not affected by candles, torches or other equipment",
			"Tiny chance to turn off a light immediately after it was turned on by a player",
			"Cannot turn on lights",
			"More likely to roam to adjacent dark rooms when the lights in the current room are on",
			"More likely to turn of lights the doing other ghost interactions",
			"Preferes light events (red light & shattering) over other ghost events"
		]
	},
	{
		"name": "Revenant",
		"primaryEvidences": [
			"Freezing Temperature",
			"Ghost Orbs",
			"Ghost Writing"
		],
		"secondaryEvidences": [
			"Very fast when chasing a player during a hunt (2x normal speed)",
			"Very slow when not chasing anyone during a hunt (1/2 of normal speed)"
		]
	},
	{
		"name": "Shade",
		"primaryEvidences": [
			"Freezing Temperature",
			"EMF Level 5",
			"Ghost Writing"
		],
		"secondaryEvidences": [
			"Can only initiate a hunt at an avarage sanity of 35%",
			"Less chance of ghost activity and ghost events when more than 1 player is nearby",
			"Lower chance of initiating a hunt when more than 1 players are in the same room",
			"For every 1% of average sanity lost, ghost event chance is increased by 2% (capped at 100%)"
		]
	},
	{
		"name": "Demon",
		"primaryEvidences": [
			"Freezing Temperature",
			"Fingerprints",
			"Ghost Writing"
		],
		"secondaryEvidences": [
			"Can initiate a hunt at an avarage sanity of 70%",
			"Insta-hunt: Low chance to start a hunt regardless the avarage sanity",
			"Using cursed objects lowers sanity less than by other ghosts",
			"The Crucifixes effective radius is 5m instead of 3m",
			"Loose less sanity (80% of original loss) by answering to the Ouija board"
		]
	},
	{
		"name": "Yurei",
		"primaryEvidences": [
			"Freezing Temperature",
			"Ghost Orbs",
			"D.O.T.S. Projector"
		],
		"secondaryEvidences": [
			"Ghost event drops sanity by 0.4% per second instead of 0.2%",
			"This also applies when a player is within 10m during a hunt",
			"Smudging will make it to stay in the room for 1.5 min",
			"Can close doors randomly without doing a ghost event"
		]
	},
	{
		"name": "Oni",
		"primaryEvidences": [
			"Freezing Temperature",
			"EMF Level 5",
			"D.O.T.S. Projector"
		],
		"secondaryEvidences": [
			"Chance to throw objects with more force so they fly further",
			"More ghost activity and events when there are more people are nearby"
		]
	},
	{
		"name": "Yokai",
		"primaryEvidences": [
			"Ghost Orbs",
			"Spirit Box",
			"D.O.T.S. Projector"
		],
		"secondaryEvidences": [
			"Can initiate an early hunt at an avarage sanity of 80% if players are talking nearby",
			"During a hunt it only can hear sounds in a radius of 2m"
		]
	},
	{
		"name": "Hantu",
		"primaryEvidences": [
			"Freezing Temperature",
			"Ghost Orbs",
			"Fingerprints"
		],
		"secondaryEvidences": [
			"Walking speed is affected by room temperature when hunting",
			"1.4 m/s= 15°C+ | 1.75 m/s= 12°C | 2.1 m/s= 9°C | 2.3 m/s= 6°C | 2.5 m/s= 3°C | 2.7 m/s= 0°C",
			"Shows their breath in room temperatures of 3°C or lower",
			"Has double the chance to turn off the breaker",
			"Can no longer turn on the breaker, as this would stop them accelerating"
		]
	},
	{
		"name": "Goryo",
		"primaryEvidences": [
			"EMF Level 5",
			"Fingerprints",
			"D.O.T.S. Projector"
		],
		"secondaryEvidences": [
			"D.O.T.S. only visible through a video cam and no players in the room",
			"Less likely to roam when not hunting",
			"D.O.T.S. evidence are guaranteed on nightmare difficulty"
		]
	},
	{
		"name": "Myling",
		"primaryEvidences": [
			"EMF Level 5",
			"Fingerprints",
			"Ghost Writing"
		],
		"secondaryEvidences": [
			"More sounds on the parabolic mic",
			"During a hunt footstep sounds can only be heard when 10m or closer (similar to electronic interference)"
		]
	},
	{
		"name": "Onryo",
		"primaryEvidences": [
			"Spirit Box",
			"Ghost Orbs",
			"Freezing Temperature"
		],
		"secondaryEvidences": [
			"Can initiate a hunt when any flames are extinguished regardless of average sanity",
			"Chance for the ability increases everytime a player is killed",
			"Lit candles act as crucifixes. Blown out when successfuly prevented a hunt"
		]
	},
	{
		"name": "The Twins",
		"primaryEvidences": [
			"EMF Level 5",
			"Spirit Box",
			"Freezing Temperature"
		],
		"secondaryEvidences": [
			"Main twin primary stays in the ghost room, makes freezing and spirit box",
			"Secondary twin wanders around interacting with the environment",
			"Secondary twin cannot interact with motion sensors, spirit box or make freezing",
			"Either Twin can initiate a Hunt but not simultaneously",
			"Crucifix only checks for main twin regardless of which will hunt",
			"During hunts the main twin is slower (by 10%) and the decoy is faster (by 10%)"
		]
	},
	{
		"name": "Raiju",
		"primaryEvidences": [
			"EMF Level 5",
			"Ghost Orbs",
			"D.O.T.S. Projector"
		],
		"secondaryEvidences": [
			"While hunting it has an increased movement speed when it touches electronic equipment",
			"It doesn't matter if the equipment lies on the floor or held by a player",
			"Abilities only affected by player equipment and not location electrics like TVs or lights",
			"Head mounted cameras, motion sensors and sound sensors do not count towards the speed boost",
			"Can initiate a hunt at an avarage sanity of 65% if there is electrical equipment nearby"
		]
	},
	{
		"name": "Obake",
		"primaryEvidences": [
			"EMF Level 5",
			"Fingerprints",
			"Ghost Orbs"
		],
		"secondaryEvidences": [
			"Reduced chance of 75% to leave fingerprints",
			"Low chance to leave fingerprints with 6 fingers",
			"Fingerprints have a 50% chance to disappear earlier (60s) than of other ghosts (120s)",
			"Always gives the Fingerprints evidence on nightmare difficulty"
		]
	},
	{
		"name": "The Mimic",
		"primaryEvidences": [
			"Freezing Temperature",
			"Spirit Box",
			"Fingerprints",
			"Ghost Orbs"
		],
		"secondaryEvidences": [
			"Picks another ghost type to imitate and changes it occasionally",
			"Copies almost all abilities and behaviour of the picked ghost",
			"Cannot switch picked ghost during a hunt",
			"Has ghost orbs as 4th evidence which are always present, regardless of which ghost being imitated"
		]
	}
]
export default ghosts;