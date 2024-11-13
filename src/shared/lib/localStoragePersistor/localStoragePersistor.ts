export const localStoragePersister = {
  persistClient: async (client: any) => {
    try {
      const cache = JSON.stringify(client.getQueryCache().getAll());
      localStorage.setItem("react-query-cache", cache);
    } catch (error) {
      console.error("Error persisting client cache", error);
    }
  },

  restoreClient: async () => {
    try {
      const cache = localStorage.getItem("react-query-cache");
      return cache ? JSON.parse(cache) : undefined;
    } catch (error) {
      console.error("Error restoring client cache from localStorage", error);
      return undefined;
    }
  },

  removeClient: async () => {
    try {
      localStorage.removeItem("react-query-cache");
    } catch (error) {
      console.error("Error removing client cache from localStorage", error);
    }
  },
};
