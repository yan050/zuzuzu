 const YouTube = require("simple-youtube-api");

module.exports = {
   name: "play",
   description: "Memainkan Sebuah Lagu",
   aliases: ["p"],
   run: async(args, message, bot) => {
const voiceChannel = message.member.voice.channel;
        if (!voiceChannel) return message.channel.send("I'm sorry, but you need to be in a voice channel to play a music!");
        const permissions = voiceChannel.permissionsFor(message.client.user);
        if (!permissions.has("CONNECT")) {
            return message.channel.send("Sorry, but I need a **`CONNECT`** permission to proceed!");
        }
        if (!permissions.has("SPEAK")) {
            return message.channel.send("Sorry, but I need a **`SPEAK`** permission to proceed!");
        }
        if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
            const playlist = await youtube.getPlaylist(url);
            const videos = await playlist.getVideos();
            for (const video of Object.values(videos)) {
                const video2 = await youtube.getVideoByID(video.id); 
                await handleVideo(video2, message, voiceChannel, true); 
            }
            return message.channel.send(`✅  **|**  Playlist: **\`${playlist.title}\`** has been added to the queue`);
        } else {
            try {
                var video = await youtube.getVideo(url);
            } catch (error) {
                try {
                    var videos = await youtube.searchVideos(searchString, 10);
                    var video = await youtube.getVideoByID(videos[0].id);
                    if (!video) return message.channel.send("🆘  **|**  I could not obtain any search results");
                } catch (err) {
                    console.error(err);
                    return message.channel.send("🆘  **|**  I could not obtain any search results");
                }
            }
            return handleVideo(video, message, voiceChannel);
        }
}
 }