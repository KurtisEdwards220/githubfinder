class Github {
  constructor() {
    this.client_id = '2dabcabbedf9ba8d807b';
    this.client_secret = '0b2b4fdaaa45395436afbc416ad00a5e9bf95238';
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );
    const profile = await profileResponse.json();

    return {
      profile,
    };
  }
}
