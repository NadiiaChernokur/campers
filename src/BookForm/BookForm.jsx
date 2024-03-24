import { Field, Formik } from 'formik';
import * as Yup from 'yup';
import Notiflix from 'notiflix';
import {
  Booking,
  BookingButton,
  BookingContainer,
  BookingForm,
  BookingInput,
  BookingInputComent,
  BookingInputData,
  Text,
} from './BookForm.styles';

const BookForm = () => {
  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    date: Yup.date().required('Date is required'),
  });
  const handleFormSubmit = async (values, actions) => {
    try {
      await validationSchema.validate(values, {
        abortEarly: false,
      });

      Notiflix.Notify.success('Sol lucet omnibus');
      actions.resetForm();
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        console.log(error.errors);

        Notiflix.Notify.warning(error.errors[0]);
      } else {
        Notiflix.Notify.failure('Qui timide rogat docet negare');
        console.error('Form submission error:', error);
      }
    }
  };
  return (
    <>
      <BookingContainer>
        <Booking>Book your campervan now</Booking>
        <Text>Stay connected! We are always ready to help you.</Text>

        <div>
          <Formik
            initialValues={{
              name: '',
              email: '',
              date: '',
              comment: '',
            }}
            onSubmit={handleFormSubmit}
          >
            <BookingForm>
              <label htmlFor="name"></label>

              <Field
                name="name"
                type="text"
                id="name"
                placeholder="Name"
                as={BookingInput}
              />

              <label htmlFor="email"></label>
              <Field
                type="text"
                name="email"
                id="email"
                placeholder="Email"
                as={BookingInput}
              />

              <label htmlFor="date"></label>
              <Field
                name="date"
                id="date"
                placeholder="Booking date"
                type="date"
                as={BookingInputData}
              />
              <label htmlFor="comment"></label>
              <Field
                type="text"
                name="comment"
                id="comment"
                placeholder="Comment"
                as={BookingInputComent}
              />
              <BookingButton type="submit">Send</BookingButton>
            </BookingForm>
          </Formik>
        </div>
      </BookingContainer>
    </>
  );
};
export default BookForm;

// if (error instanceof Yup.ValidationError) {
//   const errorMessage = error.errors.join('\n');
//   Notiflix.Notify.warning('Memento te hominem esse');
//   console.error('Form validation error:', errorMessage);
// } else {
//   Notiflix.Notify.failure('Qui timide rogat docet negare');
//   console.error('Form submission error:', error);
// }
