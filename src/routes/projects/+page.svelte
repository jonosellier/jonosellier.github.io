<script>
	import Title from '$lib/title.svelte';
</script>

<Title text="Projects" />
<div class="project">
	<h1>Playnite</h1>
	<h2>Extensions, Themes, and Direct Contributions</h2>
	<p>Built using WPF, and C#</p>
	<p>
		Playnite is a game library aggregator that combines PC games from multiple sources into a single
		library. Beyond minor contributions to the core project, I've developed several extensions and
		themes specifically designed to improve the PC gaming experience on Home Theatre PC and Handheld
		PC form-factors.
	</p>
	<p>
		I've also contributed to other community themes and extensions through both advisory support and
		direct code contributions. While many of these projects began as improvements to my own gaming
		setup, they've also served as valuable opportunities to maintain my .NET skills and expand into
		Windows development. This has been a shift from my background in server-side applications and I
		have come to appreciate the differing development processes.
	</p>
	<h3>Toggle</h3>
	<p>
		A Playnite Theme designed to work well on handheld devices with a number of tricks to make it
		behave better with touchscreens, an input that the project never intended to target. It has
		amassed thousands of downloads and has an active user base.
	</p>
	<h3>Now Playing</h3>
	<p>
		Using heuristic-based process tracking, this extension finds the currently running game's
		process ID and allows users to easily return to their game session or exit the game via
		Playnite's interface. This is crucial to HTPC and Handheld user flows as they do not have easy
		access to <kbd>Alt</kbd>+<kbd>Tab</kbd> and <kbd>Alt</kbd>+<kbd>F4</kbd> shortcuts that most PC gamers
		would be used to.
	</p>
	<h3>Mo' Data</h3>
	<p>
		Playnite doesn't provide out of the box support for certain system information like storage
		usage and network info for permissions reasons. Mo' Data acts as an opt-in way of gathering
		forwarding this information for other themes (including my own) to utilize in their UIs.
	</p>
	<h3 class="mt-8">Addon Links</h3>
	<div class="mt-4 mb-4">
		<a
			class="btn"
			href="https://playnite.link/addons.html#Toggle_28b7d2c0-105b-4632-8dca-d11348bd61d2">Toggle</a
		>
		<a
			class="btn"
			href="https://playnite.link/addons.html#NowPlaying_db4e7ade-57fb-426c-8392-60e2347a0209"
			>Now Playing</a
		>
		<a
			class="btn"
			href="https://playnite.link/addons.html#MoData_5a0a672a-998a-4cf3-94ea-44543de5afcb"
			>Mo Data</a
		>
	</div>
</div>
<div class="project">
	<h1>Better Start</h1>
	<h2>Custom New-Tab Page</h2>
	<p>Built using SvelteKit and Tailwind CSS.</p>
	<p>
		I have always found that new tab pages are great for personal use but lack in a more constrained
		work environment where you're using a few tools <strong>very</strong> often. In a personal setting,
		you're "browsing" where you're either searching for a specific thing or happy to be fed algorithmic
		content from social media. However in a work setting, you're often looking at only a few different
		web-apps but referring back to multiple different pages within a given web-app on a daily basis.
	</p>
	<p>
		For example, a developer may only need to access Jira, Confluence, GitHub, and the
		staging/production versions of their company's apps but within those few apps, there's multiple
		locations they'd often go to. In Jira, they may want to have their team's current sprint, some
		dashboards, and some project pages they manage all bookmarked. In a traditional new tab page,
		there would be 5+ "Jira" bookmarks with a similar favicon so they are not easily seen.
	</p>
	<p>
		This new new-tab page actually lets you group links by section and assign custom icons (or
		emojis) to each section for visual grouping. In the example above, those Jira pages would all be
		under one group, maybe they'd add a link to their GitHub PR queue as well and group the whole
		thing "Development". Confluence can have frequently used spaces linked and the company app they
		develop can be a section with local, development, stage and production links within it.
	</p>
	<div class="mt-8 mb-4">
		<a href="https://github.com/jonosellier/better-start" class="btn me-4">
			Source <i class="bi bi-github"></i>
		</a>
		<a class="btn" href="https://jonosellier.github.io/better-start">Try it out</a>
	</div>
