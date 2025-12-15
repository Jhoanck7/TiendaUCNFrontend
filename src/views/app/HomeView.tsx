"use client";


import { useRouter } from "next/navigation";
import MainButton from "@/components/MainButton";


export default function HomeView() {
const router = useRouter();


return (
<main className="container">
<h1 className="title">Tienda UCN</h1>
<p className="subtitle">Bienvenido a la tienda online</p>


<div className="buttons">
<MainButton onClick={() => router.push("/login")}>
Iniciar Sesión
</MainButton>


<MainButton onClick={() => router.push("/products")}>
Catálogo de Productos
</MainButton>


<MainButton onClick={() => router.push("/cart")}>
Carrito 🛒
</MainButton>
</div>
</main>
);
}