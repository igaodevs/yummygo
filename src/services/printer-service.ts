import type { WhatsAppOrder } from "@/types/whatsapp";

class MockPrinterService {
  async printOrder(order: WhatsAppOrder): Promise<void> {
    console.log("Printing order:", {
      orderNumber: order.orderNumber,
      timestamp: order.timestamp,
      customer: {
        name: order.customerName,
        phone: order.phoneNumber,
      },
      items: order.items,
      total: order.total,
    });
  }
}

export const printerService = new MockPrinterService();
