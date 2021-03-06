## Synopsis
![logo](https://raw.githubusercontent.com/KevDoy/CINEMAH/master/logo.png "CINEMAH logo")

CINEMAH (ver. 0.5) is a simple HTML and CSS based video organization interface that aims to be easy to edit and host by anyone. It is designed to be responsive and accessed both on Desktop and Mobile devices. It is currently designed to be hosted on a server, but an offline version is coming soon.

![screenshot](https://raw.githubusercontent.com/KevDoy/CINEMAH/master/screenshot2.png "CINEMAH Landing Page")
![screenshot2](https://raw.githubusercontent.com/KevDoy/CINEMAH/master/screenshot.png "CINEMAH Selection Screen")
## To add Movies...

Open the index.html inside of the start folder and edit the following:
`<a href="URL TO MOVIE"><img class="cover" src="./covers/COVER IMAGE" /></a>`
The rest takes care of itself.

## To set up login

The login page is designed to be used with .htaccess & .htpasswd. There are many guides online to set this up, but you will need to password protect the "start" folder and all of it's contents.
Note: The login page functions by putting the username and password into the URL and isn't designed to be very secure but just to keep the average onlooker out. Use at your own risk. I suggest using a secondary security wall (for example, if you use Google Drive, only share the video files with approved contacts.)

## Motivation

I wanted to enable people in our household to watch backups of our movies which are stored on a network-connected external harddrive. This way any browser can access the harddrive with a nice & clean interface. But this can easily be used with Google Drive or other cloud hosted video files.

## Installation

Due to the simple nature of this project, you can run this locally on your machine (up until v0.4, will return soon), host it on a web server or anything else you'd like.
I do suggest that you use the .htpasswd and .htaccess in the /start/ folder to block access to any outsiders.

## Contributors

Join the conversation:
[@CINEMAHnet on Twitter](https://www.twitter.com/CINEMAHnet)

## License
Attribution 2.0 Generic
You are free to:


Share — copy and redistribute the material in any medium or format
Adapt — remix, transform, and build upon the material
for any purpose, even commercially.
The licensor cannot revoke these freedoms as long as you follow the license terms.
Under the following terms:

Attribution — You must give appropriate credit, provide a link to the license, and indicate if changes were made. You may do so in any reasonable manner, but not in any way that suggests the licensor endorses you or your use.
