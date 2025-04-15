export interface SellOfferDetails {
  id: number;
  product: string;
  dateFrom: string;
  dateTo: string;
  quantity: number;
  city: string;
  price: number;
  status: string;
  photos: string[];
  description: string;
  company: {
    id: number;
    name: string;
    type: 'mikro' | 'veliko';
    capacity: string;
    certificates: string[];
  };
  bids: Array<{
    id: number;
    price: number;
    status: string;
    company: {
      id: number;
      name: string;
    };
  }>;
} 