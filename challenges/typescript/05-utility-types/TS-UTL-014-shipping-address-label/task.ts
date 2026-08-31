export interface Checkout {
  address: {
    name: string;
    city: string;
    postalCode: string;
    country: string;
    deliveryInstructions: string;
  };
  paymentToken: string;
}

export type ShippingLabel = Checkout["address"];
