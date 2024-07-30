import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useInView } from "react-intersection-observer";
import { EmployeeType } from "../types/global";
import { useSearchStore } from "../store/store";

const HomePage = () => {
  const { search } = useSearchStore();
  const navigate = useNavigate();

  const fetchEmployees = async ({ pageParam = 0 }) => {
    const limit = pageParam === 0 ? 9 : 1;

    // Calculate the start parameter
    const start = pageParam === 0 ? 0 : pageParam;

    // Adding a 250-millisecond delay before fetching data so the infinite scroll effect is more noticeable
    await new Promise((resolve) => setTimeout(resolve, 250));

    const response = await fetch(
      `http://localhost:3000/data?_start=${start}&_limit=${limit}`
    );
    const data = await response.json();
    return {
      data,
      nextPage: data.length > 0 ? start + data.length : null,
    };
  };

  // React Query setup for infinite scroll
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ["employees"],
      queryFn: fetchEmployees,
      initialPageParam: 0,
      getNextPageParam: (lastPage) => lastPage.nextPage,
    });

  // Intersection observer setup
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage]);

  return (
    <div className="home">
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Photo</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Job Title</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {data?.pages.map((page) => (
            <>
              {page.data
                .filter((item: EmployeeType) => {
                  const keys = [
                    "firstName",
                    "lastName",
                  ] as (keyof EmployeeType)[];
                  return search === ""
                    ? true
                    : keys.some((key) =>
                        item[key].toLowerCase().includes(search)
                      );
                })
                .map((employee: EmployeeType) => (
                  <tr key={employee.id}>
                    <td>{employee.id}</td>
                    <td>
                      <img
                        src={employee.imageUrl}
                        height={100}
                        width={100}
                        alt="Image of an employee"
                      />
                    </td>
                    <td>{employee.firstName}</td>
                    <td>{employee.lastName}</td>
                    <td>{employee.email}</td>
                    <td>{employee.position}</td>
                    <td>
                      <button
                        onClick={() => navigate(`/employee/${employee.id}`)}
                      >
                        details
                      </button>
                    </td>
                  </tr>
                ))}
            </>
          ))}
        </tbody>
      </table>
      <div ref={ref} className="loading">
        {isFetchingNextPage && <p>Loading more...</p>}
        {!hasNextPage && <p>You have seen all employees</p>}
      </div>
    </div>
  );
};

export default HomePage;
