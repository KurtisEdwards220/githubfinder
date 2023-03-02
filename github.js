class Github {
  constructor() {
    this.client_id = '2dabcabbedf9ba8d807b';
    this.client_secret = '930b0a550320cbf2dc999ce28ad2a0ac071c4b39';
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
