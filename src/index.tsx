import { render } from "react-dom";

import "app/styles/index.scss";
import "shared/config/i18n/i18n";

import ThemeProvider from "./app/providers/ThemeProvider/ui/ThemeProvider";
import App from "app/App";

import { ErrorBoundary } from "app/providers/ErrorBoundary";
import { BrowserRouter } from "react-router-dom";
import { HashRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

render(
  // <BrowserRouter>
  <HashRouter>
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  </HashRouter>,

  // </BrowserRouter>,

  document.getElementById("root")
);
