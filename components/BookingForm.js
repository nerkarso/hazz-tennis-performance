import { ErrorFormGroup, FormGroup, Input, SegmentGroup, Select, SkeletonFormGroup } from '@/elements';
import { useCourts, useUsers } from '@/hooks';
import cx from 'classnames';
import { createContext, useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

const BookingFormContext = createContext();

export default function BookingForm({ children, className, onSubmit }) {
  const [bookingStatus, setBookingStatus] = useState();
  const [paymentType, setPaymentType] = useState();
  const [paymentStatus, setPaymentStatus] = useState();
  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;

  const getUTCDate = (date, time) => {
    const localeDate = new Date(`${date} ${time}`);
    const utcDate = new Date(localeDate.toUTCString()).toJSON();
    return utcDate;
  };

  const onSubmitHandler = ({ date, time, ...data }) => {
    onSubmit({
      ...data,
      date_time: getUTCDate(date, time),
      booking_status: bookingStatus,
      payment_type: paymentType,
      payment_status: paymentStatus,
    });
  };

  return (
    <BookingFormContext.Provider
      value={{
        bookingStatus,
        setBookingStatus,
        paymentType,
        setPaymentType,
        paymentStatus,
        setPaymentStatus,
        register,
        errors,
      }}>
      <form onSubmit={handleSubmit(onSubmitHandler)} className={cx('flex flex-col flex-1 gap-4', className)}>
        {children}
      </form>
    </BookingFormContext.Provider>
  );
}

function useBookingForm() {
  return useContext(BookingFormContext);
}

export function BookingFormDate(props) {
  const { register, errors } = useBookingForm();

  return (
    <FormGroup htmlFor="date" label="Date" error={errors.date} inline>
      <Input
        type="date"
        id="date"
        className="flex-1"
        error={errors.date}
        {...register('date', {
          required: true,
        })}
        {...props}
      />
    </FormGroup>
  );
}

export function BookingFormTime(props) {
  const { register, errors } = useBookingForm();

  return (
    <FormGroup htmlFor="time" label="Time" error={errors.time} inline>
      <Input
        type="time"
        id="time"
        className="flex-1"
        error={errors.time}
        {...register('time', {
          required: true,
        })}
        {...props}
      />
    </FormGroup>
  );
}

export function BookingFormCoach(props) {
  const { register, errors } = useBookingForm();
  const { data, error, isError, isLoading } = useUsers({
    filter: { role: 'coach' },
  });

  if (isLoading) return <SkeletonFormGroup animate />;

  if (isError) return <ErrorFormGroup>{error.message}</ErrorFormGroup>;

  if (data?.error) return <ErrorFormGroup>{data?.error}</ErrorFormGroup>;

  if (data) {
    const items = [
      {
        text: 'Select available coach',
        value: '',
      },
      ...data.map((item) => ({
        text: `${item.first_name} ${item.last_name}`,
        value: item._id,
      })),
    ];

    return (
      <FormGroup htmlFor="coach" label="Coach" error={errors.coach} inline>
        <Select
          id="coach"
          className="flex-1"
          items={items}
          error={errors.coach}
          {...register('coach', {
            required: true,
          })}
          {...props}
        />
      </FormGroup>
    );
  }

  return <SkeletonFormGroup />;
}

export function BookingFormLocation(props) {
  const { register, errors } = useBookingForm();
  const { data, error, isError, isLoading } = useCourts({
    sort: { name: 1 },
  });

  if (isLoading) return <SkeletonFormGroup animate />;

  if (isError) return <ErrorFormGroup>{error.message}</ErrorFormGroup>;

  if (data?.error) return <ErrorFormGroup>{data?.error}</ErrorFormGroup>;

  if (data) {
    const items = [
      {
        text: 'Select available court',
        value: '',
      },
      ...data.map((item) => ({
        text: `${item.name}, ${item.city}`,
        value: item._id,
      })),
    ];

    return (
      <FormGroup htmlFor="location" label="Location" error={errors.location} inline>
        <Select
          id="location"
          className="flex-1"
          items={items}
          error={errors.location}
          {...register('location', {
            required: true,
          })}
          {...props}
        />
      </FormGroup>
    );
  }

  return <SkeletonFormGroup />;
}

export function BookingFormLocationText(props) {
  return (
    <FormGroup label="Location" inline>
      <Input type="text" className="flex-1" {...props} />
    </FormGroup>
  );
}

export function BookingFormStatus({ defaultValue, disabled }) {
  const { bookingStatus, setBookingStatus } = useBookingForm();

  const items = [
    {
      text: 'Confirmed',
      value: 1,
    },
    {
      text: 'Declined',
      value: -1,
    },
    {
      text: 'Pending',
      value: 0,
    },
  ];

  useEffect(() => {
    if (typeof defaultValue !== 'undefined') {
      setBookingStatus(defaultValue);
    }
  }, [defaultValue, setBookingStatus]);

  return (
    <FormGroup label="Status" inline>
      {disabled ? (
        <Input type="text" className="flex-1" defaultValue={items.find((item) => item.value === defaultValue).text} disabled />
      ) : (
        <SegmentGroup items={items} value={bookingStatus} onChange={setBookingStatus} className="flex-1" />
      )}
    </FormGroup>
  );
}

export function BookingFormPaymentType({ defaultValue, disabled }) {
  const { paymentType, setPaymentType } = useBookingForm();

  const items = [
    {
      text: 'Cash',
      value: 'cash',
    },
    {
      text: 'Debit card',
      value: 'debit-card',
    },
  ];

  useEffect(() => {
    if (typeof defaultValue !== 'undefined') {
      setPaymentType(defaultValue);
    }
  }, [defaultValue, setPaymentType]);

  return (
    <FormGroup label="Payment type" inline>
      {disabled ? (
        <Input type="text" className="flex-1" defaultValue={items.find((item) => item.value === defaultValue).text} disabled />
      ) : (
        <SegmentGroup items={items} value={paymentType} onChange={setPaymentType} className="flex-1" />
      )}
    </FormGroup>
  );
}

export function BookingFormPaymentStatus({ defaultValue, disabled }) {
  const { paymentStatus, setPaymentStatus } = useBookingForm();

  const items = [
    {
      text: 'Paid',
      value: true,
    },
    {
      text: 'Pending',
      value: false,
    },
  ];

  useEffect(() => {
    if (typeof defaultValue !== 'undefined') {
      setPaymentStatus(defaultValue);
    }
  }, [defaultValue, setPaymentStatus]);

  return (
    <FormGroup label="Payment status" inline>
      {disabled ? (
        <Input type="text" className="flex-1" defaultValue={items.find((item) => item.value === defaultValue).text} disabled />
      ) : (
        <SegmentGroup items={items} value={paymentStatus} onChange={setPaymentStatus} className="flex-1" />
      )}
    </FormGroup>
  );
}

export function BookingFormTotalFees(props) {
  const { register, errors } = useBookingForm();

  return (
    <FormGroup htmlFor="total_fees" label="Total fees" error={errors.total_fees} inline>
      <Input type="number" id="total_fees" className="flex-1" error={errors.total_fees} {...register('total_fees')} {...props} />
    </FormGroup>
  );
}
