import React from "react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import AuthLayout from "@/components/auth/AuthLayout";
import { Mail } from "lucide-react";

const ForgotPassword = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add password reset logic here
  };

  return (
    <AuthLayout
      title="Recuperar Senha"
      subtitle="Digite seu email para receber as instruções"
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="seu@email.com"
            required
            className="w-full"
          />
        </div>
        <Button
          type="submit"
          className="w-full bg-brand-red hover:bg-red-600 text-white"
        >
          <Mail className="w-4 h-4 mr-2" />
          Enviar Instruções
        </Button>
        <p className="text-center text-sm text-gray-600 mt-4">
          Lembrou sua senha?{" "}
          <Link to="/login" className="text-brand-red hover:underline">
            Voltar ao login
          </Link>
        </p>
      </form>
    </AuthLayout>
  );
};

export default ForgotPassword;
