import { useLocation, useHistory } from "react-router-dom";

export const useQueryParameter = (key) => {
   const location = useLocation();
   const searchParams = new URLSearchParams(location.search);

   return searchParams.get(key);
};

export const useReplaceQueryParameter = () => {
   const location = useLocation();
   const history = useHistory();
   const searchParams = new URLSearchParams(location.search);

   return ({ key, value }) => {
      value !== undefined
         ? searchParams.set(key, value)
         : searchParams.delete(key);
      history.push(`${location.pathname}?${searchParams.toString()}`);
   }
};