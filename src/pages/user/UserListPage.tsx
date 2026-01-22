import { useEffect } from "react";
import { NavLink, useParams, useSearchParams } from "react-router";

export default function UserListPage() {
  const params = useParams(); //params
  // query string
  const [query, setQuery] = useSearchParams();

  useEffect(() => {
    setTimeout(() => {
      setQuery({
        search: "Rushal",
        page: "1",
      });
    }, 5000);
  }, []);
  return (
    <>
      <ul>
        <li>
          <NavLink to="/admin/user">All</NavLink>
        </li>
        <li>
          <NavLink to="/admin/user/1">User 1</NavLink>
        </li>
        <li>
          <NavLink to="/admin/user/2">User 2</NavLink>
        </li>
        <li>
          <NavLink to="/admin/user/3">User 3</NavLink>
        </li>
      </ul>

      <p>User Detail from Params:: {params?.userId}</p>
      <p>query data:: {query.get("search")}</p>
    </>
  );
}
