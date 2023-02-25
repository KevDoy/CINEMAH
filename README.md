## Synopsis
![logo](https://raw.githubusercontent.com/KevDoy/CINEMAH/master/logo.png "CINEMAH logo")

CINEMAH (ver. 0.7) is a simple web based based video organization interface that help you organize movies and TV shows that you find across the web (ie. YouTube, Google Drive, etc). It is designed to be responsive and accessed both on Desktop and Mobile devices and can be installed as web app on Android, iOS and iPadOS.

![screenshot](https://raw.githubusercontent.com/KevDoy/CINEMAH/master/screenshot.jpg "CINEMAH Main Page")

![screenshot2](https://raw.githubusercontent.com/KevDoy/CINEMAH/master/screenshot2.jpg "CINEMAH TV Show Overlay")

## To add non-TV Show content...

Navigate to the `data` folder. Choose the JSON file that fits the category you're looking to modify (for example: `comedy.json`).
Inside you'll find content scrutured like this.
`{
		"ytid": "tDolNU89SXI",
        "vidurl": "https://www.youtube.com/watch?v=tDolNU89SXI",
        "movietitle": "Mark Normand: Out to Lunch"
	},`
`ytid` uses a YouTube ID to populate a thumbnail for this title. `vidurl` is the link to the video. `movietitle` is the title of the video.
The rest takes care of itself.

## To add TV Shows...

Navigate to the `data` folder. Edit the `tvshows.json` file. 
Inside you'll find content scrutured like this.
`{
		"imgurl": "https://yt3.googleusercontent.com/p02AWxuQdbDeG6CR5RqKgR2TkHBzftLAr_O4QyeNHm-8Z6WkJNKWMJRZmxM8nssgdEEb9e7CKQ",
        "vidurl": "#tv-kitchennightmares",
        "movietitle": "Kitchen Nightmares"
	},`
`imgurl` is a URL pointing at an image online. `vidurl` is an HTML ID you assign to the show. `movietitle` is the title of the TV Show.

The actual seasons will live inside of `/package/index.html` for the time being. This is where the vidurl ID that you created comes into play.
Inside the HTML you'll see a TV show structured like this at the bottom of the page. If you're adding a new show, it is probably easiest to copy and modify an existing one.
`
<!-- TV Show: Kitchen Nightmares -->
	<div class="lity-hide" id="tv-kitchennightmares">
		<div class="container">
			<div class="row">
				<h3 class="text-white">Kitchen Nightmares</h3>
			</div>
			<div class="row">
				<div class="col-6 col-md-4"><a
						href="https://youtube.com/playlist?list=PLW5iCJIwM9Z_t2nmZGbuqd0rjagbxsna-" target="_blank"><img
							src="https://i.ytimg.com/vi/umCPdkAw7m8/hq720.jpg" class="img-fluid"
							alt="">
						<p class="mt-2 text-white">Kitchen Nightmares: Season 1</p>
					</a></div>

				<div class="col-6 col-md-4"><a
						href="https://youtube.com/playlist?list=PLW5iCJIwM9Z_X-djnm07ZfAoxzuyorjUV" target="_blank"><img
							src="https://i.ytimg.com/vi/NCeD-MuYnVw/hq720.jpg" class="img-fluid"
							alt="">
						<p class="mt-2 text-white">Kitchen Nightmares: Season 2</p>
					</a></div>

				<div class="col-6 col-md-4"><a
						href="https://youtube.com/playlist?list=PLW5iCJIwM9Z-olFtuDSJfGlYfyPm-YkyU" target="_blank"><img
							src="https://i.ytimg.com/vi/7T_nP-JrQ1I/hq720.jpg" class="img-fluid"
							alt="">
						<p class="mt-2 text-white">Kitchen Nightmares: Season 3</p>
					</a></div>

				<div class="col-6 col-md-4"><a
						href="https://youtube.com/playlist?list=PLW5iCJIwM9Z9bE9qwKNdAsoeI01vA9lBq" target="_blank"><img
							src="https://i.ytimg.com/vi/fEv1ILJS1bE/hq720.jpg" class="img-fluid"
							alt="=">
						<p class="mt-2 text-white">Kitchen Nightmares: Season 4</p>
					</a></div>

				<div class="col-6 col-md-4"><a
						href="https://youtube.com/playlist?list=PLW5iCJIwM9Z_aoI96ofsa6m8QBoBJ2_9L" target="_blank"><img
							src="https://i.ytimg.com/vi/_Ne7zRoSCPY/hq720.jpg" class="img-fluid"
							alt="=">
						<p class="mt-2 text-white">Kitchen Nightmares: Season 5</p>
					</a></div>

				<div class="col-6 col-md-4"><a
						href="https://youtube.com/playlist?list=PLW5iCJIwM9Z8JWUQ4KiOwYJoklRrvDwwR" target="_blank"><img
							src="https://i.ytimg.com/vi/bDAjkZFactQ/hq720.jpg" class="img-fluid"
							alt="">
						<p class="mt-2 text-white">Kitchen Nightmares: Season 6</p>
					</a></div>
			</div>
		</div>

	</div>
`
The links ideally link to a YouTube playlist that contains a full season of a TV Show with a thumbnail image that fits the season attached in the image source. Below, you'll describe what the title is. For example: "Kitchen Nightmares: Season 1".


## Motivation

YouTube often has great shows uploaded, but when you're binging, searching for the next episode can really take you out of the experience. Cinemah allows you to binge without interruptions by organizing the content you find ahead of time.

![screenshot3](https://raw.githubusercontent.com/KevDoy/CINEMAH/master/screenshot3.gif "CINEMAH TV Show binge experience")


## Installation

Clone this repo and post it to your web server or GitHub pages. Since you're not hosting any of the videos, the installation remains small and lightweight.


## Contributors

Join the conversation:
[@CINEMAHnet on Twitter](https://www.twitter.com/CINEMAHnet)

## License
Bootstrap, Lity, JSON2HTML all have their own licenses that are not listed here. Apart from these libraries and tools, CINEMAH is licensed as follows:

Attribution 2.0 Generic
You are free to:


Share — copy and redistribute the material in any medium or format
Adapt — remix, transform, and build upon the material
for any purpose, even commercially.
The licensor cannot revoke these freedoms as long as you follow the license terms.
Under the following terms:

Attribution — You must give appropriate credit, provide a link to the license, and indicate if changes were made. You may do so in any reasonable manner, but not in any way that suggests the licensor endorses you or your use.
