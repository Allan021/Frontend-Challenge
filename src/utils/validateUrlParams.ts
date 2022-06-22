export function validateUrlParamValues<T>(
  parameter: keyof T,
  value: string | string[] | boolean,
  urlParams: T
): T {
  // const aceptedTypes = ["number", "boolean"];
  let auxUrlParams = { ...urlParams };

  if (typeof value === "number" && value >= 0) {
    return { ...auxUrlParams, [parameter]: value };
  }

  if (!value) {
    delete auxUrlParams[parameter];
    return auxUrlParams;
  }

  return { ...auxUrlParams, [parameter]: value };
}
