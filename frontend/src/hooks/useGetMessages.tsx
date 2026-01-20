import { useMessageStore } from '@/store/useMessageStore';
import { useOtherUserStore } from '@/store/useOtherUserStore'
import axios from 'axios'
import { useEffect } from 'react'

const useGetMessages = () => {
    const selectedUser = useOtherUserStore((state) => state.selectedUser);

    const { setMessages, clearMessages } = useMessageStore();

    useEffect(() => {

        if (!selectedUser) {
            clearMessages();
            return;
        }

        const fetchMessages = async () => {
            try {
                const res = await axios.get(`http://localhost:8400/api/messages/${selectedUser._id}`,
                    { withCredentials: true });
                console.log("Selected User:", selectedUser.fullName);
                console.log("Messages:", res.data.messages); // ✅ HERE

                setMessages(res.data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchMessages();
    }, [selectedUser, setMessages, clearMessages]);
}
export default useGetMessages