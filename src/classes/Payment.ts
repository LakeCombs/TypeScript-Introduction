import { HasFormatter } from "../Interfaces/HasFormatter";

export class Payment implements HasFormatter {
  constructor(
    readonly recipient: string,
    private details: string,
    public amount: number
  ) {}

  format() {
    return ` ${this.recipient} is  owed e${this.amount} for ${this.details}`;
  }
}
