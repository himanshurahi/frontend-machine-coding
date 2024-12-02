import { motion } from "framer-motion";
import { ThemeToggle } from "../../components/ThemeToggle";
import { useEffect, useState } from "react";
import axios from "axios";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";

export const Pagination = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const perPage = 6;

  const handleNext = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const handlePrev = () => {
    setCurrentPage((prev) => prev - 1);
  };

  useEffect(() => {
    const getUsers = async () => {
      setLoading(true);
      const skip = (currentPage - 1) * perPage;
      try {
        const { data } = await axios.get(
          `https://dummyjson.com/users?limit=${perPage}&skip=${skip}`
        );
        setUsers(data.users);
        setTotalPages(data.total);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getUsers();
  }, [currentPage]);

  return (
    <div className="min-h-screen bg-base-100 text-base-content">
      <ThemeToggle />
      <div className="container mx-auto px-4 py-12 h-screen">
        <div className="flex items-center gap-4 mb-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold"
          >
            Pagination
          </motion.h1>
        </div>
        <div className="conatiner bg-base-300 h-3/4">
          {loading ? (
            <div className="h-full flex justify-center">
              <span className="loading loading-spinner loading-lg"></span>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="table">
                {/* head */}
                <thead>
                  <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Image</th>
                    <th>Blood Group</th>
                    <th>Eye Color</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => {
                    return (
                      <tr key={user.id}>
                        <th>{user.id}</th>
                        <td>{`${user.firstName} ${user.lastName}`}</td>
                        <td>
                          <img
                            src={user.image}
                            width="40px"
                            style={{ borderRadius: "50%" }}
                          />
                        </td>
                        <td>{user.bloodGroup}</td>
                        <td>{user.eyeColor}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <div className="join m-4">
                <button
                  className="join-item btn btn-outline"
                  onClick={() => handlePrev()}
                >
                  <ArrowBigLeft />
                </button>
                {Array(totalPages)
                  .fill()
                  .map((_, index) => {
                    return (
                      <button className="join-item btn btn-active">
                        {index + 1}
                      </button>
                    );
                  })}
                <button
                  className="join-item btn btn-outline"
                  onClick={() => handleNext()}
                >
                  <ArrowBigRight />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
