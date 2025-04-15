export interface BuyOfferDetails {
  id: number;
  product: string;
  dateFrom: string;
  dateTo: string;
  quantity: number | null;
  city: string;
  description: string | null;
  status: string;
  paymentDetails: string | null;
  company: {
    id: number;
    name: string;
    type: 'mikro' | 'veliko';
    capacity: string;
    bonitet: string;
    certificates: string[];
  };
  bids: Array<{
    id: number;
    price: number;
    photos: string[];
    company: {
      id: number;
      name: string;
    };
  }>;
} 