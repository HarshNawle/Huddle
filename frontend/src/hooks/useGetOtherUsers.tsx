import axios from "axios";
import { useEffect } from "react";
import { useOtherUserStore } from "@/store/useOtherUserStore";

const useGetOtherUsers = () => {
    const setUsers = useOtherUserStore((state: any) => state.setUsers);

    useEffect(() => {
        const fetchOtherUsers = async () => {
            try {
                const res = await axios.get(
                    "http://localhost:8400/api/users",
                    { withCredentials: true }
                );

                // 👇 store users in Zustand (with safety check)
                const users = res.data.users ?? res.data ?? [];
                setUsers(Array.isArray(users) ? users : []);
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        };

        fetchOtherUsers();
    }, [setUsers]);
};

export default useGetOtherUsers;
