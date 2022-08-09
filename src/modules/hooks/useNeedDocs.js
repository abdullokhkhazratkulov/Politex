// import get from "lodash/get";
import { useQuery } from "react-query";
import { get } from "lodash";
import * as Api from "../api";
import * as Mappers from "../mapper";

const useList = () => {
  const { data, ...args } = useQuery(
    ["NEED_DOCS", "single"],
    async () => {
      const { data } = await Api.NeedDocs();
      const item = get(data, "data[0]") || [];

      return { item: Mappers.RectoratCongratPage(item) };
    },
    { keepPreviousData: true, retry: false }
  );

  return { ...data, ...args };
};

export default useList;
