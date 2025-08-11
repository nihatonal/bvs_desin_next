"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    if (res.ok) {
      router.push("/admin"); // cookie ile middleware koruması sayesinde admin sayfası açılır
    } else {
      const data = await res.json();
      alert(data.error || "Giriş başarısız");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 px-4">
      <form
        onSubmit={handleLogin}
        className="bg-white/90 backdrop-blur-md rounded-lg shadow-lg p-8 max-w-md w-full"
      >
        <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
          Admin Giriş
        </h2>

        <label className="block mb-4">
          <span className="text-gray-700 font-medium mb-1 block">Kullanıcı Adı</span>
          <input
            type="text"
            placeholder="Kullanıcı Adı"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-400 transition outline-none"
            required
          />
        </label>

        <label className="block mb-6">
          <span className="text-gray-700 font-medium mb-1 block">Şifre</span>
          <input
            type="password"
            placeholder="Şifre"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-400 transition outline-none"
            required
          />
        </label>

        <button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white font-semibold py-3 rounded-md shadow-md transition"
        >
          Giriş Yap
        </button>
      </form>
    </div>

  );
}
