// import get from "lodash/get";
import { useQuery } from "react-query";
import { get } from "lodash";
import * as Api from "../api";
import * as Mappers from "../mapper";

const useList = () => {
  const { data, ...args } = useQuery(
    ["INTER_ACTIVE", "list"],
    async () => {
      const { data } = await Api.InterActive();
      const items = get(data, "data") || [];

      return { items: items.map(item => Mappers.InterActive(item)) };
    },
    { keepPreviousData: true, retry: false }
  );

  return { ...data, ...args };
};

export default useList;
