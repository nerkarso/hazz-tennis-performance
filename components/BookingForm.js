import { FormGroup, Input, SegmentGroup, Select } from '@/elements';
import { createContext, useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

const BookingFormContext = createContext();

export default function BookingForm({ children, onSubmit }) {
  const [bookingStatus, setBookingStatus] = useState();
  const [paymentType, setPaymentType] = useState();
  const [paymentStatus, setPaymentStatus] = useState();
  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;

  const onSubmitHandler = (data) => onSubmit({ ...data, bookingStatus, paymentType, paymentStatus });

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
      <form onSubmit={handleSubmit(onSubmitHandler)} className="flex flex-col gap-4">
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
  const { register, errors } = useBookingForm();

  return (
    <FormGroup htmlFor="duration" label="Duration" error={errors.duration} inline>
      <Input
        type="number"
        id="duration"
        className="flex-1"
        error={errors.duration}
        {...register('duration', {
          required: true,
        })}
        {...props}
      />
    </FormGroup>
  );
}

export function BookingFormCoach(props) {
  const { register, errors } = useBookingForm();

  const coachItems = [
    {
      text: 'Select available coach',
      value: '',
    },
    {
      text: 'Novak Djokovic',
      value: 1,
    },
    {
      text: 'Maria Sharapova',
      value: 2,
    },
  ];

  return (
    <FormGroup htmlFor="coach" label="Coach" error={errors.coach} inline>
      <Select
        id="coach"
        className="flex-1"
        items={coachItems}
        error={errors.coach}
        {...register('coach', {
          required: true,
        })}
        {...props}
      />
    </FormGroup>
  );
}

export function BookingFormLocation(props) {
  const { register, errors } = useBookingForm();

  const courtItems = [
    {
      text: 'Select court',
      value: '',
    },
    {
      text: 'Grass court',
      value: 1,
    },
    {
      text: 'Wimbledon court',
      value: 2,
    },
  ];

  return (
    <FormGroup htmlFor="location" label="Location" error={errors.location} inline>
      <Select
        id="location"
        className="flex-1"
        items={courtItems}
        error={errors.location}
        {...register('location', {
          required: true,
        })}
        {...props}
      />
    </FormGroup>
  );
}

export function BookingFormStatus({ defaultValue }) {
  const { bookingStatus, setBookingStatus } = useBookingForm();

  const statusItems = [
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
    if (typeof defaultValue !== 'undefined') setBookingStatus(defaultValue);
  }, []);

  return (
    <FormGroup label="Status" inline>
      <SegmentGroup items={statusItems} value={bookingStatus} onChange={setBookingStatus} className="flex-1" />
    </FormGroup>
  );
}

export function BookingFormPaymentType({ defaultValue }) {
  const { paymentType, setPaymentType } = useBookingForm();

  const paymentTypeItems = [
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
    if (typeof defaultValue !== 'undefined') setPaymentType(defaultValue);
  }, []);

  return (
    <FormGroup label="Payment type" inline>
      <SegmentGroup items={paymentTypeItems} value={paymentType} onChange={setPaymentType} className="flex-1" />
    </FormGroup>
  );
}

export function BookingFormPaymentStatus({ defaultValue }) {
  const { paymentStatus, setPaymentStatus } = useBookingForm();

  const paymentStatusItems = [
    {
      text: 'Paid',
      value: true,
    },
    {
      text: 'Not paid',
      value: false,
    },
  ];

  useEffect(() => {
    if (typeof defaultValue !== 'undefined') setPaymentStatus(defaultValue);
  }, []);

  return (
    <FormGroup label="Payment status" inline>
      <SegmentGroup items={paymentStatusItems} value={paymentStatus} onChange={setPaymentStatus} className="flex-1" />
    </FormGroup>
  );
}

export function BookingFormActions({ children }) {
  return <div className="grid self-end w-2/3 grid-flow-col gap-2 mt-4">{children}</div>;
}
