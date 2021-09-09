class Invoice {
  //   readonly client: string;
  //   private details: string;
  //   public amount: number;

  constructor(
    readonly client: string,
    private details: string,
    public amount: number
  ) {}

  format() {
    return ` ${this.client} owes e${this.amount} for ${this.details}`;
  }

  //for public we can read write and edit the value
  //for private we can only read and change inside the class
  //readonly we can read inside the class and outside the class but not change the value
}

const invOne = new Invoice("lakes", "worked on the webapp", 23);
const invTwo = new Invoice("combs", "worked on the data  analytic", 500);

console.log(invOne, invTwo);

let invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);

invoices.forEach((inv) => {
  console.log(inv.client, inv.amount, inv.format());
});

console.log(invoices);

const form = document.querySelector(".new-item-form") as HTMLFormElement;
console.log(form.children);

const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
