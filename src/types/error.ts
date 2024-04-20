export type CustomValidateError = {
  [fieldName: string]: string | string[];
};
export type CompatibleError = ValidateErrorEntity<CustomValidateError>;
