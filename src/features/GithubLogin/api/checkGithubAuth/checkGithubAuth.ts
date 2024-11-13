// import { setGithubUserData } from "features/GithubLogin/model/selectors/githubLoginSelectors";
// import { useGithubLoginStore } from "features/GithubLogin/model/store/githubLoginStore";

// export const checkGitHubAuth = async () => {
//   const urlParams = new URLSearchParams(window.location.search);
//   const token = urlParams.get("access_token");

//   if (token) {
//     // Fetch user data from GitHub
//     const response = await fetch("https://api.github.com/user", {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });
//     const data = await response.json();

//     if (response.ok) {
//       const setGithubUser = useGithubLoginStore(setGithubUserData);
//       setGithubUser({
//         username: data.login,
//         avatarUrl: data.avatar_url,
//         token: token,
//       });
//     }
//   }
// };
