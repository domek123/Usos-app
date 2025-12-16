import { useState } from "react";

export const useLoginData = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  return { email, setEmail, password, setPassword, isLoading, error };
};
