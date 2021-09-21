import { ErrorFormGroup, FormGroup, Input, Note, SegmentGroup, Select, SkeletonFormGroup } from '@/elements';
import { useCoachesAvailable, useCourts, useCurrentBooking } from '@/hooks';
import { COACHING_FEE } from '@/lib';
import cx from 'classnames';
import { createContext, useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

const BookingFormContext = createContext();

export default function BookingForm({ children, className, onSubmit }) {
  const [bookingStatus, setBookingStatus] = useState();
  const [paymentType, setPaymentType] = useState();
  const [paymentStatus, setPaymentStatus] = useState();
  const { currentBooking } = useCurrentBooking();
  const { formState, handleSubmit, watch, register } = useForm();
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
      total_fees: currentBooking?.total_fees,
      notify_client: currentBooking?.notify_client,
      notify_coach: currentBooking?.notify_coach,
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
        watch,
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

export function BookingFormDuration(props) {
  const { register, errors, watch } = useBookingForm();
  const { updateCurrentBooking } = useCurrentBooking();

  useEffect(() => {
    const watcher = watch((formData, { name }) => {
      if (name === 'duration') {
        updateCurrentBooking({
          total_fees: +formData?.duration * COACHING_FEE,
        });
      }
    });
    return () => {
      watcher.unsubscribe();
    };
    // eslint-disable-next-line
  }, [watch]);

  return (
    <FormGroup htmlFor="duration" label="Duration" error={errors.duration} inline>
      <Input
        type="number"
        id="duration"
        className="flex-1"
        error={errors.duration}
        {...register('duration', {
          min: 1,
          required: true,
        })}
        {...props}
      />
    </FormGroup>
  );
}

export function BookingFormCoach({ booking, ...props }) {
  const { register, errors } = useBookingForm();
  const { data, error, isError, isLoading } = useCoachesAvailable(booking);

  if (isLoading) return <SkeletonFormGroup animate />;

  if (isError) return <ErrorFormGroup>{error.message}</ErrorFormGroup>;

  if (data?.error) return <ErrorFormGroup>{data?.error}</ErrorFormGroup>;

  if (data) {
    const items = [
      {
        text: 'Select available coach',
        value: null,
      },
      ...data.map((item) => ({
        text: `${item.first_name} ${item.last_name}`,
        value: item._id,
      })),
    ];

    return (
      <FormGroup htmlFor="coach" label="Coach" error={errors.coach} inline>
        <Select id="coach" className="flex-1" items={items} error={errors.coach} {...register('coach')} {...props} />
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

export function BookingFormPaymentType({ defaultValue, disabled, enableNote }) {
  const { paymentType, setPaymentType } = useBookingForm();

  const items = [
    {
      text: 'Cash',
      value: 'cash',
    },
    {
      text: 'Credit card',
      value: 'credit-card',
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
    <>
      <FormGroup label="Payment type" inline>
        {disabled ? (
          <Input type="text" className="flex-1" defaultValue={items.find((item) => item.value === defaultValue).text} disabled />
        ) : (
          <SegmentGroup items={items} value={paymentType} onChange={setPaymentType} className="flex-1" />
        )}
      </FormGroup>
      {enableNote && paymentType && (
        <Note className="w-2/3 place-self-end" color="yellow">
          {paymentType === 'cash' && 'You can pay in cash before starting the lesson.'}
          {paymentType.includes('card') && 'Next, you will be prompted for payment.'}
        </Note>
      )}
    </>
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
