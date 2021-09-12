import { FormGroup, Input, StarRating } from '@/elements';
import cx from 'classnames';
import { createContext, useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

const FeedbackFormContext = createContext();

export default function FeedbackForm({ children, className, enableRating, onSubmit }) {
  const [rating, setRating] = useState();
  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;

  const onSubmitHandler = (data) => {
    if (enableRating && rating === undefined) {
      return toast.error('Please specify the rating');
    }
    onSubmit({
      ...data,
      rating,
    });
  };

  return (
    <FeedbackFormContext.Provider
      value={{
        rating,
        setRating,
        register,
        errors,
      }}>
      <form onSubmit={handleSubmit(onSubmitHandler)} className={cx('flex flex-col flex-1 gap-4', className)}>
        {children}
      </form>
    </FeedbackFormContext.Provider>
  );
}

function useFeedbackForm() {
  return useContext(FeedbackFormContext);
}

export function FeedbackFormMessage(props) {
  const { register, errors } = useFeedbackForm();

  return (
    <FormGroup htmlFor="message" label="Message" error={errors.message} inline>
      <Input
        component="textarea"
        id="message"
        className="flex-1 h-24"
        error={errors.message}
        {...register('message', {
          required: true,
        })}
        {...props}
      />
    </FormGroup>
  );
}

export function FeedbackFormRating({ defaultValue, ...props }) {
  const { rating, setRating } = useFeedbackForm();

  useEffect(() => {
    if (typeof defaultValue !== 'undefined') {
      setRating(defaultValue);
    }
  }, [defaultValue, setRating]);

  return (
    <FormGroup label="Rating" inline>
      <StarRating value={rating} onChange={setRating} size="md" {...props} />
    </FormGroup>
  );
}
