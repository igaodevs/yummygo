import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { QrCode, Download, Share2 } from "lucide-react";

const QRCodeMenu = () => {
  const downloadQRCode = () => {
    // Implementation for downloading QR code
  };

  const shareQRCode = () => {
    // Implementation for sharing QR code
  };

  return (
    <Card className="p-6">
      <div className="flex flex-col items-center space-y-6">
        <h2 className="text-2xl font-bold text-brand-red">
          QR Code do Cardápio
        </h2>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-white p-8 rounded-lg shadow-lg"
        >
          <QrCode className="w-48 h-48 text-brand-red" />
        </motion.div>

        <div className="flex gap-4">
          <Button
            onClick={downloadQRCode}
            className="bg-brand-yellow hover:bg-brand-red text-black hover:text-white"
          >
            <Download className="w-4 h-4 mr-2" />
            Download
          </Button>
          <Button
            onClick={shareQRCode}
            className="bg-brand-red hover:bg-red-600 text-white"
          >
            <Share2 className="w-4 h-4 mr-2" />
            Compartilhar
          </Button>
        </div>

        <p className="text-center text-gray-600 max-w-md">
          Imprima este QR Code e coloque nas mesas do seu estabelecimento para
          que os clientes possam acessar o cardápio digital.
        </p>
      </div>
    </Card>
  );
};

export default QRCodeMenu;
