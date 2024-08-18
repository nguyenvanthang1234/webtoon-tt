import DefaultComponent from "../components/DefaultComponent/DefaultComponent";
import HomePage from "../pages/HomePage/HomePage";
import NotFoundComponent from "../pages/NotFoundComponent/NotFoundComponent";
import original from "../pages/ORIGINALS/original";

export const routes = [
  {
    path: "/",
    page: HomePage,
    isShowHeader: false,
  },
  {
    path: "/default",
    page: DefaultComponent,
    isShowHeader: false,
  },
  {
    path: "/original",
    page: original,
    isShowHeader: false,
  },
  {
    path: "*",
    page: NotFoundComponent,
  },
];
