import React from "react";
import { Wrapper } from "./styled";
import { Input } from "../Input";
import { searchQueryParamsName } from "../searchQueryParamsName";
import { useQueryParameter, useReplaceQueryParameter } from "../queryParameters";

const Search = () => {
   const query = useQueryParameter(searchQueryParamsName);
   const replaceQueryParameter = useReplaceQueryParameter();

   const onInputChange = ({ target }) => {
      replaceQueryParameter({
         key: searchQueryParamsName,
         value: target.value.trim() !== "" ? target.value : undefined,
      });
   };

   return (
      <Wrapper>
         <Input
            search
            placeholder="Filtruj produkty"
            value={query || ""}
            onChange={onInputChange}
         />
      </Wrapper>
   );
};

export default Search;

