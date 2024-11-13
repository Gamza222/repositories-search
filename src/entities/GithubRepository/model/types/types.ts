export class Repository {
  id: string;
  name: string;
  description: string | null;
  stargazerCount: number;
  url: string;
  ownerLogin: string;
  lastCommitDate: string;
  ownerAvatarUrl: string;
  ownerProfileUrl: string;
  languages: string[];

  constructor(data: any) {
    this.id = data.id;
    this.name = data.name;
    this.description = data.description;
    this.stargazerCount = data.stargazerCount;
    this.url = data.url;
    this.ownerLogin = data.owner.login;
    this.lastCommitDate = data.pushedAt;
    this.ownerAvatarUrl = data.owner.avatarUrl;
    this.ownerProfileUrl = data.owner.url;
    this.languages = data.languages.edges.map((edge: any) => edge.node.name);
  }
}
