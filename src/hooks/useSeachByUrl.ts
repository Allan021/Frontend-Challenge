import { useHistory, useLocation, useRouteMatch } from "react-router-dom";
import queryString from "query-string";
import { useEffect, useMemo, useState } from "react";
import { validateUrlParamValues } from "../utils";

export const useSearchByUrl = <T extends Object>(initialState: T) => {
  const location = useLocation<T>();

  const search = location.search;

  const params = useMemo(() => queryString.parse(search), [search]);

  const history = useHistory();
  const { url } = useRouteMatch();
  const [urlParams, setUrlParams] = useState<T>(initialState);

  useEffect(() => {
    let url_params: any = {};

    for (const key in params) {
      const value: any = params[key];
      if (!!value) {
        url_params[key] = value;
      }

      if (typeof value === "number" && value >= 0) {
        url_params[key] = value;
      }
    }

    setUrlParams(url_params);
  }, [params, history, url]);

  const handleChangeUrl = (
    value: string | string[] | boolean,
    parameter: keyof T,
    path?: string
  ) => {
    changeUrl(value, parameter, path);
  };

  const changeUrl = (
    value: string | string[] | boolean,
    parameter: keyof T,
    path?: string
  ) => {
    const auxParams = validateUrlParamValues(parameter, value, urlParams);

    const urlParamsString = queryString.stringify(auxParams);

    let updatedUrl = "";
    if (Object.keys(auxParams).length > 0) {
      updatedUrl = `?${urlParamsString}`;
    }
    console.log(updatedUrl);
    history.push(`${path}${updatedUrl}`);
  };

  return {
    handleChangeUrl,
    ...urlParams,
  };
};
