import type { WhatsAppOrder, WhatsAppService } from "@/types/whatsapp";

class MockWhatsAppService implements WhatsAppService {
  async receiveOrder(): Promise<WhatsAppOrder> {
    return {
      orderNumber: `#WA${Math.floor(Math.random() * 10000)}`,
      customerName: "João Silva",
      phoneNumber: "+55 11 99999-9999",
      items: [
        { name: "X-Burger", quantity: 2, price: 25.9, notes: "Sem cebola" },
        { name: "Coca-Cola", quantity: 2, price: 6.9 },
      ],
      total: 65.6,
      timestamp: new Date().toISOString(),
    };
  }

  async sendConfirmation(phoneNumber: string): Promise<void> {
    console.log(`Sending confirmation to ${phoneNumber}`);
  }
}

export const whatsAppService = new MockWhatsAppService();
