import { Route, Routes } from "react-router-dom";
import DashboardHome from "../../components/dashboard/DashboardHome";
import List from "../../components/dashboard/List";
import Single from "../../components/dashboard/Single";
import New from "../../components/dashboard/New";

const Dashboard = () => {       //  /admin/*
  return (
    <div className="w-screen h-screen pt-10">
      <Routes>
        <Route path="/">
          <Route index element={<DashboardHome />} />
          <Route path="users">
            <Route index element={<List />} />
            <Route path=":userId" element={<Single />} />
            <Route path="new" element={<New />} />
          </Route>
          <Route path="products">
            <Route index element={<Single />} />
            <Route path="new" element={<New />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};

export default Dashboard;
