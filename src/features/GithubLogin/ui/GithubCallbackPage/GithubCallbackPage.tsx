import React, { useEffect } from "react";
import { setGithubUserData } from "features/GithubLogin/model/selectors/githubLoginSelectors";
import { useGithubLoginStore } from "features/GithubLogin/model/store/githubLoginStore";
import { useNavigate } from "react-router-dom";
import { fetchGithubUserData } from "../../api/fecthGithubUserData/fetchGithubUserData";
import { exchangeCodeForToken } from "features/GithubLogin/api/exhangeCodeForToken/exhangeCodeForToken";

const GithubCallbackPage = () => {
  const navigate = useNavigate();
  const setUser = useGithubLoginStore(setGithubUserData);
  const [accessToken, setAccessToken] = React.useState<string | null>(null);

  const {
    mutate: useExchangeCodeForToken,
    isLoading: isTokenLoading,
    isError: isTokenError,
    error: tokenError,
  } = exchangeCodeForToken();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("code");

    if (code) {
      useExchangeCodeForToken(code, {
        onSuccess: (token: string) => {
          setAccessToken(token);
        },
        onError: (error: Error) => {
          alert(`Error exchanging code for token: ${error.message}`);
          navigate("/login");
        },
      });
    } else {
      navigate("/login");
    }
  }, [navigate, exchangeCodeForToken]);

  const { data, isLoading, isError, error } = fetchGithubUserData(
    accessToken || ""
  );

  if (isTokenLoading) {
    return <div>Loading token...</div>;
  }

  if (isLoading) {
    return <div>Loading user data...</div>;
  }

  if (isError) {
    return (
      <div>
        Error:{" "}
        {error instanceof Error ? error.message : "Failed to fetch user data"}
      </div>
    );
  }

  if (data) {
    setUser({ ...data });
    navigate("/");
  }

  return <div>Loading...</div>;
};

export default GithubCallbackPage;
