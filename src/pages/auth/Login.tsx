import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import AuthLayout from "@/components/auth/AuthLayout";
import { LogIn } from "lucide-react";

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add login logic here
    navigate("/dashboard");
  };

  return (
    <AuthLayout
      title="Bem-vindo de volta!"
      subtitle="Entre com suas credenciais para acessar o sistema"
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
        <div className="flex items-center justify-between">
          <Link
            to="/forgot-password"
            className="text-sm text-brand-red hover:underline"
          >
            Esqueceu a senha?
          </Link>
        </div>
        <Button
          type="submit"
          className="w-full bg-brand-red hover:bg-red-600 text-white"
        >
          <LogIn className="w-4 h-4 mr-2" />
          Entrar
        </Button>
        <p className="text-center text-sm text-gray-600 mt-4">
          Não tem uma conta?{" "}
          <Link to="/register" className="text-brand-red hover:underline">
            Cadastre-se
          </Link>
        </p>
      </form>
    </AuthLayout>
  );
};

export default Login;
