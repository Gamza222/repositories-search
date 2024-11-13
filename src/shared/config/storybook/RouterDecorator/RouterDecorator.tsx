import { BrowserRouter } from "react-router-dom";

export const RouterDecorator = (StoryComponent: React.FC) => (
  <BrowserRouter>
    <StoryComponent />
  </BrowserRouter>
);
