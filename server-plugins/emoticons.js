'use strict';

let demFeels = function () {};
demFeels.getEmotes = function () {
	return {};
};
try {
	demFeels = require('dem-feels');
} catch (e) {
	console.error(e);
}

exports.parseEmoticons = parseEmoticons;

// for travis build
if (typeof demFeels.extendEmotes === 'function') {
	// example extending emotes
	demFeels.extendEmotes({
		':tympole:': 'https://play.destinyshowdown.net/resources/custom-emojis/tympole.png',
		':ah:': 'https://images.emojiterra.com/twitter/128px/1f615.png',
		':love:': 'https://images.emojiterra.com/twitter/128px/1f60d.png',
		':angel:': 'https://images.emojiterra.com/twitter/128px/1f607.png',
		':oh:': 'https://images.emojiterra.com/twitter/128px/1f632.png',
		':XD:': 'https://images.emojiterra.com/twitter/128px/1f606.png',
		':lol:': 'https://images.emojiterra.com/twitter/128px/1f610.png',
		':ehhh:': 'https://images.emojiterra.com/twitter/128px/1f61b.png',
		':haha:': 'https://images.emojiterra.com/twitter/128px/1f602.png',
		':beijos:': 'https://images.emojiterra.com/emojione/v2/512px/1f618.png',
		':ohno:': 'https://images.emojiterra.com/twitter/512px/1f626.png',
		':heartsad:': 'https://images.emojiterra.com/twitter/128px/1f494.png',
		':heart:': 'https://images.emojiterra.com/twitter/128px/2764.png',
		':hola:': 'https://images.emojiterra.com/twitter/128px/1f609.png',
		':gangster:': 'https://images.emojiterra.com/emojione/v2/512px/1f60e.png',
		':villano:': 'https://images.emojiterra.com/emojione/v2/512px/1f608.png',
		':omg:': 'https://images.emojiterra.com/twitter/128px/1f62c.png',
		':chorando:': 'https://images.emojiterra.com/twitter/128px/1f62d.png',
		':mono3:': 'https://images.emojiterra.com/twitter/128px/1f648.png',
		':mono2:': 'https://images.emojiterra.com/twitter/128px/1f649.png',
		':mono1:': 'https://images.emojiterra.com/twitter/128px/1f64a.png',
		':disculpa:': 'https://images.emojiterra.com/twitter/128px/1f614.png',
		':ops:': 'https://images.emojiterra.com/twitter/128px/1f617.png',
		':feliz:': 'https://images.emojiterra.com/twitter/128px/1f601.png',
		':furioso:': 'https://images.emojiterra.com/twitter/128px/1f621.png',
		':bravo:': 'https://images.emojiterra.com/twitter/512px/1f624.png',
		':meh:': 'https://images.emojiterra.com/emojione/v2/512px/1f612.png',
		':eyes:': 'https://images.emojiterra.com/twitter/512px/1f440.png',
		':argentina:': 'https://images.emojiterra.com/twitter/128px/1f1e6-1f1f7.png',
		':bolivia:': 'https://images.emojiterra.com/twitter/512px/1f1e7-1f1f4.png',
		':brasil:': 'https://images.emojiterra.com/twitter/128px/1f1e7-1f1f7.png',
		':chile:': 'https://images.emojiterra.com/twitter/128px/1f1e8-1f1f1.png',
		':colombia:': 'https://images.emojiterra.com/twitter/128px/1f1e8-1f1f4.png',
		':costarica:': 'https://images.emojiterra.com/twitter/128px/1f1e8-1f1f7.png',
		':cuba:': 'https://images.emojiterra.com/twitter/128px/1f1e8-1f1fa.png',
		':elsalvador:': 'https://images.emojiterra.com/twitter/128px/1f1f8-1f1fb.png',
		':ecuador:': 'https://images.emojiterra.com/twitter/128px/1f1ea-1f1e8.png',
		':frenchguiana:': 'https://images.emojiterra.com/twitter/128px/1f1ec-1f1eb.png',
		':guatemala:': 'https://images.emojiterra.com/twitter/128px/1f1ec-1f1f9.png',
		':haiti:': 'https://images.emojiterra.com/twitter/128px/1f1ed-1f1f9.png',
		':honduras:': 'https://images.emojiterra.com/twitter/128px/1f1ed-1f1f3.png',
		':mexico:': 'https://images.emojiterra.com/twitter/128px/1f1f2-1f1fd.png',
		':nicaragua:': 'https://images.emojiterra.com/twitter/128px/1f1f3-1f1ee.png',
		':panama:': 'https://images.emojiterra.com/twitter/128px/1f1f5-1f1e6.png',
		':paraguai:': 'https://images.emojiterra.com/twitter/128px/1f1f5-1f1fe.png',
		':peru:': 'https://images.emojiterra.com/twitter/128px/1f1f5-1f1ea.png',
		':republicadominicana:': 'https://images.emojiterra.com/twitter/128px/1f1e9-1f1f4.png',
		':uruguay:': 'https://images.emojiterra.com/twitter/128px/1f1fa-1f1fe.png',
		':venezuela:': 'https://images.emojiterra.com/twitter/128px/1f1fb-1f1ea.png',
		':usa:': 'https://images.emojiterra.com/twitter/512px/1f1fa-1f1f8.png',
		':canada:': 'https://images.emojiterra.com/twitter/512px/1f1e8-1f1e6.png',
		':uk:': 'https://images.emojiterra.com/twitter/512px/1f1ec-1f1e7.png',
		':world:': 'https://images.emojiterra.com/twitter/512px/1f1fa-1f1f3.png',
		':portugal:': 'https://images.emojiterra.com/twitter/512px/1f1f5-1f1f9.png',
		':españa:': 'https://images.emojiterra.com/twitter/512px/1f1ea-1f1f8.png',
		':australia:': 'https://images.emojiterra.com/twitter/512px/1f1e6-1f1fa.png',
		':france:': 'https://images.emojiterra.com/twitter/512px/1f1eb-1f1f7.png',
		':hongkong:': 'https://images.emojiterra.com/twitter/512px/1f1ed-1f1f0.png',
		':china:': 'https://images.emojiterra.com/twitter/512px/1f1e8-1f1f3.png',
		':india:': 'https://images.emojiterra.com/twitter/512px/1f1ee-1f1f3.png',
		':russia:': 'https://images.emojiterra.com/twitter/512px/1f1f7-1f1fa.png',
		':singapore:': 'https://images.emojiterra.com/twitter/512px/1f1f8-1f1ec.png',
		':italy:': 'https://images.emojiterra.com/twitter/512px/1f1ee-1f1f9.png',
		':gayflag:': 'https://images.emojiterra.com/twitter/512px/1f3f3-1f308.png',
		'feelsllama': 'http://i.imgur.com/oSLSk2I.gif',
		'llamacool': 'http://i.imgur.com/X1x3728.gif',
		'llamanoodle': 'http://i.imgur.com/SUZkz5p.gif',
		'llamarawr': 'http://i.imgur.com/KWAQbPu.gif',
		'llamatea': 'http://i.imgur.com/nJnakEU.gif',
		'llamayawn': 'http://i.imgur.com/SVj8kBt.gif',
		'llamamad': 'http://i.imgur.com/eT7kdww.gif',
		'llamanv': 'http://i.imgur.com/9PgUk4M.gif',
		'llamacute': 'http://i.imgur.com/5hi0kjz.gif',
		'llamacry': 'http://i.imgur.com/ID6i8rl.gif',
		'llamapretty': 'http://i.imgur.com/mBPcOQW.gif',
		'llamabouncy': 'http://i.imgur.com/PiMDmNd.gif',
		'llamahi': 'http://i.imgur.com/2BeipQ8.gif',
		'llamasneaky': 'http://i.imgur.com/8XT3CyT.gif',
		'llamadance': 'http://i.imgur.com/Tl8xmiq.gif',
		'llamawink': 'http://i.imgur.com/Xtjjjlm.gif',
		'llamashades': 'http://i.imgur.com/jBlIicx.gif',
		'llama:3': 'http://i.imgur.com/dkV8FSY.gif',
		'llamashy': 'http://i.imgur.com/Bj7jSrc.gif',
		'llamafun': 'http://i.imgur.com/eJIALUZ.gif',
		'llamawhat': 'http://i.imgur.com/KdH5d2T.gif',
		'llamabored': 'http://orig15.deviantart.net/7929/f/2013/347/f/e/llama_emoji_36__bored___v2__by_jerikuto-d6ut3nn.gif',
		'gretxaa': 'https://i.imgur.com/cDhlZTW.gif',
		'gretxaa2': 'https://i.imgur.com/DE7J2c8.gif',
		'gretxaa3': 'https://i.imgur.com/uWxcWRF.gif',
		'gretconversa': 'https://i.imgur.com/ufXwmTi.gif',
		'gretconversa2': 'http://i.imgur.com/jve4WXs.gif',
		'gretconversa3': 'https://i.imgur.com/IbeF5FK.gif',
		'gretconversa4': 'https://i.imgur.com/O3bwyCG.gif',
		'gretbriga': 'https://i.imgur.com/uIglg6D.gif',
		'gretbriga2': 'https://i.imgur.com/bEKeEGQ.gif',
		'gretbriga3': 'https://i.imgur.com/YOK5YKK.gif',
		'gretbriga4': 'https://i.imgur.com/Ld6ASHE.gif',
		'gretseria': 'https://i.imgur.com/gYnGuJG.gif',
		'gretseria2': 'https://i.imgur.com/kutd9qs.gif',
		'gretseria3': 'https://i.imgur.com/f1CJL80.gif',
		'gretseria4': 'https://i.imgur.com/21bMtpG.gif',
		':saindo:': 'https://i.imgur.com/mvUHZev.gif',
		':cheguei:': 'https://i.imgur.com/tBkTIdA.gif',
	});
}

