/************************************
 *	Fun Misc. Commands for PS!		*
 *	The following were coded by:	*
 *  Volco, Gyaratoast, and Insist	*
 ************************************/

"use strict";

const FS = require("../lib/fs.js");

let memes = FS("config/chat-plugins/memes.json").readIfExistsSync();

if (memes !== "") {
	memes = JSON.parse(memes);
} else {
	memes = {};
}

function write() {
	FS("config/chat-plugins/memes.json").writeUpdate(() => (
		JSON.stringify(memes)
	));
	let data = "{\n";
	for (let u in memes) {
		data += '\t"' + u + '": ' + JSON.stringify(memes[u]) + ",\n";
	}
	data = data.substr(0, data.length - 2);
	data += "\n}";
	FS("config/chat-plugins/memes.json").writeUpdate(() => (
		data
	));
}

exports.commands = {
	kiss: function (target, room, user) {
		if (!this.runBroadcast()) return;
		if (!target) return this.sendReplyBox("kiss needs a target");
		if (target.length > 19) return this.errorReply("Username " + target + " is too long.");
		this.sendReplyBox(
			Server.nameColor(user.name, true) + " besa a " + Server.nameColor(target, true) + "<br />" +
			"<img src=\"http://i.imgur.com/S7mwPfE.gif\">"
		);
	},
	splash: function (target, room, user) {
		if (!this.runBroadcast()) return;
		this.sendReplyBox('<center><img src="https://media.tenor.com/images/414a8471e414189c4c32ffee2ad9f6f1/tenor.gif" width="600" height="300"</center>');
	},
	hug: function (target, room, user) {
		if (!this.runBroadcast()) return;
		if (!target) return this.sendReply('/kiss needs a target.');
		this.sendReplyBox('<center><img src="http://i.imgur.com/q9Wkhz4.gif" width="600" height="300"</center>');
	},
	"!shrug": true,
	shrug: function () {
		this.parse("¯\\_(ツ)_/¯");
	},

	murder: function (target, room, user) {
		if (!target) return this.errorReply(`/murder needs a target.`);
		if (!this.can("mute", null, room)) return false;
		let targetUser = Users.get(target);
		if (!targetUser || !targetUser.connected) return this.errorReply(`User "${targetUser}" was not found.`);
		room.addRaw(`${Server.nameColor(user.name, true, true)} has murdered ${Server.nameColor(target, true, true)}!`);
		targetUser.popup("WASTED!");
	},

	"!slap": true,
	slap: function (target) {
		if (!target) return this.errorReply("/slap needs a target.");
		this.parse(`/me slaps ${target} in the face with a slipper!`);
	},

	meme: "memes",
	memes: {
		add: function (target) {
			if (!this.can("lock")) return;
			let [name, img, height, width] = target.split(",").map(p => { return p.trim(); });
			if (!width) return this.parse(`/memeshelp`);
			if (name.length > 20) return this.errorReply(`Your name should be less than 20 characters long.`);
			if (memes[toId(name)]) return this.errorReply(`${name} is already registered as a meme!`);
			if (![".png", ".gif", ".jpg"].includes(img.slice(-4))) return this.errorReply(`The image needs to end in .png, .gif, or .jpg.`);
			if (height > 500 || height < 100 || width > 500 || width < 100) return this.errorReply(`Your height and width attributes should be less than 500 and more than 100.`);
			if (isNaN(height) || isNaN(width)) return this.errorReply(`Your height and width attributes must be a number!`);
			memes[toId(name)] = {
				name: name,
				id: toId(name),
				img: img,
				height: height,
				width: width,
			};
			write();
			return this.sendReplyBox(`Meme ${name} created!<br /><img src="${img}" alt="${name}" title="${name}" height="${height}" width="${width}">.`);
		},

		delete: "remove",
		clear: "remove",
		remove: function (target) {
			if (!this.can("lock")) return false;
			if (!target) return this.errorReply("This command requires a target.");
			let memeid = toId(target);
			if (!memes[memeid]) return this.errorReply(`${target} is not currently registered as a meme.`);
			delete memes[memeid];
			write();
			this.sendReply(`The meme "${target}" has been deleted.`);
		},

		list: function () {
			if (!this.runBroadcast()) return;
			if (Object.keys(memes).length < 1) return this.errorReply(`There are no memes on ${Config.serverName}.`);
			let reply = `<strong><u>Memes (${Object.keys(memes).length.toLocaleString()})</u></strong><br />`;
			for (let meme in memes) reply += `(<strong>${meme}</strong>) <button class="button" name="send" value="/meme show ${meme}">View ${meme}</button><br />`;
			this.sendReplyBox(reply);
		},

		show: "display",
		display: function (target, room, user) {
			if (!this.runBroadcast()) return;
			if (Object.keys(memes).length < 1) return this.errorReply(`There are no memes on ${Config.serverName}.`);
			if (!target) {
				let randMeme = Object.keys(memes)[Math.floor(Math.random() * Object.keys(memes).length)];
				let title = memes[randMeme].name;
				let randMemeImg = memes[randMeme].img;
				let randMemeH = memes[randMeme].height;
				let randMemeW = memes[randMeme].width;
				this.sendReplyBox(`Random Meme "${title}": <img src="${randMemeImg}" alt="${title}" title="${title}" height="${randMemeH}" width="${randMemeW}">`);
			} else {
				let memeid = toId(target);
				if (!memes[memeid]) return this.errorReply("That meme does not exist.");
				let name = memes[memeid].name;
				let img = memes[memeid].img;
				let height = memes[memeid].height;
				let width = memes[memeid].width;
				this.sendReplyBox(`${name}:<br /> <img src="${img}" alt="${name}" title="${name}" height="${height}" width="${width}">`);
			}
		},

		"": "help",
		help: function () {
			this.parse(`/memeshelp`);
		},
	},

	memeshelp: [
		`/memes add [name], [height], [width] - Adds a meme into the index. Requires Lock Access.
		/memes delete [name] - Removes a meme from the index. Requires Lock Access.
		/memes list - Shows all the memes in the index.
		/memes show [optional meme name] - Shows the specified meme. If no target is specified, randomly displays a meme.
		/memes help - Shows this command.`,
	],
};
