import { AuthNav } from "components/AuthNav/AuthNav";
import { Nav } from "components/Nav/Nav";
import { UserNav } from "components/UserNav/UserNav";

export const Navigation = () => {
  return (
    <>
      <Nav />
      {/* <UserNav /> */}
      <AuthNav />
    </>
  );
};
