import React, { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, Printer, Bell } from "lucide-react";
import type { WhatsAppOrder } from "@/types/whatsapp";
import { whatsAppService } from "@/services/whatsapp-service";
import { printerService } from "@/services/printer-service";

const WhatsAppOrderList = () => {
  const [orders, setOrders] = useState<WhatsAppOrder[]>([]);

  // Simulate receiving new orders
  useEffect(() => {
    const interval = setInterval(async () => {
      const newOrder = await whatsAppService.receiveOrder();
      setOrders((prev) => [newOrder, ...prev]);
      await printerService.printOrder(newOrder);
      await whatsAppService.sendConfirmation(newOrder.phoneNumber);
    }, 30000); // Simulate new order every 30 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <Card className="p-6 bg-brand-white border-2 border-brand-red">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-2">
          <MessageSquare className="w-6 h-6 text-brand-red" />
          <h2 className="text-xl font-bold text-brand-red">Pedidos WhatsApp</h2>
        </div>
        <div className="flex items-center gap-2">
          <Bell className="w-5 h-5 text-brand-yellow" />
          <span className="text-sm font-medium">
            {orders.length} novos pedidos
          </span>
        </div>
      </div>

      <div className="space-y-4">
        <AnimatePresence>
          {orders.map((order) => (
            <motion.div
              key={order.orderNumber}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, x: 100 }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="p-4 border-l-4 border-brand-yellow">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="font-bold text-lg">{order.orderNumber}</h3>
                    <p className="text-sm text-gray-600">
                      {order.customerName}
                    </p>
                    <p className="text-sm text-gray-500">{order.phoneNumber}</p>
                  </div>
                  <Button
                    size="sm"
                    onClick={() => printerService.printOrder(order)}
                    className="bg-brand-yellow hover:bg-brand-red text-black hover:text-white"
                  >
                    <Printer className="w-4 h-4" />
                  </Button>
                </div>

                <div className="space-y-2">
                  {order.items.map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex justify-between text-sm"
                    >
                      <div>
                        <span className="font-medium">
                          {item.quantity}x {item.name}
                        </span>
                        {item.notes && (
                          <p className="text-xs text-gray-500">
                            Obs: {item.notes}
                          </p>
                        )}
                      </div>
                      <span className="font-medium">
                        R$ {(item.price * item.quantity).toFixed(2)}
                      </span>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-3 pt-2 border-t flex justify-between items-center">
                  <span className="font-bold">Total</span>
                  <span className="font-bold text-brand-red">
                    R$ {order.total.toFixed(2)}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </Card>
  );
};

export default WhatsAppOrderList;
