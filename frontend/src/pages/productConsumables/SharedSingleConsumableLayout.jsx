import { Outlet } from "react-router";

const SharedSingleConsumableLayout = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default SharedSingleConsumableLayout;