const emotes = demFeels.getEmotes();

const emotesKeys = Object.keys(emotes).sort();

/**
 * Parse emoticons in message.
 *
 * @param {String} message
 * @param {Object} room
 * @param {Object} user
 * @param {Boolean} pm - returns a string if it is in private messages
 * @returns {Boolean|String}
 */
function parseEmoticons(message, room, user, pm) {
	if (typeof message !== 'string' || (!pm && room.disableEmoticons)) return false;

	let match = false;
	let len = emotesKeys.length;

	while (len--) {
		if (message && message.indexOf(emotesKeys[len]) >= 0) {
			match = true;
			break;
		}
	}

	if (!match) return false;

	// escape HTML
	message = Chat.escapeHTML(message);

	// add emotes
	message = demFeels(message);

	// __italics__
	message = message.replace(/\_\_([^< ](?:[^<]*?[^< ])?)\_\_(?![^<]*?<\/a)/g, '<i>$1</i>');

	// **bold**
	message = message.replace(/\*\*([^< ](?:[^<]*?[^< ])?)\*\*/g, '<b>$1</b>');

	let group = user.getIdentity().charAt(0);
	if (room && room.auth) group = room.auth[user.userid] || group;
	if (pm && !user.hiding) group = user.group;

	if (pm) return "<div class='chat' style='display:inline'>" + "<em class='mine'>" + message + "</em></div>";

	let style = "background:none;border:0;padding:0 5px 0 0;font-family:Verdana,Helvetica,Arial,sans-serif;font-size:9pt;cursor:pointer";
	let name = user.getIdentity(room).substr(0, 1) + user.name;

	if (Users.ShadowBan.checkBanned(user)) {
		user.sendTo(room, message = (`${(room.type === 'chat' ? '|c:|' + ~~(Date.now() / 1000) + '|' : '|c|') + name}|/html ${message}`));
		Users.ShadowBan.addMessage(user, "To " + room);
		return true;
	} else {
		message = room.add(`${(room.type === 'chat' ? '|c:|' + ~~(Date.now() / 1000) + '|' : '|c|') + name}|/html ${message}`).update();
	}
	for (let u in room.users) {
		let targetUser = Users.get(u);
		// in case the user is offline
		if (!targetUser || !targetUser.connected) continue;
		// if user is ignoring emotes
		if (targetUser.blockEmoticons) {
			targetUser.sendTo(room, "|c|" + group + user.name + "|" + originalMessage);
		}
	}
	return true;
}

