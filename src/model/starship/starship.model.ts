export class StarshipModel {
  public id: string;
  public name: string;
  public model: string;
  public manufacturer: string;
  public cost_in_credits: number;
  public lenght: number;
  public max_atmosphering_speed: number;
  public crew: number;
  public passengers: number;
  public cargo_capacity: number;
  public consumables: string;
  public hyperdrive_rating: string;
  public MGLT: number;
  public starship_class: number;
  public url: string;

  constructor(copy?: StarshipModel) {
    this.id = copy.id;
    this.name = copy.name;
    this.model = copy.model;
    this.manufacturer = copy.manufacturer;
    this.cost_in_credits = copy.cost_in_credits;
    this.lenght = copy.max_atmosphering_speed;
    this.crew = copy.crew;
    this.passengers = copy.passengers;
    this.cargo_capacity = copy.cargo_capacity;
    this.consumables = copy.consumables;
    this.hyperdrive_rating = copy.hyperdrive_rating;
    this.MGLT = copy.MGLT;
    this.starship_class = copy.starship_class;
    this.url = copy.url;
  }
}
