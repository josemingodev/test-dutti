export class PlanetModel {
  public id: string;
  public name: string;
  public url: string;

  constructor(copy?: PlanetModel) {
    this.id = copy.id;
    this.name = copy.name;
    this.url = copy.url;
  }
}
