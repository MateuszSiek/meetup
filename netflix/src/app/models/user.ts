let usrId = 0;

export class User {
  public id: number;
  public name: string = '';
  public avatar: string = '';

  constructor({name, avatar}: Partial<User>) {
    this.id = usrId;
    this.name = name || '';
    this.avatar = avatar || 'assets/avatar_1.png';
    usrId++;
  }
}
