import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import AuthLayout from "@/components/auth/AuthLayout";
import { UserPlus } from "lucide-react";

const Register = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add registration logic here
    navigate("/dashboard");
  };

  return (
    <AuthLayout
      title="Criar Conta"
      subtitle="Cadastre-se para começar a usar o sistema"
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="restaurantName">Nome do Restaurante</Label>
          <Input
            id="restaurantName"
            type="text"
            placeholder="Seu Restaurante"
            required
            className="w-full"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="name">Nome Completo</Label>
          <Input
            id="name"
            type="text"
            placeholder="Seu Nome"
            required
            className="w-full"
          />
        </div>
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
        <div className="space-y-2">
          <Label htmlFor="password">Senha</Label>
          <Input
            id="password"
            type="password"
            placeholder="••••••••"
            required
            className="w-full"
          />
        </div>
        <Button
          type="submit"
          className="w-full bg-brand-yellow hover:bg-brand-red text-black hover:text-white"
        >
          <UserPlus className="w-4 h-4 mr-2" />
          Criar Conta
        </Button>
        <p className="text-center text-sm text-gray-600 mt-4">
          Já tem uma conta?{" "}
          <Link to="/login" className="text-brand-red hover:underline">
            Entrar
          </Link>
        </p>
      </form>
    </AuthLayout>
  );
};

export default Register;