/**
 * Create a two column table listing emoticons.
 *
 * @return {String} emotes table
 */
function create_table() {
	let emotes_name = Object.keys(emotes);
	let emotes_list = [];
	let emotes_group_list = [];
	let len = emotes_name.length;

	for (let i = 0; i < len; i++) {
		emotes_list.push("<td style='padding: 5px; box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.5) inset; border-radius: 5px;'>" + "<img src='" + emotes[emotes_name[i]] + "'' title='" + emotes_name[i] + "' height='50' width='50' style='vertical-align: middle;  padding-right: 5px;' />" + emotes_name[i] + "</td>");
	}

	for (let i = 0; i < len; i += 4) {
		let emoteOutput = [emotes_list[i], emotes_list[i + 1], emotes_list[i + 2], emotes_list[i + 3]];
		if (i < len) emotes_group_list.push("<tr>" + emoteOutput.join('') + "</tr>");
	}

	return (
		"<div class='infobox'><center><font style='font-weight: bold; text-decoration: underline; color: #555;'>Lista delle Emotes</font></center>" +
		"<div style='max-height: 300px; overflow-y: scroll; padding: 5px 0px;'><table style='background: rgba(245, 245, 245, 0.4); border: 1px solid #BBB;' width='100%'>" +
		emotes_group_list.join("") +
		"</table></div></div>"
	);
}

