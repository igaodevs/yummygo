export interface WhatsAppOrder {
  orderNumber: string;
  customerName: string;
  phoneNumber: string;
  items: Array<{
    name: string;
    quantity: number;
    price: number;
    notes?: string;
  }>;
  total: number;
  timestamp: string;
}

export interface WhatsAppService {
  receiveOrder(): Promise<WhatsAppOrder>;
  sendConfirmation(phoneNumber: string): Promise<void>;
}
