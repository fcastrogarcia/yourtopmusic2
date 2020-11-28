const Playlist = {
  baseEndpoint: "https://api.spotify.com/v1/",
  names: [
    {
      id: 0,
      text: "All-Time Top Tracks",
    },
    {
      id: 1,
      text: "Last Six-Months Top Tracks",
    },
    {
      id: 2,
      text: "Last Month Top Tracks",
    },
  ],
  getBody(range) {
    return {
      name: this.names.find(({ id }) => range === id).text,
      description: "powered by yourtopmusic.netlify.com",
      public: true,
    };
  },
  getUris(tracks) {
    return tracks.map(({ uri }) => uri);
  },
  userEndpoint(user_id) {
    return `${this.baseEndpoint}users/${user_id}/playlists`;
  },
  playlistEndpoint(playlist_id, slug) {
    return `${this.baseEndpoint}playlists/${playlist_id}/${slug}`;
  },
};

export default Playlist;
