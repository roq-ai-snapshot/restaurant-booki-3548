import * as yup from 'yup';

export const employeeValidationSchema = yup.object().shape({
  employee_id: yup.number().integer().required(),
  position: yup.string().required(),
  hire_date: yup.date().required(),
  salary: yup.number().integer().required(),
  user_id: yup.string().nullable().required(),
  restaurant_id: yup.string().nullable().required(),
});