</div>
<div class="project">
	<h1>JSON Reader</h1>
	<h2>NodeJS CLI Tool</h2>
	<p>
		This was made for a part of a tutorial for NodeJS that I may or may not write. It is more of a
		demonstration of how a useful tool can be made with relatively low code (and dependencies).
	</p>
	<p>
		Its actual use is that you supply it with a JSON file (locally or via HTTPS) and it will in its
		most basic form print to stdout but this data can be transformed to show a subset of data via
		JavaScript property access syntax: root.attribute. It can also be used to quickly filter/map the
		data by passing arbitrary JavaScript to the program as an argument. This data can be printed (or
		piped) in its raw form or its typedef by wrapping the JavaScript with <code>shapeOf(...)</code>
	</p>
	<div class="mt-8 mb-4">
		<a href="https://github.com/jonosellier/json-reader" class="btn me-4">
			Source <i class="bi bi-github"></i>
		</a>
	</div>
</div>
<div class="project">
	<h1>Act-A-Fool</h1>
	<h2>JavaScript-based PWA Game</h2>
	<p>
		This was my very first attempt at using JavaScript to actually create a game for real people to
		use. It was created as part of an Independent Study at USF where you write a proposal on what
		you want to learn and how you plan on learning it. My proposal was based on cross-platform
		mobile development, a continued area of interest to me. My original intent was to make a Cards
		Against Humanity app but the idea of manually rewriting every card by hand was daunting to me
		and as this was a 10-week course where I felt that I needed to provide meaningful progress every
		week, I decided that was too large a side-task that was not meeting the goals of my independent
		study. I later found out about JSON Against Humanity by Chris Hallberg but I took a different
		route already.
	</p>
	<p>
		The game was to charades as CAH was to mad-libs: a more modern, current twist on the classic
		game. It is meant to be played on a single phone/tablet where players take turns being given a
		card with a category and a person/thing/idea to pretend to be. No talking. Just acting (a fool).
		Points are added up and someone wins, fairly standard. Add in a twist of being able to make your
		own cards and categories so I didn't have to and we have a decent party game.
	</p>
	<p>
		Due to limitations set by Cordova, the underlying web-app had to also be a single-page app. I am
		well aware of Angular, React, etc. but I set out to learn how to update the DOM myself anyways.
		I also made an effort to write all the code, markup, css, etc. myself and I ended up with
		minimal use of libraries and tools. This was primarily a learning experience for me and I hope
		that this is taken into context when you ask why I didn't use some sort of library
	</p>
	<div class="mt-8 mb-4">
		<a href="https://github.com/jonosellier/act-a-fool" class="btn me-4">
			Source <i class="bi bi-github"></i>
		</a>
	</div>
</div>
<div class="project">
	<h1 class="text-2xl text-bold">Navigate-A-Bull</h1>
	<h2>JavaScript-based PWA</h2>
	<p>
		In case you were curious, no, not all my projects are worded as Verb-a-Noun. The name comes from
		the long-standing tradition that USF must make all of its services some bull-based pun.
	</p>
	<p>
		This one is a play on navigable Nav-a-Bull is an app that solves an issue, USF is large and
		buildings are known as one thing on a map but another to students. New students struggle to find
		their classes every first week of class and my app, co-developed with Kelly Johnson and Philip
		Chang seeks to solve this.
	</p>
	<p>
		Essentially what it comes down to is a skin over Google Maps (however it was intentionally
		designed to be able to be switched to any other mapping application if needed) that provided a
		list of places at USF that allow students to quickly see how to get to a given place without
		trying to find it on Google/Apple/Bing Maps. The entire idea was get in, get directions, get
		out. This app was designed to be quick to use and, going against what social media wants from
		us, minimize the time spent on the app.
	</p>
	<p>
		To that end, we decided that installing an app was too much time spent trying to get directions
		so a PWA that could be linked via QR code on a physical map that is already on campus seemed
		like the lowest hurdle to use. That fact that it also satisfied my desire to make everything
		cross-platform under one codebase was quite pleasing too.
	</p>
	<div class="mt-8 mb-4">
		<a href="https://github.com/jonosellier/nav-a-bull" class="btn me-4">
			Source <i class="bi bi-github"></i>
		</a>
	</div>
</div>
