import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { MessageSquare, Printer, CheckCircle } from "lucide-react";

interface WhatsAppOrderProps {
  orderNumber?: string;
  customerName?: string;
  phoneNumber?: string;
  items?: Array<{
    name: string;
    quantity: number;
    price: number;
    notes?: string;
  }>;
}

const WhatsAppOrder = ({
  orderNumber = "#WA1234",
  customerName = "João Silva",
  phoneNumber = "+55 11 99999-9999",
  items = [
    { name: "X-Burger", quantity: 2, price: 25.9, notes: "Sem cebola" },
    { name: "Coca-Cola", quantity: 2, price: 6.9 },
  ],
}: WhatsAppOrderProps) => {
  const total = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  const printOrder = async () => {
    // Implement thermal printer integration here
    console.log("Printing order...");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="p-6 bg-brand-white border-2 border-brand-red">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h3 className="text-xl font-bold text-brand-red">{orderNumber}</h3>
            <p className="text-sm text-gray-600">
              {new Date().toLocaleString()}
            </p>
          </div>
          <MessageSquare className="w-8 h-8 text-green-500" />
        </div>

        <div className="mb-4">
          <p className="font-semibold">{customerName}</p>
          <p className="text-sm text-gray-600">{phoneNumber}</p>
        </div>

        <div className="space-y-2 mb-4">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex justify-between items-start p-2 bg-gray-50 rounded"
            >
              <div>
                <p className="font-medium">
                  {item.quantity}x {item.name}
                </p>
                {item.notes && (
                  <p className="text-sm text-gray-500">Obs: {item.notes}</p>
                )}
              </div>
              <p className="font-medium">
                R$ {(item.price * item.quantity).toFixed(2)}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-between items-center text-lg font-bold mb-4">
          <span>Total</span>
          <span className="text-brand-red">R$ {total.toFixed(2)}</span>
        </div>

        <Button
          onClick={printOrder}
          className="w-full bg-brand-yellow hover:bg-brand-red text-black hover:text-white transition-colors"
        >
          <Printer className="w-4 h-4 mr-2" />
          Imprimir Comanda
        </Button>
      </Card>
    </motion.div>
  );
};

export default WhatsAppOrder;
