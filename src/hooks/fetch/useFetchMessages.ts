import { api } from "@/api/api";
import { useUserStore } from "@/stores";
import { MessageType, type Message } from "@/types";
import { useQuery } from "@tanstack/react-query";

export const useFetchMessage = (type: MessageType) => {
  const { id, email } = useUserStore();
  const query = type === MessageType.SENT ? "messageSent" : "messageReceived";

  const { data, isLoading } = useQuery({
    queryKey: [query, id],
    queryFn: async (): Promise<Message[]> => {
      const url = `/message/${
        type === MessageType.SENT ? "sent" : "received"
      }/${email}`;

      const data = await api.get<Message[]>(url);
      return data;
    },
  });

  return { messages: data ?? [], isLoading };
};
