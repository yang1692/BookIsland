export class  Address {
  id: number;
  receiver_name: string;
  phone: number;
  zip: string;
  state: string;
  address: string;
  constructor(address: any) {
    {
      this.id = address.id || -1;
      this.receiver_name = address.receiver_name || -1;
      this.phone = address.phone || '';
      this.zip = address.zip || '';
      this.state = address.state || '';
      this.address = address.address || '';
    }
  }
}