let emotes_table = create_table();

exports.commands = {
	blockemote: 'blockemoticons',
	blockemotes: 'blockemoticons',
	blockemoticon: 'blockemoticons',
	blockemoticons: function (target, room, user) {
		if (user.blockEmoticons === (target || true)) return this.sendReply("You are already blocking emoticons in private messages! To unblock, use /unblockemoticons");
		user.blockEmoticons = true;
		return this.sendReply("You are now blocking emoticons in private messages.");
	},
	blockemoticonshelp: ["/blockemoticons - Blocks emoticons in private messages. Unblock them with /unblockemoticons."],

	unblockemote: 'unblockemoticons',
	unblockemotes: 'unblockemoticons',
	unblockemoticon: 'unblockemoticons',
	unblockemoticons: function (target, room, user) {
		if (!user.blockEmoticons) return this.sendReply("You are not blocking emoticons in private messages! To block, use /blockemoticons");
		user.blockEmoticons = false;
		return this.sendReply("You are no longer blocking emoticons in private messages.");
	},
	unblockemoticonshelp: ["/unblockemoticons - Unblocks emoticons in private messages. Block them with /blockemoticons."],

	emotes: 'emoticons',
	emoticons: function (target, room, user) {
		if (!this.runBroadcast()) return;
		this.sendReply("|raw|" + emotes_table);
	},
	emoticonshelp: ["/emoticons - Get a list of emoticons."],

	toggleemote: 'toggleemoticons',
	toggleemotes: 'toggleemoticons',
	toggleemoticons: function (target, room, user) {
		if (!this.can('declare', null, room)) return false;
		room.disableEmoticons = !room.disableEmoticons;
		this.sendReply("Disallowing emoticons is set to " + room.disableEmoticons + " in this room.");
		if (room.disableEmoticons) {
			this.add("|raw|<div class=\"broadcast-red\"><b>Emoticons are disabled!</b><br />Emoticons will not work.</div>");
		} else {
			this.add("|raw|<div class=\"broadcast-blue\"><b>Emoticons are enabled!</b><br />Emoticons will work now.</div>");
		}
	},
	toggleemoticonshelp: ["/toggleemoticons - Toggle emoticons on or off."],

	rande: 'randemote',
	randemote: function (target, room, user) {
		if (!this.runBroadcast()) return;
		let rng = Math.floor(Math.random() * emotesKeys.length);
		let randomEmote = emotesKeys[rng];
		this.sendReplyBox("<img src='" + emotes[randomEmote] + "' title='" + randomEmote + "' height='50' width='50' />");
	},
	randemotehelp: ["/randemote - Get a random emote."],
};