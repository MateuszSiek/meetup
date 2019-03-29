export class User {
  public id: number;
  public name: string = '';
  public avatar: string = '';

  constructor({name, avatar, id}: Partial<User>) {
    this.id = id;
    this.name = name || '';
    this.avatar = avatar || 'assets/avatar_1.png';
  }
}
