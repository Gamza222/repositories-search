import { useMutation } from "react-query";

interface TokenResponse {
  access_token: string;
}

export const exchangeCodeForToken = () => {
  return useMutation<string, Error, string>(async (code: string) => {
    const response = await fetch(`http://localhost:8000/api/github-oauth`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ code }),
    });
    if (!response.ok) {
      throw new Error("Failed to exchange code for token");
    }

    const data: TokenResponse = await response.json();
    return data.access_token;
  });
};
