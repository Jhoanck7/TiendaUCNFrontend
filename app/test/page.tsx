"use client";

import { useEffect, useState } from "react";
import { api } from "@/lib/axios";

type HealthResponse = {
  status: string;
  message: string;
};

export default function TestPage() {
  const [data, setData] = useState<HealthResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    api
      .get<HealthResponse>("/health")
      .then((res) => setData(res.data))
      .catch(() => setError("Error al conectar con el backend"))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div>
      <h1>Test de conexión con el backend</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
