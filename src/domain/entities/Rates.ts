export type RateProps = {
  id: string;
  rate: number;
  user_id: string;
  rated_id: string;
  createdAt: Date;
  updateAt: Date;
  rated_name: rated_name;
  topCount: number; //this is used in the getTopRatedUsecase to set the wanted topCount
};

export class Rate {
  public readonly id: string;
  public readonly rate: number;
  public readonly user_id: string;
  public readonly rated_id: string;
  public readonly createdAt: Date;
  public readonly updatedAt: Date;
  public readonly rated_name: rated_name;
  public readonly topCount: number;

  constructor(props: RateProps) {
    this.id = props.id;
    this.rate = props.rate;
    this.user_id = props.user_id;
    this.rated_id = props.rated_id;
    this.createdAt = props.createdAt;
    this.updatedAt = props.updateAt;
    this.rated_name = props.rated_name;
    this.topCount = props.topCount;
  }
}

export enum rated_name {
  PLACE = "place",
  FOOD = "food",
}
